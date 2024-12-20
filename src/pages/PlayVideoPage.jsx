import { useEffect } from "react";
import { useAppState } from "../hooks/useAppState"
import { MENU_OPTIONS } from "../constants/stateConstants";

function PlayVideoPage() {

  let { menu, setMenu } = useAppState();

  useEffect(() => {
    
    let ref = setTimeout(() => {
      setMenu(MENU_OPTIONS.MUSIC)
    }, 5000);

    return () => clearTimeout(ref);
  }, [])

  return (
    <div>
      {menu}
    </div>
  )
}

export default PlayVideoPage
