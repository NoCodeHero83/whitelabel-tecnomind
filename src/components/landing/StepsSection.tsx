import { UserPlus, Wallet, QrCode } from "lucide-react";
import Eyebrow from "./Eyebrow";

const steps = [
  {
    icon: UserPlus,
    title: "Creá tu cuenta",
    description: "Registro 100% online con validación de identidad. Listo en minutos, sin papeles.",
  },
  {
    icon: Wallet,
    title: "Ingresá fondos",
    description: "Cargá saldo por transferencia bancaria, billetera o vía link de pago.",
  },
  {
    icon: QrCode,
    title: "Operá y cobrá",
    description: "Transferí, pagá y cobrá con QR al instante. Todo desde una sola app.",
  },
];

const StepsSection = () => {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32 bg-secondary/60 border-y border-border">
      <div className="absolute bottom-[10%] -right-[10%] w-[420px] h-[420px] rounded-full bg-accent/10 blur-[90px] pointer-events-none" aria-hidden />
      <div className="relative container mx-auto px-4 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
          <Eyebrow>Cómo funciona</Eyebrow>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
            Operativo en tres simples pasos
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            Del registro a tu primera cobranza sin fricciones ni demoras.
          </p>
        </div>

        {/* Steps */}
        <div className="relative grid md:grid-cols-3 gap-8 lg:gap-10">
          {/* Connector line */}
          <div className="hidden md:block absolute top-7 left-[16%] right-[16%] border-t-2 border-dashed border-border" aria-hidden />

          {steps.map(({ icon: Icon, title, description }, i) => (
            <div key={title} className="relative text-center">
              <div className="relative mx-auto w-14 h-14 rounded-2xl bg-primary text-primary-foreground shadow-lg flex items-center justify-center">
                <Icon className="w-6 h-6" strokeWidth={1.7} />
                <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-accent text-accent-foreground text-xs font-bold flex items-center justify-center border-2 border-background">
                  {i + 1}
                </span>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-foreground">{title}</h3>
              <p className="mt-3 max-w-xs mx-auto text-sm text-muted-foreground leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepsSection;