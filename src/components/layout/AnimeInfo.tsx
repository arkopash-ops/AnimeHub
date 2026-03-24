"use client";
import { useEffect, useState } from "react";
import { APIAnime } from "@/src/types/anime";
import Image from "next/image";

interface AnimeInfoProps {
  id: number;
  onClose: () => void;
}

export default function AnimeInfo({ id, onClose }: AnimeInfoProps) {
  const [anime, setAnime] = useState<APIAnime | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAnime() {
      try {
        setLoading(true);
        const res = await fetch(`https://api.jikan.moe/v4/anime/${id}`);
        const data = await res.json();
        setAnime(data.data ?? null);
      } catch (error) {
        console.error("Failed to fetch anime details:", error);
        setAnime(null);
      } finally {
        setLoading(false);
      }
    }

    fetchAnime();
  }, [id]);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="flex space-x-2">
          <span className="w-4 h-4 bg-white rounded-full animate-bounce delay-0"></span>
          <span className="w-4 h-4 bg-white rounded-full animate-bounce delay-200"></span>
          <span className="w-4 h-4 bg-white rounded-full animate-bounce delay-400"></span>
        </div>
      </div>
    );
  }

  if (!anime) return <div className="p-4">Anime not found.</div>;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
      <div className="bg-gray-800 rounded-xl p-6 max-w-3xl w-full relative">
        <button className="absolute top-4 right-4 text-white" onClick={onClose}>
          Close
        </button>

        <h2 className="text-2xl font-bold text-white mb-4">{anime.title}</h2>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Image */}
          <div className="relative w-full md:w-1/3 aspect-[2/3]">
            <Image
              src={anime.images.jpg.image_url}
              alt={anime.title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              loading="eager"
              className="object-cover rounded-lg"
            />
          </div>

          {/* Info */}
          <div className="md:w-2/3 text-gray-300 space-y-3">
            <p>
              <strong>Episodes:</strong> {anime.episodes || "N/A"}
            </p>
            <p>
              <strong>Score:</strong> {anime.score || "N/A"}
            </p>
            <p>
              <strong>Description:</strong>
            </p>
            <p className="text-sm leading-relaxed">{anime.synopsis || "N/A"}</p>
            <p>
              <strong>Genres:</strong>{" "}
              {anime.genres?.length
                ? anime.genres.map((g) => g.name).join(", ")
                : "N/A"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
