import CategoryElement from "./CategoryElement";
import { useTagsStore } from "../zustand-store/store";

function Category() {
  const {
    initialState,
    cssClick,
    figmaClcik,
    javascriptClick,
    photoshopClick,
    reactClick,
    typescriptClcik,
  } = useTagsStore();

  const CategoryClass = "p-[0.4rem] pl-3 pr-3 rounded-2xl bg-white text-black";
  const whileHoverObject = {
    backgroundColor: "#121212",
    color: "#ef476f",
    transition: { type: "tween", duration: 0.5 },
  } as const;

  function animateFunction(data: keyof typeof initialState): {
    backgroundColor: string;
    color: string;
  } {
    return {
      backgroundColor: initialState[data] ? "#121212" : "",
      color: initialState[data] ? "#ffffff" : "",
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
            onClickFunc={reactClick}
          >
            React
          </CategoryElement>

          <CategoryElement
            className={CategoryClass}
            animate={animateFunction("figma")}
            whileHover={whileHoverObject}
            onClickFunc={figmaClcik}
          >
            Figma
          </CategoryElement>

          <CategoryElement
            className={CategoryClass}
            animate={animateFunction("javascript")}
            whileHover={whileHoverObject}
            onClickFunc={javascriptClick}
          >
            JavaScript
          </CategoryElement>
          <CategoryElement
            className={CategoryClass}
            animate={animateFunction("typescript")}
            whileHover={whileHoverObject}
            onClickFunc={typescriptClcik}
          >
            TypeScript
          </CategoryElement>
          <CategoryElement
            className={CategoryClass}
            animate={animateFunction("css")}
            whileHover={whileHoverObject}
            onClickFunc={cssClick}
          >
            CSS
          </CategoryElement>
          <CategoryElement
            className={CategoryClass}
            animate={animateFunction("photoshop")}
            whileHover={whileHoverObject}
            onClickFunc={photoshopClick}
          >
            Photoshop
          </CategoryElement>
        </div>
      </section>
    </>
  );
}

export default Category;
