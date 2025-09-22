import type React from "react";
import cn from "../../utils/classNames";

function Container({
  children,
  id,
  className = "",
}: {
  children: React.ReactNode;
  id?: string;
  className?: string;
}) {
  return (
    <div id={id} className={cn(className, "space-y-5")}>
      {children}
    </div>
  );
}

export default Container;
