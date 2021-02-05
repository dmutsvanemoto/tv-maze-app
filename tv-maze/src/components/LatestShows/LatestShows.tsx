
import {FC} from 'react';
import {LatestShowsProps} from './types/LatestShowsProps';
import {LatestShowsTitle} from './components/LatestShowTitle';
import {LatestShowsPending} from './components/LatestShowsPending';
import {LatestShowItem} from './components/LatestShowItem';

export const LatestShows: FC<LatestShowsProps> = ({shows}) => {
    return <div data-testid="latestshows">
        <LatestShowsTitle />
        {!shows && <LatestShowsPending />}
        {shows?.map(show => <LatestShowItem key={show.id} show={show} />)}
    </div>
}



