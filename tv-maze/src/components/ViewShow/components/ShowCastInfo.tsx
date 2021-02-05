import {FC} from 'react';
import { ShowCastInfoProps } from '../types/ShowCastInfoProps';
import { ShowCastInfoItem } from './ShowCastInfoItem';

export const ShowCastInfo: FC<ShowCastInfoProps> = ({characters = []}) => {
    return <>
        {characters.map(item => (<ShowCastInfoItem {...item} />))}
    </>
};
