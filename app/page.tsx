"use client";

import { useState } from "react";
import Image from "next/image";
import { songs } from "@/app/data/app/data/songs";

export default function Home() {
  const [search, setSearch] = useState("");
  const [selectedLetter, setSelectedLetter] = useState("");
     return (
    <main className="min-h-screen bg-white">
      <div className="flex flex-col md:flex-row">

        {/* Sidebar */}
      <aside className="hidden lg:block w-64 bg-[#06152D] text-white min-h-screen p-6">

          {/* Logo Area */}
          <div className="h-32 border-b border-white/10 mb-6 flex items-center justify-center gap-4 px-2">

            <Image
              src="/images/hebron-logo.png"
              alt="Hebron AG"
              width={70}
              height={70}
              className="object-contain"
              priority
            />

            <div className="w-px h-16 bg-yellow-500"></div>

            <Image
              src="/images/ag-logo.png"
              alt="AG"
              width={70}
              height={70}
              className="object-contain"
              priority
            />

          </div>

          <h1 className="text-3xl font-bold">
            The Hymns Library
          </h1>

          <p className="text-sm mt-2 text-gray-300">
            Hebron AG, Uran
          </p>

          <nav className="mt-12 space-y-3">

            <div className="bg-[#7A1024] rounded-lg px-4 py-3 cursor-pointer">
              Home
            </div>

            <div className="hover:bg-white/10 rounded-lg px-4 py-3 cursor-pointer">
              Songs
            </div>

            <div className="hover:bg-white/10 rounded-lg px-4 py-3 cursor-pointer">
              Favorites
            </div>

            <div className="hover:bg-white/10 rounded-lg px-4 py-3 cursor-pointer">
              Recently Viewed
            </div>

            <div className="hover:bg-white/10 rounded-lg px-4 py-3 cursor-pointer">
              Setlists
            </div>

            <div className="hover:bg-white/10 rounded-lg px-4 py-3 cursor-pointer">
              Song Requests
            </div>

            <div className="hover:bg-white/10 rounded-lg px-4 py-3 cursor-pointer">
              Contact Us
            </div>

          </nav>

        </aside>

{/* Mobile Header */}
<div className="md:hidden bg-[#06152D] text-white p-4 flex items-center justify-between">
  <h1 className="text-xl font-bold">
    The Hymns Library
  </h1>

  <button className="bg-[#7A1024] px-3 py-2 rounded-lg">
    ☰
  </button>
</div>

        {/* Main Content */}
        <div className="flex-1">

          {/* Header */}
          <header className="bg-[#7A1024] p-4">

            <div className="flex flex-col md:flex-row gap-3">

              <div className="relative flex-1">

                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  🔍
                </span>

               <input
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  placeholder="Search songs, artists..."
  className="w-full rounded-full pl-12 pr-6 py-3 bg-white shadow-md"
/>

              </div>

              <div className="flex gap-2 overflow-x-auto pb-1">

                <button className="bg-white text-black px-4 py-2 rounded-lg">
                  English
                </button>

                <button className="border border-white text-white px-4 py-2 rounded-lg">
                  Malayalam
                </button>

                <button className="border border-white text-white px-4 py-2 rounded-lg">
                  Tamil
                </button>

                <button className="border border-white text-white px-4 py-2 rounded-lg">
                  Hindi
                </button>

              </div>

            </div>

          </header>

          {/* Hero */}
          

          
          <section className="p-3 md:p-10">

<div className="relative overflow-hidden rounded-2xl aspect-[16/9] md:aspect-[21/9] shadow-xl">

  <Image
    src="/images/hero-image.jpg"
    alt="The Hymns Library"
    fill
    priority
    className="object-cover object-center"
  />

  <div className="absolute inset-0 bg-gradient-to-r from-white/15 via-white/0 to-transparent" />



<div className="absolute left-4 md:left-10 bottom-4">

  <a
    href="#browse-songs"
    className="inline-block bg-[#7A1024] text-white px-4 py-2 md:px-6 md:py-3 rounded-lg hover:opacity-90"
  >
    Browse Songs
  </a>

</div>

</div>

            {/* Browse Songs */}
            <div id="browse-songs" className="mt-16">

              <h2 className="text-xl md:text-3xl font-bold mb-6 text-[#06152D]">
                Browse Songs
              </h2> </div>

              <div className="grid grid-cols-6 md:flex md:flex-wrap gap-2">

  <button
    onClick={() => setSelectedLetter("")}
    className="px-3 py-2 bg-[#7A1024] text-white rounded-md"
  >
    All
  </button>

  {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((letter) => (
    <button
      key={letter}
      onClick={() => setSelectedLetter(letter)}
      className={`px-3 py-2 rounded-md border ${
        selectedLetter === letter
          ? "bg-[#06152D] text-white"
          : "bg-white text-[#06152D]"
      }`}
    >
      {letter}
    </button>
  ))}

</div>
<p className="text-red-600 text-xl">
  Total Songs: {Object.keys(songs).length}
</p>
<p className="text-gray-500 mb-4">
  {Object.keys(songs).length} Songs Available
</p>

<p className="text-red-600 font-bold">
  Search = {search}
</p>

<p className="text-blue-600 font-bold">
  Letter = {selectedLetter}
</p>
<h1 className="text-6xl text-red-600">
  TEST TEST TEST
</h1>
{/* Song Cards */}

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
           {Object.entries(songs)
  .filter(([_, song]) => {
  const query = search.trim().toLowerCase();

  const matchesSearch =
    !query ||
    song.title?.toLowerCase().includes(query) ||
    song.artist?.toLowerCase().includes(query);

  const matchesLetter =
    !selectedLetter ||
    song.title?.startsWith(selectedLetter);

  return matchesSearch && matchesLetter;
})
  .map(([slug, song]) => (
  <a
    key={slug}
    href={`/songs/${slug}`}
  className="block bg-[#06152D] text-white rounded-xl p-4 md:p-3 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-t-4 border-[#7A1024]"
  >
   <div className="flex justify-between items-start">

  <div>

   <h3 className="font-bold text-lg md:text-xl text-white">
      {(song as any).title}
    </h3>

    <p className="text-gray-300 mt-1">
      {(song as any).artist}
    </p>

  </div>

  <div className="text-2xl">
    🎵
  </div>

</div>

<div className="flex gap-2 mt-4">

  <span className="px-2 py-1 text-xs rounded-full bg-white/10">
    {(song as any).language}
  </span>

  <span className="px-2 py-1 text-xs rounded-full bg-white/10">
    {(song as any).key}
  </span>

</div>

<p className="mt-4 text-green-400 text-sm font-medium">
  ✓ Chords Available
</p>
  </a>
))}

</div>

          </section>

         {/* Footer */}
<footer className="border-t mt-12 py-8 text-center text-gray-600">

  <p className="italic text-sm md:text-base px-4">
    "Sing to the Lord a new song; sing to the Lord, all the earth."
  </p>

  <p className="mt-2 text-[#7A1024] font-semibold">
  Psalm 96:1
</p>

</footer>
        </div>

      </div>
    </main>
  );
}