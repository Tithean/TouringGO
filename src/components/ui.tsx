import Link from "next/link";

function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-3.5 w-3.5"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden="true"
    >
      <path d="M12 2.75l2.8 5.68 6.27.91-4.53 4.42 1.07 6.24L12 0 6.39 19.99l1.07-6.24L3 9.34l6.27-.91L12 2.75z" />
    </svg>
  );
}

export function Stars({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5 text-yellow-400">
      {Array.from({ length: 5 }).map((_, i) => (
        <StarIcon key={i} filled={i < count} />
      ))}
    </div>
  );
}

export function SectionHeading({
  title,
  viewAllHref,
}: {
  title: string;
  viewAllHref?: string;
}) {
  return (
    <div className="mb-4 flex items-center justify-between">
      <h2 className="text-xl font-bold text-slate-900">{title}</h2>
        <div
          className="text-sm font-semibold text-brand-600 hover:underline"
        >
          View all →
        </div>
    </div>
  );
}
