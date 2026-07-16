"use client";

import { useEffect, useState } from "react";

export default function RecentPage() {
  const [songs, setSongs] = useState<string[]>([]);

  useEffect(() => {
    const recent = JSON.parse(
      localStorage.getItem("recentSongs") || "[]"
    );

    setSongs(recent);
  }, []);

  return (
    <main className="max-w-6xl mx-auto p-10">
      <h1 className="text-4xl font-bold mb-8">
        Recently Viewed
      </h1>

      <div className="space-y-3">
        {songs.map((song) => (
          <a
            key={song}
            href={`/songs/${song}`}
            className="block p-4 rounded-xl border hover:bg-gray-50"
          >
            {song}
          </a>
        ))}
      </div>
    </main>
  );
}