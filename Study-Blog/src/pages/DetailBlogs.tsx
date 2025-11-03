import Category from "../components/Category";
import PostList from "../components/PostList";

function DetailBlogs() {
  return (
    <>
      <div className="flex flex-col justify-center ">
        <hr className="border-white border-[0.5px] mb-6"></hr>
        <Category></Category>
        <hr className="border-white border-[0.5px] mt-6 mb-8"></hr>
      </div>
      <section>
        <PostList></PostList>
      </section>
    </>
  );
}

export default DetailBlogs;
