import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a1a] border-t border-[#C9A84C]/10 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 mb-12">
          {/* ロゴ・会社情報 */}
          <div className="md:col-span-1">
            <span className="gradient-gold-text font-heading text-2xl tracking-wider block mb-6">
              SENRITSU
            </span>
            <div className="text-white/40 text-sm space-y-1 leading-relaxed">
              <p>株式会社SENRITSU</p>
              <p>代表取締役：加藤 大成</p>
            </div>
          </div>

          {/* 所在地 */}
          <div>
            <h3 className="text-white/70 font-bold text-xs tracking-[0.2em] uppercase mb-5">
              Location
            </h3>
            <div className="text-white/40 text-sm space-y-1 leading-relaxed">
              <p>〒579-8036</p>
              <p>大阪府東大阪市鷹殿町11-2</p>
              <p>カワショウビル2・3階</p>
            </div>
          </div>

          {/* リンク */}
          <div>
            <h3 className="text-white/70 font-bold text-xs tracking-[0.2em] uppercase mb-5">
              Links
            </h3>
            <ul className="text-white/40 text-sm space-y-3">
              <li>
                <Link
                  href="#benefits"
                  className="hover:text-[#C9A84C] transition-colors"
                >
                  サービス内容
                </Link>
              </li>
              <li>
                <Link
                  href="#pricing"
                  className="hover:text-[#C9A84C] transition-colors"
                >
                  料金プラン
                </Link>
              </li>
              <li>
                <Link
                  href="#testimonials"
                  className="hover:text-[#C9A84C] transition-colors"
                >
                  お客様の声
                </Link>
              </li>
              <li>
                <Link
                  href="#faq"
                  className="hover:text-[#C9A84C] transition-colors"
                >
                  よくある質問
                </Link>
              </li>
            </ul>
          </div>

          {/* 法的情報 */}
          <div>
            <h3 className="text-white/70 font-bold text-xs tracking-[0.2em] uppercase mb-5">
              Legal
            </h3>
            <ul className="text-white/40 text-sm space-y-3">
              <li>
                <Link
                  href="/terms"
                  className="hover:text-[#C9A84C] transition-colors"
                >
                  利用規約
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-[#C9A84C] transition-colors"
                >
                  プライバシーポリシー
                </Link>
              </li>
              <li>
                <Link
                  href="/legal"
                  className="hover:text-[#C9A84C] transition-colors"
                >
                  特定商取引法に基づく表記
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* コピーライト */}
        <div className="border-t border-white/5 pt-8">
          <p className="text-center text-white/30 text-xs tracking-wide">
            © {currentYear} SENRITSU Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
