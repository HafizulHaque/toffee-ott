import { Link } from "react-router-dom"
import { ArrowLeft } from "lucide-react"
import CloudinaryPlayer from "../components/CloudinaryPlayer"
import { PROFILE_ID, VID_PUBLIC_ID } from "../constants/videoSourceContansts"

function PlayVideoPage() {

  return (
    <div className="w-full h-[calc(100vh-100px)] flex justify-center items-center">
      <div className="w-2/3 relative">
        <Link to={'/'} className="absolute top-0 left-[-100px] p-2 rounded-full shadow-back-button hover:scale-110">
            <ArrowLeft size={42} className="text-white"/>
        </Link>
        <div className="w-full aspect-video shadow-player">
          <CloudinaryPlayer 
            id={PROFILE_ID}
            publicId={VID_PUBLIC_ID}
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
