import {FC} from 'react';
import { useHistory } from 'react-router-dom';
import { ShowRatingContainer } from '../../ViewShow/components/ShowRatingContainer';
import {LatestShowItemProps} from '../types/LatestShowItemProps';

export const LatestShowItem: FC<LatestShowItemProps> = ({show: {id, title, imageUrl, ratings}}) => {
    let history = useHistory();
    const handleOnClick = () => {
        history.push(`/shows/${id}`)
    }
    
    return <div data-testid="latestshowitem" onClick={handleOnClick}>
        <div data-testid="latestshowitemimage">
            <img src={imageUrl} alt={title} />
        </div>
        <div data-testid="latestshowitemrating">
            <ShowRatingContainer ratings={ratings} />
        </div>
        <div data-testid="latestshowitemtitle">{title}</div>
    </div>
}