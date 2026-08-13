const items: [string, string][] = [
  ["Entidad registrada", "Tecnomind S.A."],
  ["Cobertura", "Argentina"],
  ["Compliance", "Marco normativo BCRA"],
  ["Plataforma", "100% digital"],
];

const TrustStrip = () => {
  return (
    <section className="bg-primary border-t border-white/10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {items.map(([label, value], i) => (
            <div
              key={label}
              className={`py-6 md:py-8 px-2 md:px-6 ${i > 0 ? "md:border-l border-white/10" : ""}`}
            >
              <div className="text-[0.65rem] tracking-[0.16em] uppercase font-semibold text-accent">
                {label}
              </div>
              <div className="mt-1.5 text-sm md:text-base font-medium text-white">{value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;