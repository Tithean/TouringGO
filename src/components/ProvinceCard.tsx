
"use client";

import type { Province } from "@/services/provinceType";

export default function ProvinceCard({ item }: { item: Province }) {
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition flex flex-col">
      <div className="relative h-40 w-full bg-gray-100">
        <img
          src={item.imageUrl || "https://via.placeholder.com/400x250?text=No+Image"}
          alt={item.nameEn || item.nameKh}
          className="w-full h-full object-cover"
        />
        <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-semibold px-2.5 py-1 rounded shadow">
          {item.region}
        </span>
      </div>

      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-bold text-lg text-gray-900">{item.nameKh}</h3>
          <p className="text-sm text-gray-500">{item.nameEn}</p>
        </div>

        <div className="mt-4 pt-2 text-xs font-medium text-gray-400 border-t border-gray-100 flex justify-between">
          <span>
            {item.attractionCount ?? 0} attraction
            {item.attractionCount === 1 ? "" : "s"}
          </span>
        </div>
      </div>
    </div>
  );
}