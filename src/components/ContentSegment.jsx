import ContentCard from '/src/components/ContentCard';

const menu = 'Movie';


const ContentSegment = ({ genre, contents }) => {
  return (
    <div className='mb-16'>
      <h1 className='mb-4 text-3xl font-medium text-primary-action'>{genre}</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-6">
        { contents.map(content => (
          <ContentCard
            key={content.id} 
            title={content.title} 
            thumb={`/${menu}/${genre}/${content.thumb}`}
          />
        ))}
      </div>
    </div>
  )
}

export default ContentSegment
