import { GetServerSideProps } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Calendar,
  Landmark,
  UtensilsCrossed,
  Sparkles,
  Users,
} from "lucide-react";
import { Stars, SectionHeading } from "@/components/ui";
import getProvinceByID from "@/services/getprovinceByID";
import getAttraction from "@/services/getAttraction";
import type { Province } from "@/services/provinceType";
import type { Attraction } from "@/services/attractionType";

const tabs = [
  "Overview",
  "Things to Do",
  "Where to Stay",
  "Food & Drink",
  "Travel Tips",
];

const facts = [
  { icon: Landmark, label: "Ancient Temples", desc: "World Heritage Sites" },
  { icon: UtensilsCrossed, label: "Delicious Cuisine", desc: "Local Flavors" },
  { icon: Sparkles, label: "Vibrant Nightlife", desc: "Markets & Street Food" },
  { icon: Users, label: "Friendly Locals", desc: "Warm Hospitality" },
];

type Props = {
  province: Province;
  attractions: Attraction[];
};

export default function DestinationGuidePage({ province, attractions }: Props) {
  const name = province.nameEn || province.nameKh;

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[420px] w-full overflow-hidden">
        <Image
          src={province.imageUrl}
          alt={name}
          fill
          unoptimized
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="container-page relative flex h-full flex-col justify-center text-white">
          <p className="mb-2 text-xs text-white/70">
            <Link href="/">Home</Link> {" > "} Destinations {" > "}
            <span className="text-white">{name}</span>
          </p>
          <h1 className="font-display text-4xl font-semibold sm:text-5xl">
            {name}
          </h1>
          <p className="mt-1 text-lg font-medium">
            A Journey Through {province.region}
          </p>
          <div className="mt-5 flex flex-wrap gap-6 text-sm">
            <span className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4" /> {province.region}, Cambodia
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" /> {attractions.length} attractions
              to explore
            </span>
          </div>
        </div>
      </section>

      {/* Tabs (UI only for now — wire up when Things to Do / Where to Stay etc. are built) */}
      <div className="container-page mt-6">
        <div className="flex gap-6 overflow-x-auto border-b border-slate-200 text-sm font-medium text-slate-500">
          {tabs.map((tab, i) => (
            <span
              key={tab}
              className={`whitespace-nowrap border-b-2 pb-3 ${
                i === 0
                  ? "border-brand-600 text-brand-600"
                  : "border-transparent"
              }`}
            >
              {tab}
            </span>
          ))}
        </div>
      </div>

      <div className="container-page mt-8 grid gap-8 lg:grid-cols-[1fr_320px]">
        <div>
          <h2 className="font-semibold text-slate-900">About {name}</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-700">
            {name} is one of Cambodia&apos;s {province.region} destinations,
            offering {attractions.length} attraction
            {attractions.length === 1 ? "" : "s"} to explore, from historic
            sites to local culture and cuisine.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {facts.map((fact) => (
              <div key={fact.label}>
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                  <fact.icon className="h-5 w-5" />
                </span>
                <p className="mt-2 text-sm font-semibold text-slate-900">
                  {fact.label}
                </p>
                <p className="text-xs text-slate-500">{fact.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <SectionHeading
              title="Top Attractions"
              viewAllHref={`/attractions?province=${province.id}`}
            />
            {attractions.length === 0 ? (
              <p className="text-sm text-slate-500">
                No attractions listed for {name} yet.
              </p>
            ) : (
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {attractions.map((a) => (
                  <Link
                    key={a.id}
                    href={`/attractions/${a.id}`}
                    className="card block overflow-hidden"
                  >
                    <div className="relative h-32 w-full bg-slate-100">
                      {a.imageUrls?.[0] ? (
                        <Image
                          src={a.imageUrls[0]}
                          alt={a.nameEn}
                          fill
                          unoptimized
                          className="object-cover"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center text-xs text-slate-400">
                          No image
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <p className="font-semibold text-slate-900">
                        {a.nameEn}
                      </p>
                      <div className="mt-1 flex items-center gap-1 text-xs">
                        <Stars count={Math.round(a.rating)} />
                      </div>
                      <p className="mt-1.5 line-clamp-2 text-xs text-slate-500">
                        {a.descriptionEn}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        <aside className="space-y-5">
          <div className="card p-5">
            <p className="text-sm font-semibold text-slate-900">Location</p>
            <div className="relative mt-3 h-40 w-full overflow-hidden rounded-lg border border-slate-200">
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
            <p className="mt-2 text-xs text-slate-500">{name}, Cambodia</p>
            <Link
              href={`https://www.google.com/maps?q=${encodeURIComponent(
                `${name}, Cambodia`,
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary mt-2 block w-full text-center text-xs"
            >
              View on map →
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<Props> = async (
  context,
) => {
  const id = Number(context.params?.id);

  if (!id || Number.isNaN(id)) {
    return { notFound: true };
  }

  try {
    const [province, attractions] = await Promise.all([
      getProvinceByID(id),
      getAttraction(id),
    ]);

    if (!province) {
      return { notFound: true };
    }

    return {
      props: {
        province,
        attractions: attractions ?? [],
      },
    };
  } catch (err) {
    console.error("Failed to load destination guide:", err);
    return { notFound: true };
  }
};
