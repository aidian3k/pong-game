import {FC} from "react";

export const Score: FC<ScoreProps> = (props) => {
    return (
        <p className={'text-2xl ml-2 text-center'}>{props.leftPlayer}  :  {props.rightPlayer}</p>
    )
}

export type ScoreProps = {
    leftPlayer: number,
    rightPlayer: number
}