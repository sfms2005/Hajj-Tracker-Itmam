export const metadata = {
  title: "من نحن - شركة السلام المتحدة",
  description:
    "شركة السلام المتحدة لخدمات حجاج الداخل، شركة وطنية مقرها مكة المكرمة بخبرة تتجاوز ربع قرن في خدمة ضيوف الرحمن.",
};

export default function AboutPage() {
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
          من نحن
        </h1>

        <h2 className="mt-10 text-2xl font-bold text-[#6b4a14] sm:text-[1.625rem]">
          شركة السلام المتحدة لخدمات حجاج الداخل
        </h2>

        <div className="mt-10 space-y-7 text-[17px] font-medium leading-[2.05] text-[#2b2b2b] sm:text-[1.125rem] sm:leading-[2.1]">
          <p>
            شركة وطنية متخصصة في خدمات حجاج الداخل، ومقرها الرئيسي مكة المكرمة،
            تشرّفت بخدمة ضيوف الرحمن لأكثر من{" "}
            <strong className="font-extrabold text-[#6b4a14]">ربع قرن</strong>.
          </p>

          <p>
            تعتمد الشركة على فريق متخصص ومحترف من الكفاءات المؤهلة في مجال إدارة
            الحجاج والحشود، حرصاً منها على تقديم خدمة راقية تليق بضيوف بيت الله.
          </p>

          <p>
            وتوظّف{" "}
            <strong className="font-extrabold text-[#6b4a14]">
              أحدث الوسائل التقنية
            </strong>{" "}
            للتواصل الفعّال مع الحجاج قبل الموسم وأثناءه، عبر الرسائل النصية،
            قناة تليقرام، الموقع الإلكتروني، وحساب الشركة على منصة X.
          </p>

          <p>
            وتتميّز السلام بموقعها المميّز في{" "}
            <strong className="font-extrabold text-[#6b4a14]">
              أبراج منى العقارية
            </strong>{" "}
            ذات المسار الخاص لمواقع رمي الجمرات، وبامتلاكها لأسطول من عربات
            الجولف الخاصة لإيصال الحجاج بكل يسر إلى مبتغاهم في مشعر منى.
          </p>
        </div>

        <section className="relative z-10 mt-12 rounded-2xl bg-white px-5 py-4 shadow-[0_8px_20px_rgba(0,0,0,0.05)]">
          <h3 className="text-[11px] font-bold text-neutral-500">المطوّرة</h3>
          <p className="mt-0.5 text-sm font-extrabold text-[#6b4a14]">
            ساره السبيعي
          </p>
        </section>
      </div>
    </main>
  );
}
