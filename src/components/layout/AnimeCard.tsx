import { Anime } from "@/src/types/anime";
import Image from "next/image";

interface AnimeCardProp {
  anime: Anime;
  onExplore?: (id: number) => void;
}

export default function AnimeCard({ anime, onExplore }: AnimeCardProp) {
  return (
    <div className="anime-card bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-transform duration-300">
      <div className="relative w-full aspect-[2/3]">
        <Image
          src={`${anime.imageUrl}`}
          alt={anime.name}
          fill
          loading="eager"
          sizes="(max-width: 640px) 100vw,
                 (max-width: 768px) 50vw,
                 (max-width: 1024px) 33vw,
                 (max-width: 1280px) 25vw,
                 20vw"
          className="object-cover"
        />
      </div>

      <div className="p-4">
        <h2 className="mt-2 font-bold text-lg text-gray-100 relative overflow-hidden h-6">
          <span className="block whitespace-nowrap overflow-hidden text-ellipsis">
            {anime.name}
          </span>
          <span className="absolute right-0 top-0 h-full w-8 bg-gradient-to-l from-gray-800 to-transparent pointer-events-none"></span>
        </h2>

        {anime.episodes !== undefined && (
          <p className="text-gray-300">Episodes: {anime.episodes}</p>
        )}

        {anime.score !== undefined && (
          <p className="text-gray-300">Score: {anime.score}</p>
        )}

        <button
          onClick={() => onExplore?.(anime.id)}
          className="mt-3 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition"
        >
          Explore
        </button>
      </div>
    </div>
  );
}
