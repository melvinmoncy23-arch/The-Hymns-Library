import { songs } from "@/app/data/app/data/songs";
import SongViewer from "@/components/SongViewer";

export default async function SongPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const song = songs[slug as keyof typeof songs];

  if (!song) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-[#F4F5F7]">
        <h1 className="text-3xl font-bold text-[#06152D]">Song Not Found</h1>
      </main>
    );
  }

  return (
    <SongViewer
      chords={(song as any).chords}
      songKey={(song as any).key}
      pdf={(song as any).pdf}
      slug={slug}
      title={(song as any).title}
      artist={(song as any).artist}
      language={(song as any).language}
      capo={(song as any).capo}
      tag={(song as any).tag}
    />
  );
}