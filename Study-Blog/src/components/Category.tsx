import { useState } from "react";
import CategoryElement from "./CategoryElement";
import { useTagsStore } from "../zustand-store/store";

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

  const {cssClick,figmaClcik,javascriptClick,photoshopClick,reactClick,typescriptClcik} = useTagsStore()


  const CategoryClass = "p-[0.4rem] pl-3 pr-3 rounded-2xl bg-white text-black";
  const whileHoverObject = {
    backgroundColor: "#121212",
    color: "#ef476f",
    transition: { type: "tween", duration: 0.5 },
  } as const;

  function clickFunction(key: keyof ClickState) {
    setClickState((prev) => {
      return {
        ...prev,
        [key]: !prev[key],
      };
    });
  }

  function animateFunction(data: keyof ClickState): {
    backgroundColor: string;
    color: string;
  } {
    return {
      backgroundColor: clickState[data] ? "#121212" : "",
      color: clickState[data] ? "#ffffff" : "",
    };
  }

  return (
    <>
      <section className="flex flex-row justify-start text-white text-[1.1rem] items-center gap-7">
        <h1 className="font-semibold text-[1.4rem]">Category</h1>
        <div className="flex flex-row gap-3">
          <CategoryElement
            className={CategoryClass}
            animate={animateFunction("react")}
            whileHover={whileHoverObject}
            onClickFunc={() => {
              clickFunction("react")
              reactClick()
            } }
          >
            React
          </CategoryElement>

          <CategoryElement
            className={CategoryClass}
            animate={animateFunction("figma")}
            whileHover={whileHoverObject}
            onClickFunc={() => clickFunction("figma")}
          >
            Figma
          </CategoryElement>

          <CategoryElement
            className={CategoryClass}
            animate={animateFunction("javascript")}
            whileHover={whileHoverObject}
            onClickFunc={() => clickFunction("javascript")}
          >
            JavaScript
          </CategoryElement>
          <CategoryElement
            className={CategoryClass}
            animate={animateFunction("typescript")}
            whileHover={whileHoverObject}
            onClickFunc={() => clickFunction("typescript")}
          >
            TypeScript
          </CategoryElement>
          <CategoryElement
            className={CategoryClass}
            animate={animateFunction("css")}
            whileHover={whileHoverObject}
            onClickFunc={() => clickFunction("css")}
          >
            CSS
          </CategoryElement>
          <CategoryElement
            className={CategoryClass}
            animate={animateFunction("photoshop")}
            whileHover={whileHoverObject}
            onClickFunc={() => clickFunction("photoshop")}
          >
            Photoshop
          </CategoryElement>
        </div>
      </section>
    </>
  );
}

export default Category;
