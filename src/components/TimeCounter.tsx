import {FC} from "react";

export const TimeCounter: FC<{seconds: number, minutes: number}> = (props) => {
    const {minutes, seconds} = props;

    return (
        <div className={'flex gap-1'}>
            <p>Time: </p>
            <p>{minutes} m {seconds} s</p>
        </div>
    )
}