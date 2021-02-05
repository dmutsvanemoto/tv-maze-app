import {FC} from 'react';
import { ShowDetailsPanelItemProps } from '../types/ShowDetailsPanelItemProps';

export const ShowDetailsPanelItem: FC<ShowDetailsPanelItemProps> = ({label, text}) => {
    return <>
        <span>{label}</span>
        <span>{text}</span>
    </>
}