import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "田中 太郎",
    role: "会社員",
    period: "利用歴：6ヶ月",
    comment:
      "本業が忙しくて副業に時間を割けなかったのですが、このサービスは本当に何もしなくていいので助かっています。毎月安定して利益が出ており、初期費用は3ヶ月で回収できました。",
    profit: "月平均15万円の利益",
  },
  {
    name: "佐藤 花子",
    role: "個人事業主",
    period: "利用歴：1年",
    comment:
      "EC事業に興味はあったものの、運用ノウハウがなく不安でした。専任の担当者がついてくれて、毎月詳細なレポートをもらえるので安心して任せられます。",
    profit: "累計利益180万円以上",
  },
  {
    name: "山田 健一",
    role: "投資家",
    period: "利用歴：8ヶ月",
    comment:
      "複垢対策がしっかりしているのが決め手でした。他社で痛い目に遭った経験があるので...。ここは安心して任せられます。サポートの対応も迅速です。",
    profit: "月平均12万円の利益",
  },
  {
    name: "鈴木 美咲",
    role: "主婦",
    period: "利用歴：4ヶ月",
    comment:
      "子育て中で外で働けないので、不労収入を探していました。最初は半信半疑でしたが、約束通り月額費用以上の利益が出ています。家計の足しになって嬉しいです。",
    profit: "月平均13万円の利益",
  },
  {
    name: "高橋 誠",
    role: "オンラインサロン運営",
    period: "利用歴：10ヶ月",
    comment:
      "EC事業のサロンメンバーにも勧めています。再現性が高く、運営も透明性があるので安心。月次レポートの質が高いのも好印象です。",
    profit: "月平均18万円の利益",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-[#0a0a1a] relative overflow-hidden">
      {/* 背景装飾 */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#C9A84C]/3 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#C9A84C]/3 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* セクションヘッダー */}
        <div className="text-center mb-16 md:mb-20">
          <span className="text-[#C9A84C] text-sm tracking-[0.3em] uppercase mb-4 block">
            Testimonials
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            お客様の<span className="gradient-gold-text">声</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto leading-relaxed">
            実際にサービスをご利用いただいているオーナー様からの声をご紹介します。
          </p>
        </div>

        {/* テスティモニアルカード */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-[#12122a] p-8 border border-white/5 hover:border-[#C9A84C]/20 transition-all duration-500"
            >
              {/* 引用アイコン */}
              <Quote className="w-10 h-10 text-[#C9A84C]/20 mb-6" />

              {/* コメント */}
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                {testimonial.comment}
              </p>

              {/* 利益実績 */}
              <div className="border border-[#C9A84C]/20 px-4 py-3 mb-6 bg-[#C9A84C]/5">
                <p className="text-[#C9A84C] font-bold text-sm text-center tracking-wide">
                  {testimonial.profit}
                </p>
              </div>

              {/* プロフィール */}
              <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                <div className="w-12 h-12 border border-[#C9A84C]/30 rounded-full flex items-center justify-center text-[#C9A84C] font-bold text-sm">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-sm text-white tracking-wide">
                    {testimonial.name}
                  </p>
                  <p className="text-white/40 text-xs mt-1">
                    {testimonial.role} / {testimonial.period}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
