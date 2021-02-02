import axios, { CancelTokenSource } from 'axios';
import { Show } from '../../../interfaces/Show';

type FetchShowsApiResponse = {
    data: Show[];
    isError: boolean;
}

export const fetchShows = async (cancelTokenSource: CancelTokenSource): Promise<FetchShowsApiResponse> => {
    return axios.get<Show[]>("api/shows", { cancelToken: cancelTokenSource.token })
    .then(({data}) => ({ data, isError: false}))
    .catch(() => ({ data: [], isError: true }));
}