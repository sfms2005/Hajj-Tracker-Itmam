export default function AboutPage() {
  return (
    <main className="px-5 py-6">
      <header>
        <h1 className="text-gold-gradient text-3xl font-extrabold">من نحن</h1>
        <span
          aria-hidden="true"
          className="bg-gold-gradient mt-2 block h-[2px] w-12 rounded-full"
        />
      </header>

      <div className="shadow-elegant relative mt-5 overflow-hidden rounded-2xl border border-[#A6A7AB]/25 bg-white px-5 py-5">
        <span
          aria-hidden="true"
          className="bg-gold-gradient absolute top-0 right-0 left-0 h-[2px]"
        />
        <p className="leading-relaxed text-[#535252]">
          مبادرة مقدمة من فريق السعادة تساعدك على متابعة رحلة الحج خطوة بخطوة.
        </p>

        <div className="mt-5 flex items-center gap-2 border-t border-[#A6A7AB]/25 pt-4">
          <span className="text-sm font-bold text-[#535252]">المطورة:</span>
          <span className="text-gold-gradient text-sm font-extrabold">
            ساره السبيعي
          </span>
        </div>
      </div>
    </main>
  );
}
