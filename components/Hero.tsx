import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, TrendingUp, Clock } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-[#0f0f23] pt-16 md:pt-20">
      {/* 背景グラデーション */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f0f23] via-[#0f0f23] to-[#1a1a3e] opacity-80" />

      {/* 装飾的な背景パターン */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#D4AF37] rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#D4AF37] rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* メインキャッチ */}
          <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            資金を入れるだけ。
            <br />
            <span className="text-[#D4AF37]">あとは全部お任せ。</span>
          </h1>

          {/* サブキャッチ */}
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            月額費以上の利益を保証する
            <br className="sm:hidden" />
            ヤフショ完全代行サービス
          </p>

          {/* 3つの特徴 */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-10">
            <div className="flex items-center gap-2 text-white/70">
              <Shield className="w-5 h-5 text-[#D4AF37]" />
              <span className="text-sm md:text-base">利益保証</span>
            </div>
            <div className="flex items-center gap-2 text-white/70">
              <TrendingUp className="w-5 h-5 text-[#D4AF37]" />
              <span className="text-sm md:text-base">完全代行</span>
            </div>
            <div className="flex items-center gap-2 text-white/70">
              <Clock className="w-5 h-5 text-[#D4AF37]" />
              <span className="text-sm md:text-base">作業時間ゼロ</span>
            </div>
          </div>

          {/* CTAボタン */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-[#D4AF37] hover:bg-[#B8962F] text-[#0f0f23] font-bold text-lg px-8 py-6 h-auto"
            >
              <a href="#cta" className="flex items-center gap-2">
                無料相談を予約する
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10 font-bold text-lg px-8 py-6 h-auto"
            >
              <a href="#benefits">サービス詳細を見る</a>
            </Button>
          </div>

          {/* 信頼性バッジ */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <p className="text-white/50 text-sm mb-4">
              安心してご利用いただけます
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-white/60 text-sm">
              <span>✓ 初月から利益保証</span>
              <span>✓ 専任サポート付き</span>
              <span>✓ いつでも解約可能</span>
            </div>
          </div>
        </div>
      </div>

      {/* スクロールインジケーター */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-[#D4AF37] rounded-full" />
        </div>
      </div>
    </section>
  );
}
