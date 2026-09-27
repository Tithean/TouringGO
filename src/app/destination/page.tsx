import ProvinceCard from "@/components/HomeCard";
import getProvince from "@/services/getProvince";

export default async function DestinationPage() {
  const provinces = await getProvince();

  return (
    <main className="min-h-screen bg-slate-100">
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Explore Cambodia
          </p>
          <h1 className="mt-3 text-4xl font-extrabold text-slate-900 md:text-5xl">
            Discover Popular Destinations
          </h1>
          <p className="mt-3 text-base text-slate-600">
            Choose a province and dive into its iconic places, culture, and
            experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {provinces.map((province) => (
            <ProvinceCard key={province.id} province={province} />
          ))}
        </div>
      </section>
    </main>
  );
}
