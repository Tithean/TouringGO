import { apiFetch } from "@/config/api";
import { Attraction } from "./attractionType";

export default async function getAttractionByid(id: number): Promise<Attraction> {
    return await apiFetch<Attraction>(`/api/attractions/${id}`);
}