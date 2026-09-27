import type { Province } from "./provinceType";

export function slugifyDestination(value: string): string {
  return (value || "")
    .toString()
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function getDestinationRoute(
  province: Pick<Province, "id" | "nameEn" | "nameKh">,
): string {
  const slug = slugifyDestination(
    province.nameEn || province.nameKh || String(province.id),
  );

  return `/destination/${slug || province.id}`;
}
