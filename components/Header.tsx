"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "ベネフィット", href: "#benefits" },
  { label: "料金", href: "#pricing" },
  { label: "お客様の声", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0f0f23] border-b border-[#D4AF37]/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* ロゴ */}
          <a href="#" className="flex items-center gap-2">
            <span className="text-[#D4AF37] font-heading text-lg md:text-xl font-bold">
              SENRITSU
            </span>
            <span className="hidden sm:inline text-white text-sm">
              ヤフショシグナルプロバイダー
            </span>
          </a>

          {/* デスクトップナビ */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-white/80 hover:text-[#D4AF37] transition-colors text-sm"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTAボタン */}
          <div className="hidden md:block">
            <Button
              asChild
              className="bg-[#D4AF37] hover:bg-[#B8962F] text-[#0f0f23] font-bold"
            >
              <a href="#cta">無料相談を予約する</a>
            </Button>
          </div>

          {/* モバイルメニューボタン */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="メニュー"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* モバイルメニュー */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#0f0f23] border-t border-[#D4AF37]/20">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-white/80 hover:text-[#D4AF37] transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button
              asChild
              className="bg-[#D4AF37] hover:bg-[#B8962F] text-[#0f0f23] font-bold w-full mt-2"
            >
              <a href="#cta" onClick={() => setIsMenuOpen(false)}>
                無料相談を予約する
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
