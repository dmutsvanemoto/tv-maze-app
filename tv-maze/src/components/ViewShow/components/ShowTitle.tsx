import {FC} from 'react';
import { ShowTitleProps } from '../types/ShowTitleProps';

export const ShowTitle: FC<ShowTitleProps> = ({title}) => {
    return <h2>{title}</h2>
};