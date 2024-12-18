import { Outlet, NavLink } from "react-router-dom";

function BaseLayout() {
  return (
    <div>
      <h2>BaseLayout</h2>
      <Outlet/>
    </div>
  )
}

export default BaseLayout;
