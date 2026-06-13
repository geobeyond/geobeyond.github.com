/* ---------------------------------------------------------------------------
 * Geobeyond brand signature — scroll-driven Rubik "solve".
 *
 * A real 3x3x3 cube textured with a continuous world map (the 4 side faces
 * form a seamless 360° longitude belt; top/bottom are polar caps). As the
 * user scrolls, each section-to-section transition plays a short, deliberate
 * sequence of layer turns (scramble + inverse → net identity) that always
 * returns to the SOLVED continents — the metaphor of bringing order to a
 * complex world, one domain at a time.
 *
 * The cube orientation advances ONLY during the pauses between turns (never
 * mid-turn), and lands on the brand logo pose with a decisive snap.
 *
 * This module is DOM-driven: it reads `.sec` sections + their `data-badge`
 * from the markup rendered by CubeSolve.astro, so copy lives in the content
 * layer, not here.
 * ------------------------------------------------------------------------- */

type Axis = "x" | "y" | "z";
type Move = [Axis, number, number];
type Pos = { x: number; y: number; z: number };

export function initCubeSolve(): void {
  const cube = document.getElementById("cube");
  const view = document.querySelector<HTMLElement>(".view");
  const badge = document.getElementById("badge");
  if (!cube || !view) return;

  const SS = 70,
    U = 70,
    half = SS / 2,
    NAVY = "#080a0b";
  const ASSET = cube.dataset.asset || "world-bold.svg";

  const dirs: Record<string, number[]> = {
    front: [0, 0, 1],
    back: [0, 0, -1],
    right: [1, 0, 0],
    left: [-1, 0, 0],
    top: [0, 1, 0],
    bottom: [0, -1, 0],
  };
  const stT: Record<string, string> = {
    front: `translateZ(${half}px)`,
    back: `rotateY(180deg) translateZ(${half}px)`,
    right: `rotateY(90deg) translateZ(${half}px)`,
    left: `rotateY(-90deg) translateZ(${half}px)`,
    top: `rotateX(90deg) translateZ(${half}px)`,
    bottom: `rotateX(-90deg) translateZ(${half}px)`,
  };
  function cellOf(f: string, x: number, y: number, z: number): [number, number] {
    switch (f) {
      case "front": return [1 - y, x + 1];
      case "back": return [1 - y, 1 - x];
      case "right": return [1 - y, 1 - z];
      case "left": return [1 - y, z + 1];
      case "top": return [z + 1, x + 1];
      default: return [1 - z, x + 1]; // bottom
    }
  }

  // Continuous globe: 4 side faces = a 360° longitude belt; top/bottom = caps.
  const facemap: Record<string, { lon0: number; lat0: number; lats?: number }> = {
    front: { lon0: 0, lat0: 0 },
    right: { lon0: 90, lat0: 0 },
    back: { lon0: 180, lat0: 0 },
    left: { lon0: -90, lat0: 0 },
    top: { lon0: 0, lat0: 67.5, lats: 15 },
    bottom: { lon0: 0, lat0: -67.5, lats: 15 },
  };
  const LON = 30, LAT = 30, IMW = 12 * SS, IMH = 6 * SS; // equirectangular 360x180
  function bg(f: string, r: number, c: number) {
    const F = facemap[f];
    const ls = F.lats || LAT;
    const lon = F.lon0 + (c - 1) * LON;
    const lat = F.lat0 + (1 - r) * ls;
    const xL = ((lon - LON / 2) + 180) / 360 * IMW;
    const yT = (90 - (lat + ls / 2)) / 180 * IMH;
    return { size: `${IMW}px ${IMH}px`, pos: `${(-xL).toFixed(1)}px ${(-yT).toFixed(1)}px` };
  }

  const cubies: { el: HTMLElement; pos: Pos; baseT: string }[] = [];
  for (let x = -1; x <= 1; x++)
    for (let y = -1; y <= 1; y++)
      for (let z = -1; z <= 1; z++) {
        const el = document.createElement("div");
        el.className = "cubie";
        const baseT = `translate3d(${x * U}px,${-y * U}px,${z * U}px)`;
        el.style.transform = baseT;
        for (const f in dirs) {
          const [dx, dy, dz] = dirs[f];
          const outer = (dx && dx === x) || (dy && dy === y) || (dz && dz === z);
          const st = document.createElement("div");
          st.className = "st";
          st.style.width = SS + "px";
          st.style.height = SS + "px";
          st.style.left = -half + "px";
          st.style.top = -half + "px";
          st.style.transform = stT[f];
          if (outer) {
            const [r, c] = cellOf(f, x, y, z);
            const g = bg(f, r, c);
            st.style.backgroundImage = `url('${ASSET}')`;
            st.style.backgroundRepeat = "repeat-x";
            st.style.backgroundOrigin = "border-box";
            st.style.backgroundSize = g.size;
            st.style.backgroundPosition = g.pos;
          } else {
            st.style.background = NAVY;
          }
          el.appendChild(st);
        }
        cube.appendChild(el);
        cubies.push({ el, pos: { x, y, z }, baseT });
      }

  function rotPos(p: Pos, a: Axis, d: number): Pos {
    const { x, y, z } = p;
    if (a === "x") return d > 0 ? { x, y: z, z: -y } : { x, y: -z, z: y };
    if (a === "y") return d > 0 ? { x: z, y, z: -x } : { x: -z, y, z: x };
    return d > 0 ? { x: y, y: -x, z } : { x: -y, y: x, z };
  }
  const rotCSS = (a: Axis, deg: number) =>
    (a === "x" ? "rotateX(" : a === "y" ? "rotateY(" : "rotateZ(") + deg + "deg)";

  // Per-transition mini sequence: scramble + inverse → net identity (resolves).
  const seqs: Move[][] = [
    [["y", 1, 1], ["x", 1, 1]],
    [["x", -1, 1], ["z", 1, -1]],
    [["z", 1, 1], ["y", 1, -1]],
    [["y", -1, -1], ["x", -1, -1]],
  ];
  const inv = (m: Move): Move => [m[0], m[1], -m[2]];
  const K = 4; // 2 scramble + 2 inverse per transition
  const MOVES: Move[] = [];
  seqs.forEach((s) => {
    s.forEach((m) => MOVES.push(m));
    s.slice().reverse().forEach((m) => MOVES.push(inv(m)));
  });
  const TM = MOVES.length;

  const secs = [...document.querySelectorAll<HTMLElement>(".sec")];
  const TR = Math.max(1, secs.length - 1); // number of transitions
  const ENTRY = [-26, -20];
  const LOGO = [-30, -52]; // brand logo pose
  let committed = 0;

  function commit() {
    const [a, l, d] = MOVES[committed];
    cubies.filter((c) => c.pos[a] === l).forEach((c) => {
      c.baseT = rotCSS(a, 90 * d) + " " + c.baseT;
      c.pos = rotPos(c.pos, a, d);
    });
    committed++;
  }
  function uncommit() {
    committed--;
    const [a, l, d] = MOVES[committed];
    cubies.filter((c) => c.pos[a] === l).forEach((c) => {
      c.baseT = rotCSS(a, -90 * d) + " " + c.baseT;
      c.pos = rotPos(c.pos, a, -d);
    });
  }

  const ease = (t: number) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);
  const TURN = 0.4; // turn completes in the first 40%; remaining 60% is a hold
  const eb = (t: number) => {
    const c1 = 1.70158, c3 = c1 + 1;
    return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
  };
  // Orientation advances ONLY during holds (never mid-turn); last hold snaps.
  function pose(g: number): number {
    const done = Math.floor(g + 1e-9);
    let raw = done * (1 - TURN);
    const mf = g - done;
    if (mf > TURN) {
      let h = (mf - TURN) / (1 - TURN);
      h = done === TM - 1 ? eb(h) : Math.min(1, h);
      raw += h * (1 - TURN);
    }
    return raw / (TM * (1 - TURN));
  }
  function prog(): number {
    const T = secs.map((s) => s.offsetTop);
    const y = scrollY;
    let i = 0;
    while (i < T.length - 1 && y >= T[i + 1]) i++;
    const span = (i < T.length - 1 ? T[i + 1] : T[i] + innerHeight) - T[i];
    const f = span > 0 ? (y - T[i]) / span : 0;
    return Math.max(0, Math.min(TR, i + f));
  }
  function update() {
    const p = prog();
    const t = Math.min(TR - 1, Math.floor(p));
    const lf = p - t;
    const sub = lf * K;
    const lm = Math.max(0, Math.floor(sub - 1e-9));
    const moveFrac = sub - lm;
    const target = t * K + lm;
    const gt = pose(p * K);
    view!.style.transform =
      `rotateX(${ENTRY[0] + (LOGO[0] - ENTRY[0]) * gt}deg) rotateY(${ENTRY[1] + (LOGO[1] - ENTRY[1]) * gt}deg)`;
    while (committed < target) commit();
    while (committed > target) uncommit();
    cubies.forEach((c) => (c.el.style.transform = c.baseT));
    if (committed < TM && lf > 0) {
      const [a, l, d] = MOVES[committed];
      const mf = moveFrac < TURN ? moveFrac / TURN : 1;
      const ang = ease(mf) * 90 * d;
      cubies.filter((c) => c.pos[a] === l).forEach((c) => {
        c.el.style.transform = rotCSS(a, ang) + " " + c.baseT;
      });
    }
    const idx = Math.max(0, Math.min(TR, Math.round(p)));
    secs.forEach((s, i) => s.classList.toggle("active", i === idx));
    if (badge) {
      const bd = secs[idx]?.getAttribute("data-badge");
      if (bd) {
        badge.textContent = bd;
        badge.classList.add("on");
      } else {
        badge.classList.remove("on");
      }
    }
  }
  addEventListener("scroll", update, { passive: true });
  addEventListener("resize", update);
  update();
}
