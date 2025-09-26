import Highlights from "../components/Highlights";
import LeftIntroduce from "../components/LeftIntroduce";

function BlogHome() {

  return (
    <>
        <section className="flex flex-row gap-10">
          <LeftIntroduce></LeftIntroduce>
          <Highlights></Highlights>
        </section>
    </>
  );
}

export default BlogHome;
