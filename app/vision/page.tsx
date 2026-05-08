export const metadata = {
  title: "رؤيتنا - شركة السلام المتحدة",
  description:
    "أن نكون شركة رائدة ومتميزة في مجال خدمات الحجاج بأعلى معايير الجودة والاحترافية.",
};

export default function VisionPage() {
  return (
    <main className="relative isolate overflow-hidden px-5 pt-4 pb-10 sm:px-8">
      <div
        className="pointer-events-none absolute left-1/2 top-[42%] z-0 -translate-x-1/2 -translate-y-1/2"
        aria-hidden="true"
      >
        <div className="h-[min(78vw,22rem)] w-[min(78vw,22rem)] rotate-45 rounded-[2.75rem] bg-[#ebe4d2]/40" />
      </div>

      <div className="relative z-10 mx-auto max-w-lg text-right">
        <h1 className="inline-block border-b-[3px] border-[#c9a04a] pb-1 text-[2.25rem] font-extrabold leading-tight tracking-tight text-[#6b4a14] sm:text-5xl">
          رؤيتنا
        </h1>

        <p className="mt-10 text-[17px] font-medium leading-[2.05] text-[#2b2b2b] sm:text-[1.125rem] sm:leading-[2.1]">
          أن نكون شركة{" "}
          <strong className="font-extrabold text-[#6b4a14]">
            رائدة ومتميّزة
          </strong>{" "}
          في مجال خدمات الحجاج، عبر تقديم تجربة حج آمنة وميسّرة تليق بضيوف بيت
          الله الحرام، وفق أعلى معايير الجودة والاحترافية، وبما يحقق تطلعات
          الحجاج وينسجم مع رؤية المملكة 2030.
        </p>
      </div>
    </main>
  );
}
