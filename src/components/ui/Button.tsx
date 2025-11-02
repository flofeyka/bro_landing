import cn from "../../utils/classNames.ts";
import * as React from "react";

interface IProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?: "default" | "flat";
}

function Button({
  children,
  className = "",
  disabled,
  variant = "default",
  ...props
}: IProps) {
  return (
    <button
      className={cn(
        className,
        variant === "default"
          ? "text-white bg-linear-to-r from-[#2F7FAA] to-[#58CAA4]"
          : "bg-white",
        disabled ? "opacity-70" : "",
        "rounded-full py-2 px-8 text-lg font-semibold"
      )}
      {...props}
    >
      <span
        className={cn(
          variant === "flat"
            ? "bg-linear-to-r from-[#2F7FAA] to-[#58CAA4] bg-clip-text text-transparent"
            : ""
        )}
      >
        {children}
      </span>
    </button>
  );
}

export default Button;
