const stats = [
  {
    value: "1,200",
    unit: "万円+",
    label: "累計利益額",
  },
  {
    value: "50",
    unit: "社+",
    label: "導入企業数",
  },
  {
    value: "15",
    unit: "万円",
    label: "平均月間利益",
  },
  {
    value: "98",
    unit: "%",
    label: "顧客満足度",
  },
];

export default function Stats() {
  return (
    <section className="py-16 bg-[#0f0f23]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex items-baseline justify-center gap-1 mb-2">
                <span className="font-number text-4xl md:text-5xl font-bold text-[#D4AF37]">
                  {stat.value}
                </span>
                <span className="text-[#D4AF37] text-lg md:text-xl">
                  {stat.unit}
                </span>
              </div>
              <p className="text-white/70 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
