interface Props {
  description: string;
}

export default function DescriptionCard({ description }: Props) {
  return (
    <div className="rounded-2xl border border-[#c9a04a]/15 bg-white px-5 py-4 shadow-[0_8px_24px_rgba(26,22,18,0.06),0_1px_3px_rgba(0,0,0,0.04)]">
      <h2 className="mb-2 qs-gold-underline inline-block pb-2 text-right text-lg font-extrabold text-[#1a1612]">
        نبذة عن هذه المرحلة
      </h2>
      <p className="text-right text-[14px] leading-relaxed text-[#1a1612]/85">
        {description}
      </p>
    </div>
  );
}
