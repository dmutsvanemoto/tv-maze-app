export interface Show {
    id: number;
    title: string;
    description: string;
    imageUrl?: string;
    streamOn?: string;
    schedule?: string;
    status?: string;
    genres?: string;
    characters?: ShowCharacter[];
    ratings?: ShowRating[];
}

export interface ShowCharacter {
    id: number;
    showId?: number;
    actorId?: number;
    name: string;
    actor?: Actor;
    show?: Show;
}

export interface ShowRating {
    id: number;
    showId?: number;
    rating: number;
    show?: Show;
}

export interface Actor {
    id: number;
    showId?: number;
    firstName: string;
    lastName: string;
    characters?: ShowCharacter[];
}