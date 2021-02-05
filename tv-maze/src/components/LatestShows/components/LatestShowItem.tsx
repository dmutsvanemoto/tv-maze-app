import {FC} from 'react';
import { ShowRatingContainer } from '../../ViewShow/components/ShowRatingContainer';
import {LatestShowItemProps} from '../types/LatestShowItemProps';

export const LatestShowItem: FC<LatestShowItemProps> = ({show: {title, imageUrl, ratings}}) => {
    return <div data-testid="latestshowitem">
        <div data-testid="latestshowitemimage">
            <img src={imageUrl} alt={title} />
        </div>
        <div data-testid="latestshowitemrating">
            <ShowRatingContainer ratings={ratings} />
        </div>
        <div data-testid="latestshowitemtitle">{title}</div>
    </div>
}