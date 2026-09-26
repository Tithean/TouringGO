import Link from "next/link";
import { Star } from "lucide-react";

export function Stars({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5 text-yellow-400">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className="h-3.5 w-3.5"
          fill={i < count ? "currentColor" : "none"}
          strokeWidth={1.5}
        />
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
      {viewAllHref && (
        <Link
          href={viewAllHref}
          className="text-sm font-semibold text-brand-600 hover:underline"
        >
          View all →
        </Link>
      )}
    </div>
  );
}
