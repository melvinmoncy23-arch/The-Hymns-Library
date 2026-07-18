"use client";

import { useState } from "react";
import { songs } from "@/app/data/app/data/songs";

export default function SetlistDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const [selectedSong, setSelectedSong] = useState("");
const [isOpen, setIsOpen] = useState(false);
  return (
    <main className="max-w-6xl mx-auto p-10">

      <h1 className="text-4xl font-bold mb-8 text-[#06152D]">
        📋 {decodeURIComponent(params.slug)}
      </h1>

      <div className="flex gap-3 mb-8">
<div className="relative flex-1">

  <button
    onClick={() => setIsOpen(!isOpen)}
    className="w-full bg-[#06152D] text-white px-5 py-3 rounded-xl border border-white/10 flex justify-between items-center hover:border-[#7A1024] transition-all"
  >
    <span>
      {selectedSong
        ? songs[selectedSong as keyof typeof songs]?.title
        : "🎵 Select a Song"}
    </span>

    <span
      className={`transition-transform ${
        isOpen ? "rotate-180" : ""
      }`}
    >
      ▼
    </span>
  </button>

  {isOpen && (
    <div className="absolute z-50 mt-2 w-full bg-[#06152D] border border-white/10 rounded-xl shadow-2xl overflow-hidden">

      {Object.entries(songs).map(
        ([slug, song]) => (

          <button
            key={slug}
            onClick={() => {
              setSelectedSong(slug);
              setIsOpen(false);
            }}
            className="w-full text-left px-5 py-3 text-white hover:bg-[#7A1024] transition-all"
          >
            🎵 {song.title}
          </button>

        )
      )}

    </div>
  )}

</div>

        <button
          className="bg-[#7A1024] text-white px-6 rounded-xl"
        >
          Add Song
        </button>

      </div>

      <div className="border rounded-xl p-6">

        <p className="text-gray-500">
          No songs added yet.
        </p>

      </div>

    </main>
  );
}