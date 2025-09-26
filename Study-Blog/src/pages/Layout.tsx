import { Outlet } from "react-router-dom";
import Header from "../components/Header";

function Layout() {
  return (
    <>
      <div className="font-pretendard">
        <div className="mb-8">
          <Header></Header>
        </div>
        <Outlet></Outlet>
      </div>
    </>
  );
}

export default Layout;
