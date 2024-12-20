import { contentList } from "../constants/contentList";
import ContentSegment from '/src/components/ContentSegment';

function HomePage() {

  const menu = "Movie";

  const contentGenreWithData = Object.keys(contentList[menu])
    .map(genre => [genre, contentList[menu][genre]])

  return (
    <div className="px-4 py-8">
      {contentGenreWithData.map(([genre, genreContent], index) => (
        <ContentSegment 
          key={index} 
          genre={genre} 
          contents={genreContent}
        />
      ))}
    </div>
  )
}

export default HomePage
