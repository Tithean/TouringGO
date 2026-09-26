
"use client";

import { useEffect, useState } from "react";
import searchAttractions from "@/services/searchAttractions";
import type { Attraction } from "@/services/attractionType";
import SearchResultCard from "./SearchResultCard";

interface SearchResultProps {
  keyword: string;
}

export default function SearchResult({ keyword }: SearchResultProps) {
  const [attractions, setAttractions] = useState<Attraction[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!keyword) {
      setAttractions([]);
      return;
    }

    setLoading(true);
    setError(null);

    searchAttractions(keyword)
      .then((data) => setAttractions(data.content))
      .catch((err: Error) => setError(err.message))
      .finally(() => setLoading(false));
  }, [keyword]);

  if (!keyword) return null;
  if (loading) return <p className="text-center py-10">Searching...</p>;
  if (error)
    return <p className="text-center py-10 text-red-600">Error: {error}</p>;
  if (attractions.length === 0)
    return <p className="text-center py-10">No results found.</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
      {attractions.map((attraction) => (
        <SearchResultCard key={attraction.id} attraction={attraction} />
      ))}
    </div>
  );
}