"use client";

import { useEffect, useState } from "react";
import { Anime } from "@/src/types/anime";
import { generateAnimeList } from "@/src/lib/base_api";

export default function AnimeListSection() {
  const [animeList, setAnimeList] = useState<Anime[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnime = async () => {
      const list = await generateAnimeList();
      setAnimeList(list);
      setLoading(false);
    };

    fetchAnime();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <section className="anime-list-section" style={{ padding: "2rem" }}>
      <h1>List of Anime</h1>
      <ul>
        {animeList.map((anime, index) => (
          <li key={anime.id ?? index}>{anime.name}</li>
        ))}
      </ul>
    </section>
  );
}
