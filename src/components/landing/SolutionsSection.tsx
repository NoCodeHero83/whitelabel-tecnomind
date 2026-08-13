import { Wallet, ArrowLeftRight, Smartphone, ShieldCheck, ArrowUpRight } from "lucide-react";
import Eyebrow from "./Eyebrow";

const SolutionsSection = () => {
  const services = [
    {
      icon: Wallet,
      title: "Billetera Virtual",
      description:
        "CVU propio para enviar y recibir dinero desde cualquier cuenta bancaria o billetera virtual del país, con disponibilidad inmediata.",
    },
    {
      icon: ArrowLeftRight,
      title: "Transferencias Inmediatas",
      description:
        "Movimientos a cualquier CBU/CVU al instante, las 24 horas, con confirmación en tiempo real para vos y tu negocio.",
    },
    {
      icon: Smartphone,
      title: "Cobros y QR",
      description:
        "Generá links de pago y Códigos QR para cobrar de forma presencial u online, con conciliación automática de tus ingresos.",
    },
    {
      icon: ShieldCheck,
      title: "Seguridad Bancaria",
      description:
        "Autenticación por PIN, biometría y OTP para proteger cada acceso y cada operación de tu cuenta.",
    },
  ];

  return (
    <section id="servicios" className="relative overflow-hidden py-24 lg:py-32 bg-background">
      <div className="absolute top-[25%] -left-[8%] w-[420px] h-[420px] rounded-full bg-accent/10 blur-[90px] pointer-events-none" aria-hidden />
      <div className="relative container mx-auto px-4 lg:px-8">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 lg:mb-20">
          <div className="max-w-2xl">
            <Eyebrow>Servicios</Eyebrow>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
              Todo lo que tu negocio necesita para mover dinero
            </h2>
          </div>
          <p className="md:max-w-sm text-sm text-muted-foreground leading-relaxed">
            Una única plataforma para cobrar, pagar y operar con la seguridad de una entidad regulada.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {services.map(({ icon: Icon, title, description }, i) => (
            <article
              key={title}
              className="group relative bg-card rounded-2xl border border-border flex flex-col h-full p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent transition-colors duration-300">
                  <Icon className="w-6 h-6 text-accent group-hover:text-accent-foreground transition-colors duration-300" strokeWidth={1.6} />
                </div>
                <span className="text-sm font-bold text-foreground/15 group-hover:text-accent/40 transition-colors">
                  0{i + 1}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-foreground leading-tight">{title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">{description}</p>
              <div className="mt-6 pt-5 border-t border-border/60 flex items-center justify-between">
                <span className="text-xs font-medium text-foreground/60 uppercase tracking-wide">Saber más</span>
                <ArrowUpRight className="w-4 h-4 text-accent transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;