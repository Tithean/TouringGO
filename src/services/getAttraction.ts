import { apiFetch } from "@/config/api";
import { Attraction } from "./attractionType";

export default async function getAttraction(
  provinceId?: number,
): Promise<Attraction[]> {
  const endpoint = provinceId
    ? `/api/attractions?provinceId=${provinceId}`
    : "/api/attractions";

  const response = await apiFetch<{ content: Attraction[] }>(endpoint);
  return response.content;
}
