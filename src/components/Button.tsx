import {FC} from "react";
import {ButtonProps} from "../types/ButtonProps";

export const Button: FC<ButtonProps> = (props: ButtonProps) => {
    return (
        <button className={'border border-indigo-400 text-center py-1 px-3 rounded-xl bg-gray-100 mt-1'} onClick={props.onClick}>
            <p className={'text-base text-black'}>{props.text}</p>
        </button>
    )
}