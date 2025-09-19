import * as React from "react";
import cn from "../../utils/classNames.ts";

function Input({className = '', ...props}: React.HTMLProps<HTMLInputElement>) {
    return <input className={cn(className || '', 'p-2 placeholder:text-black placeholder:text-sm rounded-full focus:border border border-black/20')} {...props}/>
}

export default Input;