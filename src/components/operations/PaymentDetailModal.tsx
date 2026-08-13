import { X, Download, ExternalLink, Check } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import type { InternationalPayment } from "@/types";
import {
  paymentStages,
  paymentStageLabels,
  paymentStageProgress,
} from "@/data/mockOperations";

interface PaymentDetailModalProps {
  payment: InternationalPayment | null;
  onClose: () => void;
}

const PaymentDetailModal = ({ payment, onClose }: PaymentDetailModalProps) => {
  if (!payment) return null;

  const currentIndex = paymentStages.findIndex((s) => s.key === payment.stage);
  const progress = paymentStageProgress[payment.stage];
  const canDownloadInitial =
    payment.hasInitialReceipt &&
    (payment.stage === "order_issued" ||
      payment.stage === "in_process" ||
      payment.stage === "finalized");

  const handleDownloadInitial = () => {
    toast.success("Comprobante inicial descargado", {
      description: `Comprobante de envío de la operación ${payment.reference}.`,
    });
  };

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-[#1a3a5c] w-full max-w-md rounded-2xl shadow-2xl overflow-hidden animate-scale-in max-h-[90dvh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#0A2540] px-6 py-5 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full transition-colors"
          >
            <X className="h-5 w-5" />
          </button>

          <p className="text-sm text-white/80 mb-1">Pago internacional</p>
          <p className="text-3xl font-bold">{payment.amountFormatted}</p>
        </div>

        {/* Details */}
        <div className="p-6 space-y-4">
          {/* Beneficiary */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[#2F80ED]/10 rounded-full flex items-center justify-center flex-shrink-0">
              <ExternalLink className="h-6 w-6 text-[#2F80ED]" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-gray-500 dark:text-white/60">Beneficiario</p>
              <p className="font-semibold text-gray-900 dark:text-white truncate">
                {payment.beneficiary}
              </p>
              <p className="text-sm text-gray-500 dark:text-white/60">
                {payment.country} • Moneda destino: {payment.currency}
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-dashed border-gray-200 dark:border-white/10" />

          {/* Details Grid */}
          <div className="flex justify-between">
            <div>
              <p className="text-sm text-gray-500 dark:text-white/60">Referencia</p>
              <p className="font-mono font-semibold text-[#2F80ED]">{payment.reference}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500 dark:text-white/60">Tipo de cambio</p>
              <p className="font-medium text-gray-900 dark:text-white">
                {payment.rateFormatted} por {payment.currency}
              </p>
            </div>
          </div>

          <div className="flex justify-between">
            <div>
              <p className="text-sm text-gray-500 dark:text-white/60">Solicitado</p>
              <p className="font-medium text-gray-900 dark:text-white">{payment.dateGroup}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500 dark:text-white/60">Hora</p>
              <p className="font-medium text-gray-900 dark:text-white">{payment.time}</p>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-dashed border-gray-200 dark:border-white/10" />

          {/* Stage Progress */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-semibold text-gray-900 dark:text-white">
                Estado del pago
              </p>
              <p className="text-sm font-semibold text-[#2F80ED]">
                {paymentStageLabels[payment.stage]}
              </p>
            </div>
            <Progress
              value={progress}
              className="h-2 bg-muted"
              indicatorClassName="bg-accent"
            />
          </div>

          {/* Stage Steps */}
          <div className="space-y-3">
            {paymentStages.map((stage, index) => {
              const isDone = index < currentIndex;
              const isCurrent = index === currentIndex;
              return (
                <div key={stage.key} className="flex items-center gap-3">
                  <div
                    className={`size-6 rounded-full flex items-center justify-center border shrink-0 ${
                      isDone
                        ? "bg-success border-success"
                        : isCurrent
                        ? "bg-accent border-accent"
                        : "bg-muted border-border"
                    }`}
                  >
                    {isDone ? (
                      <Check className="size-3.5 text-success-foreground" />
                    ) : (
                      <span
                        className={`size-1.5 rounded-full ${
                          isCurrent ? "bg-accent-foreground" : "bg-muted-foreground"
                        }`}
                      />
                    )}
                  </div>
                  <span
                    className={`text-sm ${
                      isDone || isCurrent
                        ? "font-semibold text-foreground"
                        : "text-muted-foreground"
                    }`}
                  >
                    {stage.label}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Actions */}
          <div className="pt-2 space-y-3">
            {canDownloadInitial && (
              <Button
                onClick={handleDownloadInitial}
                variant="outline"
                className="w-full h-12 border-2 border-[#2F80ED] text-[#2F80ED] hover:bg-[#2F80ED]/10 font-semibold rounded-xl flex items-center justify-center gap-2"
              >
                <Download className="h-4 w-4" />
                Descargar comprobante inicial
              </Button>
            )}

            <Button
              onClick={onClose}
              className="w-full h-12 bg-[#0A2540] hover:bg-[#0A2540]/90 text-white font-semibold rounded-xl"
            >
              Cerrar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentDetailModal;
