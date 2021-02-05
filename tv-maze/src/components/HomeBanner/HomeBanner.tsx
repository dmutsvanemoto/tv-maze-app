import {FC} from 'react';
import {HomeBannerProps} from './types/HomeBannerProps';
import {Title} from './components/Title';
import {Description} from './components/Description';


export const HomeBanner: FC<HomeBannerProps> = ({title, description}) => {
    return <div data-testid="homebanner">
        <Title title={title} />
        <Description description={description} />
    </div>
}