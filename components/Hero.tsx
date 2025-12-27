import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, TrendingUp, Clock } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center gradient-dark pt-20 md:pt-24 overflow-hidden">
      {/* 背景グラデーション */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1a] via-[#0a0a1a] to-[#12122a]" />

      {/* 装飾的な背景パターン */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-[#C9A84C]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-[#C9A84C]/3 rounded-full blur-[150px]" />
      </div>

      {/* 装飾的なライン */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-[#C9A84C]/10 to-transparent" />
        <div className="absolute top-0 right-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-[#C9A84C]/10 to-transparent" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* サブタイトル */}
          <div className="inline-block mb-6">
            <span className="text-[#C9A84C]/80 text-sm md:text-base tracking-[0.3em] uppercase">
              Yahoo! Shopping Full Support Service
            </span>
          </div>

          {/* メインキャッチ */}
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight tracking-tight">
            資金を入れるだけ。
            <br />
            <span className="gradient-gold-text">あとは全部お任せ。</span>
          </h1>

          {/* サブキャッチ */}
          <p className="text-lg md:text-xl lg:text-2xl text-white/60 mb-12 max-w-3xl mx-auto leading-relaxed tracking-wide">
            月額費以上の利益を保証する
            <br className="sm:hidden" />
            ヤフーショッピング完全代行サービス
          </p>

          {/* 3つの特徴 */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 mb-14">
            <div className="flex items-center gap-3 text-white/50">
              <div className="w-10 h-10 rounded-full border border-[#C9A84C]/30 flex items-center justify-center">
                <Shield className="w-5 h-5 text-[#C9A84C]" />
              </div>
              <span className="text-sm md:text-base tracking-wide">利益保証</span>
            </div>
            <div className="flex items-center gap-3 text-white/50">
              <div className="w-10 h-10 rounded-full border border-[#C9A84C]/30 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-[#C9A84C]" />
              </div>
              <span className="text-sm md:text-base tracking-wide">完全代行</span>
            </div>
            <div className="flex items-center gap-3 text-white/50">
              <div className="w-10 h-10 rounded-full border border-[#C9A84C]/30 flex items-center justify-center">
                <Clock className="w-5 h-5 text-[#C9A84C]" />
              </div>
              <span className="text-sm md:text-base tracking-wide">作業時間ゼロ</span>
            </div>
          </div>

          {/* CTAボタン */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-[#C9A84C] to-[#E8D5A3] hover:from-[#E8D5A3] hover:to-[#C9A84C] text-[#0a0a1a] font-bold text-lg px-10 py-7 h-auto rounded-sm shadow-gold transition-all duration-300"
            >
              <a href="#cta" className="flex items-center gap-3 tracking-wide">
                無料相談を予約する
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-[#C9A84C]/50 text-[#C9A84C] hover:bg-[#C9A84C]/10 hover:border-[#C9A84C] font-bold text-lg px-10 py-7 h-auto rounded-sm transition-all duration-300 bg-transparent"
            >
              <a href="#benefits" className="tracking-wide">サービス詳細を見る</a>
            </Button>
          </div>

          {/* 信頼性バッジ */}
          <div className="mt-20 pt-10 border-t border-white/5">
            <div className="flex flex-wrap justify-center gap-8 md:gap-12 text-white/40 text-sm tracking-wide">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#C9A84C] rounded-full" />
                初月から利益保証
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#C9A84C] rounded-full" />
                専任サポート付き
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#C9A84C] rounded-full" />
                いつでも解約可能
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* スクロールインジケーター */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="w-[1px] h-16 bg-gradient-to-b from-[#C9A84C]/50 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
