export interface Province {
  id: number;
  nameKh: string;
  nameEn: string;
  region: string;
  imageUrl: string;
}

export interface Attraction {
  id: number;
  province: Province;
  nameKh: string;
  nameEn: string;
  descriptionKh: string | null;
  descriptionEn: string | null;
  address: string | null;
  openingHours: string | null;
  category: string;
  latitude: number;
  longitude: number;
  entryFee: number | null;
  rating: number;
  imageUrls: string[];
  featured: boolean;
}

export interface SearchApiResponse {
  content: Attraction[];
  page: number;
  size: number;
  totalPages: number;
  totalElements: number;
}