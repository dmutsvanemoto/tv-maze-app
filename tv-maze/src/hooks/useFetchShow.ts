import {useState, useEffect} from 'react';
import axios from 'axios';
import { Show } from '../interfaces/Show';

export const useFetchShow = (showId: number) => {
    const [data, setData] = useState<Show>();
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsError(false);
            setIsLoading(true);

            const CancelToken = axios.CancelToken;
            const source = CancelToken.source();
     
            try {
                const response = await axios.get<Show>(`/api/shows/${showId}`, { cancelToken: source.token });
     
                setData(response.data);
            } catch (error) {
                setIsError(true);
            }
     
            setIsLoading(false);
        };
     
        fetchData();
        return () => {}
    }, [showId]);

    return { data, isLoading, isError };
}
