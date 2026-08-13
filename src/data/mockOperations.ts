import { Globe, Coins, Bitcoin } from "lucide-react";
import { formatBalance } from "@/lib/formatters";
import type {
  InternationalPayment,
  OtcOperation,
  OperationListItem,
  OperationSummary,
  PaymentStage,
  OtcStage,
  BadgeTone,
} from "@/types";

// ---------------------------------------------------------------------------
// Etapas de pagos internacionales (en orden cronológico)
// ---------------------------------------------------------------------------

export const paymentStages: { key: PaymentStage; label: string }[] = [
  { key: "deposit_received", label: "Depósito recibido" },
  { key: "in_verification", label: "En verificación" },
  { key: "order_issued", label: "Orden de pago emitida" },
  { key: "in_process", label: "En proceso" },
  { key: "finalized", label: "Finalizado" },
];

export const paymentStageLabels: Record<PaymentStage, string> = {
  deposit_received: "Depósito recibido",
  in_verification: "En verificación",
  order_issued: "Orden de pago emitida",
  in_process: "En proceso",
  finalized: "Finalizado",
};

export const paymentStageProgress: Record<PaymentStage, number> = {
  deposit_received: 20,
  in_verification: 40,
  order_issued: 60,
  in_process: 80,
  finalized: 100,
};

export const paymentStageTone: Record<PaymentStage, BadgeTone> = {
  deposit_received: "neutral",
  in_verification: "active",
  order_issued: "active",
  in_process: "active",
  finalized: "success",
};

// ---------------------------------------------------------------------------
// Etapas de operaciones OTC (en orden cronológico)
// ---------------------------------------------------------------------------

export const otcStages: { key: OtcStage; label: string }[] = [
  { key: "received", label: "Recibido" },
  { key: "in_process", label: "En proceso" },
  { key: "rate_applied", label: "Tasa aplicada" },
  { key: "completed", label: "Completado" },
];

export const otcStageLabels: Record<OtcStage, string> = {
  received: "Recibido",
  in_process: "En proceso",
  rate_applied: "Tasa aplicada",
  completed: "Completado",
};

export const otcStageProgress: Record<OtcStage, number> = {
  received: 25,
  in_process: 50,
  rate_applied: 75,
  completed: 100,
};

export const otcStageTone: Record<OtcStage, BadgeTone> = {
  received: "neutral",
  in_process: "active",
  rate_applied: "active",
  completed: "success",
};

// ---------------------------------------------------------------------------
// Datos de ejemplo: pagos internacionales
// ---------------------------------------------------------------------------

export const mockPayments: InternationalPayment[] = [
  {
    id: "pay_0041",
    reference: "PAG-2024-0041",
    beneficiary: "Acme Trading Co.",
    country: "China",
    currency: "USD",
    amount: 2450000,
    amountFormatted: "$ 2.450.000,00",
    rate: 1010,
    rateFormatted: "$ 1.010,00",
    stage: "finalized",
    dateGroup: "Hoy, 24 Oct",
    time: "09:15",
    hasInitialReceipt: true,
    hasFinalReceipt: true,
  },
  {
    id: "pay_0040",
    reference: "PAG-2024-0040",
    beneficiary: "Global Shipping Ltd.",
    country: "Estados Unidos",
    currency: "USD",
    amount: 1870500,
    amountFormatted: "$ 1.870.500,00",
    rate: 1008,
    rateFormatted: "$ 1.008,00",
    stage: "in_process",
    dateGroup: "Hoy, 24 Oct",
    time: "14:20",
    hasInitialReceipt: true,
    hasFinalReceipt: false,
  },
  {
    id: "pay_0039",
    reference: "PAG-2024-0039",
    beneficiary: "Proveedor Asia Tech",
    country: "China",
    currency: "CNY",
    amount: 3120000,
    amountFormatted: "$ 3.120.000,00",
    rate: 138.5,
    rateFormatted: "$ 138,50",
    stage: "order_issued",
    dateGroup: "Ayer, 23 Oct",
    time: "16:45",
    hasInitialReceipt: true,
    hasFinalReceipt: false,
  },
  {
    id: "pay_0038",
    reference: "PAG-2024-0038",
    beneficiary: "Medios Digitales SL",
    country: "España",
    currency: "EUR",
    amount: 890000,
    amountFormatted: "$ 890.000,00",
    rate: 1190,
    rateFormatted: "$ 1.190,00",
    stage: "in_verification",
    dateGroup: "21 Oct",
    time: "10:30",
    hasInitialReceipt: false,
    hasFinalReceipt: false,
  },
  {
    id: "pay_0037",
    reference: "PAG-2024-0037",
    beneficiary: "Consultora Nexus",
    country: "Uruguay",
    currency: "USD",
    amount: 430000,
    amountFormatted: "$ 430.000,00",
    rate: 1012,
    rateFormatted: "$ 1.012,00",
    stage: "deposit_received",
    dateGroup: "20 Oct",
    time: "11:00",
    hasInitialReceipt: false,
    hasFinalReceipt: false,
  },
];

// ---------------------------------------------------------------------------
// Datos de ejemplo: operaciones OTC
// ---------------------------------------------------------------------------

export const mockOtcOperations: OtcOperation[] = [
  {
    id: "otc_0152",
    reference: "OTC-2024-0152",
    side: "buy",
    asset: "USDT",
    assetAmount: 3000,
    assetAmountFormatted: "3.000,00",
    fiatAmount: 3090000,
    fiatAmountFormatted: "$ 3.090.000,00",
    rate: 1030,
    rateFormatted: "$ 1.030,00",
    stage: "completed",
    dateGroup: "Hoy, 24 Oct",
    time: "10:00",
    hasReceipt: true,
  },
  {
    id: "otc_0151",
    reference: "OTC-2024-0151",
    side: "sell",
    asset: "USDT",
    assetAmount: 1500,
    assetAmountFormatted: "1.500,00",
    fiatAmount: 1530000,
    fiatAmountFormatted: "$ 1.530.000,00",
    rate: 1020,
    rateFormatted: "$ 1.020,00",
    stage: "rate_applied",
    dateGroup: "Ayer, 23 Oct",
    time: "17:30",
    hasReceipt: false,
  },
  {
    id: "otc_0150",
    reference: "OTC-2024-0150",
    side: "buy",
    asset: "BTC",
    assetAmount: 0.02,
    assetAmountFormatted: "0,02",
    fiatAmount: 2400000,
    fiatAmountFormatted: "$ 2.400.000,00",
    rate: 120000000,
    rateFormatted: "$ 120.000.000,00",
    stage: "in_process",
    dateGroup: "21 Oct",
    time: "13:10",
    hasReceipt: false,
  },
  {
    id: "otc_0149",
    reference: "OTC-2024-0149",
    side: "sell",
    asset: "BTC",
    assetAmount: 0.01,
    assetAmountFormatted: "0,01",
    fiatAmount: 1150000,
    fiatAmountFormatted: "$ 1.150.000,00",
    rate: 115000000,
    rateFormatted: "$ 115.000.000,00",
    stage: "received",
    dateGroup: "20 Oct",
    time: "12:40",
    hasReceipt: false,
  },
];

// ---------------------------------------------------------------------------
// Listado unificado para Historial y Dashboard (ordenado por fecha)
// ---------------------------------------------------------------------------

const toListItem = (operation: InternationalPayment | OtcOperation): OperationListItem => {
  if (operation.id.startsWith("pay_")) {
    const payment = operation as InternationalPayment;
    return {
      kind: "payment",
      id: payment.id,
      reference: payment.reference,
      icon: Globe,
      title: payment.beneficiary,
      subtitle: `Pago internacional a ${payment.country} • ${payment.dateGroup}`,
      statusText: paymentStageLabels[payment.stage],
      statusTone: paymentStageTone[payment.stage],
      amount: payment.amountFormatted,
      amountTone: "expense",
      dateGroup: payment.dateGroup,
      time: payment.time,
    };
  }

  const otc = operation as OtcOperation;
  const action = otc.side === "buy" ? "Compra" : "Venta";
  return {
    kind: "otc",
    id: otc.id,
    reference: otc.reference,
    icon: otc.side === "buy" ? Coins : Bitcoin,
    title: `${action} de ${otc.asset}`,
    subtitle: `Operación OTC • ${otc.dateGroup}`,
    statusText: otcStageLabels[otc.stage],
    statusTone: otcStageTone[otc.stage],
    amount: `${otc.assetAmountFormatted} ${otc.asset}`,
    amountTone: otc.side === "sell" ? "income" : "expense",
    dateGroup: otc.dateGroup,
    time: otc.time,
  };
};

export const historyOperations: OperationListItem[] = [
  ...mockPayments,
  ...mockOtcOperations,
]
  .map(toListItem)
  .sort((a, b) => {
    const orderMap: Record<string, number> = {
      "Hoy, 24 Oct": 0,
      "Ayer, 23 Oct": 1,
      "21 Oct": 2,
      "20 Oct": 3,
      "18 Oct": 4,
    };
    const dayDiff = (orderMap[a.dateGroup] ?? 99) - (orderMap[b.dateGroup] ?? 99);
    if (dayDiff !== 0) return dayDiff;
    return a.time.localeCompare(b.time);
  });

export const historyDateOrder = Array.from(
  new Set(historyOperations.map((op) => op.dateGroup))
);

// Listas por tipo (para las pantallas de seguimiento de cada módulo)
export const paymentListItems: OperationListItem[] = mockPayments.map(toListItem);
export const otcListItems: OperationListItem[] = mockOtcOperations.map(toListItem);

// ---------------------------------------------------------------------------
// Resumen de operaciones activas (para Dashboard y cabeceras)
// ---------------------------------------------------------------------------

export const getOperationSummary = (): OperationSummary => {
  const activePayments = mockPayments.filter((p) => p.stage !== "finalized");
  const activeOtc = mockOtcOperations.filter((o) => o.stage !== "completed");

  const activeTotal =
    activePayments.reduce((sum, p) => sum + p.amount, 0) +
    activeOtc.reduce((sum, o) => sum + o.fiatAmount, 0);

  return {
    activeCount: activePayments.length + activeOtc.length,
    activeTotalFormatted: formatBalance(activeTotal),
  };
};
