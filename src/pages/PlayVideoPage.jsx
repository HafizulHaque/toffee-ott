import CloudinaryPlayer from "../components/CloudinaryPlayer"

function PlayVideoPage() {

  return (
    <div className="w-full h-[calc(100vh-100px)] flex justify-center items-center">
      <div className="w-2/3 aspect-video">
        <CloudinaryPlayer 
          id="demovideo" 
          publicId="Bali_in_8k_ULTRA_HD_HDR_-_Paradise_of_Asia_60_FPS_mra4yu" 
          playerConfig={{
            muted: true,
            posterOptions: {
              transformation: { effect: 'blur' },
            },
          }}
          sourceConfig={{
            info: { title: 'Beautiful Bali 4K Video' },
          }}
        />
      </div>
    </div>
  )
}

export default PlayVideoPage
