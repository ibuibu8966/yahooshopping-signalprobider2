import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "田中 太郎",
    role: "会社員",
    period: "利用歴：6ヶ月",
    comment:
      "本業が忙しくて副業に時間を割けなかったのですが、このサービスは本当に何もしなくていいので助かっています。毎月安定して利益が出ており、初期費用は3ヶ月で回収できました。",
    profit: "月平均15万円の利益",
    rating: 5,
  },
  {
    name: "佐藤 花子",
    role: "個人事業主",
    period: "利用歴：1年",
    comment:
      "EC事業に興味はあったものの、運用ノウハウがなく不安でした。専任の担当者がついてくれて、毎月詳細なレポートをもらえるので安心して任せられます。",
    profit: "累計利益180万円以上",
    rating: 5,
  },
  {
    name: "山田 健一",
    role: "投資家",
    period: "利用歴：8ヶ月",
    comment:
      "複垢対策がしっかりしているのが決め手でした。他社で痛い目に遭った経験があるので...。ここは安心して任せられます。サポートの対応も迅速です。",
    profit: "月平均12万円の利益",
    rating: 5,
  },
  {
    name: "鈴木 美咲",
    role: "主婦",
    period: "利用歴：4ヶ月",
    comment:
      "子育て中で外で働けないので、不労収入を探していました。最初は半信半疑でしたが、約束通り月額費用以上の利益が出ています。家計の足しになって嬉しいです。",
    profit: "月平均13万円の利益",
    rating: 5,
  },
  {
    name: "高橋 誠",
    role: "オンラインサロン運営",
    period: "利用歴：10ヶ月",
    comment:
      "EC事業のサロンメンバーにも勧めています。再現性が高く、運営も透明性があるので安心。月次レポートの質が高いのも好印象です。",
    profit: "月平均18万円の利益",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-[#F5F5F5]">
      <div className="container mx-auto px-4">
        {/* セクションヘッダー */}
        <div className="text-center mb-12">
          <h2 className="font-heading text-2xl md:text-4xl font-bold text-[#0f0f23] mb-4">
            お客様の<span className="text-[#D4AF37]">声</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            実際にサービスをご利用いただいているオーナー様からの声をご紹介します。
          </p>
        </div>

        {/* テスティモニアルカード */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <CardContent className="p-6">
                {/* 引用アイコン */}
                <Quote className="w-8 h-8 text-[#D4AF37]/30 mb-4" />

                {/* コメント */}
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  {testimonial.comment}
                </p>

                {/* 利益実績 */}
                <div className="bg-[#D4AF37]/10 rounded-lg px-3 py-2 mb-4">
                  <p className="text-[#D4AF37] font-bold text-sm text-center">
                    {testimonial.profit}
                  </p>
                </div>

                {/* 評価 */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37]"
                    />
                  ))}
                </div>

                {/* プロフィール */}
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div className="w-10 h-10 bg-[#0f0f23] rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-sm text-[#0f0f23]">
                      {testimonial.name}
                    </p>
                    <p className="text-gray-500 text-xs">
                      {testimonial.role} / {testimonial.period}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
