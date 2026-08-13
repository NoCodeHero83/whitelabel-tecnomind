import { Badge } from "@/components/ui/badge";
import type { BadgeTone } from "@/types";

interface OperationStatusBadgeProps {
  status: string;
  tone?: BadgeTone;
}

const toneClasses: Record<BadgeTone, string> = {
  neutral: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
  active: "bg-accent text-accent-foreground hover:bg-accent/80",
  success: "bg-success text-success-foreground hover:bg-success/80",
};

const OperationStatusBadge = ({ status, tone = "neutral" }: OperationStatusBadgeProps) => {
  return <Badge className={toneClasses[tone]}>{status}</Badge>;
};

export default OperationStatusBadge;
