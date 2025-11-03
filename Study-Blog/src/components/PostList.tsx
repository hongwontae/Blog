type ImagesType = {
  id : number;
  "secure_url" : string;
  "public_id" : string;
  alt : string;
  cover : boolean
}

type BlogPostType = {
  id : number;
  title : string;
  field : string;
  blogContent : string;
  createdAt : string;
  updatedAt : string;
  images : ImagesType[]
}


function PostList(){




    return(
        <>
            <main className="mt-10">
                <div className='flex flex-row flex-wrap gap-10 justify-around text-white'>

                </div>
            </main>
        </>
    )
}

export default PostList;