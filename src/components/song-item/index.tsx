import { formatCount } from '@/utils/format'
import React, { memo } from 'react'
import type { ReactNode } from 'react'
import styled from 'styled-components'

const SongItemWrapper = styled.div`
  width: 25%;
  margin: 15px 0;
  box-sizing: border-box;
  padding: 0 7px;

  .top {
    position: relative;
    height: 140px;
    img {
      width: 100%;
      height: 100%;
    }

    .cover {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background-position: 0 0;
    }

    .info {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0px;
      height: 25px;
      color: #ccc;
      display: flex;
      justify-content: space-between;
      padding: 0 7px;
      background-position: 0 -537px;

      .left {
        display: flex;
        align-items: center;
        .headset {
          margin-right: 5px;
          display: inline-block;
          width: 14px;
          height: 11px;
          background-position: 0 -24px;
        }
      }

      .right {
        display: flex;
        align-items: center;
        .play {
          display: inline-block;
          width: 16px;
          height: 17px;
          background-position: 0 0;
        }
      }
    }
  }

  .bottom {
    font-size: 14px;
    color: #000;
    margin-top: 5px;

    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2; /* 限制为 2 行 */
    overflow: hidden;
    text-overflow: ellipsis;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`

interface Props {
  children?: ReactNode
  itemData?: any
}

const SongItem: React.FC<Props> = memo((props) => {
  const { itemData } = props
  return (
    <SongItemWrapper>
      <div className="top">
        <img src={itemData?.picUrl} alt="" />
        <div className="cover sprite_cover"></div>
        <div className="info sprite_cover">
          <div className="left">
            <i className="sprite_icon headset"></i>
            <span className="count">{formatCount(itemData.playCount)}</span>
          </div>
          <div className="right">
            <i className="sprite_icon play"></i>
          </div>
        </div>
      </div>
      <div className="bottom">{itemData.name}</div>
    </SongItemWrapper>
  )
})

export default SongItem
