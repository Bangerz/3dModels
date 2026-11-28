// Ground-level collision in model metres. Authored guest shapes use their local transform.
function invCivicCollision(at, inPilot) {
  const dimensions = new Map(), owned = new WeakMap(), identity = (x,z) => [x,z];
  let hiddenCars = new Set();
  let wholeTown = false;
  const cells = new Map(), parked = new Map(), moved = new Map(), cell = v => Math.floor(v / 16), key = (a, b) => a * 65536 + b;
  let stamp = 0, minX = Infinity, maxX = -Infinity, minZ = Infinity, maxZ = -Infinity;
  const nearby = (x,z,r) => x+r >= minX && x-r <= maxX && z+r >= minZ && z-r <= maxZ
    && (cell(x-r) !== cell(x+r) || cell(z-r) !== cell(z+r) || cells.has(key(cell(x), cell(z))));
  const eachCell = (x0, z0, x1, z1, fn) => {
    for (let i = cell(x0); i <= cell(x1); i++)
      for (let j = cell(z0); j <= cell(z1); j++) fn(key(i, j));
  };
  function polygon(points) {
    const edges = [], xs = points.map(p => p[0]), zs = points.map(p => p[1]);
    const shape = { edges, x0: Math.min(...xs), z0: Math.min(...zs), x1: Math.max(...xs), z1: Math.max(...zs), stamp: 0 };
    minX = Math.min(minX,shape.x0); maxX = Math.max(maxX,shape.x1);
    minZ = Math.min(minZ,shape.z0); maxZ = Math.max(maxZ,shape.z1);
    for (let i = 0; i < points.length; i++) {
      const [x, z] = points[i], [bx, bz] = points[(i + 1) % points.length];
      const dx = bx - x, dz = bz - z, len = Math.hypot(dx, dz);
      if (len) edges.push({ x, z, bx, bz, dx, dz, inv2: 1 / (len * len), nx: -dz / len, nz: dx / len });
    }
    eachCell(shape.x0, shape.z0, shape.x1, shape.z1, k => {
      if (!cells.has(k)) cells.set(k, new Set());
      cells.get(k).add(shape);
    });
    return shape;
  }
  function rectangle(x, z, h, width, length, transform) {
    const c = Math.cos(h), s = Math.sin(h);
    return polygon([[-1,-1], [1,-1], [1,1], [-1,1]].map(([i,j]) =>
      transform(x + i * width / 2 * c + j * length / 2 * s, z - i * width / 2 * s + j * length / 2 * c)));
  }
  const box = (x,z,h,w,l) => rectangle(x,z,h,w,l,at);
  const worldBox = (x,z,h,w,l) => rectangle(x,z,h,w,l,identity);
  function post(x,z,r,transform = at) {
    polygon(Array.from({ length: 12 }, (_,i) => { const a = i * Math.PI / 6; return transform(x + r * Math.cos(a), z + r * Math.sin(a)); }));
  }
  // For circles use signed distance to the real boundary (including concave recesses). For a
  // rectangle, test every boundary segment against both body axes and the segment normal.
  function contact(x,z,h,hl,hw,normal,ignore) {
    if (!nearby(x,z,hl+hw)) return 0;
    const c = Math.cos(h), s = Math.sin(h), ex = hl ? Math.abs(c)*hw + Math.abs(s)*hl : hw, ez = hl ? Math.abs(s)*hw + Math.abs(c)*hl : hw;
    let deepest = 0;
    const id = ++stamp;
    eachCell(x-ex,z-ez,x+ex,z+ez,k => {
      const bucket = cells.get(k);
      if (!bucket) return;
      for (const B of bucket) {
        if (B.stamp === id || B.hidden || (hl > 0 && B.walkClearance) || B === ignore || x+ex < B.x0 || x-ex > B.x1 || z+ez < B.z0 || z-ez > B.z1) continue;
        B.stamp = id;
        let inside = false, distance2 = Infinity, vx = 0, vz = 0, rim = 0;
        for (const e of B.edges) {
          const dx = x-e.x, dz = z-e.z;
          if ((e.z > z) !== (e.bz > z) && dx < e.dx * dz / e.dz) inside = !inside;
          const t = Math.max(0, Math.min(1, (dx*e.dx + dz*e.dz)*e.inv2));
          const rx = dx - t*e.dx, rz = dz - t*e.dz, d2 = rx*rx + rz*rz;
          if (d2 < distance2) { distance2 = d2; vx = rx; vz = rz; }
          if (!hl) continue;
          const ax = -dx*c+dz*s, az = -dx*s-dz*c, bx = ax+e.dx*c-e.dz*s, bz = az+e.dx*s+e.dz*c;
          const support = hw*Math.abs(c*e.nx-s*e.nz) + hl*Math.abs(s*e.nx+c*e.nz);
          rim = Math.max(rim, Math.min(hw-Math.min(ax,bx), hw+Math.max(ax,bx), hl-Math.min(az,bz), hl+Math.max(az,bz), support-Math.abs(dx*e.nx+dz*e.nz)));
        }
        const d = Math.sqrt(distance2);
        const push = hl ? Math.max(rim, inside ? d + Math.min(hl,hw) : 0) : hw + (inside ? d : -d);
        if (push <= deepest) continue;
        deepest = push;
        if (normal) { const sign = (inside ? -1 : 1) / (d || 1); normal.x = vx*sign; normal.z = vz*sign; normal.shape = B; }
      }
    });
    return deepest;
  }
  const depth = (x,z,h,hl,hw) => contact(x,z,h,hl,hw);
  const obstacle = (x,z,h,hl,hw) => {
    const hit = {};
    return contact(x,z,h,hl,hw,hit) > 0 ? hit.shape : null;
  };
  // Bound the entire rotating body during a step. Only subdivide when its conservative
  // midpoint box touches something; centimetre-scale uncertainty stops the step.
  function canDrive(x,z,h,tx,tz,th,hl,hw) {
    if (!nearby(x,z,hl+hw+Math.abs(tx-x)+Math.abs(tz-z))) return true;
    const dh = Math.atan2(Math.sin(th-h),Math.cos(th-h)), dx = tx-x, dz = tz-z;
    const old = depth(x,z,h,hl,hw), next = depth(tx,tz,h+dh,hl,hw);
    if (next > 0 && (!old || next >= old - 1e-7)) return false;
    function clear(t0,t1,start,end) {
      const t = (t0+t1)/2, span = (t1-t0)/2, a = h+dh*t, c = Math.cos(a), s = Math.sin(a);
      const rot = 2*Math.hypot(hl,hw)*Math.sin(Math.abs(dh)*span/2);
      const side = Math.abs(dx*c-dz*s)*span + rot, along = Math.abs(dx*s+dz*c)*span + rot;
      if (!depth(x+dx*t,z+dz*t,a,hl+along,hw+side)) return true;
      const mid = depth(x+dx*t,z+dz*t,a,hl,hw);
      if (start > 0) {
        if (mid > start + 1e-7 || end > mid + 1e-7) return false;
      } else if (mid || end) return false;
      if (Math.max(side,along) < 0.01) return start > 0;
      return clear(t0,t,start,mid) && clear(t,t1,mid,end);
    }
    return clear(0,1,old,next);
  }
  function slide(pos,x,z) {
    const dx = pos.x-x, dz = pos.z-z;
    if ((!dx && !dz) || !nearby(x,z,.35+Math.abs(dx)+Math.abs(dz))) return;
    const n = Math.ceil(Math.hypot(dx,dz)/0.16), sx = dx/n, sz = dz/n, normal = {};
    for (let i=0; i<n; i++) {
      const hit = contact(x+sx,z+sz,0,0,0.35,normal);
      if (!hit || hit < depth(x,z,0,0,0.35)-1e-7) { x+=sx; z+=sz; continue; }
      // Remove the inward component; retain movement parallel to an angled facade or rail.
      const inward = Math.min(0,sx*normal.x+sz*normal.z), tx = x+sx-inward*normal.x, tz = z+sz-inward*normal.z;
      if (depth(tx,tz,0,0,0.35) > 1e-7) break;
      x=tx; z=tz;
    }
    pos.x=x; pos.z=z;
  }
  const carKey = (x,z) => Math.round(x*4) + ',' + Math.round(z*4);
  function removeShape(B) {
    if (B) eachCell(B.x0,B.z0,B.x1,B.z1,k => {
      const bucket = cells.get(k); bucket.delete(B); if (!bucket.size) cells.delete(k);
    });
  }
  function take(id) {
    const k = carKey(...id);
    moved.delete(k);
    if (parked.has(k)) { removeShape(parked.get(k)); parked.set(k,null); }
  }
  function park(id,x,z,h,y,pitch,roll) {
    const k = carKey(...id);
    if (!parked.has(k)) return;
    take(id);
    if (y != null) moved.set(k,[...id,x,y,z,h,pitch,roll]);
    if (!wholeTown && !inPilot(x,z)) return;
    const [w,l] = dimensions.get(k) || [1.85,4.55];
    const shape = worldBox(x,z,h,w,l); shape.hidden = hiddenCars.has(k); shape.key = k; parked.set(k,shape);
  }
  function addCars(cars) {
    for (const {x,z,heading} of cars) { const id=[x,z]; take(id); parked.set(carKey(x,z),null); park(id,x,z,heading); }
  }
  function addTown(buildings, cars) {
    wholeTown = true;
    for (const ring of buildings.polygons) {
      const points = [];
      for (let i=0; i<ring.length; i+=2) points.push([ring[i],ring[i+1]]);
      polygon(points);
    }
    for (const [x,z,r] of buildings.circles) post(x,z,r,identity);
    for (const {id,x,z,heading,halfWidth,halfLength} of cars) {
      const k = carKey(...id);
      dimensions.set(k,[halfWidth*2,halfLength*2,heading]); parked.set(k,null); park(id,x,z,heading);
    }
  }
  function own(actor, occupied) {
    if (!wholeTown) return;
    const prev = owned.get(actor);
    if (prev && !occupied && prev.x === actor.x && prev.z === actor.z && prev.h === actor.h) return;
    if (prev) { removeShape(prev.shape); owned.delete(actor); }
    if (!occupied) {
      const {x,z,h} = actor;
      owned.set(actor,{x,z,h,shape:worldBox(x,z,h,actor.bus ? 2.54 : 1.96,actor.bus ? 11.1 : 4.44)});
    }
  }
  function hideCars(ids) {
    hiddenCars = new Set(ids.map(([x,z]) => carKey(x,z)));
    for (const [key,B] of parked) if (B) B.hidden = hiddenCars.has(key);
  }
  function originalBay(id) {
    const d = dimensions.get(carKey(...id));
    return d && {x:id[0],z:id[1],h:d[2],w:d[0]/2,l:d[1]/2};
  }
  function bayFree(bay, id, actor) {
    const self = id ? parked.get(carKey(...id)) : owned.get(actor)?.shape;
    return !contact(bay.x,bay.z,bay.h,bay.l,bay.w,null,self);
  }
  // A quality swap reconstructs the renderer (including the cars in their original bays).
  const restoreCars = model => { for (const pose of moved.values()) model.driveCar?.(...pose); };
  return { polygon, box, worldBox, post, depth, obstacle, slide, canDrive, take, park, addCars, addTown, own, originalBay, bayFree, hideCars, restoreCars, get wholeTown() { return wholeTown; } };
}

// Native wall rings are already in model metres. Register individual masses so open
// driveways and gaps between wings stay clear. Quality tiers share the same plan.
function invAddDesignedWalls(town, rings) {
  if (!rings?.length) return;
  const grid = town.invStatic ??= invCivicCollision((x, z) => [x, z], () => false);
  for (const ring of rings) {
    const points = [];
    for (let i = 0; i < ring.length; i += 2) points.push([ring[i], ring[i + 1]]);
    grid.polygon(points);
  }
}

// Half width, half length and height in metres. The sedan follows the traffic sedan in townPlaneParts.
const townTrafficBodies = { walk: [0.32, 0.32, 1.75], car: [0.98, 2.22, 1.4], bus: [1.27, 5.55, 3.12] };

// First contact in [0,1] for two moving footprints. Straight travel is a swept
// separating-axis test. On turns, enclose the turning corners and refine only
// intervals that can touch, to a centimetre. Headings use +Z for the nose.
function townTrafficSweep(a, endA, bodyA, b, endB, bodyB) {
  const x = a.x - b.x, z = a.z - b.z, ex = endA.x - endB.x, ez = endA.z - endB.z;
  const reach = bodyA[0] + bodyA[1] + bodyB[0] + bodyB[1];
  if (Math.min(x, ex) > reach || Math.max(x, ex) < -reach || Math.min(z, ez) > reach || Math.max(z, ez) < -reach) return 1;
  if (Math.min(a.y, endA.y) >= Math.max(b.y, endB.y) + bodyB[2] ||
      Math.min(b.y, endB.y) >= Math.max(a.y, endA.y) + bodyA[2]) return 1;
  const ra = Math.hypot(bodyA[0], bodyA[1]), rb = Math.hypot(bodyB[0], bodyB[1]);
  const dx = ex - x, dz = ez - z;
  const da = Math.atan2(Math.sin(endA.h - a.h), Math.cos(endA.h - a.h));
  const db = Math.atan2(Math.sin(endB.h - b.h), Math.cos(endB.h - b.h));
  const at = (lo, hi) => {
    const mid = (lo + hi) / 2, len = hi - lo;
    const sa = Math.sin(a.h + da * mid), ca = Math.cos(a.h + da * mid);
    const sb = Math.sin(b.h + db * mid), cb = Math.cos(b.h + db * mid);
    const pad = (ra * Math.abs(da) + rb * Math.abs(db)) * len / 2;  // maximum travel of a corner from the midpoint orientation
    let enter = 0, leave = 1, shallowest = -Infinity, outward = 0;
    const axes = [ca, -sa, sa, ca, cb, -sb, sb, cb];
    for (let i = 0; i < axes.length; i += 2) {
      const ax = axes[i], az = axes[i + 1];
      const span = bodyA[0] * Math.abs(ax * ca - az * sa) + bodyA[1] * Math.abs(ax * sa + az * ca)
                 + bodyB[0] * Math.abs(ax * cb - az * sb) + bodyB[1] * Math.abs(ax * sb + az * cb) + pad;
      const offset = (x + dx * lo) * ax + (z + dz * lo) * az, speed = (dx * ax + dz * az) * len;
      const gap = Math.abs(offset) - span;
      if (gap > shallowest) { shallowest = gap; outward = Math.sign(offset) * speed; }
      if (Math.abs(speed) < 1e-10) { if (gap >= 0) return 1; continue; }
      const t0 = (-span - offset) / speed, t1 = (span - offset) / speed;
      enter = Math.max(enter, Math.min(t0, t1)); leave = Math.min(leave, Math.max(t0, t1));
      if (enter >= leave) return 1;
    }
    if (pad > 0.01) { const left = at(lo, mid); return left < 1 ? left : at(mid, hi); }
    // In an existing overlap, allow motion away from its shallowest face. At coincident
    // centres, or sliding along that face, the centres must also move apart.
    if (shallowest < 0 && (outward > 2 * pad + 1e-8 ||
        (!pad && outward >= 0 && (dx || dz) && (x + dx * lo) * dx + (z + dz * lo) * dz >= 0))) return 1;
    return Math.max(0, lo + enter * len - 1e-5);
  };
  return at(0, 1);
}

export { invCivicCollision, invAddDesignedWalls, townTrafficBodies, townTrafficSweep };
