import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import SideNavbar from "../components/SideNavbar";

function BaseLayout() {
  return (
    <div className="ps-left-nav">
      <Header/>
      <SideNavbar/>
      <Outlet/>
    </div>
  )
}

export default BaseLayout;
