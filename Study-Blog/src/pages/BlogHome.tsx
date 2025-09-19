import { useQuery } from "@tanstack/react-query";

function BlogHome() {
  const { isPending, data, isError } = useQuery({
    queryKey: ["hello"],
    queryFn: () => {
      return fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
        res.json()
      );
    },
  });

  if (isPending) {
    return <h1 className="text-5xl text-green-700">Loading...</h1>;
  }

  if (isError) {
    return <h1 className="text-5xl text-red-900">Error!</h1>;
  }

  return (
    <>
      <section className="flex flex-col justify-center items-center">
        {data.map((ele, idx, arr) => {
          return (
            <div>
              <div>{ele.id}</div>
              <div>{ele.name}</div>
              <div>{ele.username}</div>
              <div>{ele.address.street}</div>
            </div>
          );
        })}
      </section>
    </>
  );
}

export default BlogHome;
