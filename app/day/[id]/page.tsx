import Link from "next/link";
import { notFound } from "next/navigation";
import { getStageDetails, dayDetails } from "@/data/dayDetails";
import DescriptionCard from "@/app/components/DescriptionCard";
import TasksList from "@/app/components/TasksList";
import DuasSection from "@/app/components/DuasSection";

export function generateStaticParams() {
  return dayDetails.map((d) => ({ id: String(d.id) }));
}

export default async function DayPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const stageId = Number.parseInt(id, 10);
  if (Number.isNaN(stageId)) notFound();

  const details = getStageDetails(stageId);
  if (!details) notFound();

  return (
    <main className="pb-10">
      <header className="px-5 pt-0 pb-4 text-center">
        <p className="text-sm font-semibold text-neutral-600">
          أنت الآن تشاهد
        </p>
        <h1 className="mt-1 qs-gold-underline inline-block pb-2 text-2xl font-extrabold leading-tight text-[#1a1612] sm:text-3xl">
          {details.title}
        </h1>
        <p className="mt-2 text-sm font-bold text-[#1a1612]/75">
          من رحلة الحج
        </p>
      </header>

      <div className="flex flex-col gap-5 px-5">
        <DescriptionCard description={details.description} />

        {details.introNote && (
          <p className="rounded-2xl border border-dashed border-[#c9a04a]/40 bg-[#fbf6e8] px-4 py-3 text-center text-[14px] font-bold leading-relaxed text-[#1a1612]">
            {details.introNote}
          </p>
        )}

        <TasksList stageId={stageId} tasks={details.tasks} />

        <DuasSection duas={details.duas} />

        <Link
          href="/"
          className="mt-2 flex items-center justify-center gap-3 rounded-2xl bg-[linear-gradient(135deg,#0d0b09,#1a1612_50%,#2a241e)] px-5 py-4 text-base font-bold text-[#f7f1e0] shadow-[0_12px_28px_rgba(13,11,9,0.35),inset_0_0_0_1px_rgba(201,160,74,0.28)] transition-all hover:brightness-115 active:scale-[0.99]"
        >
          <span>العودة للصفحة الرئيسية</span>
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#c9a04a]/20 ring-1 ring-[#c9a04a]/40">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              className="h-4 w-4"
              aria-hidden="true"
            >
              <path
                d="M14 6l-6 6 6 6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </Link>
      </div>
    </main>
  );
}
