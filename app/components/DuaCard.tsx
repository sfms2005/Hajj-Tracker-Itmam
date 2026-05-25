"use client";

import { useState } from "react";
import type { DuaItem } from "@/data/duas";

interface Props {
  dua: DuaItem;
}

export default function DuaCard({ dua }: Props) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(dua.text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = dua.text;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      try {
        document.execCommand("copy");
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      } catch {
        // ignore
      }
      document.body.removeChild(textarea);
    }
  };

  return (
    <article
      dir="rtl"
      className="flex items-start justify-between gap-3 rounded-2xl border border-[#c9a04a]/15 bg-white px-4 py-4 shadow-[0_8px_24px_rgba(26,22,18,0.06),0_1px_3px_rgba(0,0,0,0.04)]"
    >
      <div className="min-w-0 flex-1 text-right">
        <p className="text-[16px] font-bold leading-[1.85] text-[#1a1612]">
          {dua.text}
        </p>
        {dua.hint && (
          <p className="mt-2 text-[11px] font-semibold leading-relaxed text-[#a07628]/80">
            {dua.hint}
          </p>
        )}
      </div>

      <button
        type="button"
        onClick={handleCopy}
        aria-label={copied ? "تم النسخ" : "نسخ الدعاء"}
        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border transition-all ${
          copied
            ? "border-transparent bg-[linear-gradient(135deg,#0d0b09,#1a1612,#2a241e)] text-[#f0d175] shadow-[inset_0_0_0_1px_rgba(201,160,74,0.4)]"
            : "border-[#c9a04a] bg-transparent text-[#1a1612] hover:bg-[#c9a04a]/12 active:scale-95"
        }`}
      >
        {copied ? <CheckIcon /> : <CopyIcon />}
      </button>
    </article>
  );
}

function CopyIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-[18px] w-[18px]"
      aria-hidden="true"
    >
      <rect x="9" y="9" width="11" height="11" rx="2" />
      <path d="M5 15V6a2 2 0 0 1 2-2h9" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-[18px] w-[18px]"
      aria-hidden="true"
    >
      <path d="m5 12.5 4.5 4.5L19 7.5" />
    </svg>
  );
}
