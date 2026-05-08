import Link from "next/link";
import type { Stage } from "@/data/stages";

interface Props {
  stage: Stage;
  isActive?: boolean;
}

export default function DayCircle({ stage, isActive }: Props) {
  const base =
    "flex flex-col items-center justify-center rounded-full text-center leading-tight transition-all duration-200 hover:scale-[1.04] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a04a]/50";

  const activeStyle =
    "h-[108px] w-[108px] bg-[linear-gradient(135deg,#6b4a14,#8b6018)] text-white shadow-[0_10px_24px_rgba(107,74,20,0.32),0_0_0_4px_rgba(201,160,74,0.18),0_0_28px_rgba(201,160,74,0.35)] ring-2 ring-[#c9a04a]/80 ring-offset-2 ring-offset-[#faf6ed]";
  const idleStyle =
    "h-[96px] w-[96px] bg-white text-[#6b4a14] shadow-[0_6px_18px_rgba(139,96,24,0.08),0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_22px_rgba(139,96,24,0.12)] border border-[#c9a04a]/15";

  return (
    <Link
      href={`/day/${stage.id}`}
      aria-label={stage.title}
      className={`${base} ${isActive ? activeStyle : idleStyle}`}
    >
      <span
        className={`font-extrabold leading-none ${
          isActive ? "text-2xl" : "text-lg"
        }`}
      >
        {stage.id}
      </span>
      <span
        className={`mt-1 px-2 font-bold ${
          isActive ? "text-[11px]" : "text-[9px]"
        }`}
      >
        {stage.title}
      </span>
    </Link>
  );
}
