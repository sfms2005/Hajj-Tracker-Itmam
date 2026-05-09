export const metadata = {
  title: "من نحن - شركة قافلة الإتمام للحج",
  description:
    "شركة قافلة الإتمام للحج، شركة وطنية متخصصة في خدمات حجاج الداخل، تشرّفت بخدمة ضيوف الرحمن بأعلى معايير الجودة والاحترافية.",
};

export default function AboutPage() {
  return (
    <main className="relative isolate overflow-hidden px-5 pt-4 pb-10 sm:px-8">
      <div
        className="pointer-events-none absolute left-1/2 top-[42%] z-0 -translate-x-1/2 -translate-y-1/2"
        aria-hidden="true"
      >
        <div className="h-[min(78vw,22rem)] w-[min(78vw,22rem)] rotate-45 rounded-[2.75rem] bg-[linear-gradient(135deg,rgba(201,160,74,0.18),rgba(216,214,208,0.22))]" />
      </div>
      <div
        className="pointer-events-none absolute -top-10 right-0 z-0 h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(201,160,74,0.18),transparent_70%)]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-lg text-right">
        <h1 className="inline-block border-b-[3px] border-[#c9a04a] pb-1 text-[2.25rem] font-extrabold leading-tight tracking-tight text-[#1a1612] sm:text-5xl">
          من نحن
        </h1>

        <h2 className="mt-10 text-2xl font-bold text-[#1a1612] sm:text-[1.625rem]">
          شركة قافلة الإتمام للحج
        </h2>
        <span className="mt-3 block h-px w-24 bg-[linear-gradient(90deg,#a07628,#c9a04a,#a07628)]" />

        <div className="mt-8 space-y-7 text-[17px] font-medium leading-[2.05] text-[#1a1612] sm:text-[1.125rem] sm:leading-[2.1]">
          <p>
            شركة وطنية متخصصة في خدمات حجاج الداخل، ومقرها الرئيسي مكة المكرمة،
            تشرّفت بخدمة ضيوف الرحمن لأكثر من{" "}
            <strong className="qs-gold-text font-extrabold">ربع قرن</strong>.
          </p>

          <p>
            تعتمد الشركة على فريق متخصص ومحترف من الكفاءات المؤهلة في مجال إدارة
            الحجاج والحشود، حرصاً منها على تقديم خدمة راقية تليق بضيوف بيت الله.
          </p>

          <p>
            وتوظّف{" "}
            <strong className="qs-gold-text font-extrabold">
              أحدث الوسائل التقنية
            </strong>{" "}
            للتواصل الفعّال مع الحجاج قبل الموسم وأثناءه، عبر الرسائل النصية،
            قناة تليقرام، الموقع الإلكتروني، وحساب الشركة على منصة X.
          </p>

          <p>
            وتتميّز قافلة الإتمام بموقعها المميّز في{" "}
            <strong className="qs-gold-text font-extrabold">
              أبراج منى العقارية
            </strong>{" "}
            ذات المسار الخاص لمواقع رمي الجمرات، وبامتلاكها لأسطول من عربات
            الجولف الخاصة لإيصال الحجاج بكل يسر إلى مبتغاهم في مشعر منى.
          </p>
        </div>

        <section className="relative z-10 mt-12 overflow-hidden rounded-2xl border border-[#c9a04a]/20 bg-white px-5 py-4 shadow-[0_8px_24px_rgba(26,22,18,0.07),0_1px_3px_rgba(0,0,0,0.04)]">
          <span
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-[2px] bg-[linear-gradient(90deg,transparent,#c9a04a,transparent)]"
          />
          <h3 className="text-[11px] font-bold tracking-wider text-[#a07628]">
            المطوّرة
          </h3>
          <p className="mt-0.5 text-sm font-extrabold text-[#1a1612]">
            ساره السبيعي
          </p>
        </section>
      </div>
    </main>
  );
}
