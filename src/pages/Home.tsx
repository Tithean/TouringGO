import Link from "next/link";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import getProvince from "@/services/getProvince";
import ProvinceCard from "@/components/HomeCard";
import getAttraction from "@/services/getAttraction";
import Banner from "@/assets/angkor.png";
import HomeCard, { AttractionCard } from "@/components/HomeCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
async function HomePage() {
  // Province API data
  const Provinces = await getProvince();
  const topProvinces = Provinces.slice(0, 8);

  // Attraction API data
  const attractions = await getAttraction();
  const topAttractions = attractions.slice(0, 8);

  return (
    <>
      <div className="flex flex-col">
        {/* Hero Section */}
        <section className="relative bg-blue-600 h-[600px] w-full overflow-hidden">
          {/* <img
            src={Banner.src}
            alt="Cambodia travel destination"
            className="absolute inset-0 h-full w-full object-cover"
          /> */}
          <div className="absolute inset-0 bg-blue-600/60"/>

          <div className="relative z-10 mx-auto mt-12 w-full max-w-6xl px-4">
            <h1 className="mx-auto mb-6 max-w-4xl text-center text-5xl font-bold text-white drop-shadow-md md:text-6xl">
              Your Next Adventure Awaits in <span className="">Cambodia</span>
            </h1>
            <p className="mx-auto mb-10 max-w-2xl text-center text-xl font-medium text-white/90 drop-shadow-sm">
              Discover ancient temples, tropical waterfalls, and vibrant local
              culture with TouringGO.
            </p>

            {/* Search Box */}
            <div className="mx-auto grid w-full max-w-2xl grid-cols-1 rounded-xl border border-slate-200 bg-white p-2 shadow-xl md:grid-cols-[minmax(150px,0.9fr)_minmax(300px,1.5fr)_minmax(180px,1fr)]">
              <div className="flex items-center gap-3 px-3 py-3 text-left">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="h-5 w-5 shrink-0 text-slate-900"
                />
                <div className="min-w-0">
                  <p className="truncate text-base font-semibold text-slate-500">
                    Where to?
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 border-t border-slate-200 px-3 py-3 text-left md:border-l md:border-t-0">
                <FontAwesomeIcon
                  icon={faCalendarDays}
                  className="h-5 w-5 shrink-0 text-slate-900"
                />
                <div className="flex min-w-0 flex-wrap items-center gap-x-2 gap-y-1 text-slate-950">
                  <span className="whitespace-nowrap text-sm font-semibold">
                    Thu, Oct 1
                  </span>
                  <span className="hidden text-slate-500 sm:inline">-</span>
                  <span className="whitespace-nowrap text-sm font-semibold">
                    Fri, Oct 2
                  </span>
                  <span className="whitespace-nowrap rounded-full bg-slate-100 px-2 py-1 text-xs font-medium">
                    1 night
                  </span>
                </div>
              </div>

              <div className="border-t border-slate-200 pt-1 md:border-l md:border-t-0 md:pl-2 md:pt-0">
                <Link
                  href="/destination"
                  className="flex h-full min-h-11 items-center justify-center gap-3 rounded-lg bg-[#365dff] px-4 py-2 text-base font-bold text-white transition-colors hover:bg-[#2448df]"
                >
                  Explore
                </Link>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 space-y-20">
          <section>
            <div className="mb-8">
              <h2 className="text-3xl font-extrabold text-slate-900">
                Explore by Category
              </h2>
              <p className="text-slate-500 mt-2">
                Find exactly what you're looking for in Cambodia
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              {[
                "All",
                "Temple",
                "Nature",
                "Beach",
                "Waterfall",
                "Historical",
                "Museum",
                "Market",
              ].map((category, index) => (
                <Link
                  key={category}
                  href="#"
                  className={`px-6 py-2 rounded-full border font-semibold transition-colors ${
                    index === 0
                      ? "border-[#0052FF] border-2 text-[#0052FF]"
                      : "border-blue-200 text-blue-500 hover:border-[#0052FF] hover:text-[#0052FF]"
                  }`}
                >
                  {category}
                </Link>
              ))}
            </div>
          </section>

          {/* Popular Destinations */}
          <section>
            <div className="flex justify-between items-end mb-8">
              <div>
                <h2 className="text-3xl font-extrabold text-slate-900">
                  Provinces in Cambodia
                </h2>
                <p className="text-slate-500 mt-2">
                  Explore top provinces loved by travelers
                </p>
              </div>
              <Link
                href="/"
                className="hidden sm:inline-flex font-semibold text-[#0052FF] hover:text-[#003BB5]"
              >
                View All &rarr;
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {topProvinces.map((province) => (
                <HomeCard key={province.id} province={province} />
              ))}
            </div>
          </section>

          <section>
            <div className="flex justify-between items-end mb-8">
              <div>
                <h2 className="text-3xl font-extrabold text-slate-900">
                  Popular Places
                </h2>
                <p className="text-slate-500 mt-2">
                  Top rated tourist attractions and tours
                </p>
              </div>
              <Link
                href="/"
                className="hidden sm:inline-flex font-semibold text-[#0052FF] hover:text-[#003BB5]"
              >
                View All Deals &rarr;
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {topAttractions.map((attraction) => (
                <AttractionCard key={attraction.id} attraction={attraction} />
              ))}
            </div>
          </section>

          {/* Blog Section */}
          <section className="bg-linear-to-r from-blue-50 to-cyan-50 rounded-3xl p-8 md:p-12 border border-blue-100 flex flex-col md:flex-row items-center justify-between shadow-sm">
            <div className="max-w-xl mb-6 md:mb-0">
              <h2 className="text-3xl font-extrabold text-slate-900 mb-3">
                Get Travel Inspiration
              </h2>
              <p className="text-slate-600 mb-6 text-lg">
                Subscribe to our newsletter and be the first to know about
                exclusive deals and hidden gems.
              </p>
              <div className="flex w-full md:w-96">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-4 py-3 rounded-l-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                />
                <button className="bg-[#0052FF] hover:bg-[#003BB5] text-white px-6 py-3 rounded-r-xl font-bold transition-colors shadow-md">
                  GO
                </button>
              </div>
            </div>
            <div className="hidden lg:block relative w-64 h-40">
              <div className="absolute inset-0 bg-white/60 rounded-full blur-2xl"></div>
              <div className="relative z-10 text-4xl font-extrabold italic rotate-[-5deg] leading-tight text-center text-[#0052FF]">
                Explore
                <br />
                Book
                <br />
                <span className="text-[#00D4FF]">Go</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default HomePage;
