import React, { memo } from 'react'
import type { ReactNode } from 'react'
import styled from 'styled-components'

const NewAlbumItemWrapper = styled.div<{theme: any}>`
  /* width: 20%; */
  .top {
    position: relative;
    width: 116px;
    height: 100px;
    overflow: hidden;
    margin-top: 15px;
    border-radius: 8px;

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
      background-position: 0 -570px;
      text-indent: -9999px;
    }
  }

  .bottom {
    font-size: 12px;
    width: 100px;

    .name {
      color: #000;
      ${(props) => props.theme.mixin.textNoWrap}
    }

    .artist {
      ${(props) => props.theme.mixin.textNoWrap}
    }
  }
`
interface Props {
  children?: ReactNode;
  itemData?: any;
}

const NewAlbumItem: React.FC<Props> = memo((props) => {
  const { itemData } = props
  return (
    <NewAlbumItemWrapper>
      <div className="top">
        <img src={itemData?.picUrl} alt="" />
        <a href="#" className="cover sprite_cover"></a>
      </div>
      <div className="bottom">
        <div className="name">{itemData.name}</div>
        <div className="artist">{itemData.artist.name}</div>
      </div>
    </NewAlbumItemWrapper>
  )
})

export default NewAlbumItem
