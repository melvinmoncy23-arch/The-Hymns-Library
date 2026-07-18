"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { songs } from "@/app/data/app/data/songs";

export default function Home() {
  const [search, setSearch] = useState("");
  const [selectedLetter, setSelectedLetter] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");

  const filteredSongs = Object.entries(songs).filter(
    ([_, song]) => {
      const query =
        search.trim().toLowerCase();

      const matchesSearch =
        !query ||
        song.title
          ?.toLowerCase()
          .includes(query) ||
        song.artist
          ?.toLowerCase()
          .includes(query);

      const matchesLetter =
        !selectedLetter ||
        song.title?.startsWith(
          selectedLetter
        );

      const matchesLanguage =
        !selectedLanguage ||
        song.language ===
          selectedLanguage;

      return (
        matchesSearch &&
        matchesLetter &&
        matchesLanguage
      );
    }
  );

  return (
   <main className="min-h-screen bg-gradient-to-b from-[#07111F] via-[#081426] to-[#09111C]">

      <div className="flex flex-col lg:flex-row">

        {/* SIDEBAR */}

     <aside className="hidden lg:block w-72 bg-gradient-to-b from-[#07111F] via-[#081426] to-[#0A1E3F] backdrop-blur-xl shadow-[20px_0_50px_rgba(0,0,0,0.25)] text-white min-h-screen border-r border-white/[0.04] p-6">

          <div className="border-b border-white/10 pb-6">

            <h1 className="hero-title text-4xl font-bold tracking-tight text-white">
              The Hymns Library 
            </h1>
        
          <div className="w-16 h-[2px] bg-[#D4AF37] rounded-full mt-4 mb-4">
 
           </div>
            <p className="text-sm text-gray-400 mt-2">
              Chords • Setlists • Performance
            </p>

          </div>

          <nav className="mt-10 space-y-2">

            <div className="bg-[#7A1024] rounded-xl px-4 py-3 font-medium">
              Home
            </div>

            <div className="rounded-xl px-4 py-3 hover:bg-white/10 transition-all cursor-pointer">
              Songs
            </div>

            <Link
              href="/favorites"
              className="block rounded-xl px-4 py-3 hover:bg-white/10 transition-all"
            >
              Favorites
            </Link>

            <Link
              href="/recent"
              className="block rounded-xl px-4 py-3 hover:bg-white/10 transition-all"
            >
              Recently Viewed
            </Link>

            <Link
              href="/setlists"
              className="block rounded-xl px-4 py-3 hover:bg-white/10 transition-all"
            >
              Setlists
            </Link>

          </nav>

          <div className="mt-16">

            <p className="text-xs uppercase tracking-widest text-gray-500 mb-4">
              Languages
            </p>

            <div className="space-y-2 text-gray-300">

              <div>English</div>
              <div>Malayalam</div>
              <div>Tamil</div>
              <div>Hindi</div>

            </div>

          </div>

        </aside>

        {/* MAIN */}

        <div className="flex-1">

          {/* MOBILE HEADER */}

          <div className="lg:hidden bg-gradient-to-b from-[#07111F] via-[#081426] to-[#0A1E3F] text-white p-5">

            <h1 className="text-xl font-bold">
              The Hymns Library
            </h1>

          </div>

          {/* TOP BAR */}

<header className="bg-transparent backdrop-blur-md border-b border-white/[0.03] px-6 py-5 sticky top-0 z-50">

            <div className="flex flex-col md:flex-row gap-3">

             <div className="relative flex-1 max-w-3xl">

                <input
                  value={search}
                  onChange={(e) =>
                    setSearch(e.target.value)
                  }
                  placeholder="Search songs, artists..."
               className="w-full rounded-full px-6 py-4 bg-black/30 border border-white/10 text-white placeholder:text-gray-500 backdrop-blur-2xl focus:border-[#D4AF37] focus:outline-none shadow-[0_0_30px_rgba(0,0,0,0.25)] transition-all"
                />

              </div>

              <div className="flex flex-wrap gap-2">

                {[
                  "",
                  "English",
                  "Malayalam",
                  "Tamil",
                  "Hindi",
                ].map((lang) => (

                  <button
                    key={lang || "all"}
                    onClick={() =>
                      setSelectedLanguage(lang)
                    }
                    className={`px-5 py-2 rounded-full text-sm transition-all

                    ${
                      selectedLanguage === lang
                       ? "bg-[#D4AF37] text-black"
                        : "bg-black/20 backdrop-blur-xl border border-white/10 text-gray-300 hover:border-[#D4AF37]"
                    }`}
                  >
                    {lang || "All"}
                  </button>

                ))}

              </div>

            </div>

          </header>

          {/* HERO */}

          <section className="relative">

            <div className="relative h-[750px] overflow-hidden">

              <Image
                src="/images/hero-image.jpg"
                alt="Hero"
                fill
                priority
                className="object-cover"
              />

             <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />

             <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#07111F]/70 to-[#07111F]" />
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#07111F]/70 to-[#07111F]" />
              <div className="absolute inset-0 flex items-center">

                <div className="max-w-5xl px-8 md:px-16">

                                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-yellow-500/20 bg-black/20 backdrop-blur-md text-yellow-400 text-sm mb-8">
                    {Object.keys(songs).length} Songs •
                    4 Languages • Stage Mode
                  </div>

                <h1 className="hero-title text-6xl md:text-8xl font-bold text-white leading-[0.95] tracking-tight drop-shadow-[0_0_40px_rgba(212,175,55,0.15)]">
                    The Hymns Library
                  </h1>

                  <p className="mt-8 text-xl md:text-2xl text-gray-300 max-w-3xl leading-relaxed">
                    Search songs, transpose chords,
                    build setlists and perform with
                    confidence.
                  </p>

                  <div className="flex flex-wrap gap-4 mt-10">

                    <a
                      href="#browse-songs"
                      className="bg-[#7A1024] text-white px-8 py-4 rounded-xl font-semibold hover:scale-105 transition-all"
                    >
                      Browse Songs
                    </a>

                    <Link
                      href="/setlists"
                      className="border border-white/20 bg-black/20 backdrop-blur-xl text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all"
                    >
                      Open Setlists
                    </Link>

                  </div>

                </div>

              </div>

            </div>

            {/* QUICK ACCESS */}

            <div className="max-w-7xl mx-auto px-6 -mt-24 relative z-20">

              <div className="grid md:grid-cols-3 gap-6">

                <Link
                  href="/favorites"
                 className="bg-[#0A1E3F]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-[#D4AF37] hover:-translate-y-2hover:shadow-[0_0_100px_rgba(212,175,55,0.35)] transition-all duration-300"
                >

                  <h3 className="text-white text-2xl font-bold">
                    Favorites
                  </h3>

                  <p className="text-gray-400 mt-3">
                    Your saved songs
                  </p>

                </Link>

                <Link
                  href="/recent"
                 className="bg-[#0A1E3F]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-[#D4AF37] hover:-translate-y-2hover:shadow-[0_0_100px_rgba(212,175,55,0.35)] transition-all duration-300"
                >

                  <h3 className="text-white text-2xl font-bold">
                    Recently Viewed
                  </h3>

                  <p className="text-gray-400 mt-3">
                    Songs you've opened recently
                  </p>

                </Link>

                <Link
                  href="/setlists"
                 className="bg-[#0A1E3F]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-[#D4AF37] hover:-translate-y-2hover:shadow-[0_0_100px_rgba(212,175,55,0.35)] transition-all duration-300"
                >

                  <h3 className="text-white text-2xl font-bold">
                    Setlists
                  </h3>

                  <p className="text-gray-400 mt-3">
                    Organize your worship flow
                  </p>

                </Link>

              </div>

            </div>

            {/* STATS */}

            <div className="max-w-7xl mx-auto px-6 mt-14">

              <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

                <div className="bg-[#0A1E3F]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-6">

                  <p className="text-4xl font-black text-white">
                    {Object.keys(songs).length}
                  </p>

                  <p className="text-gray-400 mt-2">
                    Songs
                  </p>

                </div>

                <div className="bg-[#0A1E3F]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-6">

                  <p className="text-4xl font-black text-white">
                    4
                  </p>

                  <p className="text-gray-400 mt-2">
                    Languages
                  </p>

                </div>

                <div className="bg-[#0A1E3F]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-6">

                  <p className="text-4xl font-black text-white">
                    Stage
                  </p>

                  <p className="text-gray-400 mt-2">
                    Performance Mode
                  </p>

                </div>

                <div className="bg-[#0A1E3F]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-6">

                  <p className="text-4xl font-black text-white">
                    PDF
                  </p>

                  <p className="text-gray-400 mt-2">
                    Downloads
                  </p>

                </div>

              </div>

            </div>

            {/* FEATURED SONG */}

            <div className="max-w-7xl mx-auto px-6 mt-16">

              <div className="rounded-3xl overflow-hidden bg-gradient-to-r from-[#06152D] via-[#10284d] to-[#06152D] border border-white/10 p-10">
                              <p className="text-yellow-400 uppercase tracking-[0.25em] text-sm">
                  Featured Song
                </p>

                <h2 className="text-5xl font-black text-white mt-4">
                  Holy Forever
                </h2>

                <p className="text-gray-300 mt-4 text-lg">
                  Chris Tomlin • Key A
                </p>

                <p className="text-gray-400 mt-6 max-w-2xl">
                  A modern worship anthem celebrating the eternal holiness
                  of God. Perfect for worship services, prayer meetings,
                  and special gatherings.
                </p>

                <Link
                  href="/songs/holy-forever"
                  className="inline-block mt-8 bg-[#7A1024] text-white px-8 py-4 rounded-xl font-semibold hover:scale-105 transition-all"
                >
                  Open Song
                </Link>

              </div>

            </div>

            {/* LIBRARY */}

            <div
              id="browse-songs"
              className="max-w-7xl mx-auto px-6 mt-20"
            >

              <div className="mb-10">

               <h2 className="text-5xl font-black text-white tracking-tight">
  Library
</h2>
                <p className="text-gray-400 mt-3 text-lg">
                  Explore every song in the collection
                </p>

              </div>

              {/* ALPHABET FILTER */}
 
              <div className="flex flex-wrap gap-2 mb-8">

                <button
                  onClick={() =>
                    setSelectedLetter("")
                  }
                  className="px-4 py-2 rounded-xl bg-[#7A1024] text-white"
                >
                  All
                </button>

                {"ABCDEFGHIJKLMNOPQRSTUVWXYZ"
                  .split("")
                  .map((letter) => (

                    <button
                      key={letter}
                      onClick={() =>
                        setSelectedLetter(letter)
                      }
                      className={`px-4 py-2 rounded-xl border transition-all

                      ${
                        selectedLetter === letter
                          ? "bg-gradient-to-b from-[#07111F] via-[#081426] to-[#0A1E3F] border-[#D4AF37] text-white"
                          : "bg-[#0A1E3F]/60 border-white/10 text-gray-300hover:border-[#D4AF37] hover:shadow-[0_0_100px_rgba(212,175,55,0.35)]"
                      }`}
                    >
                      {letter}
                    </button>

                  ))}

              </div>

              <div className="mb-8">

                <p className="text-gray-400">
                  {filteredSongs.length} songs found
                </p>

              </div>

              {/* SONG GRID */}

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

                {filteredSongs.map(
                  ([slug, song]) => (

                    <Link
                      key={slug}
                      href={`/songs/${slug}`}
                    className="group bg-gradient-to-b from-[#10284d] to-[#0A1E3F] backdrop-blur-xl border border-white/10 rounded-3xl p-6 hover:border-[#D4AF37] hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(212,175,55,0.08)] transition-all duration-500"
                    >

                      <div>

                        <h3 className="text-white text-2xl font-bold group-hover:translate-x-1 transition-all">
                          {(song as any).title}
                        </h3>

                        <p className="text-gray-400 mt-2">
                          {(song as any).artist}
                        </p>

                      </div>

                      <div className="flex gap-2 mt-6">

                        <span className="px-3 py-1 rounded-full bg-white/10 text-xs text-gray-300">
                          {(song as any).language}
                        </span>

                        <span className="px-3 py-1 rounded-full bg-white/10 text-xs text-gray-300">
                          Key {(song as any).key}
                        </span>

                      </div>

                      <div className="mt-8 flex justify-between items-center">

                        <p className="text-green-400 text-sm">
                          Chords Available
                        </p>

                        <span className="text-white/50 group-hover:text-white transition-all">
                          →
                        </span>

                      </div>

                    </Link>

                  )
                )}

              </div>

            </div>

          </section>
                    {/* FOOTER */}

          <footer className="border-t border-white/10 mt-24">

            <div className="max-w-7xl mx-auto px-6 py-16">

              <div className="grid md:grid-cols-3 gap-10">

                <div>

                  <h3 className="text-3xl font-black text-white">
                    The Hymns Library
                  </h3>

                  <p className="text-gray-400 mt-4 leading-relaxed">
                    A modern chord library designed for musicians,
                    worship leaders, and teams who need quick
                    access to songs, setlists and performance tools.
                  </p>

                </div>

                <div>

                  <h4 className="text-white font-semibold mb-4">
                    Library
                  </h4>

                  <div className="space-y-3 text-gray-400">

                    <Link
                      href="/favorites"
                      className="block hover:text-white transition-all"
                    >
                      Favorites
                    </Link>

                    <Link
                      href="/recent"
                      className="block hover:text-white transition-all"
                    >
                      Recently Viewed
                    </Link>

                    <Link
                      href="/setlists"
                      className="block hover:text-white transition-all"
                    >
                      Setlists
                    </Link>

                  </div>

                </div>

                <div>

                  <h4 className="text-white font-semibold mb-4">
                    Features
                  </h4>

                  <div className="space-y-3 text-gray-400">

                    <p>Transpose Chords</p>
                    <p>Stage Mode</p>
                    <p>PDF Downloads</p>
                    <p>Multiple Languages</p>

                  </div>

                </div>

              </div>

              <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">

                <p className="text-gray-500 text-sm">
                  © 2026 The Hymns Library
                </p>

                <p className="text-gray-500 text-sm mt-4 md:mt-0">
                  Chords • Setlists • Performance
                </p>

              </div>

            </div>

          </footer>

        </div>

      </div>

    </main>
  );
}