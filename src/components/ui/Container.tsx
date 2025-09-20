import type React from "react";
import cn from "../../utils/classNames";

function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn(className, "space-y-5")}>{children}</div>;
}

export default Container;
