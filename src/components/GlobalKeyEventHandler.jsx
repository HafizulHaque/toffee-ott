import { useEffect } from "react";
import { contentList } from "../constants/contentList";
import { KEY_EVENT_TYPES, KEY_EVENT_VALUES } from "../constants/KeyEventConstants";
import { ContentPerRow } from "../constants/uiConstants";
import { useAppState } from "/src/hooks/useAppState";
import { FOCUS_AREA_OPTIONS } from "../constants/stateConstants";
import { Menus } from "../constants/uiConstants";

const GlobalKeyEventHandler = () => {

  const { 
    menu, 
    focusArea, 
    currentGenre, 
    currentContentId, 
    setMenu,
    setFocusArea, 
    setGenre, 
    setContentId 
  } = useAppState();

  useEffect(() => {

    let currentMenuIndex = Menus.findIndex(m => m.title === menu)
    let genres = Object.keys(contentList[menu])
    let currentGenreIndex = genres.findIndex(g => g === currentGenre) ?? -1
    let contents = contentList[menu][genres[currentGenreIndex]] ?? []
    let currentContentIndex = contents.findIndex(c => c.id === currentContentId) ?? -1

    const handleContentAreaKeyEvent = (event) => {

      // if no genre or contentId selected for current menu, set default 
      if(!currentGenre || !currentContentId){
        console.log('no genre or content id: saving default');
        if(!currentGenre){
          setGenre(genres[0]);
          setContentId((contentList[menu][genres[0]][0]['id']));
          return;
        }
        if(!currentContentId){
          setContentId(contentList[menu][currentGenre][0]['id']);
          return;
        }
      }

      switch(event.key){

        case KEY_EVENT_VALUES.ARROW_DOWN: 
          if(currentContentIndex + ContentPerRow < contents.length){
            //content remain in current genre
            setContentId(contents[currentContentIndex+ContentPerRow].id);
          } else {
            //go to next genre
            if(currentGenreIndex + 1 < genres.length){
              setGenre(genres[currentGenreIndex + 1])
              setContentId(1);
            }
          }
          break;

        case KEY_EVENT_VALUES.ARROW_UP:
          if(currentContentIndex - ContentPerRow >= 0){
            //content remain in current genre
            setContentId(contents[currentContentIndex-ContentPerRow].id);
          } else {
            //go to prev genre
            if(currentGenreIndex - 1 >= 0){
              let prevGenre = genres[currentGenreIndex - 1];
              let prevGenreContentLen = contentList[menu][prevGenre].length;
              setGenre(prevGenre)
              setContentId(contentList[menu][prevGenre][prevGenreContentLen-1].id);
            }
          }
          break;

        case KEY_EVENT_VALUES.ARROW_LEFT:
          if(currentContentId % ContentPerRow === 1){
            setFocusArea(FOCUS_AREA_OPTIONS.NAVBAR);
          } else {
            setContentId(currentContentId - 1);
          }
          break;
        
        case KEY_EVENT_VALUES.ARROW_RIGHT:
          if(currentContentIndex + 1 < contents.length){
            //content remain in current genre
            setContentId(contents[currentContentIndex+1].id);
          } else {
            //go to next genre
            if(currentGenreIndex + 1 < genres.length){
              setGenre(genres[currentGenreIndex+1])
              setContentId(1);
            }
          }
          break;

      }
    }

    const handleNavAreaKeyEvent = (event) => {
      switch(event.key){
        case KEY_EVENT_VALUES.ARROW_RIGHT:
          setFocusArea(FOCUS_AREA_OPTIONS.CONTENT);
          // if no genre or contentId selected for current menu [due to menu toggle from sidenav], 
          // set default 
          if(!currentGenre || !currentContentId){
            setGenre(genres[0]);
            setContentId((contentList[menu][genres[0]][0]['id']));
          }
          break;

        case KEY_EVENT_VALUES.ARROW_DOWN:
          if(currentMenuIndex + 1 < Menus.length){
            setMenu(Menus[currentMenuIndex + 1].title)
            setGenre(null);
            setContentId(null);
          }
          break;

        case KEY_EVENT_VALUES.ARROW_UP:
          if(currentMenuIndex - 1 >= 0){
            setMenu(Menus[currentMenuIndex - 1].title)
            setGenre(null);
            setContentId(null);
          }
          break;
      }
    }

    const handleKeyEvent = (event) => {
      if(KEY_EVENT_TYPES.KEY_DOWN){
        if(focusArea === FOCUS_AREA_OPTIONS.CONTENT){
          handleContentAreaKeyEvent(event);
        } else {
          handleNavAreaKeyEvent(event);
        }
      }
    }

    document.addEventListener(KEY_EVENT_TYPES.KEY_DOWN, handleKeyEvent);

    return () => document.removeEventListener(KEY_EVENT_TYPES.KEY_DOWN, handleKeyEvent);
    
  }, [menu, focusArea, currentGenre, currentContentId])

  return null;
}

export default GlobalKeyEventHandler
