import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AnimeWorld - Watch Anime Online',
  description: 'Watch the latest anime online in HD quality',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-gray-800 text-white sticky top-0 z-50">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <Link href="/" className="text-xl font-bold">
                AnimeWorld
              </Link>
              <div className="flex gap-6">
                <Link href="/browse" className="hover:text-red-500 transition-colors">
                  Browse
                </Link>
                <Link href="/genres" className="hover:text-red-500 transition-colors">
                  Genres
                </Link>
                <Link href="/schedule" className="hover:text-red-500 transition-colors">
                  Schedule
                </Link>
              </div>
            </div>
          </div>
        </nav>
        {children}
        <footer className="bg-gray-900 text-white py-8">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; 2024 AnimeWorld. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
} 