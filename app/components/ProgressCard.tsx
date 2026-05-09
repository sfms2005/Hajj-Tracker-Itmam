interface Props {
  percentage: number;
}

export default function ProgressCard({ percentage }: Props) {
  const safePercent = Math.max(0, Math.min(100, percentage));

  return (
    <div className="rounded-2xl border border-[#c9a04a]/20 bg-white px-4 py-3 shadow-[0_8px_24px_rgba(26,22,18,0.07),0_1px_3px_rgba(0,0,0,0.04)]">
      <div className="flex items-center gap-2.5">
        <div className="relative h-2.5 w-full overflow-hidden rounded-full bg-[#ebe4d2]">
          <div
            className="qs-progress-fill h-full rounded-full transition-[width] duration-500 ease-out"
            style={{ width: `${safePercent}%` }}
          />
        </div>
        <span className="min-w-11 text-left text-sm font-extrabold text-[#1a1612]">
          %{safePercent}
        </span>
      </div>
    </div>
  );
}
