import React, { memo, useCallback, useEffect,  useRef, useState } from 'react'
import type { ReactNode } from 'react'
import styled from 'styled-components'
import { message, Slider } from 'antd'
import {
  StepBackwardOutlined,
  StepForwardOutlined,
  PlayCircleOutlined,
  ShareAltOutlined,
  FormOutlined,
  FolderAddOutlined,
  ExportOutlined,
  PauseCircleOutlined,
} from '@ant-design/icons'
import { NavLink } from 'react-router-dom'
import progress_bar from '@/assets/img/progress_bar.png'
import sprite_icon from '@/assets/img/sprite_icon.png'
import { useAppDispatch, useAppSelector } from '@/store'
import { formatMilliseconds, getPlayUrl } from '@/utils/format'
import { throttle } from 'lodash'
import { shallowEqual } from 'react-redux'
import { changeIsPlayingAction, changeLyricIndexAction, changeMusicAction, changePlayModeAction } from '@/store/module/player'
import { PlayMode } from '@/types'

const PlayerBarWrapper = styled.div`
  height: 52px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-position: 0 0;
  background-repeat: repeat;
  z-index: 99;

  .content {
    display: flex;
    /* align-items: center; */
    justify-content: space-between;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    height: 47px;
  }
`

const BarControlWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  .btn {
    color: #ccc;
    font-size: 22px;
    cursor: pointer;
    &.play {
      font-size: 30px;
    }

    &:hover {
      color: #fff;
    }
  }
`
const BarPlayerInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 642px;
  gap: 15px;
  .image {
    width: 34px;
    height: 34px;
    border-radius: 5px;
    overflow: hidden;
    img {
      width: 100%;
      object-fit: cover;
    }
  }

  .info {
    height: 100%;
    flex: 1;

    .song {
      display: flex;
      gap: 10px;
      color: #e1e1e1;
      font-size: 12px;
      margin-top: 10px;

      .song-singer,
      .song-share {
        color: #a1a1a1;
      }

      .song-share {
        font-size: 14px;
      }
    }

    .progress {
      display: flex;
      gap: 10px;
      align-items: center;
      position: relative;
      bottom: 7px;
      /* margin-left: -5px; */

      .slider {
        /* flex: 1; */
        width: 493px;
        /* 这个组件默认有margin, 去掉 */
        /* margin-left: 0; */

        .ant-slider-rail {
          height: 7px;
          background: url(${progress_bar}) right 0;
        }

        /* 滑块活动轨道样式 */
        .ant-slider-track {
          height: 7px;
          background: url(${progress_bar}) left -66px;
        }

        /* 滑块手柄样式 */
        .ant-slider-handle {
          /* display: none; */
          width: 22px; 
          height: 24px; 
          border: none; 
          margin-top: -2px; 
          background: url(${sprite_icon}) 0 -253px; 

          /* 去除原来的手柄 */
          &::after, &::before {
            display: none;
            width: 0;
            height: 0;
          }
        }
      }

      .time {
        display: flex;
        color: #a1a1a1;
        .current {
          color: #e1e1e1;
        }

        .divider {
          margin: 0 4px;
        }
      }
    }
  }
`
const BarOperatorWrapper = styled.div<{playMode: number, theme:any}>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #ccc;
  font-size: 20px;
  .left {
    display: flex;
    gap: 12px;
  }

  .divider {
    margin: 0 10px;
  }

  .right {
    display: flex;
    /* width: 126px; */
    padding-left: 18px;
    /* background-position: -147px -248px; */
    background-position: -140px -236px;

    .btn {
      width: 25px;
      height: 25px;
      cursor: pointer;
    }

    .volume {
      background-position: -2px -248px;
    }

    .loop {
      /* background-position: -66px -248px; */
      background-position: ${(props:any) => {
        switch (props.playMode) {
          case 0: 
            return '-66px -248px'
          case 1:
            return '-3px -344px'
          default:
            return '-66px -344px'
        }
      }};
    }

    .playlist {
      padding-left: 18px;
      text-align: center;
      color: #ccc;
      width: 59px;
      background-position: -42px -68px;
    }
  }
`



interface Props {
  children?: ReactNode
}

const PlayerBar: React.FC<Props> = memo(() => {
  const { currentSong, lyrics, lyricIndex, playMode, isPlaying } = useAppSelector((state) => state.player, shallowEqual)
  // const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [isSliding, setIsSliding] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    // 1. 设置音乐源（当修改 audioRef.current.src 时，浏览器也会重置 audioRef.current.currentTime 为 0）
    audioRef.current!.src = getPlayUrl(currentSong.id)
    setDuration(currentSong.dt)
    // 自动播放新歌曲（需注意浏览器限制）
    // audioRef.current?.play().then(() => {
    //   console.log('播放成功');
    //   setIsPlaying(true)
    // }).catch(error =>{
    //   console.log('播放失败' + error)
    //   setIsPlaying(false)
    // })
  }, [currentSong])

  // 播放控制处理
  const handlePlayBtnClick = async () => {
    if (!audioRef.current) return

    // try {
    //   //1.控制播放器播放/暂停
    //   if (isPlaying) {
    //     await audioRef.current.pause()
    //   } else {
    //     await audioRef.current.play()
    //   }
    //   //2.改变isPlaying的状态
    //   setIsPlaying(!isPlaying)
    // } catch (err) {
    //   console.error('播放控制失败:', err)
    // }
      // setIsPlaying(!isPlaying)
      dispatch(changeIsPlayingAction(!isPlaying))
  }


  //音乐播放进度处理
  // function handleTimeUpdate() {
  //   //1.获取当前播放时间
  //   const currentTime = audioRef.current!.currentTime

  //   //2.计算进度 (这里duration是毫秒, currentTime是秒需要换算)
  //   const progress = ((currentTime * 1000) / duration) * 100
  //   setProgress(progress)
  //   setCurrentTime(currentTime * 1000) //这里转换为毫秒, 因为后面会对毫秒格式化
  // }
  const dispatch = useAppDispatch()
  const handleTimeUpdate = useCallback(
    throttle(() => {
      //1.获取当前播放时间
      const currentTime = audioRef.current?.currentTime || 0
      const currentMs = currentTime * 1000

      //2.计算进度 (这里duration是毫秒, currentTime是秒需要换算)
      //拖拽过程中不允许更新时间和进度
      if (!isSliding) {
        const progress = (currentMs / duration) * 100
        setCurrentTime(currentMs)
        setProgress(progress)
      }

      //3.根据当前时间匹配歌词展示
     let index = lyrics.length - 1;//如果匹配不到, 那么说明currentTime比所有歌词的时间都大, 
     
      for (let i = 0; i < lyrics.length; i++) {
        const lyric: {text:string, time: number} = lyrics[i]
        if (currentTime * 1000 < lyric.time) {
          index = i - 1
          break
        }
      }
      //匹配到了当前歌词的index (同一句歌词只展示一次)
      if(lyricIndex === index || index === -1) return
      dispatch(changeLyricIndexAction(index))
      
      //展示对应的歌词
     if(currentTime > 0) {
      message.open({
        key: 'lyric',
        duration: 0,
        content: lyrics[index].text
      })
     }
    }, 1000),
    [lyrics, currentTime, lyricIndex]
  )

  //拖动过程处理
  function handleSliderChange(value: number) {
    setIsSliding(true)
    
    //获取点击位置的时间
    const currentTime = (value / 100) * duration

    //设置currentTime/progress
    audioRef.current!.currentTime = currentTime / 1000
    setCurrentTime(currentTime)
    setProgress(value)
  }

  // 拖动过程中暂停播放
  useEffect(() => {
    if (isSliding && !audioRef.current?.paused) {
      audioRef.current?.pause()
    }
  }, [isSliding])

  // 拖动结束后恢复播放
  useEffect(() => {
    if (!isSliding && isPlaying && audioRef.current?.paused) {
      audioRef.current?.play().catch((err) => {
        console.error('恢复播放失败:', err)
      })
    }
  }, [isSliding, isPlaying])


  //点击播放模式切换处理
  function handleChnagePlayMode() {
    const newPlayMode = (playMode + 1 + 3) % 3 //newIndex = (currentIndex + delta + total) % total;
    console.log(newPlayMode);
    
    dispatch((changePlayModeAction(newPlayMode)))
  }

  //点击上一首/下一首切换歌曲处理
  function handleChangeSong(isNext: number) {
    dispatch(changeMusicAction(isNext))
    // setIsPlaying(true)
    dispatch(changeIsPlayingAction(true))
  }
  
  useEffect(() => {
    if (isPlaying && audioRef.current) {
      audioRef.current.play().catch((err) => {
        console.error('播放失败:', err)
      })
    } else if (!isPlaying && audioRef.current) {
      audioRef.current.pause()
    }
  }, [currentSong, isPlaying])
  
  
  //歌曲播放完的处理
  function handleTimeEnded() {
    
   if(playMode === PlayMode.loop) {
     // 如果当前模式是循环播放(2)
     audioRef.current!.currentTime = 0
     audioRef.current!.play()
   } else {
    dispatch(changeMusicAction(1))
   }
  }

  return (
    <PlayerBarWrapper className="sprite_playbar">
      <div className="content wrap-v2">
        {/* left */}
        <BarControlWrapper>
          <StepBackwardOutlined className="btn previous" onClick={() => handleChangeSong(-1)} />
          {isPlaying ? (
            <PauseCircleOutlined
              className="btn play"
              onClick={handlePlayBtnClick}
            />
          ) : (
            <PlayCircleOutlined
              className="btn play"
              onClick={handlePlayBtnClick}
            />
          )}
          <StepForwardOutlined className="btn next" onClick={() => handleChangeSong(1)} />
        </BarControlWrapper>
        {/* middle */}
        <BarPlayerInfoWrapper>
          <NavLink to="/discover/player">
            <div className="image">
              <img src={currentSong?.al?.picUrl} alt="" />
            </div>
          </NavLink>
          <div className="info">
            <div className="song">
              <div className="song-name">{currentSong?.name}</div>
              <div className="song-singer">{currentSong?.ar?.[0]?.name || '未知歌手'}</div>
              <ShareAltOutlined className="song-share" />
            </div>
            <div className="progress">
              {/* Slider组件 */}
              <Slider
                value={progress}
                className="slider"
                step={0.2}
                tooltip={{ formatter: null }}
                onChange={handleSliderChange}
                onChangeComplete={() => setIsSliding(false)}
              />
              <div className="time">
                <span className="current">
                  {formatMilliseconds(currentTime)}
                </span>
                <span className="divider">/</span>
                <div className="duration">{formatMilliseconds(duration)}</div>
              </div>
            </div>
          </div>
        </BarPlayerInfoWrapper>
        {/* right */}
        <BarOperatorWrapper playMode={playMode}>
          <div className="left">
            <FormOutlined />
            <FolderAddOutlined />
            <ExportOutlined />
          </div>
          <div className="right sprite_playbar">
            <button className="sprite_playbar btn volume"></button>
            <button className="sprite_playbar btn loop" onClick={handleChnagePlayMode}></button>
            <button className="sprite_playbar btn playlist"></button>
          </div>
        </BarOperatorWrapper>
      </div>
      <audio ref={audioRef} onTimeUpdate={handleTimeUpdate} onEnded={handleTimeEnded}/>
    </PlayerBarWrapper>
  )
})

export default PlayerBar
