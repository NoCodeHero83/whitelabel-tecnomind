import { Building2, MapPin, ShieldCheck, Laptop } from "lucide-react";

const items = [
  { icon: Building2, label: "Entidad registrada", value: "Tecnomind S.A." },
  { icon: MapPin, label: "Cobertura", value: "Argentina" },
  { icon: ShieldCheck, label: "Compliance", value: "Marco normativo BCRA" },
  { icon: Laptop, label: "Plataforma", value: "100% digital" },
];

const TrustStrip = () => {
  return (
    <section className="relative bg-primary border-t border-white/10 overflow-hidden">
      <div className="absolute -left-24 top-1/2 -translate-y-1/2 w-[360px] h-[360px] rounded-full bg-accent/10 blur-[100px] pointer-events-none" aria-hidden />
      <div className="absolute -right-24 top-1/2 -translate-y-1/2 w-[360px] h-[360px] rounded-full bg-success/10 blur-[100px] pointer-events-none" aria-hidden />

      <div className="relative container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          {items.map(({ icon: Icon, label, value }, i) => (
            <div
              key={label}
              className={`flex items-start gap-4 py-7 md:py-9 px-2 md:px-6 ${
                i > 0 ? "md:border-l border-white/10" : ""
              } ${i % 2 === 1 ? "sm:border-l sm:border-white/10" : ""}`}
            >
              <div className="shrink-0 w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                <Icon className="w-5 h-5 text-accent" strokeWidth={1.7} />
              </div>
              <div>
                <div className="text-[0.65rem] tracking-[0.16em] uppercase font-semibold text-accent">
                  {label}
                </div>
                <div className="mt-1.5 text-sm md:text-base font-medium text-white">{value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;