import {FC, useState, useEffect} from 'react';
import axios from 'axios';
import { Show } from '../../../interfaces/Show';
import { fetchShows } from '../api/fetchShows';
import {HomeBanner} from '../components/HomeBanner/HomeBanner';
import {LatestShows} from '../components/LatestShows/LatestShows';

export type HomePageProps = {

}

const HomePageData = {
    title: "TV Bland",
    description: "TV Show and web series database. Create personalised schedules, Episode guide cast, crew and character information"
}

export const HomePage: FC<HomePageProps> = () => {
    const [shows, setShows] = useState<Show[]>([]);
    const [showError, setShowError] = useState(false);

    useEffect(() => {
        const loadShows = async () => {
            const CancelToken = axios.CancelToken;
            const source = CancelToken.source();
    
            var {isError, data} = await fetchShows(source);

            if(isError)
            {
                setShowError(true);
            } else {
                setShows(data);
            }    
        }

        loadShows();

        return () => {
            setShowError(false)
        }
    }, [])
    

    return <>
        <HomeBanner title={HomePageData.title} description={HomePageData.description} />
        <LatestShows shows={shows} />
    </>
}
