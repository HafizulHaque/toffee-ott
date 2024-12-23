import { useEffect, useRef } from "react";
import { useAppState } from '/src/hooks/useAppState';
import { FOCUS_AREA_OPTIONS } from "../constants/stateConstants";
import { Menus } from "../constants/uiConstants";
import { Link } from "react-router-dom";

const SideNavbar = () => {

  const navRef = useRef();
  const { menu: currentMenu, setMenu, focusArea } = useAppState();

  useEffect(() => {
    if(focusArea === FOCUS_AREA_OPTIONS.NAVBAR){
      navRef.current?.focus();
    }
  }, [focusArea])

  return (
    <nav
      ref={navRef}
      tabIndex={-1} 
      className={`fixed top-0 left-0 z-50 h-screen focus:outline-none bg-sidenav-gradient w-[80px] hover:w-[240px] focus:w-[240px] transition-[width] duration-200 ease-in-out group`}>
      <div className="h-full flex flex-col justify-center gap-y-8">
        {Menus.map(menu => {
          let MenuIcon = menu.icon;
          return (
            <Link
              to={'/'} 
              key={menu.id} 
              role="button" 
              className={`grid grid-cols-3 hover:text-primary-action/60 ${currentMenu === menu.title ? 'text-primary-action hover:text-primary-action':''} transform hover:scale-110`} 
              onClick={() => setMenu(menu.title)}
            >
              <div className="col-span-1 px-4">
                <MenuIcon size={42}/>
              </div>
              <div className="col-span-2 hidden group-hover:block group-focus:block my-auto pe-2">
                <h2 className="text-2xl line-clamp-1 overflow-hidden">{menu.title}</h2>
              </div>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}

export default SideNavbar
