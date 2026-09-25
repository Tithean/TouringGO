"use client";

import { useEffect, useState } from "react";
import type { Province } from "@/services/provinceType";
import ProvinceCard from "./ProvinceCard";

export default function Provinces() {
  const [provinces, setProvinces] = useState<Province[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchProvinces() {
      try {
        setLoading(true);
        setError("");

        const response = await fetch("/api/provinces");

        if (!response.ok) {
          throw new Error(`API error ${response.status}`);
        }

        const data: Province[] = await response.json();
        setProvinces(data || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load provinces");
        setProvinces([]);
      } finally {
        setLoading(false);
      }
    }

    fetchProvinces();
  }, []);

  if (loading) return <div className="py-8 text-center text-gray-500">Loading provinces...</div>;
  if (error) return <div className="py-8 text-center text-red-500">{error}</div>;
  if (provinces.length === 0) {
    return <div className="py-8 text-center text-gray-500">No provinces found</div>;
  }

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">All Provinces</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
        {provinces.map((item) => (
          <ProvinceCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}