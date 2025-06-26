import AreaHeaderV1 from '@/components/area-header-v1'
import SongItem from '@/components/song-item'
import { useAppSelector } from '@/store'
import React, { memo } from 'react'
import type { ReactNode } from 'react'
import { shallowEqual } from 'react-redux'
import styled from 'styled-components'

const HotRecommendWrapper = styled.div`
  .hot-recommend {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -7px;
  }
`
interface Props {
  children?: ReactNode
}


const HotRecommend: React.FC<Props> = memo(() => {
  const { hotRecommends } = useAppSelector(
    (state) => state.recommend,
    shallowEqual
  )

  return (
    <HotRecommendWrapper>
      <AreaHeaderV1
        title="热门推荐"
        keywords={['华语', '流行', '摇滚', '民谣', '电子']}
        moreLink="/discover/songs"
      />
      <div className="hot-recommend">
        {hotRecommends.map((item: any) => {
          return (
            <SongItem key={item.name} itemData={item}/>
          )
        })}
      </div>
    </HotRecommendWrapper>
  )
})

export default HotRecommend
