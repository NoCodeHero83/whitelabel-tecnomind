import { useState } from "react";
import { Coins } from "lucide-react";
import AppLayout from "@/components/layout/AppLayout";
import GlobalHeader from "@/components/layout/GlobalHeader";
import OperationRow from "@/components/operations/OperationRow";
import OtcDetailModal from "@/components/operations/OtcDetailModal";
import EmptyState from "@/components/ui/empty-state";
import { useAuth } from "@/contexts/AuthContext";
import { mockOtcOperations, otcListItems } from "@/data/mockOperations";
import type { OtcOperation } from "@/types";

const OtcTracking = () => {
  const { user } = useAuth();
  const [selectedOperation, setSelectedOperation] = useState<OtcOperation | null>(null);

  const activeCount = mockOtcOperations.filter((o) => o.stage !== "completed").length;

  const handleOpen = (id: string) => {
    const operation = mockOtcOperations.find((o) => o.id === id) || null;
    setSelectedOperation(operation);
  };

  return (
    <AppLayout>
      <GlobalHeader 
        title="Operaciones OTC" 
        showBackButton
        showAvatar
        userName={user?.name || "Usuario"}
      />

      <main className="flex-1 w-full max-w-md mx-auto flex flex-col px-4 pt-4 pb-8">
        {/* Header summary */}
        <div className="mb-4">
          <p className="text-sm text-muted-foreground mb-1">
            Seguimiento de tus compras y ventas de criptomonedas
          </p>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 rounded-full bg-accent/10 pl-2 pr-4 py-1 border border-accent/20">
              <Coins className="size-4 text-accent" />
              <span className="text-accent text-xs font-medium uppercase tracking-wide">
                {activeCount} operac{activeCount === 1 ? "ión" : "iones"} en curso
              </span>
            </div>
          </div>
        </div>

        {/* OTC list */}
        <div className="bg-card rounded-2xl border border-border overflow-hidden px-4">
          {otcListItems.length > 0 ? (
            <div className="flex flex-col">
              {otcListItems.map((operation) => (
                <OperationRow
                  key={operation.id}
                  icon={operation.icon}
                  title={operation.title}
                  subtitle={operation.subtitle}
                  amount={operation.amount}
                  amountTone={operation.amountTone}
                  statusText={operation.statusText}
                  statusTone={operation.statusTone}
                  onClick={() => handleOpen(operation.id)}
                />
              ))}
            </div>
          ) : (
            <EmptyState
              icon={Coins}
              title="Sin operaciones OTC"
              description="Aún no tienes operaciones OTC solicitadas"
              className="py-8"
            />
          )}
        </div>

        <p className="text-muted-foreground text-xs mt-4 text-center leading-relaxed">
          Desde la app podés ver el estado de tus operaciones OTC,
          el monto entregado y la tasa aplicada.
        </p>
      </main>

      <OtcDetailModal
        operation={selectedOperation}
        onClose={() => setSelectedOperation(null)}
      />
    </AppLayout>
  );
};

export default OtcTracking;