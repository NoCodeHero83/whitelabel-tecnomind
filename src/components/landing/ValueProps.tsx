import { ShieldCheck, Landmark, Zap } from "lucide-react";
import Eyebrow from "./Eyebrow";

const ValueProps = () => {
  const values = [
    {
      icon: ShieldCheck,
      title: "Tecnología Segura",
      description:
        "Autenticación por biometría, PIN y OTP, con cifrado de grado bancario para proteger cada acceso y cada operación de tu cuenta.",
    },
    {
      icon: Landmark,
      title: "Confianza Institucional",
      description:
        "Gestión transparente de fondos bajo el cumplimiento normativo del BCRA y los más altos estándares del mercado.",
    },
    {
      icon: Zap,
      title: "Eficacia Operativa",
      description:
        "Transferencias inmediatas a cualquier CBU/CVU y cobros ágiles. Tu dinero se mueve tan rápido como tu negocio lo necesita.",
    },
  ];

  return (
    <section id="seguridad" className="relative overflow-hidden py-24 lg:py-32 bg-background">
      <div className="absolute top-[15%] -right-[8%] w-[420px] h-[420px] rounded-full bg-success/10 blur-[90px] pointer-events-none" aria-hidden />
      <div className="relative container mx-auto px-4 lg:px-8">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 lg:mb-16">
          <div>
            <Eyebrow>Diferenciales</Eyebrow>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
              ¿Por qué elegirnos?
            </h2>
          </div>
          <p className="md:max-w-sm text-sm text-muted-foreground leading-relaxed">
            Tres pilares que definen la forma en la que trabajamos y nos diferencian del resto del sector.
          </p>
        </div>

        {/* Values grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {values.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="group relative bg-card rounded-2xl border border-border border-t-2 border-t-primary p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated"
            >
              <div className="w-[52px] h-[52px] rounded-full bg-primary/10 border border-primary/15 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                <Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" strokeWidth={1.6} />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-foreground leading-tight">{title}</h3>
              <div className="h-px bg-accent w-8 my-4" />
              <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProps;