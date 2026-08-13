import { Cog, FileCheck2, BarChart3, Landmark, HeartHandshake, ArrowUpRight } from "lucide-react";
import Eyebrow from "./Eyebrow";

const capabilities = [
  {
    icon: Cog,
    title: "Plataforma Tecnológica",
    description:
      "Sistema escalable y seguro que cumple con las normas nacionales y el compliance. Procesamos cada operación con trazabilidad completa y disponibilidad continua.",
    wide: true,
  },
  {
    icon: Landmark,
    title: "Compliance Integral",
    description: "Políticas y procedimientos personalizados garantizando el cumplimiento normativo.",
    wide: false,
  },
  {
    icon: FileCheck2,
    title: "Reporting",
    description: "Informes y declaraciones obligatorias ante las autoridades competentes.",
    wide: false,
  },
  {
    icon: BarChart3,
    title: "Administración",
    description: "Seguimiento y control de gestión de toda la actividad de tu cuenta.",
    wide: false,
  },
  {
    icon: HeartHandshake,
    title: "Atención Personalizada",
    description: "Acompañamiento cercano para el crecimiento y desarrollo de tu negocio.",
    wide: false,
  },
];

const CapabilitiesSection = () => {
  return (
    <section id="nosotros" className="relative overflow-hidden py-24 lg:py-32 bg-background border-b border-border">
      <div className="absolute top-[15%] -left-[10%] w-[420px] h-[420px] rounded-full bg-success/10 blur-[90px] pointer-events-none" aria-hidden />
      <div className="relative container mx-auto px-4 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
          <Eyebrow>Capacidades</Eyebrow>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
            Contamos con todo lo que necesitás
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            Operá tu negocio financiero con respaldo institucional y tecnológico de punta a punta.
          </p>
        </div>

        {/* Capabilities grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-5 lg:gap-6">
          {capabilities.map(({ icon: Icon, title, description, wide }) => (
            <article
              key={title}
              className={`group bg-card rounded-2xl border border-border p-6 sm:p-7 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated ${
                wide ? "sm:col-span-2 lg:col-span-2 justify-between" : "lg:col-span-1 justify-start"
              } ${wide ? "bg-gradient-to-br from-card to-secondary/70 border-t-2 border-t-accent" : ""}`}
            >
              <div className="flex items-center justify-between">
                <div
                  className={`flex items-center justify-center rounded-lg bg-primary/10 border border-primary/10 group-hover:bg-primary transition-colors duration-300 ${
                    wide ? "w-14 h-14" : "w-11 h-11"
                  }`}
                >
                  <Icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors duration-300" strokeWidth={1.6} />
                </div>
                {wide && (
                  <ArrowUpRight className="w-5 h-5 text-accent/60 group-hover:text-accent transition-colors" />
                )}
              </div>
              <h3 className={`font-semibold text-foreground leading-tight mt-6 ${wide ? "text-2xl" : "text-[1.05rem]"}`}>
                {title}
              </h3>
              <p className={`mt-3 text-muted-foreground leading-relaxed ${wide ? "text-sm max-w-md" : "text-xs"}`}>
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;