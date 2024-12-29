'use client';

import { useAnime } from '@/src/hooks/useAnime';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const { anime, loading, error, pagination } = useAnime(1);

  console.log(anime);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full">
        <Image
          src="/images/hero-banner.jpg"
          alt="Anime Banner"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to AnimeWorld
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Discover your next favorite anime
          </p>
          <Link 
            href="/browse" 
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors"
          >
            Browse Anime
          </Link>
        </div>
      </section>

      {/* Trending Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8">Trending Now</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {anime.map((item) => (
            <div key={item.mal_id} className="group cursor-pointer">
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
                <Image
                  src={item.images.webp.image_url}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-2 right-2 bg-red-600 px-2 py-1 rounded">
                  {item.rating}
                </div>
              </div>
              <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Latest Updates Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8">Latest Updates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Latest Episodes Cards */}
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-gray-800 rounded-lg overflow-hidden">
              <div className="relative aspect-video">
                <Image
                  src="/images/placeholder.jpg"
                  alt="Episode thumbnail"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-2 right-2 bg-black/60 px-2 py-1 rounded text-sm">
                  24:00
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-2">Episode Title</h3>
                <p className="text-gray-400 text-sm">Episode {item} • Just released</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gray-800 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="mb-8 text-gray-300">Get notified about new releases and updates</p>
          <form className="max-w-md mx-auto flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-lg font-semibold transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
