"use client";

import { useEffect, useState } from "react";
import { Anime } from "@/src/types/anime";
import { getTopAnime } from "@/src/lib/base_api";
import AnimeLoader from "../layout/AnimeLoader";
import AnimeContainer from "../layout/AnimeContainer";

export default function TopAnimeSection() {
  const [animeList, setAnimeList] = useState<Anime[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnime = async () => {
      const list = await getTopAnime();
      setAnimeList(list);
      setLoading(false);
    };

    fetchAnime();
  }, []);

  if (loading) return <AnimeLoader />;

  return (
    <section className="bg-gray-900 text-gray-100 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Top Anime
        </h1>
        <AnimeContainer animeList={animeList} />
      </div>
    </section>
  );
}
