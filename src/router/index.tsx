import Album from "@/views/discover/c-views/album"
import Artist from "@/views/discover/c-views/artist"
import Djradio from "@/views/discover/c-views/djradio"
import Ranking from "@/views/discover/c-views/ranking"
import Recommend from "@/views/discover/c-views/recommend"
import Songs from "@/views/discover/c-views/songs"
import { lazy } from "react"
import { Navigate, type RouteObject } from "react-router-dom"
// import Discover from "@/views/discover"
// import Mine from "@/views/mine"
// import Download from "@/views/download"
// import Focus from "@/views/focus"
const Discover = lazy(() => import('@/views/discover'))
const Mine = lazy(() => import('@/views/mine'))
const Focus = lazy(() => import('@/views/focus'))
const Download = lazy(() => import('@/views/download'))


const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to={'/discover'} />
  },
  {
    path: '/discover',
    element: <Discover />,
    children: [
      {
        path: '/discover',
        element: <Navigate to={'/discover/recommend'} />
      },

      {
        path: '/discover/recommend',
        element: <Recommend />
      },
      {
        path: '/discover/album',
        element: <Album />
      },
      {
        path: '/discover/artist',
        element: <Artist />
      },
      {
        path: '/discover/djradio',
        element: <Djradio />
      },
      {
        path: '/discover/ranking',
        element: <Ranking/>
      },
      {
        path: '/discover/songs/:type?', // 注意 :type? 表示 type 是可选的
        element: <Songs />
      }
    ]
  },
  {
    path: '/mine',
    element: <Mine />
  },
  {
    path: '/download',
    element: <Download />
  },
  {
    path: '/focus',
    element: <Focus />
  }
]

export default routes