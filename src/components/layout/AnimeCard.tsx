import { Anime } from "@/src/types/anime";
import Image from "next/image";

interface AnimeCradProp {
  anime: Anime;
}

export default function AnimeCard({ anime }: AnimeCradProp) {
  return (
    <div className="anime-card rounded overflow-hidden shadow hover:shadow-lg transition">
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
        <h2 className="mt-2 font-bold text-lg">{anime.name}</h2>
        {anime.episodes !== undefined && <p>Episodes: {anime.episodes}</p>}
        {anime.score !== undefined && <p>Score: {anime.score}</p>}
      </div>
    </div>
  );
}
