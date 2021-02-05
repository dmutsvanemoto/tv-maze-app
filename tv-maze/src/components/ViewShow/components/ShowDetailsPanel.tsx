import {FC} from 'react';
import { ShowDetailsPanelProps } from '../types/ShowDetailsPanelProps';
import {ShowDetailsPanelItem} from './ShowDetailsPanelItem';

export const ShowDetailsPanel: FC<ShowDetailsPanelProps> = ({streamOn = 'Not Available', schedule = 'Not Available', status = 'Not Available', genres = 'Not Available'}) => {
    return <div>
        <ShowDetailsPanelItem label="Stream on" text={streamOn} />
        <ShowDetailsPanelItem label="Schedule" text={schedule} />
        <ShowDetailsPanelItem label="Status" text={status} />
        <ShowDetailsPanelItem label="Genres" text={genres} />
    </div>
};