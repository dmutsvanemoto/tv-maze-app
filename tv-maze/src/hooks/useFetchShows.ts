import {useState, useEffect} from 'react';
import axios from 'axios';
import { Show } from '../../../interfaces/Show';

export const useFetchShows = () => {
    const [data, setData] = useState<Show[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsError(false);
            setIsLoading(true);

            const CancelToken = axios.CancelToken;
            const source = CancelToken.source();
     
            try {
                const response = await axios.get<Show[]>(`/api/shows`, { cancelToken: source.token });
     
                setData(response.data);
            } catch (error) {
                setIsError(true);
            }
     
            setIsLoading(false);
        };
     
        fetchData();
        return () => {}
    }, []);

    return { data, isLoading, isError };
}

