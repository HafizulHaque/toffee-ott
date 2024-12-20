import { FOCUS_AREA_OPTIONS, MENU_OPTIONS } from "../constants/stateConstants";

export const initialAppState = {
  currentMenu: MENU_OPTIONS.MOVIE,
  currentFocusArea: FOCUS_AREA_OPTIONS.CONTENT,
  currentGenre: null,
  currentContentId: null
}