import { ArrowRight, TrendingUp, ArrowLeftRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import fondoHero from "@/assets/tecnomind-fondo.jpg";
import Eyebrow from "./Eyebrow";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative isolation overflow-hidden bg-primary">
      {/* Fondo tecnomind */}
      <img
        src={fondoHero}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover object-center"
        loading="eager"
        fetchPriority="high"
        decoding="async"
      />
      {/* Tinte de marca + vignette para dejar ver la imagen y mantener contraste */}
      <div className="absolute inset-0 bg-primary/55 pointer-events-none" aria-hidden />
      <div
        className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(10,37,64,0.25),rgba(10,37,64,0.55))] pointer-events-none"
        aria-hidden
      />
      <div className="absolute -top-[15%] right-[5%] w-[500px] h-[500px] rounded-full bg-accent/15 blur-[60px] pointer-events-none" aria-hidden />
      <div className="absolute -bottom-[10%] -left-[5%] w-[400px] h-[400px] rounded-full bg-success/10 blur-[60px] pointer-events-none" aria-hidden />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 flex flex-col justify-center min-h-[82vh] md:min-h-[90vh] pt-28 md:pt-40 pb-16 sm:pb-20 lg:pb-24">
        <div className="grid lg:grid-cols-2 lg:gap-14 items-center">
          {/* Copy */}
          <div className="animate-fade-up">
            <Eyebrow tone="light">tecnomind — Plataforma financiera digital</Eyebrow>
            <h1 className="mt-6 text-[clamp(2rem,4vw,3.5rem)] font-bold leading-[1.05] text-white max-w-[24ch]">
              Soluciones financieras para tu negocio
            </h1>
            <p className="mt-6 max-w-lg text-base md:text-lg text-white/70 leading-relaxed">
              Integramos cobros, pagos y transferencias en una sola plataforma segura, regulada y 100% digital.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                variant="hero"
                size="xl"
                className="group shadow-accent/40"
                onClick={() => navigate("/register")}
              >
                Abrí tu cuenta
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <a
                href="#servicios"
                className="inline-flex h-12 items-center px-7 rounded-sm text-sm font-medium text-white border border-white/40 hover:bg-white/10 transition-colors"
              >
                Conocé más
              </a>
            </div>
            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-2">
              {["Acceso 24/7", "Cumplimiento BCRA", "Seguridad bancaria"].map((t) => (
                <span key={t} className="inline-flex items-center gap-2 text-sm text-white/60">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Dashboard mockup */}
          <div className="relative hidden lg:block animate-fade-up" style={{ animationDelay: "0.15s" }}>
            <div className="absolute inset-0 bg-accent/20 blur-3xl rounded-3xl" aria-hidden />
            <div className="relative bg-white/10 backdrop-blur-xl border border-white/15 rounded-2xl p-5 shadow-2xl">
              <div className="flex items-center gap-3 mb-5">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-destructive/70" />
                  <div className="w-3 h-3 rounded-full bg-amber-400/70" />
                  <div className="w-3 h-3 rounded-full bg-success/70" />
                </div>
                <div className="flex-1 h-6 rounded-md bg-white/10 flex items-center px-3">
                  <span className="text-xs text-white/50">app.tecnomind.com.ar</span>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 space-y-6 text-foreground">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Buenos días,</p>
                    <p className="text-xl font-semibold">Hola, Santiago</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center">
                    <span className="text-accent font-semibold">S</span>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-primary to-primary/80 rounded-xl p-5 text-white">
                  <p className="text-sm opacity-80 mb-1">Saldo disponible</p>
                  <p className="text-3xl font-bold">$ 1.250.400,00</p>
                  <div className="flex items-center gap-2 mt-3">
                    <span className="inline-flex items-center gap-1 text-xs px-2 py-1 bg-success/20 text-success rounded-full">
                      <TrendingUp className="w-3 h-3" />
                      +12.5% este mes
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: "Ingresos", value: "$ 890k" },
                    { label: "Cobros", value: "148" },
                    { label: "Movimientos", value: "2.1k" },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-secondary rounded-lg p-3 text-center">
                      <p className="text-base font-semibold">{stat.value}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute -top-6 -right-4 bg-white rounded-xl shadow-elevated px-4 py-3 flex items-center gap-3 animate-float">
              <div className="w-9 h-9 rounded-full bg-success/15 flex items-center justify-center">
                <ArrowLeftRight className="w-4 h-4 text-success" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Transferencia enviada</p>
                <p className="text-sm font-semibold">$ 45.000,00</p>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-4 bg-white rounded-xl shadow-elevated px-4 py-3 flex items-center gap-3 animate-float" style={{ animationDelay: "1.5s" }}>
              <div className="w-9 h-9 rounded-full bg-accent/15 flex items-center justify-center">
                <CheckCircle2 className="w-4 h-4 text-accent" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Cobro recibido</p>
                <p className="text-sm font-semibold">Pago QR confirmado</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
