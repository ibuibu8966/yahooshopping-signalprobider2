"use client";

import { useState, useEffect } from "react";
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
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0a0a1a]/95 backdrop-blur-md border-b border-[#C9A84C]/10"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* ロゴ */}
          <a href="#" className="flex items-center gap-3 group">
            <span className="gradient-gold-text font-heading text-xl md:text-2xl tracking-wider">
              SENRITSU
            </span>
            <span className="hidden lg:inline text-white/60 text-sm tracking-wide border-l border-[#C9A84C]/30 pl-3">
              Signal Provider
            </span>
          </a>

          {/* デスクトップナビ */}
          <nav className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-white/70 hover:text-[#C9A84C] transition-all duration-300 text-sm tracking-wide relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#C9A84C] hover:after:w-full after:transition-all after:duration-300"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTAボタン */}
          <div className="hidden md:block">
            <Button
              asChild
              className="bg-gradient-to-r from-[#C9A84C] to-[#E8D5A3] hover:from-[#E8D5A3] hover:to-[#C9A84C] text-[#0a0a1a] font-bold px-6 py-2.5 rounded-sm tracking-wide transition-all duration-300 shadow-gold"
            >
              <a href="#cta">無料相談を予約する</a>
            </Button>
          </div>

          {/* モバイルメニューボタン */}
          <button
            className="md:hidden text-[#C9A84C] p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="メニュー"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* モバイルメニュー */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#0a0a1a]/98 backdrop-blur-md border-t border-[#C9A84C]/10">
          <nav className="container mx-auto px-4 py-6 flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-white/70 hover:text-[#C9A84C] transition-colors py-3 border-b border-white/5 tracking-wide"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button
              asChild
              className="bg-gradient-to-r from-[#C9A84C] to-[#E8D5A3] text-[#0a0a1a] font-bold w-full mt-4 py-6 rounded-sm tracking-wide"
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
