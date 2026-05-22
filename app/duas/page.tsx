import Link from "next/link";
import DuaCard from "../components/DuaCard";
import ScrollToTopButton from "../components/ScrollToTopButton";
import RandomDuaButton from "../components/RandomDuaButton";
import { duaCategories } from "@/data/duas";

export const metadata = {
  title: "أدعيتي - شركة قافلة الإتمام للحج",
  description:
    "أدعية من القرآن الكريم والسنة النبوية والتعوذات ودعاء الصحابة رضي الله عنهم",
};

export default function DuasPage() {
  const totalDuas = duaCategories.reduce(
    (sum, category) => sum + category.duas.length,
    0,
  );

  return (
    <main className="px-5 pb-10 pt-0">
      <Link
        href="/"
        className="inline-flex items-center gap-2 rounded-xl px-2 py-2 text-sm font-bold text-[#1a1612] transition-colors hover:bg-[#1a1612]/5"
      >
        <ArrowRightIcon />
        <span>الصفحة الرئيسية</span>
      </Link>

      <header className="mt-2 text-center">
        <h1 className="qs-gold-underline inline-block pb-2 text-3xl font-extrabold leading-tight text-[#1a1612] sm:text-4xl">
          أدعيتي
        </h1>
        <p className="mt-2 text-sm font-semibold text-neutral-600">
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
              <span className="h-2 w-2 shrink-0 rounded-full bg-[linear-gradient(135deg,#a07628,#f0d175,#a07628)] shadow-[0_0_8px_rgba(201,160,74,0.5)]" />
              <h2 className="text-[17px] font-extrabold text-[#1a1612]">
                {category.title}
              </h2>
              <span className="h-px flex-1 bg-[linear-gradient(90deg,#ebe4d2,transparent)]" />
            </div>

            <div className="flex flex-col gap-2.5">
              {category.duas.map((dua, i) => (
                <DuaCard key={i} dua={dua} />
              ))}
            </div>
          </section>
        ))}
      </div>

      <Link
        href="/"
        className="mt-10 flex w-full items-center justify-center gap-3 rounded-2xl bg-[linear-gradient(135deg,#0d0b09,#1a1612_50%,#2a241e)] px-5 py-4 text-base font-bold text-[#f7f1e0] shadow-[0_12px_28px_rgba(13,11,9,0.35),inset_0_0_0_1px_rgba(201,160,74,0.28)] transition-all hover:brightness-115 active:scale-[0.99]"
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
