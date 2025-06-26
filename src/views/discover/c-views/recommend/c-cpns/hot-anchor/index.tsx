import AreaHeaderV2 from '@/components/area-header-v2'
import React, { memo } from 'react'
import type { ReactNode } from 'react'
import styled from 'styled-components'
import { hotRadios } from '@/assets/data/local_data'
import { useNavigate } from 'react-router-dom'

const HotAnchorWrapper = styled.div<{ theme: any }>`
  margin-top: 40px;

  .anchors-list {
    .item {
      display: flex;
      margin-top: 20px;
      .image {
        width: 40px;
        height: 40px;
        img {
          width: 100%;
          object-fit: cover;
        }
      }

      .info {
        margin-left: 10px;
        line-height: 20px;
        width: 170px;

        cursor: pointer;

        .name {
          color: #000;
          font-weight: 700;
        }

        .desc {
          color: #666;
          ${(props) => props.theme.mixin.textNoWrap}
        }
      }
    }
  }
`

interface Props {
  children?: ReactNode
}

const HotAnchor: React.FC<Props> = memo(() => {
  const navigate = useNavigate()
  return (
    <HotAnchorWrapper>
      <AreaHeaderV2 title=' 热门主播'/>
      <ul className="anchors-list">
        {
          hotRadios?.map((item: any) => {
            return (
              <div className="item" key={item. picUrl} onClick={() => {
                navigate(item.url)
              }}>
                <div className="image">
                  <img src={item.picUrl} alt="" />
                </div>
                <div className="info">
                  <div className="name">{item.name}</div>
                  <div className="desc">{item.position}</div>
                </div>
              </div>
            )
          })
        }
      </ul>
    </HotAnchorWrapper>
  )
})

export default HotAnchor
