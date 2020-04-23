import "./input.component.scss"
import * as React from "react";
import {CommonProps} from "@/shared/types/types";
import {classes} from "@/shared/utils/utils";

export type InputType = CommonProps & {
    value?: number | string;
    placeholder?: string;
    disabled?: boolean;
    validation?: boolean;
    onClick?: () => void;
    onChange?: (newValue: string ) => void;
}

export const Input: React.FC<InputType> = (
    {
        value,
        placeholder,
        validation = true,
        disabled,
        onClick,
        onChange,
        ...CommonProps
    }) => {

    const classNames = classes("input-text", CommonProps.className, ["input-text__not-valid", !validation]);

    return (
        <div className={classNames}>
            <input
                id={CommonProps.id}
                style={CommonProps.style}
                type="text"
                className="input-text__input"
                value={value}
                disabled={disabled}
                placeholder={placeholder}
                onClick={onClick}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    )
};
