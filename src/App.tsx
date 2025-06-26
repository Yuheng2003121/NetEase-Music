import { useRoutes } from 'react-router-dom'
import styled from 'styled-components'
import routes from './router'
import { Suspense, useEffect } from 'react'
import AppHeader from './components/app-header'
import AppFooter from './components/app-footer'
import PlayerBar from './views/player/player-bar'
import { useDispatch } from 'react-redux'
import { fetchCurrentSongAction } from './store/module/player'

const AppWrapper = styled.div`
  
`
function App() {

  //测试:获取一个currentSong
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchCurrentSongAction(1968781675) as any)
  }, [])

  return (
    <AppWrapper>
      <AppHeader />
      <div className="main">
        <Suspense fallback={<div>Loading...</div>}>
          {useRoutes(routes)}
        </Suspense>
      </div>
      <AppFooter />

      {/*播放器工作栏 */}
      <PlayerBar />
    </AppWrapper>
  )
}

export default App
