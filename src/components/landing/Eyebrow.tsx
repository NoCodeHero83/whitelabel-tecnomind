import { cn } from "@/lib/utils";

interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
  tone?: "accent" | "light" | "muted";
}

const Eyebrow = ({ children, className, tone = "accent" }: EyebrowProps) => {
  const color =
    tone === "light" ? "text-white/70" : tone === "muted" ? "text-muted-foreground" : "text-accent";
  return (
    <span
      className={cn(
        "inline-block font-sans text-[0.72rem] tracking-[0.16em] uppercase font-semibold",
        color,
        className
      )}
    >
      {children}
    </span>
  );
};

export default Eyebrow;
