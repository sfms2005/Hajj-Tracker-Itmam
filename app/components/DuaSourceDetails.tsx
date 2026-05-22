interface Props {
  source: string;
  label?: string;
}

export default function DuaSourceDetails({
  source,
  label = "مصدر الدعاء والحديث",
}: Props) {
  return (
    <details dir="rtl" className="group mt-3 border-t border-[#ebe4d2]/80 pt-2">
      <summary className="flex cursor-pointer list-none items-center justify-end gap-1.5 text-[12px] font-bold text-[#a07628] transition-colors hover:text-[#7a5c18] [&::-webkit-details-marker]:hidden">
        <span>{label}</span>
        <ChevronIcon />
      </summary>
      <p className="mt-2 text-right text-[12px] font-medium leading-[1.9] text-[#1a1612]/70">
        {source}
      </p>
    </details>
  );
}

function ChevronIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 shrink-0 transition-transform duration-200 group-open:rotate-180"
      aria-hidden="true"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}
