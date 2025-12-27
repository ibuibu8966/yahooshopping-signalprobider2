const stats = [
  {
    value: "4,500",
    unit: "万円+",
    label: "累計仕入れ高",
  },
  {
    value: "140",
    unit: "万円+",
    label: "累計利益額",
  },
  {
    value: "3.5",
    unit: "%",
    label: "平均利益率",
  },
  {
    value: "98",
    unit: "%",
    label: "顧客満足度",
  },
];

export default function Stats() {
  return (
    <section className="py-20 md:py-24 bg-[#FDFBF7] relative overflow-hidden">
      {/* 装飾 */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#C9A84C]/20 to-transparent" />

      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex items-baseline justify-center gap-1 mb-3">
                <span className="font-number text-4xl md:text-6xl font-bold gradient-gold-text tracking-tight">
                  {stat.value}
                </span>
                <span className="text-[#C9A84C] text-lg md:text-xl font-bold">
                  {stat.unit}
                </span>
              </div>
              <p className="text-[#0a0a1a]/50 text-sm tracking-wide">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 装飾 */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#C9A84C]/20 to-transparent" />
    </section>
  );
}
