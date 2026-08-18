import { textStyles } from "../styles/typography";

const variants = {
  primary:
    "bg-[#b89b6e] text-[#1a1714] hover:bg-[#c8a96e]",
  dark: "bg-[#1a1714] text-[#ede8e0] hover:bg-[#2a241f]",
  outline:
    "border border-[#1a1714]/15 text-[#1a1714] hover:border-[#1a1714]/40",
};

export default function Button({
  children,
  href,
  variant = "primary",
  external = false,
  className = "",
  ...rest
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 font-medium transition-colors";

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={`${base} ${variants[variant]} ${className}`}
      style={textStyles.body}
      {...rest}
    >
      {children}
    </a>
  );
}
