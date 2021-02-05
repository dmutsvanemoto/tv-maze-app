import { ShowCharacter } from '../../../interfaces/Show';

export type ShowInfoProps = {
    streamOn?: string;
    schedule?: string;
    status?: string;
    genres?: string;
    characters?: ShowCharacter[];
};
