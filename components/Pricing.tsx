import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const initialServices = [
  "ヤフショアカウントの作成",
  "配送先住所の登録",
  "クレジットカード登録",
  "アカウント管理画面の作成",
  "利益計算シートの作成",
  "外注さんへの購入フローとヤフショルールの伝授",
];

const monthlyServices = [
  "購入商品と買取先リサーチ",
  "外注さんへの購入指示",
  "買取屋とのやり取り",
  "買取屋への請求管理",
  "月次の利益計算と報告",
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32 bg-[#FDFBF7] relative overflow-hidden">
      {/* 装飾 */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#C9A84C]/20 to-transparent" />

      <div className="container mx-auto px-4 md:px-8">
        {/* セクションヘッダー */}
        <div className="text-center mb-16 md:mb-20">
          <span className="text-[#C9A84C] text-sm tracking-[0.3em] uppercase mb-4 block">
            Pricing
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-[#0a0a1a] mb-6 tracking-tight">
            シンプルな<span className="gradient-gold-text">料金体系</span>
          </h2>
          <p className="text-[#0a0a1a]/60 max-w-2xl mx-auto leading-relaxed">
            初期費用と月額費用のみ。追加料金は一切ありません。
          </p>
        </div>

        {/* 料金カード */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-white border border-[#0a0a1a]/5 shadow-luxury overflow-hidden">
            {/* バッジ */}
            <div className="bg-gradient-to-r from-[#C9A84C] to-[#E8D5A3] text-[#0a0a1a] text-center py-3 font-bold tracking-wider text-sm">
              FULL MANAGED PLAN
            </div>

            <div className="p-8 md:p-12">
              {/* プラン名 */}
              <div className="text-center mb-12">
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-[#0a0a1a] mb-3 tracking-wide">
                  フルマネージドプラン
                </h3>
                <p className="text-[#0a0a1a]/50">
                  すべてお任せの完全代行サービス
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                {/* 初期費用 */}
                <div className="bg-[#FDFBF7] p-8 border border-[#C9A84C]/10">
                  <div className="text-center mb-8">
                    <p className="text-[#0a0a1a]/50 text-sm mb-2 tracking-wide">初期費用</p>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-[#0a0a1a]/30 text-2xl">¥</span>
                      <span className="font-number text-5xl md:text-6xl font-bold text-[#0a0a1a] tracking-tight">
                        330,000
                      </span>
                    </div>
                    <p className="text-[#0a0a1a]/40 text-xs mt-2 tracking-wide">税込 / 初回のみ</p>
                  </div>

                  <div className="space-y-4">
                    <p className="font-bold text-xs text-[#0a0a1a]/70 tracking-wider uppercase mb-4">
                      含まれるサービス
                    </p>
                    {initialServices.map((service, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full border border-[#C9A84C]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-[#C9A84C]" />
                        </div>
                        <span className="text-sm text-[#0a0a1a]/70">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 月額費用 */}
                <div className="bg-[#0a0a1a] p-8">
                  <div className="text-center mb-8">
                    <p className="text-white/50 text-sm mb-2 tracking-wide">月額費用</p>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-[#C9A84C]/50 text-2xl">¥</span>
                      <span className="font-number text-5xl md:text-6xl font-bold gradient-gold-text tracking-tight">
                        110,000
                      </span>
                    </div>
                    <p className="text-white/30 text-xs mt-2 tracking-wide">税込 / 毎月</p>
                  </div>

                  <div className="space-y-4">
                    <p className="font-bold text-xs text-white/50 tracking-wider uppercase mb-4">
                      含まれるサービス
                    </p>
                    {monthlyServices.map((service, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full border border-[#C9A84C]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-[#C9A84C]" />
                        </div>
                        <span className="text-sm text-white/70">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* 利益保証バナー */}
              <div className="mt-10 border border-[#C9A84C]/20 p-6 text-center bg-[#C9A84C]/5">
                <p className="text-[#C9A84C] font-bold tracking-wide">
                  月額費以上の利益を保証します
                </p>
                <p className="text-[#0a0a1a]/50 text-sm mt-2">
                  万が一達成できない場合は翌月に補填いたします
                </p>
              </div>

              {/* CTAボタン */}
              <div className="mt-10 text-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-[#C9A84C] to-[#E8D5A3] hover:from-[#E8D5A3] hover:to-[#C9A84C] text-[#0a0a1a] font-bold text-lg px-14 py-7 h-auto rounded-sm shadow-gold transition-all duration-300 tracking-wide"
                >
                  <a href="#cta">無料相談を予約する</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 装飾 */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#C9A84C]/20 to-transparent" />
    </section>
  );
}
