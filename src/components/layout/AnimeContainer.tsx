import { Anime } from "@/src/types/anime";
import AnimeCard from "./AnimeCard";

interface AnimeContainerProps {
  animeList: Anime[];
  onExplore?: (id: number) => void;
}

export default function AnimeContainer({
  animeList,
  onExplore,
}: AnimeContainerProps) {
  return (
    <div className="flex overflow-x-auto space-x-6 py-4 px-2 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900">
      {animeList.map((anime) => (
        <div key={anime.id} className="flex-shrink-0 w-60">
          <AnimeCard anime={anime} onExplore={onExplore} />
        </div>
      ))}
    </div>
  );
}
