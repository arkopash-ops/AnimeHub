"use client";

import { useState, useEffect } from "react";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { Anime } from "@/src/types/anime";
import { searchAnime } from "../../lib/base_api";
import AnimeLoader from "../layout/AnimeLoader";
import AnimeCard from "../layout/AnimeCard";
import AnimeInfo from "../layout/AnimeInfo";

export default function SearchSection() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Anime[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedAnimeId, setSelectedAnimeId] = useState<number | null>(null);

  // Debounce timer
  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const timer = setTimeout(async () => {
      setLoading(true);
      try {
        const res = await searchAnime(query);
        setResults(res);
      } catch (error) {
        console.error("Search failed:", error);
        setResults([]);
      } finally {
        setLoading(false);
      }
    }, 500);
    return () => clearTimeout(timer);
  }, [query]);

  // Clear search input
  const handleClear = () => {
    setQuery("");
    setResults([]);
  };

  return (
    <section className="bg-gray-900 text-gray-100 py-16 flex flex-col items-center">
      <div className="w-full max-w-xl px-4 mb-6">
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
          </div>

          {query && (
            <button
              type="button"
              onClick={handleClear}
              className="absolute inset-y-0 right-0 flex items-center font-bebas font-bold pr-3 text-gray-400 hover:text-gray-200 cursor-pointer group"
              title="Clear search"
            >
              <XMarkIcon className="h-5 w-5" />
              <span className="sr-only">Clear search</span>
            </button>
          )}

          <input
            type="text"
            placeholder="Search Anime..."
            className="w-full pl-10 pr-10 p-4 rounded-xl bg-gray-800 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 shadow-md transition-all duration-300"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>

      {loading && <AnimeLoader />}

      {results.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 w-full max-w-6xl px-4">
          {results.map((anime) => (
            <AnimeCard
              key={anime.id}
              anime={anime}
              onExplore={setSelectedAnimeId}
            />
          ))}
        </div>
      )}

      {results.length === 0 && !loading && query.trim() && (
        <p className="text-gray-400 mt-6">
          No results found for `&ldquo;`{query}`&ldquo;`
        </p>
      )}

      {selectedAnimeId !== null && (
        <AnimeInfo
          id={selectedAnimeId}
          onClose={() => setSelectedAnimeId(null)}
        />
      )}
    </section>
  );
}
