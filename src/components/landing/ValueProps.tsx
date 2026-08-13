import { ShieldCheck, Landmark, Zap } from "lucide-react";
import Eyebrow from "./Eyebrow";

const ValueProps = () => {
  const values = [
    {
      icon: ShieldCheck,
      title: "Tecnología Segura",
      description:
        "Plataforma dinámica, escalable y segura, cumpliendo con todas las normativas vigentes.",
    },
    {
      icon: Landmark,
      title: "Confianza Institucional",
      description:
        "Gestión transparente de fondos bajo el cumplimiento normativo del BCRA y los estándares del mercado.",
    },
    {
      icon: Zap,
      title: "Eficacia Operativa",
      description:
        "Transferencias inmediatas a cualquier CBU/CVU y cobros ágiles, a la velocidad de tu negocio.",
    },
  ];

  return (
    <section id="seguridad" className="relative bg-background border-t border-border">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-32">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
          <div>
            <Eyebrow>Diferenciales</Eyebrow>
            <h2 className="mt-4 font-semibold text-[clamp(2rem,3.5vw,3rem)] leading-[1.1] text-foreground">
              ¿Por qué elegirnos?
            </h2>
          </div>
          <p className="md:max-w-sm text-sm text-muted-foreground leading-relaxed">
            Tres pilares que definen la forma en la que trabajamos y nos diferencian del resto del sector.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {values.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="group transition-all duration-300 hover:-translate-y-0.5 p-8 sm:p-9 bg-card rounded-md border border-border border-t-2 border-t-accent"
            >
              <div className="w-[52px] h-[52px] flex items-center justify-center rounded-full bg-accent/10 border border-accent/20">
                <Icon size={22} strokeWidth={1.5} className="text-accent" />
              </div>
              <h3 className="mt-6 font-semibold text-[1.375rem] text-foreground leading-tight">{title}</h3>
              <div className="h-px bg-accent w-8 my-3" />
              <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProps;
