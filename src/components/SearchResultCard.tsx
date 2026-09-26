
"use client";

import type { Attraction } from "@/services/attractionType";

export default function SearchResultCard({
  attraction,
}: {
  attraction: Attraction;
}) {
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition flex flex-col">
      <div className="relative h-40 w-full bg-gray-100">
        <img
          src={
            attraction.imageUrls?.[0] ||
            "https://via.placeholder.com/400x250?text=No+Image"
          }
          alt={attraction.nameEn || attraction.nameKh}
          className="w-full h-full object-cover"
        />
        <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-semibold px-2.5 py-1 rounded shadow">
          {attraction.category}
        </span>
      </div>

      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-bold text-lg text-gray-900">
            {attraction.nameKh}
          </h3>
          <p className="text-sm text-gray-500">{attraction.nameEn}</p>
          {attraction.descriptionEn && (
            <p className="text-sm text-gray-600 mt-2 line-clamp-2">
              {attraction.descriptionEn}
            </p>
          )}
        </div>

        <div className="mt-4 pt-2 text-xs font-medium text-gray-400 border-t border-gray-100 flex justify-between">
          <span>{attraction.province?.nameEn}</span>
          <span>⭐ {attraction.rating ?? "N/A"}</span>
        </div>
      </div>
    </div>
  );
}