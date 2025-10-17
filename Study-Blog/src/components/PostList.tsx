import {useQuery} from '@tanstack/react-query';
import Post from './Post';

type jsonPlaceHolderType = {
    userId : number;
    id : number;
    title : string;
    body : string;
}

function PostList(){

    const {data, isPending, error} = useQuery<jsonPlaceHolderType[], Error>({
        queryKey : ['user'],
        queryFn : async ()=>{
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            return response.json();
        }
    })


    return(
        <>
            <main className="mt-10">
                <div className='flex flex-row flex-wrap gap-10 justify-center text-white'>
                    {data?.map((ele, idx, arr)=>{
                        return <Post body={ele.body} title={ele.title} userId={ele.userId}></Post>
                    })}
                </div>
            </main>
        </>
    )
}

export default PostList;