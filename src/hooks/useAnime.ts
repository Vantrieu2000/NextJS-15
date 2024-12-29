import { useState, useEffect } from 'react';
import { Anime, AnimeResponse } from '@/src/types/anime';
import { AnimeService } from '@/src/services/anime.service';

interface UseAnimeReturn {
  anime: Anime[];
  loading: boolean;
  error: Error | null;
  pagination: AnimeResponse['pagination'] | null;
  fetchAnime: (page?: number) => Promise<void>;
}

export function useAnime(initialPage: number = 1): UseAnimeReturn {
  const [anime, setAnime] = useState<Anime[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [pagination, setPagination] = useState<AnimeResponse['pagination'] | null>(null);

  const fetchAnime = async (page: number = initialPage) => {
    try {
      setLoading(true);
      const response = await AnimeService.getAnimeList(page);
      setAnime(response.data);
      setPagination(response.pagination);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to fetch anime'));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAnime(initialPage);
  }, [initialPage]);

  return { anime, loading, error, pagination, fetchAnime };
} 