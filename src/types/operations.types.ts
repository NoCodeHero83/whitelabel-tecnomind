/**
 * Tipos relacionados con operaciones de seguimiento
 * (pagos internacionales y operaciones OTC)
 */

import type { LucideIcon } from "lucide-react";

export type PaymentStage =
  | "deposit_received"
  | "in_verification"
  | "order_issued"
  | "in_process"
  | "finalized";

export type OtcStage =
  | "received"
  | "in_process"
  | "rate_applied"
  | "completed";

export type BadgeTone = "neutral" | "active" | "success";

export type OperationKind = "payment" | "otc";

export interface InternationalPayment {
  id: string;
  reference: string;
  beneficiary: string;
  country: string;
  currency: string;
  amount: number;
  amountFormatted: string;
  rate: number;
  rateFormatted: string;
  stage: PaymentStage;
  dateGroup: string;
  time: string;
  hasInitialReceipt: boolean;
  hasFinalReceipt: boolean;
}

export interface OtcOperation {
  id: string;
  reference: string;
  side: "buy" | "sell";
  asset: string;
  assetAmount: number;
  assetAmountFormatted: string;
  fiatAmount: number;
  fiatAmountFormatted: string;
  rate: number;
  rateFormatted: string;
  stage: OtcStage;
  dateGroup: string;
  time: string;
  hasReceipt: boolean;
}

export interface OperationListItem {
  kind: OperationKind;
  id: string;
  reference: string;
  icon: LucideIcon;
  title: string;
  subtitle: string;
  statusText: string;
  statusTone: BadgeTone;
  amount: string;
  amountTone: "income" | "expense";
  dateGroup: string;
  time: string;
}

export interface OperationSummary {
  activeCount: number;
  activeTotalFormatted: string;
}
