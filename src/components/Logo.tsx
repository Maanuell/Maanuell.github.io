/**
 * Wordless mark.
 *
 * An open ring with a node travelling it — reads as a sun and an orbit at the
 * same time, which is roughly the two halves of the work: solar energy and
 * machines that find their own way around. Legible down to 20px.
 */
export default function Logo({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      role="img"
      aria-label="Emmanuel Maduabum"
    >
      <defs>
        <linearGradient id="logo-ring" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#89AACC" />
          <stop offset="100%" stopColor="#4E85BF" />
        </linearGradient>
      </defs>

      {/* open ring — the gap keeps it from reading as a plain circle */}
      <path
        d="M 26 10.5 A 12 12 0 1 0 27.4 19"
        stroke="url(#logo-ring)"
        strokeWidth="2.4"
        strokeLinecap="round"
        fill="none"
      />

      {/* inner core */}
      <circle cx="16" cy="16" r="4.2" fill="url(#logo-ring)" />

      {/* travelling node, sitting on the ring's open end */}
      <circle cx="27.4" cy="19" r="2.6" fill="#E6EDF5" />
    </svg>
  );
}
