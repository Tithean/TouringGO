import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Stars, SectionHeading } from "@/components/ui";
import { slugifyDestination } from "@/services/destinationRoute";
import getProvince from "@/services/getProvince";
import getProvinceByID from "@/services/getprovinceByID";
import getAttraction from "@/services/getAttraction";
import type { Province } from "@/services/provinceType";
import type { Attraction } from "@/services/attractionType";

const IconMapPin = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M12 21s-6-4.35-6-10a6 6 0 1 1 12 0c0 5.65-6 10-6 10Z" />
    <circle cx="12" cy="11" r="2.5" />
  </svg>
);

const IconCalendar = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="3" y="5" width="18" height="16" rx="2" />
    <path d="M8 3v4M16 3v4M3 10h18" />
  </svg>
);

const IconLandmark = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M3 21h18" />
    <path d="M5 21V8l7-5 7 5v13" />
    <path d="M9 21v-6h6v6" />
    <path d="M12 3v5" />
  </svg>
);

const IconUtensilsCrossed = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M6 3v7" />
    <path d="M4 7h4" />
    <path d="M10 3v10" />
    <path d="M8 13h4" />
    <path d="M16 3v18" />
    <path d="M13 7h6" />
    <path d="M16 7c0 3-1 6-3 8" />
  </svg>
);

const IconSparkles = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="m12 2 1.8 5.2L19 9l-5.2 1.8L12 16l-1.8-5.2L5 9l5.2-1.8L12 2Z" />
    <path d="m18 14 1 2.8L21.8 18 19 19l-1 2.8L17 19l-2.8-1 2.8-1 1-2.8Z" />
  </svg>
);

const IconUsers = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 19v-1a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v1" />
    <circle cx="10" cy="7" r="3" />
    <path d="M22 19v-1a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const tabs = [
  "Overview",
  "Things to Do",
  "Where to Stay",
  "Food & Drink",
  "Travel Tips",
];

const facts = [
  {
    icon: IconLandmark,
    label: "Ancient Temples",
    desc: "World Heritage Sites",
  },
  {
    icon: IconUtensilsCrossed,
    label: "Delicious Cuisine",
    desc: "Local Flavors",
  },
  {
    icon: IconSparkles,
    label: "Vibrant Nightlife",
    desc: "Markets & Street Food",
  },
  { icon: IconUsers, label: "Friendly Locals", desc: "Warm Hospitality" },
];

export type Props = {
  province: Province;
  attractions: Attraction[];
};

export async function getDestinationPageProps(
  routeParam?: string | string[],
): Promise<{ props: Props } | { notFound: true }> {
  const rawValue = Array.isArray(routeParam) ? routeParam[0] : routeParam;

  if (!rawValue) {
    return { notFound: true };
  }

  const numericId = Number(rawValue);
  let province: Province | null = null;

  if (!Number.isNaN(numericId) && numericId > 0) {
    province = await getProvinceByID(numericId);
  } else {
    const provinces = await getProvince();
    province =
      provinces.find((item) => {
        const slug = slugifyDestination(
          item.nameEn || item.nameKh || String(item.id),
        );
        return slug === slugifyDestination(rawValue);
      }) ?? null;
  }

  if (!province) {
    return { notFound: true };
  }

  const attractions = await getAttraction(province.id);

  return {
    props: {
      province,
      attractions: attractions ?? [],
    },
  };
}

export default async function DestinationGuidePage({
  params,
}: {
  params: Promise<{ code: string }>;
}) {
  const { code } = await params;
  const rawValue = decodeURIComponent(code || "").trim();

  if (!rawValue) {
    notFound();
  }

  let province: Province | null = null;
  const numericId = Number(rawValue);

  if (!Number.isNaN(numericId) && numericId > 0) {
    province = await getProvinceByID(numericId);
  } else {
    const provinces = await getProvince();
    province =
      provinces.find((item) => {
        const slug = slugifyDestination(
          item.nameEn || item.nameKh || String(item.id),
        );
        return slug === slugifyDestination(rawValue);
      }) ?? null;
  }

  if (!province) {
    notFound();
  }

  const attractions = await getAttraction(province.id);
  const name = province.nameEn || province.nameKh;

  return (
    <div className="bg-slate-100 text-slate-900">
      <section className="relative h-[420px] w-full overflow-hidden shadow-sm">
        <Image
          src={province.imageUrl}
          alt={name}
          fill
          unoptimized
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/45 to-black/25" />

        <div className="relative mx-auto flex h-full max-w-7xl items-end px-4 pb-10 sm:px-6 lg:px-8">
          <div className="max-w-2xl text-white">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-white/75">
              <Link href="/" className="hover:text-white">
                Home
              </Link>
              <span className="mx-2">/</span>
              <span>Destinations</span>
              <span className="mx-2">/</span>
              <span>{name}</span>
            </p>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              {name}
            </h1>
            <p className="mt-3 text-lg font-medium text-white/90">
              A Journey Through {province.region}
            </p>

            <div className="mt-6 flex flex-wrap gap-3 text-sm text-white/90">
              <span className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2 backdrop-blur-sm">
                <IconMapPin className="h-4 w-4" />
                {province.region}, Cambodia
              </span>
              <span className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2 backdrop-blur-sm">
                <IconCalendar className="h-4 w-4" />
                {attractions.length} attractions to explore
              </span>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-white/80 p-2 shadow-sm backdrop-blur-sm">
          <div className="flex gap-3 overflow-x-auto text-sm font-semibold text-slate-500">
            {tabs.map((tab, i) => (
              <span
                key={tab}
                className={`whitespace-nowrap rounded-xl px-4 py-3 transition ${
                  i === 0
                    ? "bg-blue-600 text-white shadow-sm"
                    : "bg-transparent hover:bg-slate-100 hover:text-slate-700"
                }`}
              >
                {tab}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-2 max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
          <div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-2xl font-extrabold text-slate-900">
                About {name}
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                {name} is one of Cambodia&apos;s {province.region} destinations,
                offering {attractions.length} attraction
                {attractions.length === 1 ? "" : "s"} to explore, from historic
                sites to local culture and cuisine.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {facts.map((fact) => (
                  <div
                    key={fact.label}
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                      <fact.icon className="h-5 w-5" />
                    </span>
                    <p className="mt-3 text-sm font-bold text-slate-900">
                      {fact.label}
                    </p>
                    <p className="text-xs text-slate-500">{fact.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <SectionHeading
                title="Top Attractions"
                viewAllHref={`/attractions?province=${province.id}`}
              />

              {attractions.length === 0 ? (
                <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center text-sm text-slate-500">
                  No attractions listed for {name} yet.
                </div>
              ) : (
                <div className="mt-5 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                  {attractions.map((a) => (
                    <Link
                      key={a.id}
                      href={`/destination/${encodeURIComponent(code)}/${a.id}`}
                      className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg"
                    >
                      <div className="relative h-44 w-full bg-slate-100">
                        {a.imageUrls?.[0] ? (
                          <Image
                            src={a.imageUrls[0]}
                            alt={a.nameEn}
                            fill
                            unoptimized
                            className="object-cover transition duration-500 group-hover:scale-105"
                          />
                        ) : (
                          <div className="flex h-full items-center justify-center text-xs text-slate-400">
                            No image
                          </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-blue-700">
                          {a.category}
                        </span>
                      </div>

                      <div className="p-4">
                        <div className="mb-2 flex items-center justify-between gap-2">
                          <p className="text-lg font-bold text-slate-900">
                            {a.nameEn}
                          </p>
                          {a.rating > 0 && (
                            <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2 py-1 text-xs font-semibold text-amber-600">
                              ★ {a.rating}
                            </span>
                          )}
                        </div>

                        <div className="mb-2 flex items-center gap-1 text-xs text-slate-500">
                          <Stars count={Math.round(a.rating)} />
                        </div>

                        <p className="line-clamp-2 text-sm leading-6 text-slate-600">
                          {a.descriptionEn}
                        </p>

                        <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-600">
                          View details
                          <span className="transition-transform group-hover:translate-x-1">
                            →
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          <aside className="lg:pt-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-[0.15em] text-slate-500">
                Location
              </p>
              <div className="relative mt-4 h-48 w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
                <iframe
                  src={`https://www.google.com/maps?q=${encodeURIComponent(
                    `${name}, Cambodia`,
                  )}&output=embed`}
                  title={`Map of ${name}`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-full w-full border-0"
                />
              </div>
              <p className="mt-3 text-sm font-medium text-slate-700">
                {name}, Cambodia
              </p>
              <Link
                href={`https://www.google.com/maps?q=${encodeURIComponent(
                  `${name}, Cambodia`,
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 block rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-center text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
              >
                View on map →
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
