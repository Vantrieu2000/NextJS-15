const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.example.com';

export async function fetchApi<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const defaultHeaders = {
    'Content-Type': 'application/json',
  };

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      ...defaultHeaders,
      ...options.headers,
    },
  });

  if (!response.ok) {
    throw new Error(`API error: ${response.statusText}`);
  }

  return response.json();
} 