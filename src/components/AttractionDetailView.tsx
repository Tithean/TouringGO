import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { slugifyDestination } from "@/services/destinationRoute";
import getAttractionById from "@/services/getAttractionById";

function formatEntryFee(value?: number) {
  if (typeof value !== "number" || Number.isNaN(value)) {
    return "Free";
  }

  return value > 0 ? `$${value}` : "Free";
}

export default async function AttractionDetailView({
  code,
  id,
}: {
  code: string;
  id: string;
}) {
  const attractionId = Number(decodeURIComponent(id || ""));

  if (!Number.isFinite(attractionId) || attractionId <= 0) {
    notFound();
  }

  const attraction = await getAttractionById(attractionId);

  if (!attraction) {
    notFound();
  }

  const provinceName =
    attraction.province?.nameEn || attraction.province?.nameKh || "Destination";
  const provinceSlug = attraction.province
    ? slugifyDestination(
        attraction.province.nameEn ||
          attraction.province.nameKh ||
          String(attraction.province.id),
      )
    : slugifyDestination(decodeURIComponent(code || "") || "destination");

  const imageUrl =
    attraction.imageUrls?.[0] ||
    attraction.province?.imageUrl ||
    "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80";

  const title = attraction.nameEn || attraction.nameKh || "Attraction";
  const description =
    attraction.descriptionEn ||
    attraction.descriptionKh ||
    "No description available.";

  return (
    <main className="min-h-screen bg-slate-100 text-slate-900">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <nav className="mb-6 text-sm text-slate-500">
          <div className="flex flex-wrap items-center gap-2">
            <Link
              href="/"
              className="font-medium text-slate-600 hover:text-blue-600"
            >
              Home
            </Link>
            <span>/</span>
            <Link
              href="/destination"
              className="font-medium text-slate-600 hover:text-blue-600"
            >
              Destinations
            </Link>
            <span>/</span>
            <Link
              href={`/destination/${provinceSlug}`}
              className="font-medium text-slate-600 hover:text-blue-600"
            >
              {provinceName}
            </Link>
            <span>/</span>
            <span className="text-slate-700">{title}</span>
          </div>
        </nav>

        <article className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm">
          <div className="relative h-[360px] w-full bg-slate-200">
            <Image
              src={imageUrl}
              alt={title}
              fill
              unoptimized
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/10" />

            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-blue-700">
                  {attraction.category}
                </span>
                {attraction.rating > 0 && (
                  <span className="rounded-full bg-amber-100 px-3 py-1 text-sm font-semibold text-amber-700">
                    ★ {attraction.rating}
                  </span>
                )}
              </div>

              <h1 className="mt-4 max-w-3xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
                {title}
              </h1>
            </div>
          </div>

          <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.4fr_0.8fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
                About this place
              </p>
              <h2 className="mt-3 text-2xl font-extrabold text-slate-900">
                Explore {title}
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-600">
                {description}
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
                    Location
                  </p>
                  <p className="mt-2 text-sm font-semibold text-slate-800">
                    {attraction.address || provinceName}
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
                    Open Hours
                  </p>
                  <p className="mt-2 text-sm font-semibold text-slate-800">
                    {attraction.openingHours || "Open daily"}
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
                    Entry
                  </p>
                  <p className="mt-2 text-sm font-semibold text-slate-800">
                    {formatEntryFee(attraction.entryFee)}
                  </p>
                </div>
              </div>
            </div>

            <aside className="rounded-3xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-slate-500">
                Quick info
              </p>

              <div className="mt-4 space-y-4 text-sm text-slate-700">
                <div className="flex items-start justify-between gap-3 border-b border-slate-200 pb-3">
                  <span className="text-slate-500">Province</span>
                  <span className="font-semibold text-slate-800">
                    {provinceName}
                  </span>
                </div>

                <div className="flex items-start justify-between gap-3 border-b border-slate-200 pb-3">
                  <span className="text-slate-500">Category</span>
                  <span className="font-semibold text-slate-800">
                    {attraction.category}
                  </span>
                </div>

                <div className="flex items-start justify-between gap-3 border-b border-slate-200 pb-3">
                  <span className="text-slate-500">Rating</span>
                  <span className="font-semibold text-amber-600">
                    {attraction.rating > 0
                      ? `★ ${attraction.rating}`
                      : "No rating"}
                  </span>
                </div>

                <div className="flex items-start justify-between gap-3">
                  <span className="text-slate-500">Entry fee</span>
                  <span className="font-semibold text-slate-800">
                    {formatEntryFee(attraction.entryFee)}
                  </span>
                </div>
              </div>

              <button
                type="button"
                className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-blue-600 px-4 py-4 text-base font-bold text-white shadow-sm transition hover:bg-blue-700"
              >
                Explore
              </button>
            </aside>
          </div>
        </article>
      </div>
    </main>
  );
}
