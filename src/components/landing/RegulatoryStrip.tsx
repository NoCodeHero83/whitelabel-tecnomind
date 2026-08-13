const RegulatoryStrip = () => {
  return (
    <section className="bg-primary border-t border-white/10 text-white">
      <div className="container mx-auto px-4 lg:px-8 py-8 md:py-10 flex flex-col md:flex-row gap-6 md:items-center md:justify-between">
        <div className="flex items-center gap-5">
          <div className="border border-accent px-3 py-1.5 text-[0.7rem] tracking-[0.14em] uppercase font-semibold text-accent">
            BCRA
          </div>
          <div>
            <div className="text-[0.65rem] tracking-[0.16em] uppercase font-semibold text-accent">
              Usuarios financieros
            </div>
            <div className="mt-1 text-sm text-white/80">
              Banco Central de la República Argentina — protección al usuario financiero.
            </div>
          </div>
        </div>
        <a
          href="https://www.usuariosfinancieros.gob.ar"
          target="_blank"
          rel="noreferrer"
          className="text-sm font-semibold text-white border-b border-accent pb-0.5 hover:text-accent transition-colors w-fit"
        >
          usuariosfinancieros.gob.ar →
        </a>
      </div>
    </section>
  );
};

export default RegulatoryStrip;