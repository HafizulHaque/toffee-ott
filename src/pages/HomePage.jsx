import { contentList } from "../constants/contentList";
import { KEY_EVENT_TYPES, KEY_EVENT_VALUES } from "../constants/KeyEventConstants";
import { FOCUS_AREA_OPTIONS } from "../constants/stateConstants";
import { ContentPerRow } from "../constants/uiConstants";
import ContentSegment from '/src/components/ContentSegment';
import { useAppState } from '/src/hooks/useAppState';
import { useEffect, useRef } from "react";

function HomePage() {

  const currentContentRef = useRef(null);
  const { menu, focusArea, currentGenre, currentContentId, setFocusArea, setGenre, setContentId } = useAppState();
  const contentGenreWithData = Object.keys(contentList[menu])
    .map(genre => [genre, contentList[menu][genre]]);

  useEffect(() => {
    
    let genres = Object.keys(contentList[menu])
    let genre, contentId;

    const handleKeyEvent = (event) => {
      switch(event.key){
        case KEY_EVENT_VALUES.ARROW_DOWN: 
          console.log('bottom arrow');
          break;
        case KEY_EVENT_VALUES.ARROW_UP:
          console.log('up arrow');
          break;
        case KEY_EVENT_VALUES.ARROW_LEFT:
          if(currentContentId){
            genre = currentGenre ?? genres[0];
            if(currentContentId % ContentPerRow === 1){
              setFocusArea(FOCUS_AREA_OPTIONS.NAVBAR);
            } else {
              setContentId(currentContentId-1);
            }
          } else {
            setFocusArea(FOCUS_AREA_OPTIONS.NAVBAR)
          }
          break;
        case KEY_EVENT_VALUES.ARROW_RIGHT:
          genre = currentGenre ?? genres[0];
          if(currentContentId){
            if(currentContentId + 1 > contentList[menu][genre].length){
              let currentGenreIndex = genres.indexOf(genre);
              if(currentGenreIndex + 1 >= genres.length) return;
              genre = genres[currentGenreIndex+1];
              contentId = 1
            } else {
              contentId = currentContentId + 1;
            }
          } else {
            contentId = 1;
          }
          setGenre(genre);
          setContentId(contentId);
          break;
        case KEY_EVENT_VALUES.ENTER:
          console.log(`enter pressed`);
          break;
        case KEY_EVENT_VALUES.ESC:
          console.log('esc pressed');
          break;
        default:
          console.log('untracced keypress');
      }
    }

    if(focusArea === FOCUS_AREA_OPTIONS.CONTENT){
      document.addEventListener(KEY_EVENT_TYPES.KEY_DOWN, handleKeyEvent);
    }

    return () => {
      document.removeEventListener(KEY_EVENT_TYPES.KEY_DOWN, handleKeyEvent)
    }
  }, [focusArea, currentGenre, currentContentId])

  useEffect(() => {
    if(currentContentRef.current){
      currentContentRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
      currentContentRef.current.focus();
    }
  }, [currentContentId])

  return (
    <div className="p-8">
      {contentGenreWithData.map(([genre, genreContent], index) => (
        <ContentSegment 
          key={index} 
          ref = {currentGenre === genre ? currentContentRef : null}
          menu={menu}
          genre={genre} 
          contents={genreContent}
        />
      ))}
    </div>
  )
}

export default HomePage
