"use client";

import { useEffect, useState } from "react";
import { Anime } from "@/src/types/anime";
import { generateAnimeList } from "@/src/lib/base_api";
import AnimeLoader from "../layout/AnimeLoader";
import AnimeContainer from "../layout/AnimeContainer";

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

  if (loading) return <AnimeLoader />;

  return (
    <section className="anime-list-section p-8">
      <h1 className="text-2xl font-bold mb-6">List of Anime</h1>
      <AnimeContainer animeList={animeList} />
    </section>
  );
}
