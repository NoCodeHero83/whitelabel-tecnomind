import { Wallet, ArrowLeftRight, Smartphone, ShieldCheck } from "lucide-react";
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
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
          <Eyebrow>Servicios</Eyebrow>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
            Nuestros servicios
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            Una única plataforma con todo lo que tu negocio necesita para cobrar, pagar y mover dinero con seguridad.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {services.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="group relative bg-card rounded-2xl border border-border border-t-2 border-t-accent flex flex-col h-full p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Icon className="w-6 h-6 text-accent" strokeWidth={1.6} />
              </div>
              <h3 className="text-xl font-semibold text-foreground leading-tight">{title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;