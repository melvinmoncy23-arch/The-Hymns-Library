"use client";

import { useEffect, useState } from "react";

export default function SetlistsPage() {
  const [setlists, setSetlists] = useState<string[]>([]);
  const [newSetlist, setNewSetlist] = useState("");

  useEffect(() => {
    const saved = JSON.parse(
      localStorage.getItem("setlists") || "[]"
    );

    setSetlists(saved);
  }, []);

  const createSetlist = () => {
    if (!newSetlist.trim()) return;

    const updated = [...setlists, newSetlist];

    setSetlists(updated);

    localStorage.setItem(
      "setlists",
      JSON.stringify(updated)
    );

    setNewSetlist("");
  };

  return (
    <main className="max-w-6xl mx-auto p-10">
      <h1 className="text-4xl font-bold mb-8 text-[#06152D]">
        📋 Setlists
      </h1>

      <div className="flex gap-3 mb-8">
        <input
          value={newSetlist}
          onChange={(e) =>
            setNewSetlist(e.target.value)
          }
          placeholder="Sunday Service"
          className="border rounded-xl px-4 py-3 flex-1"
        />

        <button
          onClick={createSetlist}
          className="bg-[#7A1024] text-white px-6 rounded-xl"
        >
          Create
        </button>
      </div>

      <div className="space-y-4">
        {setlists.map((setlist) => (
          <div
            key={setlist}
            className="border rounded-xl p-5"
          >
            📋 {setlist}
          </div>
        ))}
      </div>
    </main>
  );
}