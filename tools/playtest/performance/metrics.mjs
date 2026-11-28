export async function thermalSample(phone) {
  const raw = await phone('shell', 'date +%s%3N; dumpsys battery; dumpsys thermalservice');
  const hal = raw.split('Current temperatures from HAL:')[1]?.split('Temperature static thresholds')[0] ?? '';
  const wanted = new Set(['VIRTUAL-SKIN', 'VIRTUAL-SKIN-CHARGE', 'G3D', 'BIG', 'MID', 'LITTLE']);
  const sensors = Object.fromEntries([...hal.matchAll(/mValue=([\d.+-]+), mType=-?\d+, mName=([^,]+), mStatus=(\d+)/g)]
    .filter(([, , name]) => wanted.has(name)).map(([, temp, name, status]) => [name, [Number(temp), Number(status)]]));
  const systemStatus = Number(raw.match(/Thermal Status:\s*(\d+)/)?.[1]);
  if (!Number.isFinite(systemStatus)) throw Error('Android thermal status unavailable');
  return {deviceEpochMs: Number(raw.split(/\r?\n/)[0]), hostEpochMs: Date.now(), systemStatus,
    batteryC: Number(raw.match(/temperature:\s*(\d+)/)?.[1]) / 10, sensors};
}

export async function presentationSample(phone) {
  const layers = await phone('shell', 'dumpsys', 'SurfaceFlinger', '--list');
  const content = layers.match(/com\.android\.chrome\/ChromeChildSurface#\d+/g) ?? [];
  for (const layer of [...new Set(content)].reverse()) {
    const raw = await phone('shell', `date +%s%3N; dumpsys SurfaceFlinger --latency ${layer}`);
    const [epoch, period, ...rows] = raw.split(/\r?\n/);
    const presentNs = [...new Set(rows.map(row => Number(row.trim().split(/\s+/)[1]))
      .filter(ns => Number.isFinite(ns) && ns > 0 && ns < 2 ** 63 - 1))].sort((a, b) => a - b);
    if (presentNs.length >= 2) return {deviceEpochMs: Number(epoch), periodNs: Number(period), presentNs};
  }
  throw Error('Chrome content layer has no usable SurfaceFlinger presentation timestamps');
}

const round = value => Math.round(value * 1000) / 1000;
function percentile(values, fraction) {
  if (!values.length) return null;
  const sorted = [...values].sort((a, b) => a - b);
  const offset = (sorted.length - 1) * fraction;
  const low = Math.floor(offset);
  return round(sorted[low] + (sorted[Math.ceil(offset)] - sorted[low]) * (offset - low));
}

function cadence(report, begin, end) {
  const renders = report.renders.filter(([time]) => time >= begin && time < end);
  const rafs = report.rafs.filter(([time]) => time >= begin && time < end);
  const seconds = (end - begin) / 1000;
  const intervals = samples => [0.5, 0.95, 0.99].map(p => percentile(samples.map(row => row[1]).filter(Number.isFinite), p));
  const buffers = {};
  for (const [, , , , width, height] of renders) {
    const key = `${width}x${height}`;
    buffers[key] = (buffers[key] ?? 0) + 1;
  }
  return {renderCount: renders.length, renderFps: round(renders.length / seconds), sceneIntervalMs: intervals(renders),
    rafFps: round(rafs.length / seconds), rafIntervalMs: intervals(rafs), buffers,
    drawCallsP50: percentile(renders.map(row => row[2]), 0.5), trianglesP50: percentile(renders.map(row => row[3]), 0.5)};
}

export function summarize(report) {
  const {startUtcMs} = report.timing;
  const skin = report.thermal.map(sample => sample.sensors['VIRTUAL-SKIN']?.[0]).filter(Number.isFinite);
  const compositorWindows = [];
  let latestPresentation = -Infinity;
  for (const {deviceEpochMs, periodNs, presentNs} of report.presentation) {
    // SurfaceFlinger returns a rolling history; seed the cursor even for setup samples.
    const fresh = presentNs.filter(ns => ns > latestPresentation);
    if (!fresh.length) continue;
    latestPresentation = fresh.at(-1);
    if (fresh.length < 2 || !Number.isFinite(deviceEpochMs) || !Number.isFinite(startUtcMs)) continue;
    const seconds = (latestPresentation - fresh[0]) / 1e9;
    // Both the browser replay start and the SurfaceFlinger snapshot use the phone's epoch.
    const elapsed = (deviceEpochMs - startUtcMs) / 1000 - seconds / 2;
    if (elapsed < 1 || elapsed > report.end / 1000 - 0.5) continue;
    compositorWindows.push({approximateElapsedSeconds: round(elapsed), seconds: round(seconds),
      fps: round((fresh.length - 1) / seconds), displayHz: round(1e9 / periodNs)});
  }
  return {
    seconds: report.end / 1000, replayedMetres: round(report.progress.at(-1).metres),
    overall: cadence(report, 0, report.end),
    segments: report.plan.filter(segment => segment.end <= report.end).map(({street, cycle, begin, end}) => ({
      street, cycle, beginMs: begin, endMs: end, ...cadence(report, begin + 500, end - 500),
    })),
    virtualSkinC: skin.length ? {start: skin[0], end: skin.at(-1), peak: Math.max(...skin)} : null,
    maxAndroidThermalStatus: report.thermal.length ? Math.max(...report.thermal.map(sample => sample.systemStatus)) : null,
    compositorFpsP50: percentile(compositorWindows.map(sample => sample.fps), 0.5), compositorWindows,
  };
}
