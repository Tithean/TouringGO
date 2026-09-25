"use client";

import { useEffect, useState } from "react";
import type { Attraction, SearchApiResponse } from "@/services/attractionType";
import type { Province } from "@/services/provinceType";
import SearchResultCard from "./SearchResultpage";
import ProvinceCard from "./ProvinceCard";

function matchesKeyword(text: string | null | undefined, keyword: string) {
  if (!text) return false;
  return text.toLowerCase().includes(keyword.toLowerCase());
}

export default function SearchResult({ keyword }: { keyword: string }) {
  const [attractions, setAttractions] = useState<Attraction[]>([]);
  const [matchedProvinces, setMatchedProvinces] = useState<Province[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchGlobalSearch() {
      const trimmed = keyword.trim();

      if (!trimmed) {
        setAttractions([]);
        setMatchedProvinces([]);
        setError("");
        return;
      }

      try {
        setLoading(true);
        setError("");

        const params = new URLSearchParams({
          keyword: trimmed,
          page: "0",
          size: "20",
        });

        // Run attraction search + province list fetch in parallel
        const [attractionsRes, provincesRes] = await Promise.all([
          fetch(`/api/attractions/search?${params.toString()}`),
          fetch(`/api/provinces`),
        ]);

        if (!attractionsRes.ok) {
          throw new Error(`API error ${attractionsRes.status}`);
        }
        if (!provincesRes.ok) {
          throw new Error(`API error ${provincesRes.status}`);
        }

        const attractionsData: SearchApiResponse = await attractionsRes.json();
        const provincesData: Province[] = await provincesRes.json();

        // Match provinces client-side by Khmer or English name
        const matched = (provincesData || []).filter(
          (p) => matchesKeyword(p.nameKh, trimmed) || matchesKeyword(p.nameEn, trimmed)
        );

        setAttractions(attractionsData.content || []);
        setMatchedProvinces(matched);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load search results");
        setAttractions([]);
        setMatchedProvinces([]);
      } finally {
        setLoading(false);
      }
    }

    fetchGlobalSearch();
  }, [keyword]);

  if (!keyword.trim()) return null;
  if (loading) return <div className="py-8 text-center text-gray-500">Searching...</div>;
  if (error) return <div className="py-8 text-center text-red-500">{error}</div>;

  const hasResults = attractions.length > 0 || matchedProvinces.length > 0;

  if (!hasResults) {
    return (
      <div className="py-8 text-center text-gray-500">
        No results found for "{keyword}"
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {matchedProvinces.length > 0 && (
        <div>
          <h2 className="text-xl font-bold mb-4">Provinces</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
            {matchedProvinces.map((item) => (
              <ProvinceCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      )}

      {attractions.length > 0 && (
        <div>
          <h2 className="text-xl font-bold mb-4">Attractions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
            {attractions.map((item) => (
              <SearchResultCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}