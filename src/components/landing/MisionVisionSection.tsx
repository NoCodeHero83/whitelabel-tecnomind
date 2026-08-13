import { Target, Compass } from "lucide-react";
import Eyebrow from "./Eyebrow";

const MisionVisionSection = () => {
  return (
    <section className="relative overflow-hidden bg-primary text-white">
      <div className="absolute -top-[20%] left-[40%] w-[640px] h-[640px] rounded-full bg-accent/10 blur-[110px] pointer-events-none" aria-hidden />
      <div className="absolute -bottom-[30%] -right-[10%] w-[480px] h-[480px] rounded-full bg-success/10 blur-[110px] pointer-events-none" aria-hidden />

      <div className="relative container mx-auto px-4 lg:px-8 py-24 lg:py-32">
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
          <Eyebrow className="text-accent">Nosotros</Eyebrow>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Nuestra razón de ser
          </h2>
          <p className="mt-5 text-lg text-white/60 leading-relaxed">
            En tecnomind creemos que gestionar tu dinero debe ser tan simple como enviar un mensaje.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Misión */}
          <article className="p-8 lg:p-10 bg-white/5 backdrop-blur border border-white/10 rounded-2xl transition-colors duration-300 hover:border-accent/50">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                <Target className="w-5 h-5 text-accent" strokeWidth={1.6} />
              </div>
              <span className="text-xs font-semibold tracking-[0.16em] uppercase text-accent">01 — Misión</span>
            </div>
            <h3 className="mt-6 text-2xl lg:text-[1.75rem] font-semibold leading-tight">
              Empoderar a comercios y personas.
            </h3>
            <p className="mt-4 text-white/70 leading-relaxed">
              Eliminar las barreras burocráticas del sistema financiero tradicional, empoderando a comercios,
              pymes y personas con herramientas de cobro y pago instantáneas, seguras y accesibles las 24 horas.
            </p>
          </article>

          {/* Visión */}
          <article className="p-8 lg:p-10 bg-white/5 backdrop-blur border border-white/10 rounded-2xl transition-colors duration-300 hover:border-success/50">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-success/20 flex items-center justify-center">
                <Compass className="w-5 h-5 text-success" strokeWidth={1.6} />
              </div>
              <span className="text-xs font-semibold tracking-[0.16em] uppercase text-success">02 — Visión</span>
            </div>
            <h3 className="mt-6 text-2xl lg:text-[1.75rem] font-semibold leading-tight">
              Ser el referente fintech de la región.
            </h3>
            <p className="mt-4 text-white/70 leading-relaxed">
              Convertirnos en la billetera virtual de referencia para los emprendedores argentinos y acompañar
              la evolución de los pagos digitales con soluciones ágiles, simples y transparentes.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default MisionVisionSection;