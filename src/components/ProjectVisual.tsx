import type { Visual } from "../data/content";

/**
 * Generated artwork for each project card.
 *
 * There are no photographs in this portfolio, so instead of leaving image
 * holes each project gets a deterministic SVG built from its own subject
 * matter — a coverage path for the robot, an electrolysis flow for hydrogen,
 * an irradiance curve for the forecasting work. Deterministic rather than
 * random so a card looks identical on every render.
 */

const STROKE = "#89AACC";
const STROKE_2 = "#4E85BF";

function Defs({ id }: { id: string }) {
  return (
    <defs>
      <linearGradient id={`g-${id}`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor={STROKE} stopOpacity="0.9" />
        <stop offset="100%" stopColor={STROKE_2} stopOpacity="0.5" />
      </linearGradient>
      <radialGradient id={`glow-${id}`} cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor={STROKE} stopOpacity="0.35" />
        <stop offset="100%" stopColor={STROKE} stopOpacity="0" />
      </radialGradient>
    </defs>
  );
}

function Grid() {
  return (
    <g opacity="0.16">
      {Array.from({ length: 13 }, (_, i) => (
        <line key={`v${i}`} x1={i * 33.3} y1="0" x2={i * 33.3} y2="300" stroke="#fff" strokeWidth="0.5" />
      ))}
      {Array.from({ length: 10 }, (_, i) => (
        <line key={`h${i}`} x1="0" y1={i * 33.3} x2="400" y2={i * 33.3} stroke="#fff" strokeWidth="0.5" />
      ))}
    </g>
  );
}

/** Boustrophedon coverage path — how a mower actually crosses a field. */
function Robot() {
  const rows = 6;
  const top = 60;
  const gap = 30;
  let d = "";
  for (let i = 0; i < rows; i++) {
    const y = top + i * gap;
    const leftToRight = i % 2 === 0;
    const x1 = leftToRight ? 70 : 330;
    const x2 = leftToRight ? 330 : 70;
    d += `${i === 0 ? "M" : "L"} ${x1} ${y} L ${x2} ${y} `;
    if (i < rows - 1) d += `Q ${leftToRight ? 355 : 45} ${y + gap / 2} ${x2} ${y + gap} `;
  }
  return (
    <>
      <Grid />
      <rect x="60" y="48" width="280" height="176" rx="8" fill="none" stroke="#fff" strokeWidth="0.8" opacity="0.25" />
      <path d={d} fill="none" stroke="url(#g-robot)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="330" cy="210" r="16" fill="url(#glow-robot)" />
      <circle cx="330" cy="210" r="5" fill={STROKE} />
      <circle cx="70" cy="60" r="3.5" fill="#fff" opacity="0.7" />
    </>
  );
}

/** Electrolyser: power in, split streams, recombination. */
function Hydrogen() {
  return (
    <>
      <Grid />
      <rect x="150" y="95" width="100" height="110" rx="10" fill="none" stroke="url(#g-hydrogen)" strokeWidth="1.6" />
      <line x1="200" y1="95" x2="200" y2="205" stroke="#fff" strokeWidth="0.6" opacity="0.35" />
      {[0, 1, 2].map((i) => (
        <path
          key={i}
          d={`M 40 ${118 + i * 32} L 150 ${118 + i * 32}`}
          stroke={STROKE}
          strokeWidth="1.4"
          opacity={0.75 - i * 0.15}
          strokeDasharray="6 5"
        />
      ))}
      {[0, 1, 2, 3].map((i) => (
        <circle key={`b${i}`} cx={172 + (i % 2) * 8} cy={190 - i * 22} r={3 + (i % 2)} fill={STROKE} opacity={0.8 - i * 0.12} />
      ))}
      {[0, 1, 2].map((i) => (
        <circle key={`o${i}`} cx={224 + (i % 2) * 8} cy={186 - i * 26} r={2.5} fill={STROKE_2} opacity={0.7 - i * 0.15} />
      ))}
      <path d="M 250 130 L 360 130 L 360 175 L 250 175" fill="none" stroke="url(#g-hydrogen)" strokeWidth="1.6" />
      <circle cx="360" cy="152" r="20" fill="url(#glow-hydrogen)" />
      <text x="196" y="82" fill="#fff" opacity="0.5" fontSize="11" fontFamily="monospace" textAnchor="middle">
        H₂
      </text>
    </>
  );
}

/** Irradiance day-curve with a cloud-driven dip and a forecast band. */
function Solar() {
  const pts: [number, number][] = [];
  for (let i = 0; i <= 60; i++) {
    const x = 40 + i * 5.3;
    const t = i / 60;
    const bell = Math.sin(Math.PI * t);
    const dip = t > 0.52 && t < 0.68 ? 0.45 : 1;
    const y = 235 - bell * dip * 150;
    pts.push([x, y]);
  }
  const line = pts.map((p, i) => `${i === 0 ? "M" : "L"} ${p[0].toFixed(1)} ${p[1].toFixed(1)}`).join(" ");
  const bandTop = pts.map((p, i) => `${i === 0 ? "M" : "L"} ${p[0].toFixed(1)} ${(p[1] - 14).toFixed(1)}`).join(" ");
  const bandBottom = [...pts].reverse().map((p) => `L ${p[0].toFixed(1)} ${(p[1] + 14).toFixed(1)}`).join(" ");
  return (
    <>
      <Grid />
      <path d={`${bandTop} ${bandBottom} Z`} fill="url(#g-solar)" opacity="0.18" />
      <path d={line} fill="none" stroke="url(#g-solar)" strokeWidth="2.2" strokeLinecap="round" />
      <line x1="40" y1="235" x2="360" y2="235" stroke="#fff" strokeWidth="0.7" opacity="0.3" />
      <circle cx="200" cy="60" r="26" fill="url(#glow-solar)" />
      {Array.from({ length: 8 }, (_, i) => {
        const a = (i * Math.PI) / 4;
        return (
          <line
            key={i}
            x1={200 + Math.cos(a) * 16}
            y1={60 + Math.sin(a) * 16}
            x2={200 + Math.cos(a) * 24}
            y2={60 + Math.sin(a) * 24}
            stroke={STROKE}
            strokeWidth="1.4"
            opacity="0.75"
          />
        );
      })}
      <circle cx="200" cy="60" r="10" fill={STROKE} opacity="0.9" />
    </>
  );
}

/** Layered network — inputs fusing into a single trust output. */
function Neural() {
  const layers = [
    { x: 70, n: 4 },
    { x: 160, n: 5 },
    { x: 250, n: 3 },
    { x: 340, n: 1 },
  ];
  const pos = layers.map((l) =>
    Array.from({ length: l.n }, (_, i) => [l.x, 150 + (i - (l.n - 1) / 2) * 38] as [number, number])
  );
  return (
    <>
      <Grid />
      {pos.slice(0, -1).map((layer, li) =>
        layer.map((a, ai) =>
          pos[li + 1].map((b, bi) => (
            <line
              key={`${li}-${ai}-${bi}`}
              x1={a[0]}
              y1={a[1]}
              x2={b[0]}
              y2={b[1]}
              stroke={STROKE}
              strokeWidth="0.6"
              opacity={0.13 + ((ai + bi) % 3) * 0.07}
            />
          ))
        )
      )}
      {pos.map((layer, li) =>
        layer.map((p, i) => (
          <circle
            key={`n-${li}-${i}`}
            cx={p[0]}
            cy={p[1]}
            r={li === 3 ? 9 : 5}
            fill={li === 3 ? STROKE : "#0a0a0a"}
            stroke={li === 3 ? "none" : "url(#g-neural)"}
            strokeWidth="1.6"
          />
        ))
      )}
      <circle cx="340" cy="150" r="24" fill="url(#glow-neural)" />
    </>
  );
}

/** Dashboard: bars, a trend line and a KPI block. */
function Chart() {
  const bars = [46, 78, 62, 104, 88, 130, 116];
  return (
    <>
      <Grid />
      {bars.map((h, i) => (
        <rect key={i} x={62 + i * 40} y={228 - h} width="22" height={h} rx="3" fill="url(#g-chart)" opacity={0.5 + i * 0.06} />
      ))}
      <path
        d={bars.map((h, i) => `${i === 0 ? "M" : "L"} ${73 + i * 40} ${228 - h - 12}`).join(" ")}
        fill="none"
        stroke="#fff"
        strokeWidth="1.6"
        opacity="0.75"
        strokeLinecap="round"
      />
      {bars.map((h, i) => (
        <circle key={`d${i}`} cx={73 + i * 40} cy={228 - h - 12} r="2.6" fill="#fff" opacity="0.9" />
      ))}
      <line x1="50" y1="228" x2="360" y2="228" stroke="#fff" strokeWidth="0.7" opacity="0.3" />
      <rect x="270" y="46" width="90" height="42" rx="6" fill="#fff" opacity="0.06" />
      <text x="315" y="74" fill={STROKE} fontSize="20" fontFamily="monospace" textAnchor="middle">
        +18%
      </text>
    </>
  );
}

/** Compression wave through a road surface into an output pulse. */
function Wave() {
  const w = (amp: number, phase: number, yBase: number) =>
    Array.from({ length: 81 }, (_, i) => {
      const x = 40 + i * 4;
      const y = yBase + Math.sin(i / 6 + phase) * amp * Math.exp(-i / 90);
      return `${i === 0 ? "M" : "L"} ${x} ${y.toFixed(1)}`;
    }).join(" ");
  return (
    <>
      <Grid />
      <rect x="40" y="196" width="320" height="30" rx="4" fill="#fff" opacity="0.07" />
      {[0, 1, 2].map((i) => (
        <line key={i} x1={90 + i * 100} y1="196" x2={90 + i * 100} y2="226" stroke="#fff" strokeWidth="0.8" opacity="0.25" />
      ))}
      <path d={w(38, 0, 130)} fill="none" stroke="url(#g-wave)" strokeWidth="2.2" strokeLinecap="round" />
      <path d={w(24, 1.6, 130)} fill="none" stroke={STROKE_2} strokeWidth="1.3" opacity="0.55" />
      <path d={w(13, 3.1, 130)} fill="none" stroke={STROKE} strokeWidth="1" opacity="0.3" />
      <circle cx="200" cy="196" r="22" fill="url(#glow-wave)" />
      <path d="M 196 178 L 204 178 L 199 190 L 208 190 L 194 210 L 198 194 L 190 194 Z" fill={STROKE} opacity="0.95" />
    </>
  );
}

const MAP: Record<Visual, () => JSX.Element> = {
  robot: Robot,
  hydrogen: Hydrogen,
  solar: Solar,
  neural: Neural,
  chart: Chart,
  wave: Wave,
};

export default function ProjectVisual({ variant }: { variant: Visual }) {
  const Art = MAP[variant];
  return (
    <svg
      viewBox="0 0 400 300"
      className="absolute inset-0 h-full w-full"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <Defs id={variant} />
      <rect width="400" height="300" fill="hsl(0 0% 6%)" />
      <Art />
    </svg>
  );
}
