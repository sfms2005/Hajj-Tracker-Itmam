interface Props {
  message: string;
}

export default function MotivationCard({ message }: Props) {
  return (
    <div className="bg-dark-gradient relative flex items-center gap-3 overflow-hidden rounded-2xl px-5 py-4 shadow-[0_10px_28px_rgba(31,31,29,0.22)]">
      <span
        aria-hidden="true"
        className="bg-gold-gradient absolute top-0 right-0 left-0 h-[2px]"
      />
      <span className="flex h-11 w-11 shrink-0 items-center justify-center text-[#d1ae37]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-10 w-10 drop-shadow-[0_2px_6px_rgba(209,174,55,0.45)]"
          aria-hidden="true"
        >
          <path d="M12 21s-7-4.35-7-10a4 4 0 0 1 7-2.65A4 4 0 0 1 19 11c0 5.65-7 10-7 10z" />
        </svg>
      </span>
      <p className="flex-1 text-center text-[17px] font-bold leading-snug text-white">
        {message}
      </p>
    </div>
  );
}
