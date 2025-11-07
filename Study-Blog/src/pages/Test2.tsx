import { useQuery } from "@tanstack/react-query";

function Test2() {

  const {data} = useQuery<{userId : string, id : number, title : string, body : string}, Error>({
    queryKey : ['kk'],
    queryFn : async ()=>{
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      return response.json();
    },
    staleTime : 5000
  })

  console.log(data);

  return (
    <>
      <div>22</div>
    </>
  );
}

export default Test2;
