import { Target, Compass } from "lucide-react";
import Eyebrow from "./Eyebrow";
import fondoHero from "@/assets/tecnomind-fondo.jpg";

const MisionVisionSection = () => {
  return (
    <section className="relative overflow-hidden bg-primary text-white">
      <img
        src={fondoHero}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover object-center opacity-40"
        loading="lazy"
        decoding="async"
      />
      <div className="absolute inset-0 bg-primary/80 pointer-events-none" aria-hidden />
      <div className="absolute -top-[10%] left-[40%] w-[600px] h-[600px] rounded-full bg-accent/10 blur-[60px] pointer-events-none" aria-hidden />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-8">
          <article className="p-8 sm:p-10 bg-white/5 backdrop-blur border border-white/10 rounded-md">
            <div className="flex items-center gap-3">
              <Target size={22} strokeWidth={1.4} className="text-accent" />
              <span className="font-sans text-[0.65rem] tracking-[0.14em] uppercase font-semibold text-accent">01 — Misión</span>
            </div>
            <h3 className="mt-5 font-semibold text-[clamp(1.75rem,2.4vw,2.15rem)] leading-tight">
              Facilitar la gestión digital de cobros y pagos.
            </h3>
            <p className="mt-6 text-white/70 text-base leading-relaxed">
              Proporcionar soluciones financieras seguras, transparentes y simples que faciliten la
              gestión de cobros y pagos para todos nuestros usuarios en un entorno digital en constante evolución.
            </p>
          </article>
          <article className="p-8 sm:p-10 bg-primary/60 border border-accent/30 rounded-md">
            <div className="flex items-center gap-3">
              <Compass size={22} strokeWidth={1.4} className="text-accent" />
              <span className="font-sans text-[0.65rem] tracking-[0.14em] uppercase font-semibold text-accent">02 — Visión</span>
            </div>
            <h3 className="mt-5 font-semibold text-[clamp(1.75rem,2.4vw,2.15rem)] leading-tight">
              Ser un referente Fintech en la región.
            </h3>
            <p className="mt-6 text-white/70 text-base leading-relaxed">
              Posicionarnos como un referente en el sector Fintech, acompañando la evolución de
              cobros y pagos digitales con soluciones ágiles, simples y transparentes.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default MisionVisionSection;
