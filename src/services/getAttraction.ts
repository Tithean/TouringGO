import { apiFetch } from "@/config/api";
import { Attraction } from "./attractionType";

export default async function getAttraction(): Promise<Attraction[]> {
  const response = await apiFetch<{ content: Attraction[] }>("/api/attractions");
  return response.content;
}
