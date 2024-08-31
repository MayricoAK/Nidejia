export interface Listing {
  id: number;
  title: string;
  slug: string;
  description: string;
  address: string;
  sqft: number;
  wifi_speed: number;
  max_person: number;
  attachments?: string[];
  price_per_day: number;
  full_support_available: number;
  gym_area_available: number;
  mini_cafe_available: number;
  cinema_available: number;
}
