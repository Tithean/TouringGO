import { apiFetch } from "@/lib/api";
import { Province } from "./provinceType";

export default async function getProvince(): Promise<Province[]> {
  return await apiFetch<Province[]>("/api/provinces");
}
