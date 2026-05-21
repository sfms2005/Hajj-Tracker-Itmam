"use client";

import { useEffect, useState } from "react";
import type { HajjTask } from "@/data/dayDetails";

interface Props {
  stageId: number;
  tasks: HajjTask[];
}

const rulingStyles: Record<string, string> = {
  ركن: "bg-[#1a1612] text-[#f0d175]",
  "ركن الحج الأعظم":
    "bg-[#1a1612] text-[#f0d175] ring-1 ring-[#c9a04a] shadow-[0_0_12px_rgba(201,160,74,0.35)]",
  "ركن للعمرة": "bg-[#1a1612] text-[#f0d175]",
  واجب: "bg-[#a07628] text-white",
  سنة: "bg-[#2d4a35] text-[#e8f0ea]",
  مستحب: "bg-[#c9a04a]/18 text-[#7a5c18] border border-[#c9a04a]/35",
  مباح: "bg-neutral-100 text-neutral-600 border border-neutral-200",
};

function rulingClass(ruling: string): string {
  return rulingStyles[ruling] ?? "bg-neutral-100 text-neutral-700";
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

  const doneCount = checked.filter(Boolean).length;

  return (
    <section dir="rtl" className="flex flex-col gap-3 text-right">
      <div className="flex items-center justify-between px-1">
        <h2 className="text-[17px] font-extrabold text-[#1a1612]">
          أعمال اليوم
        </h2>
        <span dir="ltr" className="rounded-full bg-[#c9a04a]/15 px-2.5 py-0.5 text-xs font-bold text-[#a07628]">
          {doneCount}/{tasks.length}
        </span>
      </div>

      <ul className="flex flex-col gap-3">
        {tasks.map((task, i) => {
          const isChecked = checked[i];
          return (
            <li
              key={i}
              className={`overflow-hidden rounded-2xl border transition-all duration-200 ${
                isChecked
                  ? "border-[#c9a04a]/25 bg-[#fbf6e8]/80 opacity-80"
                  : "border-[#c9a04a]/20 bg-white shadow-[0_8px_24px_rgba(26,22,18,0.06),0_1px_3px_rgba(0,0,0,0.04)]"
              }`}
            >
              <div className="flex items-start gap-3 px-4 py-3.5">
                <div className="min-w-0 flex-1">
                  <p
                    className={`text-[15px] font-extrabold leading-snug transition-colors ${
                      isChecked
                        ? "text-neutral-400 line-through"
                        : "text-[#1a1612]"
                    }`}
                  >
                    {task.title}
                  </p>

                  {(task.appliesTo || task.ruling) && (
                    <div className="mt-2 flex flex-wrap justify-start gap-1.5">
                      {task.appliesTo && (
                        <span className="rounded-md bg-[#f7f1e0] px-2 py-0.5 text-[11px] font-bold text-[#1a1612]/75 ring-1 ring-[#ebe4d2]">
                          {task.appliesTo}
                        </span>
                      )}
                      {task.ruling && (
                        <span
                          className={`rounded-md px-2 py-0.5 text-[11px] font-extrabold ${rulingClass(task.ruling)}`}
                        >
                          الحكم: {task.ruling}
                        </span>
                      )}
                    </div>
                  )}
                </div>

                <button
                  type="button"
                  role="checkbox"
                  aria-checked={isChecked}
                  aria-label={task.title}
                  onClick={() => toggle(i)}
                  className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md border-2 transition-all duration-200 active:scale-90 ${
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
              </div>

              {(task.details?.length || task.note) && (
                <div
                  dir="rtl"
                  className={`border-t border-[#ebe4d2]/80 px-4 pb-3.5 pt-2 text-right ${
                    isChecked ? "opacity-60" : ""
                  }`}
                >
                  {task.details && task.details.length > 0 && (
                    <ul className="space-y-1.5 pr-1">
                      {task.details.map((line, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2 text-[13px] font-medium leading-relaxed text-[#1a1612]/80"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#c9a04a]"
                          />
                          <span className="flex-1">{line}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {task.note && (
                    <p
                      className={`text-right text-[12px] font-semibold leading-relaxed text-[#a07628] ${
                        task.details?.length ? "mt-2" : ""
                      }`}
                    >
                      {task.note}
                    </p>
                  )}
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
