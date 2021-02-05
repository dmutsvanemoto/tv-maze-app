import {FC} from 'react';
import { ShowRating} from '../../../interfaces/Show';
import meanBy from 'lodash.meanby';
import { ShowRatingProps } from '../types/ShowRatingProps';

export const ShowRatingContainer: FC<ShowRatingProps> = ({ ratings = [] }) => {
    const rating: number = meanBy(ratings, (x: ShowRating) => x.rating) || 0;

    return <>{rating} / 5</>
};