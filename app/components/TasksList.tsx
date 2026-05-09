"use client";

import { useEffect, useState } from "react";

interface Props {
  stageId: number;
  tasks: string[];
}

export default function TasksList({ stageId, tasks }: Props) {
  const storageKey = `hajj-tasks-${stageId}`;
  const [checked, setChecked] = useState<boolean[]>(() =>
    tasks.map(() => false),
  );
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(storageKey);
      if (raw) {
        const stored = JSON.parse(raw) as boolean[];
        if (Array.isArray(stored) && stored.length === tasks.length) {
          setChecked(stored);
        }
      }
    } catch {}
    setHydrated(true);
  }, [storageKey, tasks.length]);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(storageKey, JSON.stringify(checked));
    } catch {}
  }, [checked, hydrated, storageKey]);

  const toggle = (i: number) => {
    setChecked((prev) => {
      const next = [...prev];
      next[i] = !next[i];
      return next;
    });
  };

  return (
    <ul className="overflow-hidden rounded-2xl border border-[#c9a04a]/15 bg-white shadow-[0_8px_24px_rgba(26,22,18,0.06),0_1px_3px_rgba(0,0,0,0.04)]">
      {tasks.map((task, i) => {
        const isChecked = checked[i];
        return (
          <li
            key={i}
            className="flex items-center gap-3 border-b border-[#ebe4d2] px-4 py-3.5 last:border-b-0"
          >
            <p
              className={`flex-1 text-right text-[14px] font-semibold transition-colors duration-200 ${
                isChecked
                  ? "text-neutral-400 line-through"
                  : "text-[#1a1612]"
              }`}
            >
              {task}
            </p>

            <button
              type="button"
              role="checkbox"
              aria-checked={isChecked}
              aria-label={task}
              onClick={() => toggle(i)}
              className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md border-2 transition-all duration-200 active:scale-90 ${
                isChecked
                  ? "scale-105 border-transparent bg-[linear-gradient(135deg,#0d0b09,#1a1612,#2a241e)] shadow-[inset_0_0_0_1px_rgba(201,160,74,0.45)]"
                  : "border-[#c9a04a] bg-white hover:bg-[#c9a04a]/12"
              }`}
            >
              <svg
                viewBox="0 0 20 20"
                fill="none"
                stroke="#f0d175"
                strokeWidth="3"
                className={`h-4 w-4 transition-all duration-200 ${
                  isChecked ? "scale-100 opacity-100" : "scale-50 opacity-0"
                }`}
                aria-hidden="true"
              >
                <path
                  d="M5 10l3 3 7-7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </li>
        );
      })}
    </ul>
  );
}
