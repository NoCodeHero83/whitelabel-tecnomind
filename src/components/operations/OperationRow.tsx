import { LucideIcon } from "lucide-react";
import OperationStatusBadge from "./OperationStatusBadge";
import type { BadgeTone } from "@/types";

interface OperationRowProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  amount: string;
  amountTone?: "income" | "expense";
  statusText: string;
  statusTone?: BadgeTone;
  onClick?: () => void;
}

const OperationRow = ({
  icon: Icon,
  title,
  subtitle,
  amount,
  amountTone = "expense",
  statusText,
  statusTone = "neutral",
  onClick,
}: OperationRowProps) => {
  const isIncome = amountTone === "income";

  return (
    <div
      onClick={onClick}
      className="flex items-center justify-between py-3 border-b border-border group active:bg-muted rounded-lg px-2 -mx-2 transition-colors cursor-pointer min-h-[56px] hover:bg-muted/50"
    >
      <div className="flex items-center gap-4 min-w-0 flex-1">
        <div
          className={`size-10 rounded-full flex items-center justify-center shrink-0 border ${
            isIncome ? "bg-accent/10 border-transparent" : "bg-muted border-border"
          }`}
        >
          <Icon
            className={`size-5 ${isIncome ? "text-accent" : "text-foreground"}`}
          />
        </div>
        <div className="flex flex-col min-w-0">
          <span className="text-foreground text-base font-semibold truncate">
            {title}
          </span>
          <span className="text-muted-foreground text-xs font-medium truncate">
            {subtitle}
          </span>
        </div>
      </div>
      <div className="flex flex-col items-end gap-1 shrink-0 pl-3">
        <span className={`font-bold text-base ${isIncome ? "text-success" : "text-foreground"}`}>
          {amount}
        </span>
        <OperationStatusBadge status={statusText} tone={statusTone} />
      </div>
    </div>
  );
};

export default OperationRow;
