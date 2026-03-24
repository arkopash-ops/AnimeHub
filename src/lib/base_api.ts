import { Anime, APIAnime } from "../types/anime";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_API;

export const generateAnimeList = async (): Promise<Anime[]> => {
  try {
    const res = await fetch(`${BASE_URL}/anime`);
    const data = await res.json();

    if (!Array.isArray(data?.data)) return [];

    return data.data.map((item: APIAnime) => ({
      id: item.mal_id,
      name: item.title,
      imageUrl: item.images.jpg.image_url,
      episodes: item.episodes,
      score: item.score,
    }));
  } catch (error) {
    console.error("Failed to fetch anime:", error);
    return [];
  }
};

export const getTopAnime = async (): Promise<Anime[]> => {
  try {
    const res = await fetch(`${BASE_URL}/top/anime`);
    const data = await res.json();

    return data.data.map((item: APIAnime) => ({
      id: item.mal_id,
      name: item.title,
      imageUrl: item.images.jpg.image_url,
      episodes: item.episodes,
      score: item.score,
    }));
  } catch (error) {
    console.error("Failed to fetch top anime:", error);
    return [];
  }
};

export const searchAnime = async (query: string) => {
  const res = await fetch(`${BASE_URL}/anime?q=${query}`);
  return res.json();
};
