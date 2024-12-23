import { ArrowLeft } from "lucide-react"
import CloudinaryPlayer from "../components/CloudinaryPlayer"
import { Link } from "react-router-dom"

function PlayVideoPage() {

  return (
    <div className="w-full h-[calc(100vh-100px)] flex justify-center items-center">
      <div className="w-2/3 relative">
        <Link to={'/'} className="absolute top-0 left-[-100px] p-2 rounded-full shadow-back-button hover:scale-110">
            <ArrowLeft size={42} className="text-white"/>
        </Link>
        <div className="w-full aspect-video shadow-player">
          <CloudinaryPlayer 
            id="demo" 
            publicId="numb_linkin_park_evfnhq" 
            playerConfig={{
              muted: false,
              autoplay: true
            }}
            sourceConfig={{
              info: { title: 'Numb | Linkin Park' },
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default PlayVideoPage
