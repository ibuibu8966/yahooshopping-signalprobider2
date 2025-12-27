import type { Metadata } from "next";
import { Noto_Sans_JP, Inter } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "センリツヤフショシグナルプロバイダー | ヤフショ完全代行サービス",
  description:
    "資金を入れるだけ。あとは全部お任せ。月額費以上の利益を保証するヤフーショッピング完全代行サービス。アカウント運用から買取までのすべてを代行します。",
  keywords: [
    "ヤフーショッピング",
    "せどり",
    "自動せどり",
    "代行サービス",
    "副業",
    "不労収入",
  ],
  openGraph: {
    title: "センリツヤフショシグナルプロバイダー",
    description: "月額費以上の利益を保証するヤフショ完全代行サービス",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${notoSansJP.variable} ${inter.variable} font-body antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
