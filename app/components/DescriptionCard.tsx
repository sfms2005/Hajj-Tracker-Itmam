interface Props {
  description: string;
}

export default function DescriptionCard({ description }: Props) {
  return (
    <div className="shadow-elegant relative overflow-hidden rounded-2xl border border-[#A6A7AB]/25 bg-white px-5 py-4">
      <span
        aria-hidden="true"
        className="bg-gold-gradient absolute top-0 right-0 left-0 h-[2px]"
      />
      <h2 className="text-gold-gradient mb-2 text-right text-lg font-extrabold">
        نبذة عن هذه المرحلة
      </h2>
      <p className="text-right text-[14px] leading-relaxed text-[#535252]">
        {description}
      </p>
    </div>
  );
}
