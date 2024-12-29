export const API_CONFIG = {
  BASE_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000',
  ENDPOINTS: {
    ANIME: '/anime',
  },
  DEFAULT_HEADERS: {
    'Content-Type': 'application/json',
  },
} as const; 