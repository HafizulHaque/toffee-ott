import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import BaseLayout from "./BaseLayout";
import HomePage from "../pages/HomePage";
import PlayVideoPage from "../pages/PlayVideoPage";
import VideoPlayerLayout from "./VIdeoPlayerLayout";

function RootLayout(){

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<BaseLayout/>}>
        <Route index element={<HomePage/>}/>
        <Route path="video" element={<VideoPlayerLayout/>}>
          <Route path=":id" element={<PlayVideoPage/>}/>
        </Route>
      </Route>
    )
  )

  return <RouterProvider router={router}/>
}

export default RootLayout;





