import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Layout from "./pages/Layout";
import BlogHome from "./pages/BlogHome";
import Test from "./pages/Test";
import Test2 from "./pages/Test2";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        index: true,
        element: <BlogHome></BlogHome>,
      },
    ],
  },
  {
    path : '/test',
    element : <Test></Test>
  },
  {
    path : '/test/2',
    element : <Test2></Test2>
  }
]);

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}></RouterProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
