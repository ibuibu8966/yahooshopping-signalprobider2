import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Shield, Clock } from "lucide-react";

export default function CTA() {
  return (
    <section id="cta" className="py-20 bg-[#0f0f23] relative overflow-hidden">
      {/* 装飾的な背景 */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#D4AF37] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#D4AF37] rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* 限定バッジ */}
          <div className="inline-block bg-[#FF0033] text-white text-sm font-bold px-4 py-2 rounded-full mb-6">
            毎月10社限定
          </div>

          {/* メインキャッチ */}
          <h2 className="font-heading text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            今すぐ<span className="text-[#D4AF37]">無料相談</span>を
            <br />
            予約しませんか？
          </h2>

          {/* サブテキスト */}
          <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
            まずはお気軽にご相談ください。サービスの詳細説明と、
            あなたに最適な運用プランをご提案いたします。
          </p>

          {/* 特典リスト */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="flex items-center gap-2 text-white/80">
              <Calendar className="w-5 h-5 text-[#D4AF37]" />
              <span className="text-sm">オンライン対応可</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <Clock className="w-5 h-5 text-[#D4AF37]" />
              <span className="text-sm">所要時間30分</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <Shield className="w-5 h-5 text-[#D4AF37]" />
              <span className="text-sm">強引な営業なし</span>
            </div>
          </div>

          {/* CTAボタン */}
          <Button
            asChild
            size="lg"
            className="bg-[#D4AF37] hover:bg-[#B8962F] text-[#0f0f23] font-bold text-xl px-12 py-8 h-auto shadow-lg shadow-[#D4AF37]/30"
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
          <p className="text-white/50 text-sm mt-6">
            無料相談後の強引な営業は一切ありません。
            <br className="sm:hidden" />
            お気軽にお問い合わせください。
          </p>
        </div>
      </div>
    </section>
  );
}
