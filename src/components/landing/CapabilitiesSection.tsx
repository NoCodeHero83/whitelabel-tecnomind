import { Cog, ShieldCheck, FileCheck2, BarChart3, HeartHandshake } from "lucide-react";
import Eyebrow from "./Eyebrow";

const CapabilitiesSection = () => {
  const capabilities = [
    {
      icon: Cog,
      title: "Plataforma Tecnológica",
      description: "Sistema escalable y seguro que garantiza el cumplimiento de normas nacionales y compliance.",
    },
    {
      icon: ShieldCheck,
      title: "Compliance Integral",
      description: "Políticas y procedimientos personalizados garantizando el cumplimiento normativo.",
    },
    {
      icon: FileCheck2,
      title: "Reporting",
      description: "Informes y declaraciones obligatorias ante autoridades competentes.",
    },
    {
      icon: BarChart3,
      title: "Administración",
      description: "Seguimiento y control de gestión de toda la actividad.",
    },
    {
      icon: HeartHandshake,
      title: "Atención Personalizada",
      description: "Acompañamiento estratégico para el crecimiento de tu negocio.",
    },
  ];

  return (
    <section id="nosotros" className="relative overflow-hidden bg-gradient-to-b from-background to-secondary/40 border-t border-border">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-32">
        <Eyebrow>Capacidades</Eyebrow>
        <h2 className="mt-4 font-semibold text-[clamp(2rem,3.5vw,3rem)] leading-[1.1] text-foreground">
          Contamos con
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-6 mt-12 md:mt-16">
          {capabilities.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="h-full flex flex-col p-4 sm:p-5 bg-card rounded-md border border-border shadow-sm transition-all duration-300 hover:-translate-y-0.5"
            >
              <div className="w-[42px] h-[42px] flex items-center justify-center border border-accent/20 rounded-sm bg-accent/10">
                <Icon size={18} strokeWidth={1.5} className="text-foreground" />
              </div>
              <h3 className="mt-4 font-semibold text-base text-foreground leading-tight">{title}</h3>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;
