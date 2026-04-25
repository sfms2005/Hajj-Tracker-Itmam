import Link from "next/link";
import DuaCard from "../components/DuaCard";
import ScrollToTopButton from "../components/ScrollToTopButton";
import RandomDuaButton from "../components/RandomDuaButton";
import { duaCategories } from "@/data/duas";

export const metadata = {
  title: "أدعيتي - Qased",
  description: "مجموعة من الأدعية المختارة لرحلة الحج والحياة اليومية",
};

export default function DuasPage() {
  const totalDuas = duaCategories.reduce(
    (sum, category) => sum + category.duas.length,
    0,
  );

  return (
    <main className="px-5 pt-2 pb-10">
      <Link
        href="/"
        className="inline-flex items-center gap-2 rounded-xl px-2 py-2 text-sm font-bold text-[#1f1f1d] transition-colors hover:bg-[#d1ae37]/10 hover:text-[#d1ae37]"
      >
        <ArrowRightIcon />
        <span>الصفحة الرئيسية</span>
      </Link>

      <header className="mt-2 text-center">
        <h1 className="text-gold-gradient text-3xl font-extrabold leading-tight sm:text-4xl">
          أدعيتي
        </h1>
        <span
          aria-hidden="true"
          className="bg-gold-gradient mx-auto mt-3 block h-[2px] w-12 rounded-full"
        />
        <p className="mt-3 text-sm font-semibold text-[#535252]">
          {totalDuas} دعاءً مختارًا في {duaCategories.length} أبواب
        </p>
      </header>

      <div className="mt-5">
        <RandomDuaButton categories={duaCategories} />
      </div>

      <div className="mt-6 flex flex-col gap-7">
        {duaCategories.map((category) => (
          <section key={category.id} className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <span className="bg-gold-gradient h-2 w-2 shrink-0 rounded-full shadow-[0_0_10px_rgba(209,174,55,0.55)]" />
              <h2 className="text-gold-gradient text-[17px] font-extrabold">
                {category.title}
              </h2>
              <span className="bg-gold-gradient h-px flex-1 opacity-50" />
            </div>

            <div className="flex flex-col gap-2.5">
              {category.duas.map((dua, i) => (
                <DuaCard key={i} text={dua} />
              ))}
            </div>
          </section>
        ))}
      </div>

      <Link
        href="/"
        className="bg-dark-gradient mt-10 flex w-full items-center justify-center gap-3 rounded-2xl px-5 py-4 text-base font-bold text-[#e6c96a] ring-1 ring-[#d1ae37]/50 shadow-[0_12px_30px_rgba(31,31,29,0.32)] transition-all hover:ring-[#d1ae37] hover:shadow-[0_16px_36px_rgba(209,174,55,0.28)]"
      >
        <ArrowRightIcon />
        <span>العودة للصفحة الرئيسية</span>
      </Link>

      <ScrollToTopButton />
    </main>
  );
}

function ArrowRightIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M13 6l6 6-6 6" />
      <path d="M19 12H5" />
    </svg>
  );
}
