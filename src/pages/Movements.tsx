import { useState, useMemo, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { DateRange } from "react-day-picker";
import { isWithinInterval } from "date-fns";
import { Eye, EyeOff, Receipt } from "lucide-react";
import AppLayout from "@/components/layout/AppLayout";
import GlobalHeader from "@/components/layout/GlobalHeader";
import SearchBar from "@/components/movements/SearchBar";
import FilterChips, { FilterType } from "@/components/movements/FilterChips";
import OperationRow from "@/components/operations/OperationRow";
import PaymentDetailModal from "@/components/operations/PaymentDetailModal";
import OtcDetailModal from "@/components/operations/OtcDetailModal";
import EmptyState from "@/components/ui/empty-state";
import { useAuth } from "@/contexts/AuthContext";
import {
  historyOperations,
  historyDateOrder,
  mockPayments,
  mockOtcOperations,
  getOperationSummary,
} from "@/data/mockOperations";
import type { OperationListItem } from "@/types";

// Helper to parse dateGroup to actual Date for filtering
const parseDateGroup = (dateGroup: string): Date => {
  const currentYear = new Date().getFullYear();
  if (dateGroup.includes("Hoy")) {
    return new Date(currentYear, 9, 24);
  } else if (dateGroup.includes("Ayer")) {
    return new Date(currentYear, 9, 23);
  } else {
    const parts = dateGroup.split(" ");
    const day = parseInt(parts[0]);
    return new Date(currentYear, 9, day);
  }
};

const Movements = () => {
  const location = useLocation();
  const { user } = useAuth();
  const [showBalance, setShowBalance] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<FilterType>("todos");
  const [dateRange, setDateRange] = useState<DateRange | undefined>(undefined);
  const [selectedPaymentId, setSelectedPaymentId] = useState<string | null>(null);
  const [selectedOtcId, setSelectedOtcId] = useState<string | null>(null);

  const summary = getOperationSummary();

  // Clear filters when leaving the page
  useEffect(() => {
    return () => {
      setDateRange(undefined);
      setActiveFilter("todos");
    };
  }, [location.pathname]);

  const filteredOperations = useMemo(() => {
    let filtered = historyOperations;

    // Filter by kind
    if (activeFilter === "pagos") {
      filtered = filtered.filter((t) => t.kind === "payment");
    } else if (activeFilter === "otc") {
      filtered = filtered.filter((t) => t.kind === "otc");
    }

    // Filter by date range
    if (activeFilter === "fechas" && dateRange?.from) {
      filtered = filtered.filter((t) => {
        const operationDate = parseDateGroup(t.dateGroup);
        if (dateRange.to) {
          return isWithinInterval(operationDate, {
            start: dateRange.from!,
            end: dateRange.to,
          });
        }
        return operationDate.toDateString() === dateRange.from!.toDateString();
      });
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (t) =>
          t.title.toLowerCase().includes(query) ||
          t.reference.toLowerCase().includes(query) ||
          t.statusText.toLowerCase().includes(query) ||
          t.subtitle.toLowerCase().includes(query) ||
          t.amount.toLowerCase().includes(query) ||
          t.dateGroup.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [activeFilter, searchQuery, dateRange]);

  const groupedOperations = useMemo(() => {
    const groups: Record<string, OperationListItem[]> = {};
    filteredOperations.forEach((t) => {
      if (!groups[t.dateGroup]) {
        groups[t.dateGroup] = [];
      }
      groups[t.dateGroup].push(t);
    });
    return groups;
  }, [filteredOperations]);

  const handleOperationClick = (operation: OperationListItem) => {
    if (operation.kind === "payment") {
      setSelectedPaymentId(operation.id);
    } else {
      setSelectedOtcId(operation.id);
    }
  };

  const selectedPayment = useMemo(
    () => mockPayments.find((p) => p.id === selectedPaymentId) || null,
    [selectedPaymentId]
  );

  const selectedOtc = useMemo(
    () => mockOtcOperations.find((o) => o.id === selectedOtcId) || null,
    [selectedOtcId]
  );

  return (
    <AppLayout>
      <GlobalHeader 
        title="Historial" 
        showBackButton
        showAvatar
        userName={user?.name || "Usuario"}
      />

      {/* Summary display */}
      <div className="px-4 py-4 border-b border-border bg-card/50">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground mb-1">Operaciones activas</p>
            <p className="text-2xl font-bold text-foreground">
              {showBalance ? summary.activeCount : "••••••"}
            </p>
          </div>
          <button 
            onClick={() => setShowBalance(!showBalance)}
            className="p-2 rounded-full hover:bg-muted transition-colors"
          >
            {showBalance ? (
              <EyeOff className="size-5 text-muted-foreground" />
            ) : (
              <Eye className="size-5 text-muted-foreground" />
            )}
          </button>
        </div>
      </div>

      {/* Sticky search and filters */}
      <div className="sticky top-[60px] z-20 bg-background/95 backdrop-blur-md pb-2 border-b border-border">
        <SearchBar value={searchQuery} onChange={setSearchQuery} />
        <FilterChips
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
          dateRange={dateRange}
          onDateRangeChange={setDateRange}
        />
      </div>

      {/* Operations list */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden px-4 pt-2 bg-background">
        {historyDateOrder.map((dateGroup) => {
          const operations = groupedOperations[dateGroup];
          if (!operations || operations.length === 0) return null;
          return (
            <div key={dateGroup} className="mb-6">
              <div className="sticky top-0 z-10 py-2 mb-1 bg-background/90 backdrop-blur-sm w-full">
                <h3 className="text-muted-foreground text-xs font-bold uppercase tracking-wider">
                  {dateGroup}
                </h3>
              </div>
              <div className="flex flex-col">
                {operations.map((operation) => (
                  <OperationRow
                    key={operation.id}
                    icon={operation.icon}
                    title={operation.title}
                    subtitle={operation.subtitle}
                    amount={operation.amount}
                    amountTone={operation.amountTone}
                    statusText={operation.statusText}
                    statusTone={operation.statusTone}
                    onClick={() => handleOperationClick(operation)}
                  />
                ))}
              </div>
            </div>
          );
        })}

        {filteredOperations.length === 0 && (
          <EmptyState
            icon={Receipt}
            title="Sin operaciones"
            description={
              searchQuery || activeFilter !== "todos"
                ? "No encontramos resultados con esos filtros"
                : "Aún no tienes operaciones registradas"
            }
          />
        )}
      </div>

      {/* Detail modals */}
      <PaymentDetailModal
        payment={selectedPayment}
        onClose={() => setSelectedPaymentId(null)}
      />
      <OtcDetailModal
        operation={selectedOtc}
        onClose={() => setSelectedOtcId(null)}
      />
    </AppLayout>
  );
};

export default Movements;