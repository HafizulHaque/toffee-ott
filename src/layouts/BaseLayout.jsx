import { Outlet, NavLink } from "react-router-dom";
import HeaderComponent from "../components/HeaderComponent";
import SideNavbarComponent from "../components/SideNavbarComponent";

function BaseLayout() {
  return (
    <div className="ps-left-nav">
      <HeaderComponent/>
      <SideNavbarComponent/>
      <Outlet/>
    </div>
  )
}

export default BaseLayout;
