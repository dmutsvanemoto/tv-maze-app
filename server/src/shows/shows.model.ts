export interface ShowDto {
    id: number;
    title: string;
    description: string;
    imageUrl?: string;
    streamOn?: string;
    schedule?: string;
    status?: string;
    genres?: string;
    characters?: ShowCharacterDto[];
    ratings?: ShowRatingDto[];
}

export interface ShowCharacterDto {
    id: number;
    showId?: number;
    actorId?: number;
    name: string;
    actor?: ActorDto;
    show?: ShowDto;
}

export interface ShowRatingDto {
    id: number;
    showId?: number;
    rating: number;
    show?: ShowDto;
}

export interface ActorDto {
    id: number;
    showId?: number;
    firstName: string;
    lastName: string;
    characters?: ShowCharacterDto[];
}