import { apiFetch } from "@/config/api";
import { Attraction } from "./attractionType";

export default async function getAttractionById(id: number): Promise<Attraction> {
  return await apiFetch<Attraction>(`/api/attractions/${id}`);
}
