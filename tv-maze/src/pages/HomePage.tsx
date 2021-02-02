import {FC} from 'react';
import {HomeBanner} from '../components/HomeBanner/HomeBanner';
import {LatestShows} from '../components/LatestShows/LatestShows';

export type HomePageProps = {

}

const HomePageData = {
    title: "TV Bland",
    description: "TV Show and web series database. Create personalised schedules, Episode guide cast, crew and character information"
}

export const HomePage: FC<HomePageProps> = () => {
    return <>
        <HomeBanner title={HomePageData.title} description={HomePageData.description} />
        <LatestShows shows={[]} />
    </>
}




