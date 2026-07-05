import { songs } from "@/app/data/app/data/songs";

export default async function SongPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const song = songs[slug as keyof typeof songs];

  if (!song) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold">
          Song Not Found
        </h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">

      {/* Hero Section */}
      <div className="bg-[#7A1024] text-white">
        <div className="max-w-6xl mx-auto p-10">

          <a
            href="/"
            className="font-semibold hover:underline"
          >
            ← Back to Library
          </a>

          <h1 className="text-5xl font-black mt-6">
            {(song as any).title}
          </h1>

          <p className="text-xl text-gray-200 mt-2">
            {(song as any).artist}
          </p>

          <div className="flex flex-wrap gap-3 mt-5">

            <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">
              Key: {(song as any).key}
            </span>

            <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">
              Capo: {(song as any).capo}
            </span>

            <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">
              {(song as any).language}
            </span>

          </div>

          <div className="mt-8">

            <a
              href={(song as any).pdf}
              download
              className="inline-block bg-[#06152D] text-white px-6 py-3 rounded-lg hover:opacity-90"
            >
              Download PDF
            </a>

          </div>

        </div>
      </div>

      {/* Chord Sheet */}
      <div className="max-w-6xl mx-auto p-10">

        <div className="border rounded-xl p-8 bg-gray-50 shadow-sm">

          <h2 className="text-2xl font-bold text-[#06152D] mb-6">
            Chord Sheet
          </h2>

          <pre className="whitespace-pre-wrap font-mono text-lg leading-9 text-[#06152D]">
            {(song as any).chords}
          </pre>

        </div>

      </div>

    </main>
  );
}