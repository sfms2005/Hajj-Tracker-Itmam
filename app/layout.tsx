import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hajj-tracker-itmam.vercel.app"),
  title: "رحلة الحج - حملة قافلة الإتمام",
  description: "منصة لمتابعة رحلة الحجاج ضمن حملة قافلة الإتمام",
  openGraph: {
    title: "رحلة الحج - حملة قافلة الإتمام",
    description: "تابع رحلتك في الحج مع حملة قافلة الإتمام بكل سهولة وطمأنينة",
    url: "https://hajj-tracker-itmam.vercel.app",
    siteName: "حملة قافلة الإتمام",
    locale: "ar_SA",
    type: "website",
    images: [
      {
        url: "/itmam_logo.png",
        width: 1200,
        height: 630,
        alt: "حملة قافلة الإتمام",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-[#fffff3]">
        <div className="mx-auto flex w-full max-w-md flex-1 flex-col">
          <Navbar />
          <div className="flex-1">{children}</div>
          <footer
            dir="ltr"
            className="px-5 py-6 text-center text-[14px] font-semibold text-[#535252]"
          >
            Made with <span className="text-gold-gradient font-bold">♡</span> by
            Sara Fawaz Alsubaie
          </footer>
        </div>
      </body>
    </html>
  );
}
