const ContentCard = ({ title, thumb }) => {
  return (
    <div className="">
      <div className="aspect-video rounded-lg overflow-hidden border-4 border-transparent hover:border-primary-action">
        <img src={thumb} alt={title} className="w-full h-full object-cover object-center"/>
      </div>
      <h2 className="text-xl line-clamp-1 px-2 py-1">{title}</h2>
    </div>
  )
}

export default ContentCard;
