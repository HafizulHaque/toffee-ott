import { ACTIONS } from "../state/actions";
import { useSafeAppContext } from "./useSafeAppContext";

export function useAppState() {

  const { state, dispatch } = useSafeAppContext();

  const setMenu = (menu) => {
    dispatch({
      type: ACTIONS.SET_MENU,
      payload: menu
    })
  }
  const setFocusArea = (focusArea) => {
    dispatch({
      type: ACTIONS.SET_FOCUS_AREA,
      payload: focusArea
    })
  }
  const setGenre = (genre) => {
    dispatch({
      type: ACTIONS.SET_CURRENT_GENRE,
      payload: genre
    })
  }
  const setContentId = (contentId) => {
    dispatch({
      type: ACTIONS.SET_CURRENT_CONTENT_ID,
      payload: contentId
    })
  }

  return {
    menu: state.currentMenu,
    focusArea: state.currentFocusArea,
    currentGenre: state.currentGenre,
    currentContentId: state.currentContentId,
    setMenu,
    setFocusArea,
    setGenre,
    setContentId
  }


}