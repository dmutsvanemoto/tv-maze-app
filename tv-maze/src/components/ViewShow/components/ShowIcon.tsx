import { FC } from "react";
import { ShowIconProps } from "../types/ShowIconProps";

export const ShowIcon: FC<ShowIconProps> = ({title, url}) => { 
    return <>
        <img alt={title} src={url} />
    </>
};