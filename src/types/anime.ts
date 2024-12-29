export interface Anime {
    mal_id: number;
  title: string;
  images: {
    webp: {
      image_url: string;
      small_image_url: string;
      large_image_url: string;
    };
    jpg: {
      image_url: string;
      small_image_url: string;
      large_image_url: string;
    };
  };
  rating: number;
}

export interface AnimeResponse {
  data: Anime[];
  pagination: {
    currentPage: number;
    totalPages: number;
    totalItems: number;
  }
} 