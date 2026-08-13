import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface NavbarProps {
  /** "overlay" = transparente sobre un hero oscuro (landing). "solid" = fondo fijo. */
  variant?: "solid" | "overlay";
}

const Navbar = ({ variant = "solid" }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const overlay = variant === "overlay";
  const solid = !overlay || scrolled || isOpen;

  const navLinks = [
    { label: "Servicios", href: "#servicios" },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Contacto", href: "#contacto" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        solid
          ? "bg-background/85 backdrop-blur-xl border-b border-border/60 shadow-sm"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Logo className={cn("ml-0", overlay && !solid && "[&_span]:text-white")} />

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-9">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors duration-200",
                  solid
                    ? "text-muted-foreground hover:text-foreground"
                    : "text-white/75 hover:text-white"
                )}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              className={cn(
                "text-base",
                solid
                  ? "text-muted-foreground hover:text-foreground"
                  : "text-white hover:bg-white/10 hover:text-white"
              )}
              onClick={() => navigate("/login")}
            >
              Ingresar
            </Button>
            <Button variant="accent" size="sm" className="h-10 px-5" onClick={() => navigate("/register")}>
              Abrí tu cuenta
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen((v) => !v)}
            aria-label="Abrir menú"
          >
            {isOpen ? (
              <X size={24} className={solid ? "text-foreground" : "text-white"} />
            ) : (
              <Menu size={24} className={solid ? "text-foreground" : "text-white"} />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden pb-4 pt-2 border-t border-border/60 animate-fade-in">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-2 py-3 text-base font-medium text-foreground hover:text-accent transition-colors rounded-lg"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col gap-3 mt-3">
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => {
                    setIsOpen(false);
                    navigate("/login");
                  }}
                >
                  Ingresar
                </Button>
                <Button
                  variant="accent"
                  size="lg"
                  onClick={() => {
                    setIsOpen(false);
                    navigate("/register");
                  }}
                >
                  Abrí tu cuenta
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;