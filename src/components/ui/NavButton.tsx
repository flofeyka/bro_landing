import * as React from "react";

function NavButton({children, ...props}: React.HTMLAttributes<HTMLButtonElement>) {
    return <button className="bg-[#2F7FAA] px-3 rounded-full text-white" {...props}>{children}</button>
}

export default NavButton;