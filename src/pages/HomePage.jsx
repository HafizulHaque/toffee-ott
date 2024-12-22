import { contentList } from "../constants/contentList";
import { FOCUS_AREA_OPTIONS } from "../constants/stateConstants";
import ContentSegment from '/src/components/ContentSegment';
import { useAppState } from '/src/hooks/useAppState';
import { useEffect, useRef } from "react";

function HomePage() {

  const currentContentRef = useRef(null);
  const { menu, focusArea, currentGenre, currentContentId } = useAppState();
  
  const contentGenreWithData = Object.keys(contentList[menu])
    .map(genre => [genre, contentList[menu][genre]]);


  useEffect(() => {
    
    if(focusArea !== FOCUS_AREA_OPTIONS.CONTENT) return;

    if(currentContentRef.current){
      currentContentRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
      currentContentRef.current.focus();
    }
  }, [focusArea, currentContentId])

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
