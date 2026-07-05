interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({
  title,
  subtitle,
}: SectionHeadingProps) {
  return (
    <div className="mb-14 text-center">
      {subtitle && (
        <p className="mb-2 uppercase tracking-[0.3em] text-blue-400">
          {subtitle}
        </p>
      )}

      <h2 className="text-5xl font-bold text-white">
        {title}
      </h2>
    </div>
  );
}    