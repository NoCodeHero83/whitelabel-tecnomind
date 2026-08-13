import { ArrowRight, CheckCircle2, TrendingUp, ArrowLeftRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen overflow-hidden bg-primary">
      {/* Base gradient */}
      <div className="absolute inset-0 gradient-hero" aria-hidden />

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.04]" aria-hidden>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "36px 36px",
          }}
        />
      </div>

      {/* Glow orbs */}
      <div className="absolute -top-24 right-[8%] w-[520px] h-[520px] rounded-full bg-accent/20 blur-[110px]" aria-hidden />
      <div className="absolute -bottom-32 -left-24 w-[480px] h-[480px] rounded-full bg-success/15 blur-[110px]" aria-hidden />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(10,37,64,0.1),rgba(10,37,64,0.65))] pointer-events-none" aria-hidden />

      <div className="container relative z-10 mx-auto px-4 lg:px-8 pt-36 lg:pt-44 pb-24 lg:pb-32">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Copy */}
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
              <span className="text-xs font-semibold tracking-[0.14em] uppercase text-white/85">
                Tecnomind · Plataforma financiera digital
              </span>
            </div>

            <h1 className="mt-7 text-4xl md:text-5xl xl:text-6xl font-bold text-white tracking-tight leading-[1.08]">
              La infraestructura financiera que tu negocio merece.
            </h1>

            <p className="mt-6 max-w-xl text-lg md:text-xl text-white/70 leading-relaxed">
              Gestioná cobros, pagos y transferencias con la mayor velocidad del mercado.
              Una plataforma robusta y segura, diseñada para la agilidad de los emprendedores argentinos.
            </p>

            {/* CTAs */}
            <div className="mt-9 flex flex-col sm:flex-row gap-4">
              <Button
                variant="hero"
                size="xl"
                className="group shadow-accent/40"
                onClick={() => navigate("/register")}
              >
                Comenzar ahora
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <a
                href="#servicios"
                className="inline-flex h-14 items-center justify-center px-8 rounded-xl text-base font-semibold text-white border border-white/30 hover:bg-white/10 transition-colors"
              >
                Conocé más
              </a>
            </div>

            {/* Trust bullets */}
            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3">
              {["Acceso 24/7", "Cumplimiento BCRA", "Seguridad de grado bancario"].map((t) => (
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
              {/* Browser chrome */}
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

              {/* Dashboard content */}
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

                {/* Balance card */}
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

                {/* Stats */}
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

            {/* Floating chips */}
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

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 z-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            className="fill-background"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;