import Category from "../components/Category";
import Highlights from "../components/Highlights";
import LeftIntroduce from "../components/LeftIntroduce";

function BlogHome() {

  return (
    <>
        <section className="flex flex-row gap-10 justify-between items-end mb-12">
          <LeftIntroduce></LeftIntroduce>
          <Highlights></Highlights>
        </section>
        <hr className="border-white border-[0.5px] mb-8"></hr>
        <Category></Category>
    </>
  );
}

export default BlogHome;
