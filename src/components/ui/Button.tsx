import cn from "../../utils/classNames.ts";
import * as React from "react";

function Button({children, className = '', ...props}: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) {
    return <button
        className={cn(className, 'rounded-full py-2 px-10 text-lg font-semibold text-white bg-linear-to-r from-[#2F7FAA] to-[#58CAA4]')} {...props}>
        {children}
    </button>;
}

export default Button;