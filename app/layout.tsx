import type { Metadata } from "next";
import { Geist, Geist_Mono, Tajawal } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const tajawal = Tajawal({
  variable: "--font-tajawal",
  subsets: ["arabic"],
  weight: ["400", "500", "700", "800"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "رحلة الحج - شركة قافلة الإتمام للحج",
  description:
    "منصة رقمية لمتابعة رحلة الحجاج مع شركة قافلة الإتمام للحج خطوة بخطوة بسهولة وتنظيم",
  openGraph: {
    title: "رحلة الحج - شركة قافلة الإتمام للحج",
    description:
      "تابع رحلتك في الحج مع شركة قافلة الإتمام للحج بكل سهولة وطمأنينة",
    url: "https://hajj-tracker-qased.vercel.app",
    siteName: "شركة قافلة الإتمام للحج",
    images: [
      {
        url: "/Itmam.png",
      },
    ],
    locale: "ar_SA",
    type: "website",
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
      className={`${tajawal.variable} ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <div className="app-shell mx-auto flex w-full max-w-md flex-1 flex-col">
          <Navbar />
          <div className="flex-1 pt-0 sm:pt-1">{children}</div>
          <footer
            dir="ltr"
            className="relative px-5 py-6 text-center text-[14px] font-semibold text-neutral-600"
          >
            <span
              aria-hidden="true"
              className="absolute inset-x-12 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(201,160,74,0.4),transparent)]"
            />
            Made with <span className="qs-gold-text font-bold">♡</span> by Sara
            Fawaz Alsubaie
          </footer>
        </div>
      </body>
    </html>
  );
}
