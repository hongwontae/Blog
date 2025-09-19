import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BlogHome from "./pages/BlogHome";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Test from "./pages/Test";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <BlogHome></BlogHome>,
  },
  {
    path : '/test',
    element : <Test></Test>
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
