import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Shield, Clock } from "lucide-react";

export default function CTA() {
  return (
    <section id="cta" className="py-24 md:py-32 bg-[#FDFBF7] relative overflow-hidden">
      {/* 装飾 */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#C9A84C]/20 to-transparent" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#0a0a1a] p-10 md:p-16 relative overflow-hidden">
            {/* 背景装飾 */}
            <div className="absolute inset-0">
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#C9A84C]/5 rounded-full blur-[100px]" />
              <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#C9A84C]/5 rounded-full blur-[100px]" />
            </div>

            <div className="relative z-10 text-center">
              {/* 限定バッジ */}
              <div className="inline-block border border-[#C9A84C]/30 text-[#C9A84C] text-xs font-bold px-5 py-2 mb-8 tracking-[0.2em] uppercase">
                毎月10社限定
              </div>

              {/* メインキャッチ */}
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                今すぐ<span className="gradient-gold-text">無料相談</span>を
                <br />
                予約しませんか？
              </h2>

              {/* サブテキスト */}
              <p className="text-white/50 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
                まずはお気軽にご相談ください。サービスの詳細説明と、
                あなたに最適な運用プランをご提案いたします。
              </p>

              {/* 特典リスト */}
              <div className="flex flex-wrap justify-center gap-8 md:gap-12 mb-12">
                <div className="flex items-center gap-3 text-white/50">
                  <div className="w-10 h-10 rounded-full border border-[#C9A84C]/30 flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-[#C9A84C]" />
                  </div>
                  <span className="text-sm tracking-wide">オンライン対応可</span>
                </div>
                <div className="flex items-center gap-3 text-white/50">
                  <div className="w-10 h-10 rounded-full border border-[#C9A84C]/30 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-[#C9A84C]" />
                  </div>
                  <span className="text-sm tracking-wide">所要時間30分</span>
                </div>
                <div className="flex items-center gap-3 text-white/50">
                  <div className="w-10 h-10 rounded-full border border-[#C9A84C]/30 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-[#C9A84C]" />
                  </div>
                  <span className="text-sm tracking-wide">強引な営業なし</span>
                </div>
              </div>

              {/* CTAボタン */}
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-[#C9A84C] to-[#E8D5A3] hover:from-[#E8D5A3] hover:to-[#C9A84C] text-[#0a0a1a] font-bold text-xl px-14 py-8 h-auto rounded-sm shadow-gold transition-all duration-300 tracking-wide"
              >
                <a
                  href="https://forms.google.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3"
                >
                  無料相談を予約する
                  <ArrowRight className="w-6 h-6" />
                </a>
              </Button>

              {/* 安心メッセージ */}
              <p className="text-white/30 text-sm mt-8 tracking-wide">
                無料相談後の強引な営業は一切ありません。
                <br className="sm:hidden" />
                お気軽にお問い合わせください。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
