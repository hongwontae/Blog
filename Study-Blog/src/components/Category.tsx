import { motion } from "framer-motion";
import { useState } from "react";
import CategoryElement from "./CategoryElement";

type ClickState = {
  react: boolean;
  figma: boolean;
  javascript: boolean;
  typescript: boolean;
  css: boolean;
  photoshop: boolean;
};

function Category() {
  const [clickState, setClickState] = useState<ClickState>({
    react: false,
    figma: false,
    javascript: false,
    typescript: false,
    css: false,
    photoshop: false,
  });

  return (
    <>
      <section className="flex flex-row justify-start text-white text-[1.1rem] items-center gap-7">
        <h1 className="font-semibold text-[1.4rem]">Category</h1>
        <div className="flex flex-row gap-3">
          <CategoryElement
            className="p-[0.4rem] pl-3 pr-3 rounded-2xl bg-category-box-color"
            animate={{ background: clickState.react ? "#ffffff" : "",color: clickState.react ? "#121212" : "",}}
            whileHover={{ background: "#121212" }}
            transition={{}}
            onClickFunc={() => setClickState((prev) => {
                return {
                  ...prev,
                  react: !prev.react,
                };
              })}
          >
            React
          </CategoryElement>
          <motion.div
            whileHover={{ background: "#121212" }}
            className="p-[0.4rem] pl-3 pr-3 rounded-2xl bg-category-box-color"
          >
            Figma
          </motion.div>
          <motion.div
            whileHover={{ background: "#121212" }}
            className="p-[0.4rem] pl-3 pr-3 rounded-2xl bg-category-box-color"
          >
            JavaScript
          </motion.div>
          <motion.div
            whileHover={{ background: "#121212" }}
            className="p-[0.4rem] pl-3 pr-3 rounded-2xl bg-category-box-color"
          >
            TypeScript
          </motion.div>
          <motion.div
            whileHover={{ background: "#121212" }}
            className="p-[0.4rem] pl-3 pr-3 rounded-2xl bg-category-box-color"
          >
            CSS
          </motion.div>
          <motion.div
            whileHover={{ background: "#121212" }}
            className="p-[0.4rem] pl-3 pr-3 rounded-2xl bg-category-box-color"
          >
            Photoshop
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default Category;
