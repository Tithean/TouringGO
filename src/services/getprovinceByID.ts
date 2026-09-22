import { apiFetch } from "@/config/api";
import { Province } from "./provinceType";

export default async function getProvinceByID(id: number): Promise<Province> {
  return await apiFetch<Province>(`/api/provinces/${id}`);
}
