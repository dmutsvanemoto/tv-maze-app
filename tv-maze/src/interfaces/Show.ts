export interface Show {
    title: string,
    description: string,
    imageUrl: string
    rating: number,
    details: ShowDetails,
    cast: ShowCast[]
}

export interface ShowDetails {
    streamOn: string,
    schedule: string,
    status: string,
    genres: string[]
}

export interface ShowCast {
    playedBy: {
        firstName: string,
        lastName: string
    },
    character: string
}