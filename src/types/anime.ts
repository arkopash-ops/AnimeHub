export interface Anime {
    id: number;
    name: string;
    imageUrl?: string;
    episodes?: number;
    score?: number;
}

export interface APIAnime {
    mal_id: number;
    title: string;
    images: {
        jpg: { image_url: string };
        webp?: { image_url: string };
    };
    episodes?: number;
    score: number;
}
