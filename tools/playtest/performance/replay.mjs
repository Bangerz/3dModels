export const weatherEpoch = 1782000331;

export function readiness() {
  return {
    visible: document.visibilityState === 'visible',
    stable: window.__playtestStable,
    native: Boolean(window.__playtestHost?.town?.pair?.cur?.__playtestScene?.renderer),
    loading: Boolean(document.querySelector('.ex-load')),
  };
}

export async function occupyUte({first, physical}) {
  if (!window.__playtestStable?.direct) throw Error('The fixture requires a direct Medium startup');
  const {town, fly} = window.__playtestHost;
  const model = town.pair.cur.__playtestScene;
  if (model.quality !== 'medium' || model.pacing?.targetFps !== 60) {
    throw Error(`Expected Medium/60, got ${model.quality}/${model.pacing?.targetFps}`);
  }
  const dialog = document.querySelector('.bs-welcome');
  dialog?.querySelectorAll('input[type=checkbox]').forEach(input => { input.checked = false; });
  dialog?.querySelector('.bs-wel-go')?.click();
  if (!town.walk) document.querySelector('#bsTownMode')?.click();
  if (!town.walk || !town.car?.enterCar) throw Error('Native town driving controls unavailable');

  const near = [-133.97489827, -353.39856512];
  const ute = town.model.nearestCar(...near, 3);
  if (!ute || Math.hypot(ute.x - near[0], ute.z - near[1]) > 0.1) throw Error('Fixture ute is missing');
  const key = ute.id.map(coordinate => Math.round(coordinate * 4)).join('_');
  const parked = model.life.parkedAt.get(key);
  if (!parked) throw Error('Fixture ute is missing from the native parked registry');
  town.tween = null;
  fly.keys.clear();
  fly.stick.x = fly.stick.y = 0;
  fly.goTo = null;
  town.model.setMinutes(720);
  const {x, z, heading} = first;
  if (!town.car.enterCar({...ute, x, z, heading, distance: 0})) {
    throw Error(`Native handover refused the fixture ute: ${JSON.stringify({
      current: town.car.where(), key, hidden: model.life.hiddenCars?.has(key),
      occupiedSlots: model.life.drivenAt.size, toast: document.getElementById('toast')?.textContent,
    })}`);
  }
  const car = town.car.where();
  if (car?.kind !== 'car' || !model.life.drivenAt.has(key) || Math.hypot(car.x - x, car.z - z) > 0.1) {
    throw Error('Native ute handover or start pose mismatch');
  }

  let wakeError;
  if (physical) {
    try { window.__playtestWake = await navigator.wakeLock.request('screen'); }
    catch (error) { wakeError = String(error); }
  }
  const {renderer} = model;
  const gl = renderer.getContext();
  const debug = gl.getExtension('WEBGL_debug_renderer_info');
  const device = await navigator.userAgentData?.getHighEntropyValues?.(['model', 'platformVersion', 'fullVersionList']).catch(() => null);
  return {key, shape: model.life.parkedSets[parked.set]?.shape, quality: model.quality,
    frameTarget: model.pacing.targetFps, selection: window.__playtestStable, device,
    gpu: gl.getParameter(debug?.UNMASKED_RENDERER_WEBGL ?? gl.RENDERER), ua: navigator.userAgent,
    buffer: [renderer.domElement.width, renderer.domElement.height], dpr: devicePixelRatio,
    viewport: [innerWidth, innerHeight], screen: [screen.width, screen.height], orientation: screen.orientation?.type,
    stamp: document.querySelector('[name=an-commit]')?.content,
    reducedMotion: matchMedia("(prefers-reduced-motion: reduce)").matches,
    wakeLock: window.__playtestWake?.released === false, wakeError};
}

export function beginReplay({segments, clock, key}) {
  const {town, fly} = window.__playtestHost;
  const model = town.pair.cur.__playtestScene;
  const renderer = model.renderer;
  const duration = segments.at(-1).end;
  const start = performance.now();
  const elapsed = () => performance.now() - start;
  const state = window.__playtestReplay = {renders: [], rafs: [], progress: [], end: null, error: null};
  const original = {weather: model.weatherTime, drive: fly.drive, frame: model.frame, render: renderer.render};
  const context = renderer.getContext();
  model.weatherTime = () => clock;
  let segmentIndex = 0, pointIndex = 0, lastRender = null, lastRaf = null;
  let rafId, progressId, hardStop;

  function pose(time) {
    while (segmentIndex + 1 < segments.length && time >= segments[segmentIndex].end) {
      segmentIndex++;
      pointIndex = 0;
    }
    const {trace, begin, priorMetres, street, cycle} = segments[segmentIndex];
    const ms = time - begin;
    while (pointIndex + 2 < trace.length && trace[pointIndex + 1].ms < ms) pointIndex++;
    const a = trace[pointIndex], b = trace[pointIndex + 1];
    const fraction = Math.max(0, Math.min(1, (ms - a.ms) / (b.ms - a.ms)));
    const lerp = (x, y) => x + (y - x) * fraction;
    const angle = Math.atan2(Math.sin(b.heading - a.heading), Math.cos(b.heading - a.heading));
    return {x: lerp(a.x, b.x), z: lerp(a.z, b.z), heading: a.heading + angle * fraction,
      speed: lerp(a.speed, b.speed), eye: a.eye.map((value, index) => lerp(value, b.eye[index])),
      targetY: lerp(a.targetY, b.targetY) + 1.02, metres: priorMetres + lerp(a.distance, b.distance), street, cycle};
  }

  function camera({x, z, eye: [ex, ey, ez], targetY}) {
    const yaw = Math.atan2(ex - x, ez - z);
    const pitch = Math.atan2(targetY - ey, Math.hypot(x - ex, z - ez));
    fly.pos.set(ex, ey, ez);
    fly.yaw = yaw;
    fly.pitch = pitch;
    town.model.setCamera(ex, ey, ez, yaw, pitch);
  }

  function progress(time) {
    const {street, cycle, metres, x, z} = pose(time);
    state.progress.push({ms: time, street, cycle, metres, x, z});
  }

  function finish(error) {
    if (state.end !== null) return;
    state.end = Math.min(elapsed(), duration);
    state.error = error ?? null;
    progress(state.end);
    model.weatherTime = original.weather;
    fly.drive = original.drive;
    model.frame = original.frame;
    renderer.render = original.render;
    cancelAnimationFrame(rafId);
    clearInterval(progressId);
    clearTimeout(hardStop);
    document.removeEventListener('visibilitychange', checkVisibility);
    town.car.out();
  }

  function checkVisibility() {
    if (document.visibilityState !== 'visible') finish('Benchmark tab became hidden');
  }

  fly.drive = () => {
    const ms = elapsed();
    if (ms >= duration) return finish();
    const p = pose(ms);
    if (!town.car.playtestPose(p.x, p.z, p.heading, p.speed)) return finish('Occupied fixture ute was lost');
    camera(p);
  };
  model.frame = function (now) {
    const ms = elapsed();
    if (ms < duration) camera(pose(ms));
    const result = original.frame.call(this, now);
    if (ms >= duration) finish();
    return result;
  };
  renderer.render = function (scene, activeCamera) {
    const result = original.render.apply(this, arguments);
    const ms = elapsed();
    if (scene === model.scene && activeCamera === model.camera && state.end === null && ms < duration) {
      state.renders.push([ms, lastRender === null ? null : ms - lastRender, renderer.info.render.calls,
        renderer.info.render.triangles, renderer.domElement.width, renderer.domElement.height]);
      lastRender = ms;
    }
    return result;
  };
  function observeRaf(now) {
    const ms = now - start;
    if (ms >= 0 && ms < duration) {
      state.rafs.push([ms, lastRaf === null ? null : ms - lastRaf]);
      lastRaf = ms;
    }
    if (state.end === null) rafId = requestAnimationFrame(observeRaf);
  }
  progressId = setInterval(() => {
    const ms = elapsed();
    if (context.isContextLost()) return finish('WebGL context lost');
    if (town.pair.cur.__playtestScene !== model || town.pair.next || model.quality !== 'medium' || model.pacing.targetFps !== 60) {
      return finish('Active model, quality or frame cap changed');
    }
    if (!model.life.drivenAt.has(key)) return finish('Fixture ute left the native driven registry');
    if (ms >= duration) return finish();
    progress(ms);
  }, 500);
  hardStop = setTimeout(() => finish('Replay loop did not finish on its own'), duration + 1000);
  document.addEventListener('visibilitychange', checkVisibility);
  checkVisibility();
  if (state.end === null) rafId = requestAnimationFrame(observeRaf);
  return {startUtcMs: performance.timeOrigin + start, durationMs: duration};
}

export function readReplay({renders, rafs, progress}) {
  const state = window.__playtestReplay;
  if (!state) throw Error('The replay page was replaced or reloaded');
  return {renders: state.renders.slice(renders), rafs: state.rafs.slice(rafs), progress: state.progress.slice(progress),
    end: state.end, error: state.error};
}
