import { apiFetch } from "@/config/api";
import { Province } from "./provinceType";
const API_URL = "https://cam-trip.cheat.casa";

export default async function getProvince(): Promise<Province[]> {
  return await apiFetch<Province[]>("/api/provinces");
}
