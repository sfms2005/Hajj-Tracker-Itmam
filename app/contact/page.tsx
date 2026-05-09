import Button from "../components/Button";

export const metadata = {
  title: "تواصلوا معنا - شركة قافلة الإتمام للحج",
  description:
    "الموقع الرسمي، الهاتف، البريد الإلكتروني، وحساب شركة قافلة الإتمام للحج على منصة X.",
};

const X_PROFILE = "https://x.com/itmamm3";
const PHONE_DISPLAY = "0505269498";
const PHONE_TEL = "+966505269498";
const EMAIL = "itmam4haj@gmail.com";

export default function ContactPage() {
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
          تواصلوا معنا
        </h1>

        <p className="mt-10 text-[17px] font-medium leading-[2.05] text-[#1a1612] sm:text-[1.125rem] sm:leading-[2.1]">
          للاستفسارات والتواصل المتعلق بخدمات حجاج الداخل وشركة قافلة الإتمام
          للحج، اختر الوسيلة المناسبة أدناه.
        </p>

        <section
          className="mt-8 flex flex-col gap-3"
          aria-label="قنوات التواصل"
        >
          <Button
            href={`tel:${PHONE_TEL}`}
            variant="primary"
            native
            icon={<PhoneIcon />}
          >
            <>
              الهاتف:{" "}
              <span dir="ltr" className="tabular-nums">
                {PHONE_DISPLAY}
              </span>
            </>
          </Button>

          <Button
            href={`mailto:${EMAIL}`}
            variant="primary"
            native
            icon={<MailIcon />}
            className="flex-wrap gap-x-2 py-5 text-[0.95rem] sm:text-base"
          >
            <span dir="ltr" className="break-all font-bold">
              {EMAIL}
            </span>
          </Button>

          <Button
            href={X_PROFILE}
            variant="primary"
            external
            icon={<XIcon />}
          >
            حساب الإتمام على
          </Button>
        </section>
      </div>
    </main>
  );
}

function PhoneIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5 shrink-0"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5 shrink-0"
      aria-hidden="true"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5 shrink-0"
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}
