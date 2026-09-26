import { apiFetch } from "@/config/api";
import type { SearchApiResponse } from "./attractionType";

// Adjust the query param names (keyword/page/size) to match your real backend
// if it expects different ones.
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

  return apiFetch<SearchApiResponse>(
    `/attractions/search?${params.toString()}`
  );
}