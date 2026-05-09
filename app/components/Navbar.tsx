"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const menuItems = [
  { href: "/", label: "الصفحة الرئيسية" },
  { href: "/mashair", label: "مواقع المشاعر" },
  { href: "/services", label: "خدماتنا" },
  { href: "/vision", label: "رؤيتنا" },
  { href: "/about", label: "من نحن" },
  { href: "/contact", label: "تواصلوا معنا" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const close = () => setIsOpen(false);

  return (
    <>
      <nav className="flex items-center justify-between px-5 pt-0 pb-0">
        <Link
          href="/"
          aria-label="شركة قافلة الإتمام للحج - الصفحة الرئيسية"
          className="flex items-center transition-transform hover:scale-[1.02] active:scale-[0.98]"
        >
          <Image
            src="/Itmam.png"
            alt="شركة قافلة الإتمام للحج"
            width={384}
            height={483}
            priority
            className="h-20 w-auto drop-shadow-[0_6px_18px_rgba(13,11,9,0.35)]"
          />
        </Link>

        <button
          type="button"
          aria-label="فتح القائمة"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(true)}
          className="flex h-11 w-11 flex-col items-center justify-center gap-[5px] rounded-xl border border-[#c9a04a]/30 bg-white/60 backdrop-blur-sm transition-all hover:border-[#c9a04a]/60 hover:bg-white active:scale-95"
        >
          <span className="block h-[2.5px] w-6 rounded-full bg-[#1a1612]" />
          <span className="block h-[2.5px] w-6 rounded-full bg-[#1a1612]" />
          <span className="block h-[2.5px] w-6 rounded-full bg-[#1a1612]" />
        </button>
      </nav>

      <button
        type="button"
        aria-label="إغلاق القائمة"
        tabIndex={isOpen ? 0 : -1}
        onClick={close}
        className={`fixed inset-0 z-40 cursor-default bg-black/55 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <aside
        dir="rtl"
        aria-hidden={!isOpen}
        aria-label="القائمة الجانبية"
        className={`fixed top-0 left-0 z-50 h-full w-[72%] max-w-xs overflow-hidden bg-[linear-gradient(160deg,#0d0b09_0%,#1a1612_55%,#2a241e_100%)] text-white shadow-[0_0_50px_rgba(0,0,0,0.45)] transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 w-[2px] bg-[linear-gradient(180deg,transparent,#c9a04a_20%,#f0d175_50%,#c9a04a_80%,transparent)] opacity-70"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-20 -left-20 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(201,160,74,0.18),transparent_70%)]"
        />

        <div className="relative flex items-center justify-between px-5 py-4">
          <button
            type="button"
            aria-label="إغلاق القائمة"
            onClick={close}
            className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-md transition-colors hover:bg-white/10"
          >
            <span className="block h-[2.5px] w-6 rounded-full bg-white" />
            <span className="block h-[2.5px] w-6 rounded-full bg-white" />
            <span className="block h-[2.5px] w-6 rounded-full bg-white" />
          </button>
          <h2 className="qs-gold-text text-2xl font-extrabold tracking-tight">
            القائمة
          </h2>
        </div>

        <span
          aria-hidden="true"
          className="mx-5 block h-px bg-[linear-gradient(90deg,transparent,rgba(201,160,74,0.6),transparent)]"
        />

        <nav className="relative mt-4 flex flex-col gap-1 px-3">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={close}
              className="group relative block rounded-lg px-4 py-3 text-right text-xl font-bold text-white/95 transition-colors hover:bg-white/8 hover:text-[#f0d175]"
            >
              <span
                aria-hidden="true"
                className="absolute right-0 top-1/2 h-0 w-[3px] -translate-y-1/2 rounded-full bg-[#c9a04a] transition-all duration-200 group-hover:h-7"
              />
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
}
