import {FC} from 'react';
import { ShowDescriptionProps } from '../types/ShowDescriptionProps';

export const ShowDescription: FC<ShowDescriptionProps> = ({description}) => {
    return <p>{description}</p>
};
