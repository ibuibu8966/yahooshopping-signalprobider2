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
    <section className="py-24 md:py-32 bg-[#0a0a1a] relative overflow-hidden">
      {/* 背景装飾 */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#C9A84C]/3 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* セクションヘッダー */}
        <div className="text-center mb-16 md:mb-20">
          <span className="text-[#C9A84C] text-sm tracking-[0.3em] uppercase mb-4 block">
            How It Works
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            <span className="gradient-gold-text">3ステップ</span>で始める
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto leading-relaxed">
            シンプルな導入プロセスで、すぐに運用を開始できます。
          </p>
        </div>

        {/* ステップ */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* 接続線（デスクトップ） */}
            <div className="hidden md:block absolute top-[100px] left-[20%] right-[20%] h-[1px] bg-gradient-to-r from-[#C9A84C]/50 via-[#C9A84C]/20 to-[#C9A84C]/50" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  {/* ステップカード */}
                  <div className="text-center relative z-10">
                    {/* ステップ番号 */}
                    <div className="font-number text-7xl md:text-8xl font-bold text-[#C9A84C]/10 mb-2 tracking-tighter">
                      {step.number}
                    </div>

                    {/* アイコン */}
                    <div className="w-20 h-20 border border-[#C9A84C]/30 rounded-full flex items-center justify-center mx-auto mb-6 bg-[#0a0a1a] relative -mt-12">
                      <step.icon className="w-8 h-8 text-[#C9A84C]" />
                    </div>

                    {/* タイトル */}
                    <h3 className="font-heading text-xl md:text-2xl font-bold text-white mb-4 tracking-wide">
                      {step.title}
                    </h3>

                    {/* 説明 */}
                    <p className="text-white/50 text-sm leading-relaxed max-w-xs mx-auto">
                      {step.description}
                    </p>
                  </div>

                  {/* 矢印（モバイル） */}
                  {index < steps.length - 1 && (
                    <div className="md:hidden flex justify-center my-8">
                      <div className="w-[1px] h-12 bg-gradient-to-b from-[#C9A84C]/50 to-transparent" />
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
