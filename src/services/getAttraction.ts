// import { apiFetch } from "@/config/api";
// import { Attraction } from "./attractionType";

// export default async function getAttraction(): Promise<Attraction[]> {
//   const response = await apiFetch<{ content: Attraction[] }>("/api/attractions");
//   return response.content;
// }


import { apiFetch } from "@/config/api";
import { Attraction } from "./attractionType";

/**
 * Fetches attractions. Pass a provinceId to fetch only attractions
 * belonging to that province (used by the Destination Guide page).
 *
 * NOTE: this assumes the backend supports a `provinceId` query param
 * on GET /api/attractions. Confirm this with the backend team; if the
 * param name differs, update the endpoint string below.
 */
export default async function getAttraction(
  provinceId?: number,
): Promise<Attraction[]> {
  const endpoint = provinceId
    ? `/api/attractions?provinceId=${provinceId}`
    : "/api/attractions";

  const response = await apiFetch<{ content: Attraction[] }>(endpoint);
  return response.content;
}
