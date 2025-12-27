import {
  Shield,
  Users,
  Lock,
  FileText,
  Clock,
  HeadphonesIcon,
} from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "利益保証",
    description:
      "月額費以上の利益を必ず確保。万が一達成できない場合は翌月に補填いたします。",
  },
  {
    icon: Users,
    title: "完全代行",
    description:
      "外注管理から買取交渉まで一括対応。オーナー様は資金を投下するだけで収益を得られます。",
  },
  {
    icon: Lock,
    title: "複垢対策",
    description:
      "長年の運用経験で培ったノウハウにより、アカウント停止リスクを最小化します。",
  },
  {
    icon: FileText,
    title: "月次レポート",
    description:
      "透明性の高い利益計算と詳細な報告書を毎月お届け。運用状況が一目でわかります。",
  },
  {
    icon: Clock,
    title: "時間の自由",
    description:
      "作業時間ゼロで収益を得る完全な不労収入を実現。本業に集中しながら副収入を確保。",
  },
  {
    icon: HeadphonesIcon,
    title: "専門サポート",
    description:
      "経験豊富なチームによる運用と、専任担当者による迅速なサポート体制を完備。",
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-24 md:py-32 bg-[#FDFBF7] relative overflow-hidden">
      {/* 装飾 */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#C9A84C]/20 to-transparent" />

      <div className="container mx-auto px-4 md:px-8">
        {/* セクションヘッダー */}
        <div className="text-center mb-16 md:mb-20">
          <span className="text-[#C9A84C] text-sm tracking-[0.3em] uppercase mb-4 block">
            Why Choose Us
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-[#0a0a1a] mb-6 tracking-tight">
            選ばれる<span className="gradient-gold-text">6つの理由</span>
          </h2>
          <p className="text-[#0a0a1a]/60 max-w-2xl mx-auto leading-relaxed">
            センリツヤフショシグナルプロバイダーが多くのオーナー様に選ばれている理由をご紹介します。
          </p>
        </div>

        {/* ベネフィットカード */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group bg-white p-8 md:p-10 border border-[#0a0a1a]/5 hover:border-[#C9A84C]/30 transition-all duration-500 hover:shadow-luxury"
            >
              <div className="w-14 h-14 border border-[#C9A84C]/30 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#C9A84C]/5 transition-colors duration-300">
                <benefit.icon className="w-6 h-6 text-[#C9A84C]" />
              </div>
              <h3 className="font-heading text-xl font-bold text-[#0a0a1a] mb-3 tracking-wide">
                {benefit.title}
              </h3>
              <p className="text-[#0a0a1a]/60 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 装飾 */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#C9A84C]/20 to-transparent" />
    </section>
  );
}
