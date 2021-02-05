import React, {FC} from 'react';
import { ShowDescription } from './components/ShowDescription';
import { ShowIcon } from './components/ShowIcon';
import { ShowInfo } from './components/ShowInfo';
import { ShowRatingContainer } from './components/ShowRatingContainer';
import { ShowTitle } from './components/ShowTitle';
import { ViewShowProps } from './types/ViewShowProps';

export const ViewShow: FC<ViewShowProps> = ({data}) =>
{
    return <>
        <div>
            <ShowRatingContainer  ratings={data.ratings} />
            <ShowIcon  title={data.title} url={data.imageUrl} />
        </div>
        <div>
            <ShowTitle  title={data.title} />
        </div>
        <div>
            <ShowDescription  description={data.description} />
        </div>
        <div>
            <ShowInfo {...data} />
        </div>
    </>
}