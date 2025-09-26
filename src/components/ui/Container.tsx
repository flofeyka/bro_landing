import type React from "react";
import cn from "../../utils/classNames";
import { motion } from "motion/react";

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
    <div id={id}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.6,
          ease: [0.25, 0.1, 0.25, 1],
          delay: 0.2,
        }}
        className={cn(className, "space-y-5")}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default Container;
