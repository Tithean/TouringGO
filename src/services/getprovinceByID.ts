
import { apiFetch } from "@/config/api";
import type { Province } from "./provinceType";

export default async function getProvinceByID(id: number): Promise<Province> {
  return apiFetch<Province>(`/provinces/${id}`);
}