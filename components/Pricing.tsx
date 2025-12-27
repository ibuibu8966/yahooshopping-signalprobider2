import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Check, Star } from "lucide-react";

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
    <section id="pricing" className="py-20 bg-[#0f0f23]">
      <div className="container mx-auto px-4">
        {/* セクションヘッダー */}
        <div className="text-center mb-12">
          <h2 className="font-heading text-2xl md:text-4xl font-bold text-white mb-4">
            シンプルな<span className="text-[#D4AF37]">料金体系</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            初期費用と月額費用のみ。追加料金は一切ありません。
          </p>
        </div>

        {/* 料金カード */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white border-2 border-[#D4AF37] overflow-hidden">
            {/* バッジ */}
            <div className="bg-[#D4AF37] text-[#0f0f23] text-center py-2 font-bold flex items-center justify-center gap-2">
              <Star className="w-4 h-4" />
              人気No.1プラン
              <Star className="w-4 h-4" />
            </div>

            <CardHeader className="text-center pb-0 pt-8">
              <h3 className="font-heading text-2xl font-bold text-[#0f0f23] mb-2">
                フルマネージドプラン
              </h3>
              <p className="text-gray-600">
                すべてお任せの完全代行サービス
              </p>
            </CardHeader>

            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                {/* 初期費用 */}
                <div className="bg-[#F5F5F5] rounded-xl p-6">
                  <div className="text-center mb-6">
                    <p className="text-gray-600 text-sm mb-1">初期費用</p>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="font-number text-4xl font-bold text-[#0f0f23]">
                        330,000
                      </span>
                      <span className="text-gray-600">円（税込）</span>
                    </div>
                    <p className="text-gray-500 text-xs mt-1">初回のみ</p>
                  </div>

                  <div className="space-y-3">
                    <p className="font-bold text-sm text-[#0f0f23] mb-3">
                      含まれるサービス：
                    </p>
                    {initialServices.map((service, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#D4AF37] mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 月額費用 */}
                <div className="bg-[#0f0f23] rounded-xl p-6">
                  <div className="text-center mb-6">
                    <p className="text-white/70 text-sm mb-1">月額費用</p>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="font-number text-4xl font-bold text-[#D4AF37]">
                        110,000
                      </span>
                      <span className="text-white/70">円（税込）</span>
                    </div>
                    <p className="text-white/50 text-xs mt-1">毎月</p>
                  </div>

                  <div className="space-y-3">
                    <p className="font-bold text-sm text-white mb-3">
                      含まれるサービス：
                    </p>
                    {monthlyServices.map((service, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#D4AF37] mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-white/80">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* 利益保証バナー */}
              <div className="mt-8 bg-[#FF0033]/10 border border-[#FF0033]/30 rounded-lg p-4 text-center">
                <p className="text-[#FF0033] font-bold">
                  月額費以上の利益を保証します
                </p>
                <p className="text-gray-600 text-sm mt-1">
                  万が一達成できない場合は翌月に補填いたします
                </p>
              </div>

              {/* CTAボタン */}
              <div className="mt-8 text-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-[#D4AF37] hover:bg-[#B8962F] text-[#0f0f23] font-bold text-lg px-12 py-6 h-auto"
                >
                  <a href="#cta">無料相談を予約する</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
