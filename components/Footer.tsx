import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0f0f23] border-t border-[#D4AF37]/20 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* 会社情報 */}
          <div>
            <h3 className="text-[#D4AF37] font-heading font-bold text-lg mb-4">
              株式会社SENRITSU
            </h3>
            <div className="text-white/60 text-sm space-y-2">
              <p>代表取締役：加藤 大成</p>
              <p>〒579-8036</p>
              <p>大阪府東大阪市鷹殿町11-2</p>
              <p>カワショウビル2・3階</p>
            </div>
          </div>

          {/* リンク */}
          <div>
            <h3 className="text-white font-heading font-bold text-lg mb-4">
              リンク
            </h3>
            <ul className="text-white/60 text-sm space-y-2">
              <li>
                <Link
                  href="#benefits"
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  サービス内容
                </Link>
              </li>
              <li>
                <Link
                  href="#pricing"
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  料金プラン
                </Link>
              </li>
              <li>
                <Link
                  href="#testimonials"
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  お客様の声
                </Link>
              </li>
              <li>
                <Link
                  href="#faq"
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  よくある質問
                </Link>
              </li>
            </ul>
          </div>

          {/* 法的情報 */}
          <div>
            <h3 className="text-white font-heading font-bold text-lg mb-4">
              法的情報
            </h3>
            <ul className="text-white/60 text-sm space-y-2">
              <li>
                <Link
                  href="/terms"
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  利用規約
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  プライバシーポリシー
                </Link>
              </li>
              <li>
                <Link
                  href="/legal"
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  特定商取引法に基づく表記
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* コピーライト */}
        <div className="border-t border-white/10 pt-6">
          <p className="text-center text-white/40 text-sm">
            © {currentYear} 株式会社SENRITSU. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
