import { textStyles } from "../styles/typography";

export default function Badge({ children, className = "" }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 text-xs tracking-[0.15em] uppercase rounded-full px-3.5 py-1.5 ${className}`}
      style={textStyles.mono}
    >
      {children}
    </span>
  );
}
