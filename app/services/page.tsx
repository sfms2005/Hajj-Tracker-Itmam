import { getServicesRows } from "@/data/services";

export const metadata = {
  title: "خدماتنا - شركة قافلة الإتمام للحج",
  description:
    "خدمات النقل والسكن والإشراف الميداني وخدمة الحاج على مدار الساعة وغيرها من خدمات شركة قافلة الإتمام للحج.",
};

export default function ServicesPage() {
  const [row1, row2] = getServicesRows();

  return (
    <main className="relative isolate overflow-hidden px-5 pt-4 pb-12 sm:px-8">
      <div
        className="pointer-events-none absolute left-1/2 top-[46%] z-0 -translate-x-1/2 -translate-y-1/2"
        aria-hidden="true"
      >
        <div className="h-[min(88vw,24rem)] w-[min(88vw,24rem)] rotate-45 rounded-[2.75rem] bg-[linear-gradient(135deg,rgba(201,160,74,0.16),rgba(216,214,208,0.22))]" />
      </div>
      <div
        className="pointer-events-none absolute -top-10 right-0 z-0 h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(201,160,74,0.18),transparent_70%)]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-2xl text-right">
        <h1 className="inline-block border-b-[3px] border-[#c9a04a] pb-1 text-[2.25rem] font-extrabold leading-tight tracking-tight text-[#1a1612] sm:text-5xl">
          خدماتنا
        </h1>

        <ul
          className="mt-12 list-none grid grid-cols-2 gap-x-3 gap-y-10 sm:grid-cols-4 sm:gap-x-2 sm:gap-y-12"
          aria-label="قائمة الخدمات — الصف الأول"
        >
          {row1.map((label) => (
            <li key={label} className="list-none">
              <ServiceCard label={label} />
            </li>
          ))}
        </ul>

        <ul
          className="mt-10 list-none flex flex-wrap justify-center gap-x-4 gap-y-10 sm:mt-12 sm:gap-x-6"
          aria-label="قائمة الخدمات — الصف الثاني"
        >
          {row2.map((label) => (
            <li
              key={label}
              className="list-none w-[calc(50%-0.5rem)] max-w-[200px] sm:w-[28%] sm:max-w-none"
            >
              <ServiceCard label={label} />
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

function ServiceCard({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center gap-3 text-center sm:gap-3.5">
      <span className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,#0d0b09,#1a1612_50%,#2a241e)] text-[#f0d175] shadow-[0_8px_20px_rgba(13,11,9,0.32),inset_0_0_0_1px_rgba(201,160,74,0.4)] sm:h-14 sm:w-14">
        <CheckIcon />
      </span>
      <span className="text-[15px] font-semibold leading-snug text-[#1a1612] sm:text-[1rem]">
        {label}
      </span>
    </div>
  );
}

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-7 w-7 sm:h-7 sm:w-7"
      aria-hidden="true"
    >
      <path d="m5 12.5 4 4 10-11" />
    </svg>
  );
}
