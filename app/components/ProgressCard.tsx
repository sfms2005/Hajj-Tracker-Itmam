interface Props {
  percentage: number;
}

export default function ProgressCard({ percentage }: Props) {
  const safePercent = Math.max(0, Math.min(100, percentage));

  return (
    <div className="shadow-elegant rounded-2xl border border-[#A6A7AB]/20 bg-white px-5 py-4">
      <div className="flex items-center gap-3">
        <div className="relative h-3 w-full overflow-hidden rounded-full bg-[#ece9e3]">
          <div
            className="bg-gold-gradient h-full rounded-full shadow-[inset_0_1px_0_rgba(255,255,255,0.4)] transition-[width] duration-500 ease-out"
            style={{ width: `${safePercent}%` }}
          />
        </div>
        <span className="text-gold-gradient min-w-[3.2rem] text-left text-lg font-extrabold">
          %{safePercent}
        </span>
      </div>
    </div>
  );
}
