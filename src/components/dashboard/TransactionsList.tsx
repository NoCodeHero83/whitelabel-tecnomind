import { useNavigate } from "react-router-dom";
import { Receipt } from "lucide-react";
import OperationRow from "@/components/operations/OperationRow";
import { historyOperations } from "@/data/mockOperations";
import EmptyState from "@/components/ui/empty-state";

const recentOperations = historyOperations.slice(0, 4);

const TransactionsList = () => {
  const navigate = useNavigate();

  return (
    <section className="px-6 py-2 mt-2 flex-1">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-foreground">Últimas Operaciones</h3>
        <button 
          onClick={() => navigate("/movements")}
          className="text-accent text-sm font-medium hover:underline"
        >
          Ver todo
        </button>
      </div>
      {recentOperations.length > 0 ? (
        <div className="flex flex-col gap-1">
          {recentOperations.map((operation) => (
            <OperationRow
              key={operation.id}
              icon={operation.icon}
              title={operation.title}
              subtitle={operation.subtitle}
              amount={operation.amount}
              amountTone={operation.amountTone}
              statusText={operation.statusText}
              statusTone={operation.statusTone}
              onClick={() => navigate("/movements")}
            />
          ))}
        </div>
      ) : (
        <EmptyState
          icon={Receipt}
          title="Sin operaciones"
          description="Aún no tienes operaciones registradas"
          className="py-8"
        />
      )}
    </section>
  );
};

export default TransactionsList;