import { Anime } from "@/src/types/anime";
import Image from "next/image";

interface AnimeCardProp {
  anime: Anime;
}

export default function AnimeCard({ anime }: AnimeCardProp) {
  return (
    <div className="anime-card bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300">
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

      {/* Anime Info */}
      <div className="p-4">
        <h2 className="mt-2 font-bold text-lg text-gray-100">{anime.name}</h2>
        {anime.episodes !== undefined && (
          <p className="text-gray-300">Episodes: {anime.episodes}</p>
        )}
        {anime.score !== undefined && (
          <p className="text-gray-300">Score: {anime.score}</p>
        )}
      </div>
    </div>
  );
}
