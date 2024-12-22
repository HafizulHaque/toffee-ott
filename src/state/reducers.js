import { FOCUS_AREA_OPTIONS, MENU_OPTIONS } from "../constants/stateConstants";
import { ACTIONS } from "./actions";

export const appReducer = (prevState, action) => {
  
  if(!action.type){
    throw new Error('called reducer without action type');
  }

  // if(!action.payload){
  //   // if([ACTIONS.SET_CURRENT_GENRE, ACTIONS.SET_CURRENT_CONTENT_ID].includes(action.type)) return;
  //   throw new Error(`required action payload not provided for: ${action.type} [${action.payload}]`);
  // }

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
    case ACTIONS.SET_CURRENT_GENRE:
      state.currentGenre = action.payload;
      console.log(`Genre: ${action.payload} saved to application state`)
      break;
    case ACTIONS.SET_CURRENT_CONTENT_ID:
      state.currentContentId = action.payload;
      console.log(`ContentId: ${action.payload} saved to application state`)
      break;
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }

  return state;
}