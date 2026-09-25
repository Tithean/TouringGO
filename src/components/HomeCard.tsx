"use client";

import Link from "next/link";
import Image from "next/image";
import { Province } from "@/services/provinceType";
import { Attraction } from "@/services/attractionType";


export default function ProvinceCard({ province }: {province: Province}) {

  return (
    <Link 
      href={`/attractions?province=${province.id}`}
      className="group relative h-72 w-full rounded-2xl overflow-hidden block"
    >
      <Image
        src={province.imageUrl}
        alt={province.nameEn}
        fill
        unoptimized
        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
      />
      
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
      
      {/* Content */}
      <div className="absolute bottom-0 left-0 p-5 w-full">
        <span className="inline-block px-2 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider rounded mb-2 border border-white/30">
          {province.region}
        </span>
        <h3 className="text-2xl font-bold text-white mb-1">
          {province.nameEn}
        </h3>
        <p className="text-white/80 text-sm flex items-center">
          Explore Attractions <span className="ml-2 transition-transform group-hover:translate-x-1">&rarr;</span>
        </p>
      </div>
    </Link>
  );
}

export function AttractionCard({ attraction }: { attraction: Attraction }) {
  return (
    <Link 
      href={`/attractions/${attraction.id}`}
      className="group relative h-72 w-full rounded-2xl overflow-hidden block"
    >
      {attraction.imageUrls && attraction.imageUrls.length > 0 ? (
        <Image
          src={attraction.imageUrls[0]}
          alt={attraction.nameEn}
          fill
          unoptimized
          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
        />
      ) : (
        <div className="absolute inset-0 bg-slate-300 flex items-center justify-center">
          <span className="text-slate-500 font-medium">No Image Available</span>
        </div>
      )}
      
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
      
      {/* Content */}
      <div className="absolute bottom-0 left-0 p-5 w-full">
        <span className="inline-block px-2 py-1 bg-[#0052FF]/80 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider rounded mb-2 border border-white/30">
          {attraction.category}
        </span>
        <h3 className="text-2xl font-bold text-white mb-1 line-clamp-1">
          {attraction.nameEn}
        </h3>
        <div className="flex items-center justify-between text-white/80 text-sm">
          <p className="flex items-center">
            View Details <span className="ml-2 transition-transform group-hover:translate-x-1">&rarr;</span>
          </p>
          {attraction.rating > 0 && (
            <span className="font-semibold text-yellow-400">★ {attraction.rating}</span>
          )}
        </div>
      </div>
    </Link>
  );
}
