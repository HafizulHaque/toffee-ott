import { Outlet } from "react-router-dom";

function VideoPlayerLayout() {
  return (
    <div>
      <p>Player Layout</p>
      <Outlet/>
    </div>
  )
}

export default VideoPlayerLayout;
