import Category from "../components/Category";
import Highlights from "../components/Highlights";
import LeftIntroduce from "../components/LeftIntroduce";
import PostList from "../components/PostList";
import { useTagsStore } from "../zustand-store/store";


function BlogHome() {

  const {initialState} = useTagsStore();
  console.log(initialState);

    

  return (
    <>
        <section className="flex flex-row gap-10 justify-between items-end mb-12">
          <LeftIntroduce></LeftIntroduce>
          <Highlights></Highlights>
        </section>
        <hr className="border-white border-[0.5px] mb-8"></hr>
        <Category></Category>
        <PostList></PostList>
        
    </>
  );
}

export default BlogHome;
