// Serialized into the new document before Explore initializes.
export function observe({ url, mode, destination }) {
  if (window.top !== window || location.href !== url) return;
  localStorage.setItem('an3d-off-reset-1', '1');
  localStorage.setItem('an3d-off', '["players"]');
  localStorage.setItem('an-player-asked', '1');
  localStorage.setItem('an-tut', 'offered');
  if (mode === 'norman') localStorage.setItem('an3d-inv-graphics', '{"preset":"medium","frameTarget":60}');
  const context = window.inputPlaytest = {
    initialStoredQuality: localStorage.getItem('an3d-inv'),
    touches: [], marks: {}, frames: [], models: [], buffers: [], terrain: [],
    longTasks: [], longFrames: [], visibility: [], ids: [], supported: PerformanceObserver.supportedEntryTypes,
  };
  performance.setResourceTimingBufferSize(1000);
  const town = () => window.anTownNow?.();
  const stick = name => document.querySelector(`#bsFly [data-joy="${name}"]`);
  const gpsButton = () => document.getElementById('bsGpsBtn');
  const knobs = () => ['move', 'look'].map(name => stick(name)?.querySelector('i')?.style.transform ?? '');
  const summary = () => {
    const scene = town();
    const model = scene?.pair?.cur;
    const activeCanvas = document.querySelector(`#bsTown [data-an-model="${model?.id}"] canvas`);
    return {
      at: performance.now(), ids: context.ids, place: scene?.cfg?.place, preset: scene?.pair?.initialPreset,
      quality: scene?.pair?.quality, pendingQuality: scene?.pair?.pendingQuality,
      cur: model?.id, next: scene?.pair?.next?.id, spinner: document.getElementById('bsHiRes')?.hidden === false,
      visible: document.visibilityState, knobs: knobs(), sticks: context.readSticks?.() ?? null,
      on: scene?.on, walk: scene?.walk,
      buffer: activeCanvas && [activeCanvas.width, activeCanvas.height],
    };
  };
  const state = () => ({
    ...summary(), camera: town()?.pair?.cur?.getCamera?.() ?? town()?.model?.getCamera?.(),
    gpsPressed: gpsButton()?.getAttribute('aria-pressed'),
  });
  context.mark = name => context.marks[name] = state();
  let welcomeAccepted = false, previousModel, box;
  const previousBuffers = new WeakMap();
  function frame(displayAt) {
    const s = summary();
    context.frames.push({ displayAt, ...s });
    const key = [s.cur, s.next, s.quality, s.pendingQuality, s.spinner, s.on, s.walk].join(',');
    if (key !== previousModel) {
      context.models.push({ ...s, savedQuality: localStorage.getItem('an3d-inv') });
      previousModel = key;
    }
    box ??= document.getElementById('bsTown');
    for (const canvas of box?.querySelectorAll('[data-an-model] canvas') ?? []) {
      const old = previousBuffers.get(canvas);
      if (old?.[0] === canvas.width && old?.[1] === canvas.height) continue;
      const size = [canvas.width, canvas.height];
      previousBuffers.set(canvas, size);
      context.buffers.push({ at: s.at, canvasModel: Number(canvas.closest('[data-an-model]').dataset.anModel),
        activeModel: s.cur, previous: old, size, ids: s.ids });
    }
    if (!welcomeAccepted) {
      const card = document.querySelector('.bs-welcome');
      const go = card?.querySelector('.bs-wel-go');
      if (go) {
        welcomeAccepted = true;
        card.querySelectorAll('input[type=checkbox]').forEach(el => { el.checked = false; });
        go.click();
        context.welcomeAt = performance.now();
      }
    }
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
  document.addEventListener('visibilitychange', () => {
    context.visibility.push({ at: performance.now(), state: document.visibilityState });
  });
  const touchRows = new WeakMap();
  for (const type of ['touchstart', 'touchmove', 'touchend', 'touchcancel']) {
    document.addEventListener(type, event => {
      context.ids = Array.from(event.touches, touch => touch.identifier).sort((a, b) => a - b);
      const row = { type, at: performance.now(), eventAt: event.timeStamp, trusted: event.isTrusted,
        ids: context.ids, changed: Array.from(event.changedTouches, touch => ({
          id: touch.identifier, x: touch.clientX, y: touch.clientY,
        })),
        target: event.target.closest?.('[data-joy]')?.dataset.joy ?? event.target.id };
      touchRows.set(event, row);
      context.touches.push(row);
    }, { capture: true, passive: true });
    document.addEventListener(type, event => {
      const row = touchRows.get(event);
      if (row) Object.assign(row, { after: performance.now(), knobs: knobs(), sticks: context.readSticks?.() ?? null });
    }, { passive: true });
  }
  if (context.supported.includes('longtask')) {
    new PerformanceObserver(list => {
      for (const e of list.getEntries()) context.longTasks.push({ at: e.startTime, duration: e.duration });
    }).observe({ type: 'longtask' });
  }
  if (context.supported.includes('long-animation-frame')) {
    new PerformanceObserver(list => {
      for (const e of list.getEntries()) {
        context.longFrames.push({ at: e.startTime, duration: e.duration, blockingDuration: e.blockingDuration,
          scripts: e.scripts.map(script => ({ url: script.sourceURL, function: script.sourceFunctionName,
            invoker: script.invoker, at: script.startTime, duration: script.duration })) });
      }
    }).observe({ type: 'long-animation-frame' });
  }
  if (mode === 'norman') {
    const images = new WeakMap(), jobsByWorker = new WeakMap();
    const post = Worker.prototype.postMessage;
    Worker.prototype.postMessage = function(message, ...rest) {
      const asset = message?.job?.kind === 'detail' ? message.job.url : null;
      if (asset) {
        let jobs = jobsByWorker.get(this);
        if (!jobs) {
          jobs = new Map();
          jobsByWorker.set(this, jobs);
          this.addEventListener('message', ({ data }) => {
            const request = jobs.get(data?.id);
            if (!request || data.progress) return;
            jobs.delete(data.id);
            const image = data.value;
            if (image && typeof image === 'object') images.set(image, request);
            context.terrain.push({ ...request, phase: 'reply', at: performance.now(), ids: context.ids,
              kind: image?.constructor?.name, width: image?.width, height: image?.height, error: data.error });
          });
        }
        const request = { asset: String(asset), job: context.terrain.length + 1 };
        jobs.set(message.id, request);
        context.terrain.push({ ...request, phase: 'request', at: performance.now(), ids: context.ids });
      }
      return post.call(this, message, ...rest);
    };
    for (const api of [window.WebGLRenderingContext, window.WebGL2RenderingContext]) {
      if (!api) continue;
      for (const method of ['texImage2D', 'texSubImage2D']) {
        const original = api.prototype[method];
        api.prototype[method] = function(...args) {
          const image = args.at(-1);
          const request = images.get(image);
          if (!request) return original.apply(this, args);
          const at = performance.now();
          const result = original.apply(this, args);
          context.terrain.push({ ...request, phase: 'upload', method, at, end: performance.now(),
            ids: context.ids, width: image.width, height: image.height });
          return result;
        };
      }
    }
  }
  context.ready = () => {
    const s = state();
    if (!s.on || !s.walk || s.visible !== 'visible' || !document.querySelector('#bsTown canvas') ||
        document.querySelector('.bs-welcome, .ex-load:not(.gone)')) return null;
    const centers = {};
    for (const name of ['move', 'look']) {
      const r = stick(name)?.getBoundingClientRect();
      if (!r?.width || !r.height) return null;
      centers[name] = { x: r.x + r.width / 2, y: r.y + r.height / 2, width: r.width };
    }
    return { ...s, centers, initialStoredQuality: context.initialStoredQuality,
      stamp: document.querySelector('[name="an-commit"]')?.content ?? null };
  };
  context.openRoute = () => {
    const gps = town().gps;
    if (gps.routePts()?.pts?.length || gpsButton().getAttribute('aria-pressed') === 'true') return { alreadyActive: true };
    gps.open();
    const buttons = [...document.querySelectorAll('.bs-gps-box button[data-i]')];
    const selected = buttons.find(button => button.innerText.toLowerCase().includes(destination.toLowerCase()));
    if (!selected) return { missing: destination, suggestions: buttons.map(button => button.innerText) };
    const trackActive = () => {
      if (gpsButton().getAttribute('aria-pressed') !== 'true') return;
      context.mark('gps-active');
      const route = gps.routePts();
      context.routeAtActivation = { label: route?.dest?.label, points: (route?.pts?.length ?? 0) / 2 };
      tracker.disconnect();
    };
    const tracker = new MutationObserver(trackActive);
    tracker.observe(gpsButton(), { attributes: true, attributeFilter: ['aria-pressed'] });
    context.mark('gps-selected');
    selected.click();
    return { choice: selected.innerText, graph: gps.netInfo() };
  };
  context.result = () => {
    const route = town()?.gps?.routePts?.();
    const points = Array.from(route?.pts ?? []);
    let metres = 0;
    for (let i = 2; i < points.length; i += 2) metres += Math.hypot(points[i] - points[i - 2], points[i + 1] - points[i - 1]);
    const resources = performance.getEntriesByType('resource')
      .filter(e => /(?:-model.*\.js|town(?:-v\d+)?\.json|height\.png|ground[^/]*webp|detail|worker|\/town3d\/logan\/(?:map\.json|roads\.bin)(?:[?#]|$))/i.test(e.name))
      .map(e => ({ url: e.name, start: e.startTime, end: e.responseEnd, transfer: e.transferSize, workerStart: e.workerStart }));
    return { ...context, route: { label: route?.dest?.label, points, metres }, resources,
      savedQuality: localStorage.getItem('an3d-inv'), serviceWorker: navigator.serviceWorker?.controller?.scriptURL ?? null };
  };
}
