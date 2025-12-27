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
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* セクションヘッダー */}
        <div className="text-center mb-12">
          <h2 className="font-heading text-2xl md:text-4xl font-bold text-[#0f0f23] mb-4">
            よくある<span className="text-[#D4AF37]">ご質問</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
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
                className="bg-[#F5F5F5] rounded-lg border-none px-6"
              >
                <AccordionTrigger className="text-left font-heading font-bold text-[#0f0f23] hover:text-[#D4AF37] hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-5">
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
