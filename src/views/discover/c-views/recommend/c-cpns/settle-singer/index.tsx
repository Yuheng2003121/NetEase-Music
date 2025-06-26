import AreaHeaderV2 from '@/components/area-header-v2'
import { useAppSelector } from '@/store'
import React, { memo } from 'react'
import type { ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
const SettleSingerWrapper = styled.div<{ theme: any }>`
  .artist-list {
    .item {
      display: flex;
      margin-top: 15px;
      .image {
        width: 62px;
        height: 62px;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      .info {
        flex: 1;
        background-color: #f2f2f4;

        line-height: 20px;
        padding: 10px 0 0 10px;
        border: 1px solid #c3c3c3;
        border-left: none;

        .name {
          font-size: 14px;
          font-weight: 700;
          color: #000;
        }

        .alias {
          font-size: 12px;
          color: #666;
          ${(props) => props.theme.mixin.textNoWrap}
        }
      }
    }
  }

  .apply-for {
    margin-top: 12px;
    padding: 10px 0;
    text-align: center;
    background-color: #fbfbfe;
    border: 2px solid #e4e4e4;
    cursor: pointer;

    span {
      color: #666;
      font-size: 12px;
      font-weight: 700;
    }

    &:hover {
      span {
        color: #333;
      }
    }
  }
`

interface Props {
  children?: ReactNode
}

const SettleSinger: React.FC<Props> = memo(() => {
  const {settleSingers} = useAppSelector((state) => state.recommend)
  const navigate = useNavigate()
  return (
    <SettleSingerWrapper>
      <AreaHeaderV2 title="入驻歌手" moreText="查看全部 &gt;" moreLink='/discover/artist'/>
      <ul className="artist-list">
        {settleSingers?.map((item: any) => {
          return (
            <a href="#/discover/artist" className="item" key={item?.id}>
              <div className="image">
                <img src={item.picUrl} alt="" />
              </div>
              <div className="info">
                <div className="name">{item.name}</div>
                <div className="alias">{item.alias.join(' ')}</div>
              </div>
            </a>
          )
        })}
      </ul>
      <div className="apply-for" onClick={() => {
        navigate('/discover/artist')
      }}>
        <span>申请成为网易音乐人</span>
      </div>
    </SettleSingerWrapper>
  )
})

export default SettleSinger
