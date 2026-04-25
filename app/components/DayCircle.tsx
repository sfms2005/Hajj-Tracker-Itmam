import Link from "next/link";
import type { Stage } from "@/data/stages";

interface Props {
  stage: Stage;
  isActive?: boolean;
}

export default function DayCircle({ stage, isActive }: Props) {
  const base =
    "flex flex-col items-center justify-center rounded-full text-center leading-tight transition-all duration-200 hover:scale-[1.04] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d1ae37]/60";

  const activeStyle =
    "h-[120px] w-[120px] bg-dark-gradient text-[#e6c96a] ring-2 ring-[#d1ae37]/70 shadow-[0_14px_30px_rgba(31,31,29,0.32),0_0_0_4px_rgba(209,174,55,0.15)]";
  const idleStyle =
    "h-[108px] w-[108px] border border-[#A6A7AB]/40 bg-white text-[#1f1f1d] hover:border-[#d1ae37] hover:shadow-[0_8px_20px_rgba(209,174,55,0.18)]";

  return (
    <Link
      href={`/day/${stage.id}`}
      aria-label={stage.title}
      className={`${base} ${isActive ? activeStyle : idleStyle}`}
    >
      <span
        className={`font-extrabold leading-none ${
          isActive ? "text-3xl" : "text-xl"
        }`}
      >
        {stage.id}
      </span>
      <span
        className={`mt-1 px-2 font-bold ${
          isActive ? "text-[12px]" : "text-[10px] text-[#535252]"
        }`}
      >
        {stage.title}
      </span>
    </Link>
  );
}
