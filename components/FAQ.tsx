"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "本当に利益が出ますか？",
    answer:
      "はい、月額費以上の利益を保証しています。万が一、月額費用を下回った場合は、翌月に差額を補填いたします。過去のデータでは、95%以上のオーナー様が月額費の1.2倍〜1.5倍の利益を得られています。",
  },
  {
    question: "どれくらいの資金が必要ですか？",
    answer:
      "初期費用として33万円（税込）、月額費用として11万円（税込）が必要です。また、仕入れ用の運転資金として最低50万円程度をご用意いただくことを推奨しています。運転資金が多いほど、取引量を増やせるため利益も大きくなります。",
  },
  {
    question: "アカウント停止のリスクは？",
    answer:
      "当社では長年の運用経験で培った複垢対策のノウハウを持っています。アカウントの分散管理、購入パターンの最適化、リスク分散など、複数の対策を講じることで停止リスクを最小化しています。万が一停止した場合も、迅速に代替アカウントへ移行する体制を整えています。",
  },
  {
    question: "解約は可能ですか？",
    answer:
      "はい、いつでも解約可能です。解約を希望される場合は、翌月分の請求前にお申し出ください。解約手数料は一切かかりません。また、一時休止のオプションもございます。",
  },
  {
    question: "自分で何かする必要はありますか？",
    answer:
      "いいえ、オーナー様に作業していただくことは一切ありません。アカウント作成から、仕入れ、買取交渉、入金管理まですべて当社が代行いたします。月に一度、利益レポートを確認いただくだけです。",
  },
  {
    question: "利益はいつ受け取れますか？",
    answer:
      "買取完了後、月末締めで翌月15日に指定の口座へお振込みいたします。詳細な利益計算書とともに、毎月の収支をご確認いただけます。",
  },
  {
    question: "始めるまでどのくらいかかりますか？",
    answer:
      "無料相談から運用開始まで、通常1〜2週間程度です。アカウント作成や各種設定は当社で代行するため、オーナー様のお手間はほとんどかかりません。",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-24 md:py-32 bg-[#0a0a1a] relative overflow-hidden">
      {/* 背景装飾 */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#C9A84C]/3 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* セクションヘッダー */}
        <div className="text-center mb-16 md:mb-20">
          <span className="text-[#C9A84C] text-sm tracking-[0.3em] uppercase mb-4 block">
            FAQ
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            よくある<span className="gradient-gold-text">ご質問</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto leading-relaxed">
            お申し込み前の疑問にお答えします。その他のご質問は無料相談でお気軽にどうぞ。
          </p>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-[#12122a] border border-white/5 px-6 md:px-8 data-[state=open]:border-[#C9A84C]/20"
              >
                <AccordionTrigger className="text-left font-heading font-bold text-white hover:text-[#C9A84C] hover:no-underline py-6 tracking-wide">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-white/60 leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
