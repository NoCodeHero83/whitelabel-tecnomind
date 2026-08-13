import { Fingerprint } from "lucide-react";
import AppLayout from "@/components/layout/AppLayout";
import GlobalHeader from "@/components/layout/GlobalHeader";
import BalanceCard from "@/components/dashboard/BalanceCard";
import QuickActions from "@/components/dashboard/QuickActions";
import TransactionsList from "@/components/dashboard/TransactionsList";
import { useAuth } from "@/contexts/AuthContext";
import { getOperationSummary } from "@/data/mockOperations";

const Dashboard = () => {
  const { user } = useAuth();
  const firstName = user?.name.split(" ")[0] || "Usuario";
  const summary = getOperationSummary();

  return (
    <AppLayout>
      <GlobalHeader 
        showLogo 
        showAvatar 
        userName={user?.name || "Usuario"}
      />

      {/* Greeting Section (responsive) */}
      <div className="px-6 pt-4">
        <h1 className="text-2xl font-bold text-foreground">Hola, {firstName}</h1>
        <div className="flex items-center gap-2 mt-2">
          <div className="flex items-center gap-2 rounded-full bg-accent/10 pl-2 pr-4 py-1 border border-accent/20">
            <Fingerprint className="size-4 text-accent" />
            <span className="text-accent text-xs font-medium uppercase tracking-wide">
              Acceso Protegido
            </span>
          </div>
        </div>
      </div>

      {/* Summary Card */}
      <section className="px-6 py-4">
        <BalanceCard
          label="En operaciones activas"
          value={summary.activeTotalFormatted}
        />
      </section>

      {/* Quick Actions */}
      <QuickActions />

      {/* Operations List */}
      <TransactionsList />
    </AppLayout>
  );
};

export default Dashboard;