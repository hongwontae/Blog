import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Category = {
  onClickFunc: React.MouseEventHandler<HTMLDivElement>
  className: string;
  animate: {
    backgroundColor: string;
    color: string;
  };
  whileHover: {
    backgroundColor: string;
    color : string;
    transition : {type : "spring" | "tween" | "inertia", [key : string] : number | string}
  };
  children: ReactNode;
};

function CategoryElement({
  children,
  className,
  onClickFunc,
  whileHover,
  animate,
}: Category) {


  return (
    <>
      <motion.div
        className={className}
        onClick={onClickFunc}
        whileHover={whileHover}
        animate={animate}
      >
        {children}
      </motion.div>
    </>
  );
}

export default CategoryElement;
