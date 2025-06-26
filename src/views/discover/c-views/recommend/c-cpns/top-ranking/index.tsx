import AreaHeaderV1 from '@/components/area-header-v1'
import React, { memo } from 'react'
import type { ReactNode } from 'react'
import styled from 'styled-components'
import recommendTopBg from '@/assets/img/recommend-top-bg.png'
import { useAppSelector } from '@/store'
import RankingItem from '../top-ranking-item'
import { shallowEqual } from 'react-redux'

const TopRankingWrapper = styled.div`
  > .content {
    height: 472px;
    margin-top: 20px;
    background: url(${recommendTopBg});
    
    display: flex;
  }
`

interface Props {
  children?: ReactNode
}

const TopRanking: React.FC<Props> = memo(() => {
  const { rankingDetail } = useAppSelector((state) => state.recommend, shallowEqual)
  return (
    <TopRankingWrapper>
      <AreaHeaderV1 title='榜单' moreLink='/discover/ranking'/>
      <div className="content">
        {
          rankingDetail?.map((item: any) => {
            return (
              <RankingItem key={item?.id} playList={item}/>
            )
          })
        }
      </div>
    </TopRankingWrapper>
  )
})

export default TopRanking
