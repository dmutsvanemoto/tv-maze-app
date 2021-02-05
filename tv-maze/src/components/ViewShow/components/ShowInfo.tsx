import { FC } from "react";
import { ShowInfoProps } from "../types/ShowInfoProps";
import { ShowCastInfo } from "./ShowCastInfo";
import { ShowDetailsPanel } from "./ShowDetailsPanel";

export const ShowInfo: FC<ShowInfoProps> = ({streamOn, schedule, status, genres, characters}) => {
    return <>
        <ShowDetailsPanel streamOn={streamOn} schedule={schedule} status={status} genres={genres} />
        <ShowCastInfo characters={characters} />
    </>
};