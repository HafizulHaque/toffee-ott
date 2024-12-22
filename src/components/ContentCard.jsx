import { forwardRef } from "react";
import { Link } from "react-router-dom"

const ContentCard = forwardRef(({ contentId, title, thumb }, ref) => {
  return (
    <Link to={`/video/${contentId}`} ref={ref} className="group focus:outline-none">
      <div className="">
        <div className="aspect-video rounded-lg overflow-hidden border-4 border-transparent group-hover:border-primary-action group-focus:border-primary-action">
          <img src={thumb} alt={title} className="w-full h-full object-cover object-center"/>
        </div>
        <h2 className="text-xl line-clamp-1 px-2 py-1">{title}</h2>
      </div>
    </Link>
  )
})

export default ContentCard;
