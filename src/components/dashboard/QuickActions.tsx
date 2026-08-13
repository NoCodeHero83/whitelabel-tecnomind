import { Globe, Coins, Receipt } from "lucide-react";
import { useNavigate } from "react-router-dom";
import QuickActionButton from "./QuickActionButton";

const actions = [
  { icon: Globe, label: "Pagos", isPrimary: false, path: "/transfer", desktopOnly: false },
  { icon: Coins, label: "OTC", isPrimary: false, path: "/statistics", desktopOnly: false },
  { icon: Receipt, label: "Historial", isPrimary: false, path: "/movements", desktopOnly: true },
];

const QuickActions = () => {
  const navigate = useNavigate();

  const handleClick = (path: string | null) => {
    if (path) {
      navigate(path);
    }
  };

  return (
    <section className="px-6 py-4">
      <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
        {actions.map((action) => (
          <div 
            key={action.label} 
            className={action.desktopOnly ? "hidden md:block" : ""}
          >
            <QuickActionButton
              icon={action.icon}
              label={action.label}
              isPrimary={action.isPrimary}
              onClick={() => handleClick(action.path)}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default QuickActions;