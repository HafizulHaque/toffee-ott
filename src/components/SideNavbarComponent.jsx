import { useEffect, useRef } from "react";
import { FOCUS_AREA_OPTIONS } from "../constants/stateConstants";
import { Menus } from "../constants/uiConstants"
import { useAppState } from "/src/hooks/useAppState";
import { MOUSE_EVENT_TYPES } from "../constants/KeyEventConstants";
import { Link } from "react-router-dom";

const SideNavbarComponent = () => {

  const navRef = useRef();

  const { menu: currentMenu, focusArea, setMenu, setFocusArea } = useAppState();

  const setFocusToNav = (event) => {
    setFocusArea(FOCUS_AREA_OPTIONS.NAVBAR);
  }

  const setFocusToContent = (event) => {
    setFocusArea(FOCUS_AREA_OPTIONS.CONTENT);
  }

  useEffect(() => {
    navRef.current?.addEventListener(MOUSE_EVENT_TYPES.MOUSE_ENTER, setFocusToNav);
    navRef.current?.addEventListener(MOUSE_EVENT_TYPES.MOUSE_LEAVE, setFocusToContent);

    return () => {
      navRef.current?.removeEventListener(MOUSE_EVENT_TYPES.MOUSE_ENTER, setFocusToNav);
      navRef.current?.removeEventListener(MOUSE_EVENT_TYPES.MOUSE_LEAVE, setFocusToContent);
    }
  }, [])

  useEffect(() => {
    if(focusArea === FOCUS_AREA_OPTIONS.NAVBAR){
      navRef.current.focus();
    }
  }, [focusArea])

  return (
    <nav
      ref={navRef} 
      className={`fixed top-0 left-0 h-screen w-nav-normal hover:w-nav-expanded focus:w-nav-expanded bg-sidenav-gradient-normal hover:bg-sidenav-gredient-expanded focus:bg-sidenav-gredient-expanded flex items-center transition-all duration-300 ease-in-out`}>
        <div className='flex-1 flex flex-col gap-y-12'>
          {Menus.map(menu => {
            let MenuIcon = menu.icon;
            return (
            <Link to={'/'} key={menu.id}>      
              <div
                className={`group flex gap-x-4 items-center border-r-4 ${currentMenu === menu.title ? 'border-r-primary-action' : 'border-transparent'}`} 
                role="button"
                onClick={() => setMenu(menu.title)}>
                <div className={`w-[76px]`}>
                  <MenuIcon 
                    size={42} 
                    className={`${currentMenu === menu.title ? "text-primary-action" : ""} py-1 mx-auto group-hover:text-primary-action/80`}
                  />
                </div>
                <h3 
                  hidden={focusArea === FOCUS_AREA_OPTIONS.CONTENT} 
                  className={`${currentMenu === menu.title ? "text-primary-action" : ""} text-2xl group-hover:text-primary-action/80 flex-1`}>
                  {menu.title}
                </h3>
              </div>
            </Link>
          )})}
      </div>
    </nav>
  )
}

export default SideNavbarComponent
