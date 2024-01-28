import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  size?: "lg" | "md" | "sm";
  className?: string;
}

const GlowBorder = ({ children, size = "md", className }: Props) => {
  const glowSize = {
    lg: "20px",
    md: "10px",
    sm: "5px",
  };

  return (
    <div
      style={{
        boxShadow: `inset 0 0 ${glowSize[size]} 0px oklch(var(--p)), 0 0 ${glowSize[size]} 0px oklch(var(--p))`,
      }}
      className={`border border-primary ${className}`}
    >
      {children}
    </div>
  );
};

export default GlowBorder;
