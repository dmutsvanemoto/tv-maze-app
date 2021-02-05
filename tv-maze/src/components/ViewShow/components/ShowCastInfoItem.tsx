import {FC} from 'react';
import { ShowCastIntoItemProps } from '../types/ShowCastIntoItemProps';

export const ShowCastInfoItem: FC<ShowCastIntoItemProps> = ({showId, actor}) => {
    const character = actor?.characters?.find(x => x.showId === showId);
    
    return <>
        <span>{actor?.firstName}&nbsp;{actor?.lastName}</span>
        <span>{character?.name}</span>
    </>
}