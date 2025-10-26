import * as React from "react";
import cn from "../../utils/classNames.ts";

interface IProps extends React.HTMLProps<HTMLInputElement> {
    variant?: "default" | "flat";
    required?: boolean;
    label?: string;
}

function Input({className = "", variant = "default", required, label, ...props}: IProps) {
    return (<div>
        {label && <div className={'mb-1 font-semibold'}>
            {label}
        </div>}

        <div className="flex">
            {variant === "flat" && required && (<span className="border-b border-white text-red-600 py-2">*</span>)}
            <input
                className={cn(className || "", variant === "default" ? "p-2 placeholder:text-sm rounded-full focus:border border border-black/20" : "border-0 p-1.5 border-b outline-0 placeholder:text-white text-white", "w-full placeholder:text-black/30")}
                {...props}
            />
        </div>
    </div>);
}

export default Input;
