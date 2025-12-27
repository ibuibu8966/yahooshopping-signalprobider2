import { Card, CardContent } from "@/components/ui/card";
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
    <section id="benefits" className="py-20 bg-[#F5F5F5]">
      <div className="container mx-auto px-4">
        {/* セクションヘッダー */}
        <div className="text-center mb-12">
          <h2 className="font-heading text-2xl md:text-4xl font-bold text-[#0f0f23] mb-4">
            選ばれる<span className="text-[#D4AF37]">6つの理由</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            センリツヤフショシグナルプロバイダーが多くのオーナー様に選ばれている理由をご紹介します。
          </p>
        </div>

        {/* ベネフィットカード */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <h3 className="font-heading text-lg font-bold text-[#0f0f23] mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
