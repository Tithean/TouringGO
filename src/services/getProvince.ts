import { apiFetch } from "@/config/api";
import type { Province } from "./provinceType";

export default async function getProvince(): Promise<Province[]> {
  return apiFetch<Province[]>("/provinces");
}