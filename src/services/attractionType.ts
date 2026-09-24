export type Attraction = {
  id: number;
  imageUrls: string[];
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
};
