
"use client";

import { useEffect, useState } from "react";
import getProvince from "@/services/getProvince";
import type { Province } from "@/services/provinceType";
import ProvinceCard from "./ProvinceCard";

export default function Provinces() {
  const [provinces, setProvinces] = useState<Province[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getProvince()
      .then(setProvinces)
      .catch((err: Error) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="text-center py-10">Loading provinces...</p>;
  if (error)
    return <p className="text-center py-10 text-red-600">Error: {error}</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {provinces.map((province) => (
        <ProvinceCard key={province.id} item={province} />
      ))}
    </div>
  );
}