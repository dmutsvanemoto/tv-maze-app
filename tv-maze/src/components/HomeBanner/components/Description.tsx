import {FC} from 'react';
import {DescriptionProps} from '../types/DescriptionProps';

export const Description: FC<DescriptionProps> = ({description}) => {
    return <p data-testid="description">{description}</p>
}