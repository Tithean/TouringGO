export type Attraction = {
  id: number;
  provinceId?: number;
  nameKh: string;
  nameEn: string;
  descriptionKh: string;
  descriptionEn: string;
  address: string;
  openingHours: string;
  category: string;
  latitude: number;
  longitude: number;
  entryFee: number;
  rating: number;
  imageUrls?: string[];
};
