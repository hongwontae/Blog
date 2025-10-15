import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Category = {
  onClickFunc: () => void;
  className: string;
  animate: {
    background: string;
    color: string;
  };
  whileHover: {
    background: string;
  };
  children: ReactNode;
  transition : {}
};

function CategoryElement({
  children,
  className,
  onClickFunc,
  whileHover,
  animate,
  transition
}: Category) {
  return (
    <>
      <motion.div
        className={className}
        onClick={onClickFunc}
        whileHover={whileHover}
        animate={animate}
        transition={transition}
      >
        {children}
      </motion.div>
    </>
  );
}

export default CategoryElement;
