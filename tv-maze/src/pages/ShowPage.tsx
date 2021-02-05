import {FC} from 'react';
import { useParams } from 'react-router-dom';
import {useFetchShow} from '../hooks/useFetchShow';
import { ViewShow } from '../components/ViewShow/ViewShow';
type ShowPageParams = {
    id: string
}

export const ShowPage: FC = () => {
    let {id} = useParams<ShowPageParams>();
    const {data, isLoading, isError} = useFetchShow(Number(id));

    if(isLoading) return <>Loading Show...</>

    if(isError) return <>Failed to load show...</> 

    if(data)
        return <ViewShow data={data} />

    return <>Oops, something went wrong!</>
}

