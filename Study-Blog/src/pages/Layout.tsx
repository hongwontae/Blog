import { Outlet } from "react-router-dom";
import Header from "../components/Header";

function Layout(){

    return(
        <>
            <div className="font-pretendard">
                <Header></Header>
                <Outlet></Outlet>
            </div>
        </>
    )
}

export default Layout;