import { Cog, FileCheck2, BarChart3, Landmark, HeartHandshake } from "lucide-react";
import Eyebrow from "./Eyebrow";

const CapabilitiesSection = () => {
  const capabilities = [
    {
      icon: Cog,
      title: "Plataforma Tecnológica",
      description: "Sistema escalable y seguro que cumple con las normas nacionales y el compliance.",
    },
    {
      icon: Landmark,
      title: "Compliance Integral",
      description: "Políticas y procedimientos personalizados garantizando el cumplimiento normativo.",
    },
    {
      icon: FileCheck2,
      title: "Reporting",
      description: "Informes y declaraciones obligatorias ante las autoridades competentes.",
    },
    {
      icon: BarChart3,
      title: "Administración",
      description: "Seguimiento y control de gestión de toda la actividad de tu cuenta.",
    },
    {
      icon: HeartHandshake,
      title: "Atención Personalizada",
      description: "Acompañamiento cercano para el crecimiento y desarrollo de tu negocio.",
    },
  ];

  return (
    <section id="nosotros" className="relative overflow-hidden py-24 lg:py-32 bg-secondary/60 border-y border-border">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
          <Eyebrow>Capacidades</Eyebrow>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
            Contamos con
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            Todo lo que necesitás para operar tu negocio financiero con respaldo institucional y tecnológico.
          </p>
        </div>

        {/* Capabilities grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {capabilities.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="group bg-card rounded-2xl border border-border p-5 sm:p-6 h-full flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated"
            >
              <div className="w-11 h-11 rounded-lg bg-primary/10 border border-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:border-primary transition-colors duration-300">
                <Icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors duration-300" strokeWidth={1.6} />
              </div>
              <h3 className="font-semibold text-[1.05rem] text-foreground leading-tight">{title}</h3>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;