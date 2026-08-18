export default function Logo({ className = "", animate = true }) {
  return (
    <svg
      viewBox="0 0 120 120"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {[0, 1, 2, 3, 4].map((i) => (
        <line
          key={i}
          x1={30 + i * 15}
          y1="38"
          x2={30 + i * 15}
          y2="14"
          stroke="#b89b6e"
          strokeWidth="4"
          strokeLinecap="round"
          className={animate ? "koffe-steam" : ""}
          style={{ animationDelay: `${i * 0.18}s` }}
        />
      ))}
      <path
        d="M20 42h64v34c0 14-14 24-32 24s-32-10-32-24V42z"
        fill="#fffdfa"
        stroke="#1a1714"
        strokeWidth="4"
      />
      <path
        d="M84 52c14 0 14 26 0 26"
        stroke="#1a1714"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
      />
      <ellipse cx="52" cy="102" rx="34" ry="5" fill="#8c8580" opacity="0.25" />
    </svg>
  );
}
