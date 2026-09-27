
import { apiFetch } from "@/config/api";
import { SearchApiResponse } from "./attractionType";
import type { Province } from "./provinceType";

export default async function searchAttractions(
  keyword: string,
  page = 0,
  size = 12
): Promise<SearchApiResponse> {
  const params = new URLSearchParams({
    keyword,
    page: String(page),
    size: String(size),
  });

  const data = await apiFetch<SearchApiResponse>(
    `/attractions/search?${params.toString()}`
  );


  if (data.totalElements === 0) {
    const provinces = await apiFetch<Province[]>("/provinces");
    const matchedProvince = provinces.find(
      (p) =>
        p.nameKh.trim() === keyword.trim() ||
        p.nameEn.toLowerCase() === keyword.trim().toLowerCase()
    );

    if (matchedProvince) {
     
      const byProvince = await apiFetch<SearchApiResponse>(
        `/attractions?provinceId=${matchedProvince.id}&page=${page}&size=${size}`
      );
      return byProvince;
    }
  }

  return data;
}