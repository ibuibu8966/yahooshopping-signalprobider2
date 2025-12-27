import { MessageSquare, Settings, TrendingUp } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "無料相談",
    description:
      "サービス内容の詳細説明と、投資可能金額のヒアリングを行います。ご不明点は何でもお気軽にご質問ください。",
  },
  {
    number: "02",
    icon: Settings,
    title: "契約・初期設定",
    description:
      "ヤフショアカウント作成、配送先住所登録、クレジットカード登録、管理画面セットアップを代行いたします。",
  },
  {
    number: "03",
    icon: TrendingUp,
    title: "運用開始",
    description:
      "あとはお任せください。毎月の利益レポートを受け取りながら、資産を運用していきます。",
  },
];

export default function Steps() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* セクションヘッダー */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-2xl md:text-4xl font-bold text-[#0f0f23] mb-4">
            <span className="text-[#D4AF37]">3ステップ</span>で始める
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            シンプルな導入プロセスで、すぐに運用を開始できます。
          </p>
        </div>

        {/* ステップ */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* 接続線（デスクトップ） */}
            <div className="hidden md:block absolute top-24 left-[16.67%] right-[16.67%] h-0.5 bg-[#D4AF37]/30" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  {/* ステップカード */}
                  <div className="bg-white rounded-2xl p-6 text-center relative z-10">
                    {/* ステップ番号 */}
                    <div className="font-number text-5xl font-bold text-[#D4AF37]/20 mb-4">
                      {step.number}
                    </div>

                    {/* アイコン */}
                    <div className="w-16 h-16 bg-[#0f0f23] rounded-full flex items-center justify-center mx-auto mb-4">
                      <step.icon className="w-8 h-8 text-[#D4AF37]" />
                    </div>

                    {/* タイトル */}
                    <h3 className="font-heading text-xl font-bold text-[#0f0f23] mb-3">
                      {step.title}
                    </h3>

                    {/* 説明 */}
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* 矢印（モバイル） */}
                  {index < steps.length - 1 && (
                    <div className="md:hidden flex justify-center my-4">
                      <div className="w-0.5 h-8 bg-[#D4AF37]/30" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
