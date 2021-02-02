import {FC} from 'react';
import {ShowCast, ShowDetails} from '../../../interfaces/Show';
import { useParams } from 'react-router-dom';
import {useFetchShow} from '../hooks/useFetchShow';

type ShowPageParams = {
    id: string
}

export const ShowPage: FC = () => {
    let {id} = useParams<ShowPageParams>();
    const {data, isLoading, isError} = useFetchShow(Number(id));

    if(isLoading) return <>Loading Show...</>

    if(isError) return <>Failed to load show...</> 

    if(data)
        return <>
            <div>
                <ShowRating  rating={data.rating} />
                <ShowIcon  title={data.title} url={data.imageUrl} />
            </div>
            <div>
                <ShowTitle  title={data.title} />
            </div>
            <div>
                <ShowDescription  description={data.description} />
            </div>
            <div>
                <ShowInfo details={data.details} cast={data.cast} />
            </div>
        </>

    return <>Oops, something went wrong!</>
}

type ShowIconProps = {
    title: string,
    url: string
}
const ShowIcon: FC<ShowIconProps> = ({title, url}) => { 
    return <>
        <img alt={title} src={url} />
    </>
};

type ShowTitleProps = {
    title: string
}
const ShowTitle: FC<ShowTitleProps> = ({title}) => {
    return <h2>{title}</h2>
};

type ShowDescriptionProps = {
    description: string
}
const ShowDescription: FC<ShowDescriptionProps> = ({description}) => {
    return <p>{description}</p>
};

type ShowRatingProps = {
    rating: number
}
const ShowRating: FC<ShowRatingProps> = ({rating}) => {
    return <>{rating} / 5</>
};

type ShowInfoProps = {
    details: ShowDetails,
    cast: ShowCast[]
}
const ShowInfo: FC<ShowInfoProps> = ({details, cast}) => {
    return <>
        <ShowDetailsPanel {...details} />
        <ShowCastInfo cast={cast} />
    </>
};

type ShowDetailsPanelProps = ShowDetails;
const ShowDetailsPanel: FC<ShowDetailsPanelProps> = ({streamOn, schedule, status, genres}) => {
    return <div>
        <ShowDetailsPanelItem label="Stream on" text={streamOn} />
        <ShowDetailsPanelItem label="Schedule" text={schedule} />
        <ShowDetailsPanelItem label="Status" text={status} />
        <ShowDetailsPanelItem label="Genres" text={genres.join(', ')} />
    </div>
};

const ShowDetailsPanelItem: FC<{ label: string, text: string }> = ({label, text}) => {
    return <>
        <span>{label}</span>
        <span>{text}</span>
    </>
}

type ShowCastInfoProps = {
    cast: ShowCast[]
};
const ShowCastInfo: FC<ShowCastInfoProps> = ({cast}) => {
    return <>
        {cast.map(item => (<ShowCastInfoItem {...item} />))}
    </>
};

type ShowCastIntoItemProps = ShowCast;
const ShowCastInfoItem: FC<ShowCastIntoItemProps> = ({playedBy: {firstName, lastName}, character}) => {
    return <>
        <span>{firstName}&nbsp;{lastName}</span>
        <span>{character}</span>
    </>
}
