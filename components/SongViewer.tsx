"use client";

import { useEffect, useRef, useState } from "react";

const NOTES = [
  "C",
  "C#",
  "D",
  "D#",
  "E",
  "F",
  "F#",
  "G",
  "G#",
  "A",
  "A#",
  "B",
];

function transposeChord(chord: string, steps: number) {
  const match = chord.match(/^([A-G]#?)(.*)$/);

  if (!match) return chord;

  const [, root, suffix] = match;

  const index = NOTES.indexOf(root);

  if (index === -1) return chord;

  const newRoot =
    NOTES[
      (index + steps + NOTES.length) %
      NOTES.length
    ];

  return newRoot + suffix;
}
export default function SongViewer ({
  chords,
  songKey,
  pdf,
  slug,
}: {
  chords: string;
  songKey: string;
  pdf: string;
  slug: string;
}) {
   const [fontSize, setFontSize] = useState(18);
  const [isFavorite, setIsFavorite] = useState(false);
   const [stageMode, setStageMode] = useState(false);

  const [currentKey, setCurrentKey] = useState(songKey);

  const [transposeSteps, setTransposeSteps] =
  useState(0);

  const [autoScroll, setAutoScroll] = useState(false);
  const [scrollSpeed, setScrollSpeed] = useState(1);

  const scrollRef = useRef<HTMLDivElement>(null);

useEffect(() => {
  const favorites = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  );

  setIsFavorite(favorites.includes(slug));
}, [slug]);

  useEffect(() => {
    if (!autoScroll) return;

    const interval = setInterval(() => {
      window.scrollBy({
        top: scrollSpeed,
        behavior: "smooth",
      });
    }, 30);

    return () => clearInterval(interval);
  }, [autoScroll, scrollSpeed]);

 const transposeUp = () => {
  setTransposeSteps((prev) => prev + 1);

  const root = currentKey.split(" ")[0];

  const index = NOTES.indexOf(root);

  if (index === -1) return;

  const next = NOTES[(index + 1) % NOTES.length];

  setCurrentKey(currentKey.replace(root, next));
};

const transposeDown = () => {
  setTransposeSteps((prev) => prev - 1);

  const root = currentKey.split(" ")[0];

  const index = NOTES.indexOf(root);

  if (index === -1) return;

  const next =
    NOTES[(index - 1 + NOTES.length) % NOTES.length];

  setCurrentKey(currentKey.replace(root, next));
};

const toggleFavorite = () => {
  const favorites = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  );

  let updated;

  if (favorites.includes(slug)) {
    updated = favorites.filter(
      (item: string) => item !== slug
    );
  } else {
    updated = [...favorites, slug];
  }

  localStorage.setItem(
    "favorites",
    JSON.stringify(updated)
  );

  setIsFavorite(!isFavorite);
};

  return (
    <>
      {/* Toolbar */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 mt-6">

        <div className="flex flex-wrap items-center gap-3 bg-white/80 backdrop-blur-xl border border-gray-200 rounded-2xl p-4 shadow-xl">

          <button
            onClick={() =>
              setFontSize((prev) => Math.max(12, prev - 2))
            }
            className="px-5 py-2.5 rounded-full bg-[#06152D] text-white hover:scale-105 transition-all"
          >
            A-
          </button>

          <button
            onClick={() =>
              setFontSize((prev) => Math.min(40, prev + 2))
            }
            className="px-5 py-2.5 rounded-full bg-[#06152D] text-white hover:scale-105 transition-all"
          >
            A+
          </button>

          <button
            onClick={transposeDown}
            className="px-5 py-2.5 rounded-full bg-[#06152D] text-white hover:scale-105 transition-all"
          >
            ♭
          </button>

          <div className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#7A1024] to-[#9e1b32] text-white font-semibold">
            KEY: {currentKey}
          </div>

          <button
            onClick={transposeUp}
            className="px-5 py-2.5 rounded-full bg-[#06152D] text-white hover:scale-105 transition-all"
          >
            ♯
          </button>

          <button
            onClick={() => setStageMode(!stageMode)}
            className={`px-5 py-2.5 rounded-full text-white hover:scale-105 transition-all ${
              stageMode
                ? "bg-green-600"
                : "bg-[#06152D]"
            }`}
          >
            🌙 Stage Mode
          </button>

          <button
            onClick={() => setAutoScroll(!autoScroll)}
            className={`px-5 py-2.5 rounded-full text-white hover:scale-105 transition-all ${
              autoScroll
                ? "bg-red-600"
                : "bg-[#06152D]"
            }`}
          >
            {autoScroll ? "⏹ Stop" : "▶ Scroll"}
          </button>

          <div className="flex items-center gap-2">

            <span className="text-sm font-medium">
              Speed
            </span>

            <input
              type="range"
              min="1"
              max="10"
              value={scrollSpeed}
              onChange={(e) =>
                setScrollSpeed(Number(e.target.value))
              }
            />

          </div>

          <a
            href={pdf}
            download
            className="px-5 py-2.5 rounded-full bg-[#06152D] text-white hover:scale-105 transition-all"
          >
            📄 PDF
          </a>
<button
  onClick={toggleFavorite}
  className={`px-5 py-2.5 rounded-full text-white hover:scale-105 transition-all ${
    isFavorite
      ? "bg-gradient-to-r from-[#7A1024] to-[#9e1b32]"
      : "bg-[#06152D]"
  }`}
>
  {isFavorite ? "❤️ Saved" : "🤍 Favorite"}
</button>
        </div>

      </div>

      {/* Chord Sheet */}
      <div
        ref={scrollRef}
        className="max-w-6xl mx-auto p-10"
      >

        <div
          className={`border rounded-xl p-8 shadow-sm transition-all duration-300 ${
            stageMode
              ? "bg-black border-yellow-500"
              : "bg-gray-50"
          }`}
        >

          <h2
            className={`text-2xl font-bold mb-6 ${
              stageMode
                ? "text-yellow-400"
                : "text-[#06152D]"
            }`}
          >
            Chord Sheet
          </h2>

          <pre
            style={{ fontSize: `${fontSize}px` }}
            className={`whitespace-pre-wrap font-mono leading-9 ${
              stageMode
                ? "text-yellow-400"
                : "text-[#06152D]"
            }`}
          >
            {chords
  .split("\n")
  .map((line) =>
    line.replace(
      /\b([A-G]#?(?:m|maj|sus|dim|aug|add)?[0-9]*)\b/g,
      (match) =>
        transposeChord(match, transposeSteps)
    )
  )
  .join("\n")}
          </pre>

        </div>

      </div>
    </>
  );
}