import { cn } from "@/lib/utils";

interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
}

const Eyebrow = ({ children, className }: EyebrowProps) => (
  <span
    className={cn(
      "inline-block text-xs font-semibold uppercase tracking-[0.18em] text-accent",
      className
    )}
  >
    {children}
  </span>
);

export default Eyebrow;