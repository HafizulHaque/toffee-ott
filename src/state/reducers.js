import { FOCUS_AREA_OPTIONS, MENU_OPTIONS } from "../constants/stateConstants";
import { ACTIONS } from "./actions";

export const appReducer = (prevState, action) => {
  
  if(!action.type){
    throw new Error('called reducer without action type');
  }

  if(!action.payload){
    throw new Error('required action payload not provided');
  }

  let state = { ...prevState }

  switch (action.type) {
    case ACTIONS.SET_MENU:
      if(!Object.values(MENU_OPTIONS).includes(action.payload)){
        throw new Error(`Invalid payload provided`, action.payload);
      }
      state.currentMenu = action.payload;
      break;
    case ACTIONS.SET_FOCUS_AREA:
      if(!Object.values(FOCUS_AREA_OPTIONS).includes(action.payload)){
        throw new Error(`Invalid payload provided`, action.payload);
      }
      state.currentFocusArea = action.payload;
      break;
    case ACTIONS.SET_CURRENT_CONTENT:
      let { id, genre } = action.payload;
      console.log(`Genre: ${genre}, contentId: ${id} setting to application state`)
      state.currentGenre = genre;
      state.currentContentId = id;
      break;
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }

  return state;
}