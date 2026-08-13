import { useState } from "react";
import { Globe } from "lucide-react";
import AppLayout from "@/components/layout/AppLayout";
import GlobalHeader from "@/components/layout/GlobalHeader";
import OperationRow from "@/components/operations/OperationRow";
import PaymentDetailModal from "@/components/operations/PaymentDetailModal";
import EmptyState from "@/components/ui/empty-state";
import { useAuth } from "@/contexts/AuthContext";
import { mockPayments, paymentListItems } from "@/data/mockOperations";
import type { InternationalPayment } from "@/types";

const PaymentsTracking = () => {
  const { user } = useAuth();
  const [selectedPayment, setSelectedPayment] = useState<InternationalPayment | null>(null);

  const activeCount = mockPayments.filter((p) => p.stage !== "finalized").length;

  const handleOpen = (id: string) => {
    const payment = mockPayments.find((p) => p.id === id) || null;
    setSelectedPayment(payment);
  };

  return (
    <AppLayout>
      <GlobalHeader 
        title="Pagos Internacionales" 
        showBackButton
        showAvatar
        userName={user?.name || "Usuario"}
      />

      <main className="flex-1 w-full max-w-md mx-auto flex flex-col px-4 pt-4 pb-8">
        {/* Header summary */}
        <div className="mb-4">
          <p className="text-sm text-muted-foreground mb-1">
            Consultá en qué etapa está cada pago que solicitaste
          </p>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 rounded-full bg-accent/10 pl-2 pr-4 py-1 border border-accent/20">
              <Globe className="size-4 text-accent" />
              <span className="text-accent text-xs font-medium uppercase tracking-wide">
                {activeCount} pago{activeCount === 1 ? "" : "s"} en curso
              </span>
            </div>
          </div>
        </div>

        {/* Payment list */}
        <div className="bg-card rounded-2xl border border-border overflow-hidden px-4">
          {paymentListItems.length > 0 ? (
            <div className="flex flex-col">
              {paymentListItems.map((payment) => (
                <OperationRow
                  key={payment.id}
                  icon={payment.icon}
                  title={payment.title}
                  subtitle={payment.subtitle}
                  amount={payment.amount}
                  amountTone={payment.amountTone}
                  statusText={payment.statusText}
                  statusTone={payment.statusTone}
                  onClick={() => handleOpen(payment.id)}
                />
              ))}
            </div>
          ) : (
            <EmptyState
              icon={Globe}
              title="Sin pagos"
              description="Aún no tienes pagos internacionales solicitados"
              className="py-8"
            />
          )}
        </div>

        <p className="text-muted-foreground text-xs mt-4 text-center leading-relaxed">
          Desde la app podés seguir el estado de tus pagos y
          descargar los comprobantes disponibles.
        </p>
      </main>

      <PaymentDetailModal
        payment={selectedPayment}
        onClose={() => setSelectedPayment(null)}
      />
    </AppLayout>
  );
};

export default PaymentsTracking;