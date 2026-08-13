import { Wallet, ArrowLeftRight, Smartphone, ShieldCheck } from "lucide-react";
import Eyebrow from "./Eyebrow";

const SolutionsSection = () => {
  const services = [
    {
      icon: Wallet,
      title: "Billetera Virtual",
      description:
        "CVU para enviar y recibir dinero de cuentas bancarias y billeteras virtuales, de forma ágil y segura.",
    },
    {
      icon: ArrowLeftRight,
      title: "Transferencias Inmediatas",
      description:
        "Movimientos a cualquier CBU/CVU al instante, con confirmación en tiempo real, las 24 horas.",
    },
    {
      icon: Smartphone,
      title: "Cobros y QR",
      description:
        "Links de pago y códigos QR para cobrar presencial u online, con conciliación automática.",
    },
    {
      icon: ShieldCheck,
      title: "Seguridad Bancaria",
      description:
        "Autenticación por PIN, biometría y OTP para proteger cada acceso y cada operación.",
    },
  ];

  return (
    <section id="servicios" className="relative overflow-hidden bg-gradient-to-b from-secondary/40 to-background border-t border-border">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-32">
        <Eyebrow>Servicios</Eyebrow>
        <h2 className="mt-4 font-semibold text-[clamp(2rem,3.5vw,3rem)] leading-[1.1] text-foreground">
          Nuestros servicios
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-12 md:mt-16">
          {services.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="group transition-all duration-300 hover:-translate-y-0.5 bg-card rounded-md border border-border shadow-sm flex flex-col h-full p-5 sm:p-7"
            >
              <div className="h-px bg-accent w-8 mb-6" />
              <Icon size={22} strokeWidth={1.4} className="text-foreground" />
              <h3 className="mt-4 font-semibold text-[1.375rem] leading-tight text-foreground">{title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
