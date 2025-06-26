import AreaHeaderV1 from '@/components/area-header-v1'
import NewAlbumItem from '@/components/newAblum-item'
import { useAppSelector } from '@/store'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import { Carousel } from 'antd'
import React, { memo, useRef } from 'react'
import type { ComponentRef, ReactNode } from 'react'
import { shallowEqual } from 'react-redux'
import styled from 'styled-components'

const NewAlbumWrapper = styled.div`
  margin-top: 20px;
  > .content {
    height: 186px;
    background-color: #f5f5f5;
    border: 1px solid #d3d3d3;
    margin: 20px 0 37px;
    padding: 0 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .arrow {
      cursor: pointer;
      width: 17px;
      height: 17px;
      font-size: 20px;
      position: relative;
      top: -12px;
    }

    .banner {
      flex: 1;
      overflow: hidden;

      .album-list {
        display: flex !important; 
        align-items: center;
        gap: 11px;
        padding: 0 10px;
      }
    }
  }
`

interface Props {
  children?: ReactNode
}

const NewAlbum: React.FC<Props> = memo(() => {
  const { newAlbums } = useAppSelector(
    (state) => state.recommend, shallowEqual
  )
  
  const bannerRef = useRef<ComponentRef<typeof Carousel>>(null)
  function handleArrowClick(isNext: boolean) {
    if(isNext) {
      bannerRef.current?.next()
    } else {
      bannerRef.current?.prev()
    }
    
  }
  return (
    <NewAlbumWrapper>
      <AreaHeaderV1 title="新碟上架" moreLink="/discover/album" />
      <div className="content">
        <span className="arrow left" onClick={() => handleArrowClick(false)}>
          <LeftOutlined />
        </span>
        <div className="banner">
          <Carousel ref={bannerRef} dots={false}>
            {[1, 2].map((_, index) => {
              return (
                <div className="album-list" key={index}>
                  {newAlbums
                    .slice(index * 5, (index + 1) * 5)
                    .map((album: any) => {
                      return <NewAlbumItem key={album.id} itemData={album} />
                    })}
                </div>
              )
            })}
          </Carousel>
        </div>
        <span className="arrow right" onClick={() => handleArrowClick(true)}>
          <RightOutlined />
        </span>
      </div>
    </NewAlbumWrapper>
  )
})

export default NewAlbum
