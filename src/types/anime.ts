export interface Anime {
    id: number;
    name: string;
    episodes?: number;
    url?: string;
}

export interface APIAnime {
    mal_id: number;
    title: string;
    episodes?: number;
    url: string;
}