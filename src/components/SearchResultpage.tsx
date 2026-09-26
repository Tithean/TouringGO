"use client";

import type { Attraction } from "@/services/attractionType";

export default function SearchResultCard({ item }: { item: Attraction }) {
  const displayImage =
    item.imageUrls && item.imageUrls.length > 0
      ? item.imageUrls[0]
      : item.province?.imageUrl || "https://via.placeholder.com/400x250?text=No+Image";

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition flex flex-col">
      <div className="relative h-48 w-full bg-gray-100">
        <img
          src={displayImage}
          alt={item.nameEn || item.nameKh}
          className="w-full h-full object-cover"
        />
        {item.category && (
          <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-semibold px-2.5 py-1 rounded shadow">
            {item.category}
          </span>
        )}
      </div>

      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start gap-2">
            <h3 className="font-bold text-lg text-gray-900">{item.nameKh}</h3>
            {item.rating && (
              <span className="text-sm font-semibold text-amber-500 bg-amber-50 px-2 py-0.5 rounded">
                ⭐ {item.rating}
              </span>
            )}
          </div>
          <p className="text-sm text-gray-500">{item.nameEn}</p>
          <p className="text-sm text-gray-600 mt-2 line-clamp-2">
            {item.descriptionEn || "No description available."}
          </p>
        </div>

        {item.province && (
          <div className="mt-4 pt-2 text-xs font-medium text-gray-400 border-t border-gray-100 flex justify-between">
            <span>{item.province.nameKh} ({item.province.nameEn})</span>
            <span>{item.province.region}</span>
          </div>
        )}
      </div>
    </div>
  );
}