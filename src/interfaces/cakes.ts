export interface CakesResponse {
  status: string;
  message: string;
  data: DataCake;
}

export interface DataCake {
  current_page: number;
  total_page: number;
  items: CakeItem[];
}

export interface CakeItem {
  title: string;
  description: string;
  rating: number | string;
  image: string;
  created_at: Date;
  updated_at: Date;
  id: string;
}
