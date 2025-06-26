import { fetchArtistListAction, fetchBannerAction, fetchHotRecommendAction, fetchNewAlbumAction, fetchRankingDetailAction } from '@/store/module/recommend'
import React, { memo, useEffect, } from 'react'
import type { ReactNode } from 'react'
import { useDispatch } from 'react-redux'
import TopBanner from './c-cpns/top-banner'
import styled from 'styled-components'
import wrapImg from '@/assets/img/wrap-bg.png'
import HotRecommend from './c-cpns/hot-recommend'
import NewAlbum from './c-cpns/new-album'
import TopRanking from './c-cpns/top-ranking'
import UserLogin from './c-cpns/user-login'
import SettleSinger from './c-cpns/settle-singer'
import HotAnchor from './c-cpns/hot-anchor'

const RecommendWrapper = styled.div`
  > .content {
    border: 1px solid #d3d3d3;
    background-image: url(${wrapImg});
    display: flex;

    > .left {
      /* width: 729px; */
      /* width: 700px; */
      /* padding: 15px; */
      width: 689px;
      padding: 21px;
    }

    > .right {
      /* margin-left: 1px;
      width: 250px; */
      flex: 1;

      .bottom {
        padding: 15px 15px 0;
      }
    }
  }
`

interface Props {
  children?: ReactNode
}

export interface DataType {
  imageUrl: string
  targetId: number
  targetType: number
  titleColor: string
  typeTitle: string
  url: string
  exclusive: boolean
  scm: string
  bannerBizType: string
}

const Recommend: React.FC<Props> = memo(() => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBannerAction() as any)
    dispatch(fetchHotRecommendAction(8) as any)
    dispatch(fetchNewAlbumAction(10) as any)
    dispatch(fetchRankingDetailAction() as any)
    dispatch(fetchArtistListAction(5) as any)
  }, [])
  return (
    <RecommendWrapper>
      <TopBanner />
      <div className="content wrap-v2">
        <div className="left">
          <HotRecommend />
          <NewAlbum />
          <TopRanking />
        </div>
        <div className="right">
          <div className="top">
            <UserLogin />
          </div>
          <div className="bottom">
            <SettleSinger />
            <HotAnchor />
          </div>
        </div>
      </div>
    </RecommendWrapper>
  )
})

export default Recommend
