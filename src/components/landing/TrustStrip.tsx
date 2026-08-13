const items: [string, string][] = [
  ["Entidad registrada", "Tecnomind S.A."],
  ["Cobertura", "Argentina"],
  ["Compliance", "Marco normativo BCRA"],
  ["Plataforma", "100% digital"],
];

const TrustStrip = () => {
  return (
    <section className="bg-primary border-t border-white/10 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {items.map(([label, value], i) => (
            <div key={label} className={`py-4 md:py-7 px-2 md:px-6 ${i > 0 ? "border-l border-white/10" : ""}`}>
              <div className="font-sans text-[0.6rem] tracking-[0.14em] uppercase font-semibold text-accent">{label}</div>
              <div className="mt-1.5 font-sans text-[clamp(0.8rem,2.5vw,0.95rem)] font-medium text-white">{value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;
