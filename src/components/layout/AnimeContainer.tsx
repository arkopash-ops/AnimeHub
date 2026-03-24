import { Anime } from "@/src/types/anime";
import AnimeCard from "./AnimeCard";

interface AnimeContainerProps {
  animeList: Anime[];
}

export default function AnimeContainer({ animeList }: AnimeContainerProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      {animeList.map((anime) => (
        <AnimeCard key={anime.id} anime={anime} />
      ))}
    </div>
  );
}
