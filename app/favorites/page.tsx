"use client";

import { useEffect, useState } from "react";
import { songs as allSongs } from "@/app/data/app/data/songs";

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    const savedFavorites = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );

    const cleanedFavorites = savedFavorites.filter(
      (song: string | null) =>
        song && typeof song === "string"
    );

    setFavorites(cleanedFavorites);
  }, []);

  return (
    <main className="max-w-6xl mx-auto p-10">
      <h1 className="text-4xl font-bold mb-8 text-[#06152D]">
        ❤️ Favorites
      </h1>

      {favorites.length === 0 ? (
        <div className="bg-gray-50 border rounded-xl p-8 text-center">
          <h2 className="text-2xl font-semibold text-[#06152D]">
            No Favorites Yet
          </h2>

          <p className="text-gray-500 mt-2">
            Start adding songs to your favorites.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {favorites.map((slug) => {
            const song =
              allSongs[slug as keyof typeof allSongs];

            if (!song) return null;

            return (
              <a
                key={slug}
                href={`/songs/${slug}`}
                className="block bg-[#0A1E3F] text-white rounded-xl p-4 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-t-4 border-[#7A1024]"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-xl">
                      {song.title}
                    </h3>

                    <p className="text-gray-300 mt-1">
                      {song.artist}
                    </p>
                  </div>

                  <div className="text-2xl">❤️</div>
                </div>

                <div className="flex gap-2 mt-4">
                  <span className="px-2 py-1 text-xs rounded-full bg-white/10">
                    {song.language}
                  </span>

                  <span className="px-2 py-1 text-xs rounded-full bg-white/10">
                    {song.key}
                  </span>
                </div>

                <p className="mt-4 text-green-400 text-sm font-medium">
                  ✓ Chords Available
                </p>
              </a>
            );
          })}
        </div>
      )}
    </main>
  );
}