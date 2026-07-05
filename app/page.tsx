import Image from "next/image";
import { songs } from "@/app/data/app/data/songs";
export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="flex">

        {/* Sidebar */}
        <aside className="w-64 bg-[#06152D] text-white min-h-screen p-6">

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

        {/* Main Content */}
        <div className="flex-1">

          {/* Header */}
          <header className="bg-[#7A1024] p-4">

            <div className="flex items-center gap-4 justify-between">

              <div className="relative flex-1">

                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  🔍
                </span>

                <input
                  placeholder="Search songs, artists, lyrics..."
                  className="w-full rounded-full pl-12 pr-6 py-3 bg-white shadow-md"
                />

              </div>

              <div className="flex gap-2">

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
          <section className="p-10">

<div className="relative overflow-hidden rounded-2xl h-[430px] shadow-xl">

  <Image
    src="/images/hero-image.jpg"
    alt="The Hymns Library"
    fill
    priority
    className="object-cover"
  />

  <div className="absolute inset-0 bg-gradient-to-r from-white/15 via-white/0 to-transparent" />

<div className="absolute left-10 bottom-2.5">

  <a
    href="#browse-songs"
    className="inline-block bg-[#7A1024] text-white px-6 py-3 rounded-lg hover:opacity-90"
  >
    Browse Songs
  </a>

</div>

</div>

            {/* Browse Songs */}
            <div id="browse-songs" className="mt-16">

              <h2 className="text-3xl font-bold mb-6 text-[#06152D]">
                Browse Songs
              </h2>

              <div className="flex flex-wrap gap-2">

                {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((letter) => (
                  <button
                    key={letter}
                    className="px-3 py-2 bg-gray-100 rounded-md hover:bg-gray-200"
                  >
                    {letter}
                  </button>
                ))}

              </div>

            </div>

            {/* Filters */}
            <div className="flex gap-3 mt-8 mb-6">

              <button className="bg-[#06152D] text-white px-4 py-2 rounded-lg">
                Recently Added
              </button>

              <button className="bg-[#06152D] text-white px-4 py-2 rounded-lg">
                Most Viewed
              </button>

            </div>

            {/* Song Cards */}
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
           {Object.entries(songs).map(([slug, song]) => (
  <a
    key={slug}
    href={`/songs/${slug}`}
  className="block bg-[#06152D] text-white rounded-xl p-5 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-t-4 border-[#7A1024]"
  >
   <div className="flex justify-between items-start">

  <div>

    <h3 className="font-bold text-xl text-white">
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
          <footer className="border-t py-8 text-center text-gray-600">

            <p className="italic">
              "Sing to the Lord a new song; sing to the Lord, all the earth."
            </p>

            <p className="mt-2">
              Psalm 96:1
            </p>

          </footer>

        </div>

      </div>
    </main>
  );
}