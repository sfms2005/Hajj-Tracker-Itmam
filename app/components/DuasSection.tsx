"use client";

import { useEffect, useRef, useState } from "react";

interface Props {
  duas: string[];
}

export default function DuasSection({ duas }: Props) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const node = scrollerRef.current;
    if (!node) return;

    const handleScroll = () => {
      const itemWidth = node.scrollWidth / duas.length;
      const index = Math.round(node.scrollLeft / itemWidth);
      setActiveIndex(Math.abs(index));
    };

    node.addEventListener("scroll", handleScroll, { passive: true });
    return () => node.removeEventListener("scroll", handleScroll);
  }, [duas.length]);

  return (
    <section className="flex flex-col gap-3">
      <h2 className="text-center text-[15px] font-extrabold text-[#1f1f1d]">
        أدعية مقترحة لهذا اليوم
      </h2>

      <div
        ref={scrollerRef}
        className="flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {duas.map((dua, i) => (
          <article
            key={i}
            className="shadow-elegant flex min-h-[150px] min-w-[68%] snap-center flex-col items-center justify-center gap-2 rounded-2xl border border-[#A6A7AB]/25 bg-white px-4 py-5 text-center"
          >
            <span
              aria-hidden="true"
              className="text-gold-gradient text-3xl leading-none font-extrabold"
            >
              &ldquo;
            </span>
            <p className="text-[14px] font-semibold leading-relaxed text-[#1f1f1d]">
              {dua}
            </p>
            <span
              aria-hidden="true"
              className="text-gold-gradient text-3xl leading-none font-extrabold"
            >
              &rdquo;
            </span>
          </article>
        ))}
      </div>

      <div className="flex items-center justify-center gap-1.5">
        {duas.map((_, i) => (
          <span
            key={i}
            className={`h-1.5 rounded-full transition-all duration-200 ${
              i === activeIndex
                ? "bg-gold-gradient w-4"
                : "w-1.5 bg-[#A6A7AB]/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
