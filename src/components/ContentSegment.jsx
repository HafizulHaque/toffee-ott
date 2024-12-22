import { forwardRef } from 'react';
import { useAppState } from '../hooks/useAppState';
import ContentCard from '/src/components/ContentCard';

const ContentSegment = forwardRef(({ menu, genre, contents }, ref) => {

  const { currentContentId } = useAppState();

  return (
    <div className='mb-16'>
      <h1 className='mb-4 text-3xl font-medium text-primary-action'>{genre}</h1>
      <div className="grid grid-cols-4 gap-x-8 gap-y-6">
        { contents.map(content => (
          <ContentCard
            key={content.id}
            ref={currentContentId === content.id ? ref : null} 
            contentId={content.id}
            title={content.title} 
            thumb={`/${menu}/${genre}/${content.thumb}`}
          />
        ))}
      </div>
    </div>
  )
})

export default ContentSegment
