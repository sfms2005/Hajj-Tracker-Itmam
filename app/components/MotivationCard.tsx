interface Props {
  message: string;
}

export default function MotivationCard({ message }: Props) {
  return (
    <div className="flex items-center gap-2 rounded-2xl border border-[#c9a04a]/20 bg-white px-4 py-3 shadow-[0_8px_24px_rgba(26,22,18,0.07),0_1px_3px_rgba(0,0,0,0.04)]">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="h-7 w-7 drop-shadow-[0_2px_6px_rgba(201,160,74,0.45)]"
          aria-hidden="true"
        >
          <defs>
            <linearGradient
              id="motivation-heart-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#a07628" />
              <stop offset="40%" stopColor="#f0d175" />
              <stop offset="100%" stopColor="#a07628" />
            </linearGradient>
          </defs>
          <path
            fill="url(#motivation-heart-gradient)"
            d="M12 21s-7-4.35-7-10a4 4 0 0 1 7-2.65A4 4 0 0 1 19 11c0 5.65-7 10-7 10z"
          />
        </svg>
      </span>
      <p className="flex-1 text-center text-[14px] font-bold leading-snug text-[#1a1612]">
        {message}
      </p>
    </div>
  );
}
