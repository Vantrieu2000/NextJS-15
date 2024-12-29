import { API_CONFIG } from '@/src/config/api.config';
import { AnimeResponse } from '@/src/types/anime';

export class AnimeService {
  private static buildUrl(endpoint: string, queryParams?: Record<string, string | number>) {
    const url = new URL(`${API_CONFIG.BASE_URL}${endpoint}`);
    
    if (queryParams) {
      Object.entries(queryParams).forEach(([key, value]) => {
        url.searchParams.append(key, String(value));
      });
    }
    
    return url.toString();
  }

  static async getAnimeList(page: number = 1, limit: number = 10): Promise<AnimeResponse> {
    try {
      const url = this.buildUrl(API_CONFIG.ENDPOINTS.ANIME, { page, limit });
      const response = await fetch(url, {
        headers: API_CONFIG.DEFAULT_HEADERS,
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Failed to fetch anime list:', error);
      throw error;
    }
  }
} 