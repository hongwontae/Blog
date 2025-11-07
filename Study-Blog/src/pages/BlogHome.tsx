import { useQuery } from "@tanstack/react-query";
import Category from "../components/Category";
import Highlights from "../components/Highlights";
import LeftIntroduce from "../components/LeftIntroduce";
import PostList from "../components/PostList";
import { useTagsStore } from "../zustand-store/store";

type ImagesType = {
  id: number;
  secure_url: string;
  public_id: string;
  alt: string;
  cover: boolean;
};

type BlogPostType = {
  id: number;
  title: string;
  field: string;
  blogContent: string;
  createdAt: string;
  updatedAt: string;
  images: ImagesType[];
};

function BlogHome() {


  const { initialState } = useTagsStore();

  const { data } = useQuery<BlogPostType[], Error>({
    queryKey: [
      initialState.css,
      initialState.figma,
      initialState.javascript,
      initialState.typescript,
      initialState.react,
      initialState.photoshop,
    ],
    queryFn: async () => {
      const response = await fetch(
        `http://localhost:3000/blog/post?&css=${initialState.css}&figma=${initialState.figma}&javascript=${initialState.javascript}&typescript=${initialState.typescript}&react=${initialState.react}&photoshop=${initialState.photoshop}`
      );
      if(!response.ok){throw new Error('전송 중 에러')}
      return response.json();
    },
    staleTime: 5000,
  });

  console.log(data)

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
