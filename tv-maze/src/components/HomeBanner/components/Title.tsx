import {FC} from 'react';
import {TitleProps} from '../types/TitleProps';

export const Title: FC<TitleProps> = ({title}) => {
    return <h1>{title}</h1>
}



