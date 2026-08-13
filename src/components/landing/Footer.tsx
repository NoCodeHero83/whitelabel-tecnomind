import Logo from "@/components/Logo";
import { Mail, MapPin, Phone, ExternalLink } from "lucide-react";

const Footer = () => {
  const links = {
    util: [
      { label: "Términos y Condiciones", href: "/terms" },
      { label: "Política de Privacidad", href: "/privacy" },
      { label: "Nosotros", href: "/about" },
    ],
    contacto: [
      { label: "contacto@tecnomind.com.ar", href: "mailto:contacto@tecnomind.com.ar" },
      { label: "soporte@tecnomind.com.ar", href: "mailto:soporte@tecnomind.com.ar" },
      { label: "+54 11 5555-0000", href: "tel:+541155550000" },
    ],
  };

  return (
    <footer id="contacto" className="bg-primary text-white border-t border-white/10">
      <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-20 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div className="lg:col-span-1">
          <div className="bg-white inline-flex p-3 rounded-xl">
            <Logo className="[&_span]:text-foreground ml-0" />
          </div>
          <p className="mt-6 text-sm text-white/50 leading-relaxed max-w-[240px]">
            La billetera virtual diseñada para emprendedores argentinos. Seguridad, velocidad y las mejores
            herramientas para tu negocio.
          </p>
          <div className="mt-6 space-y-3">
            <div className="flex items-center gap-3 text-sm text-white/60">
              <MapPin className="w-4 h-4 text-accent" />
              <span>Buenos Aires, Argentina</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-white/60">
              <Mail className="w-4 h-4 text-accent" />
              <span>contacto@tecnomind.com.ar</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-white/60">
              <Phone className="w-4 h-4 text-accent" />
              <span>+54 11 5555-0000</span>
            </div>
          </div>
        </div>

        {/* Enlaces útiles */}
        <div>
          <h4 className="text-xs font-semibold tracking-[0.16em] uppercase text-accent">Enlaces útiles</h4>
          <ul className="mt-5 space-y-3 text-sm">
            {links.util.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="text-white/70 hover:text-white transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h4 className="text-xs font-semibold tracking-[0.16em] uppercase text-accent">Contactanos</h4>
          <ul className="mt-5 space-y-3 text-sm">
            {links.contacto.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="text-white/70 hover:text-white transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="https://www.bcra.gob.ar"
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold tracking-[0.14em] uppercase text-accent hover:text-white transition-colors"
          >
            bcra.gob.ar
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* Ente fiscalizador */}
        <div>
          <h4 className="text-xs font-semibold tracking-[0.16em] uppercase text-accent">Ente fiscalizador</h4>
          <div className="mt-5 border border-white/15 rounded-xl p-4 bg-white/5">
            <div className="text-[0.6rem] tracking-[0.16em] uppercase font-semibold text-accent">BCRA</div>
            <div className="mt-1.5 text-sm text-white/80 leading-relaxed">
              Banco Central de la República Argentina
            </div>
            <a
              href="https://www.usuariosfinancieros.gob.ar"
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-block text-[0.6rem] tracking-[0.14em] uppercase font-semibold text-accent hover:text-white transition-colors"
            >
              usuariosfinancieros.gob.ar →
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 lg:px-8 py-5 flex flex-col md:flex-row gap-3 md:items-center md:justify-between text-[0.7rem] text-white/40">
          <div>© 2024 tecnomind. Todos los derechos reservados.</div>
          <div>PSP Autorizado · Marco normativo BCRA</div>
        </div>
        <div className="border-t border-white/5">
          <div className="container mx-auto px-4 lg:px-8 py-4 text-[0.7rem] text-white/30 leading-relaxed">
            Los fondos depositados no constituyen depósitos en una entidad financiera ni cuentan con la garantía
            de la Ley 24.485.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;