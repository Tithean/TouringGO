import Link from "next/link";
import getProvince from "@/services/getProvince";
import ProvinceCard from "@/components/HomeCard";
import getAttraction from "@/services/getAttraction";
import HomeCard, { AttractionCard } from "@/components/HomeCard";
async function HomePage() {
  // Province API data
  const provinces = await getProvince();
  const topProvinces = provinces.slice(0, 4);

  // Attraction API data
  const attractions = await getAttraction();
  const topAttractions = attractions.slice(0, 4);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-150 w-full flex flex-col justify-center items-center text-center px-4">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqf_N0ihora-4VUsWgusNbkyeiQRQd-Q2CWM9FrJ_AV0nto2CO0FvyN3sh&s=10')" }}
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 max-w-4xl mx-auto mt-12">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-md">
            Your Next Adventure Awaits in Cambodia
          </h1>
          <p className="text-xl text-white/90 mb-10 font-medium max-w-2xl mx-auto drop-shadow-sm">
            Discover ancient temples, tropical waterfalls, and vibrant local culture with TouringGO.
          </p>

          {/* Search Box */}
          <div className="bg-white p-2 rounded-2xl shadow-xl flex flex-col md:flex-row max-w-3xl mx-auto">
            <div className="flex-1 px-4 py-3 text-left border-b md:border-b-0 md:border-r border-slate-200">
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Destination</label>
              <select className="w-full bg-transparent text-slate-900 font-semibold focus:outline-none appearance-none cursor-pointer">
                <option value="">Where are you going?</option>
                {provinces.map(p => (
                  <option key={p.id} value={p.id}>{p.nameEn || p.nameKh}</option>
                ))}
              </select>
            </div>
            <div className="flex-1 px-4 py-3 text-left">
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Category</label>
              <select className="w-full bg-transparent text-slate-900 font-semibold focus:outline-none appearance-none cursor-pointer">
                <option value="">All Categories</option>
                <option value="TEMPLE">Temple</option>
                <option value="NATURE">Nature</option>
                <option value="BEACH">Beach</option>
                <option value="WATERFALL">Waterfall</option>
              </select>
            </div>
            <Link
              href="/attractions"
              className="bg-[#0052FF] hover:bg-[#003BB5] text-white md:w-40 flex items-center justify-center font-bold text-lg rounded-xl transition-colors m-2 py-3 md:py-0 shadow-lg shadow-blue-500/30"
            >
              Search
            </Link>
          </div>
        </div>
      </section>

      {/* 2nd section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 space-y-20">

        {/* Explore by Category */}
        <section>
          <div className="mb-8">
            <h2 className="text-3xl font-extrabold text-slate-900">Explore by Category</h2>
            <p className="text-slate-500 mt-2">Find exactly what you're looking for in Cambodia</p>
          </div>
          <div className="flex flex-wrap gap-4">
            {["All", "Temple", "Nature", "Beach", "Waterfall", "Historical", "Museum", "Market"].map((category, index) => (
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
              <h2 className="text-3xl font-extrabold text-slate-900">Popular Destinations</h2>
              <p className="text-slate-500 mt-2">Explore top provinces loved by travelers</p>
            </div>
            <Link href="/" className="hidden sm:inline-flex font-semibold text-[#0052FF] hover:text-[#003BB5]">
              View All &rarr;
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {topProvinces.map((province) => (
              <HomeCard key={province.id} province={province} />
            ))}
          </div>
        </section>

        {/* 3rd section */}
        {/* Featured Attractions */}
        <section>
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl font-extrabold text-slate-900">Featured Experiences</h2>
              <p className="text-slate-500 mt-2">Top rated tourist attractions and tours</p>
            </div>
            <Link href="/" className="hidden sm:inline-flex font-semibold text-[#0052FF] hover:text-[#003BB5]">
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
            <h2 className="text-3xl font-extrabold text-slate-900 mb-3">Get Travel Inspiration</h2>
            <p className="text-slate-600 mb-6 text-lg">Subscribe to our newsletter and be the first to know about exclusive deals and hidden gems.</p>
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
              Explore<br />Book<br /><span className="text-[#00D4FF]">Go</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default HomePage;
