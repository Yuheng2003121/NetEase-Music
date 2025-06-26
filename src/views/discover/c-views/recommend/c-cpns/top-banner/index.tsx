import { useAppSelector } from '@/store'
import React, { memo, useRef, useState } from 'react'
import type { ComponentRef, ReactNode } from 'react'
import styled from 'styled-components'
import { Carousel } from 'antd'
import downloadImg from '@/assets/img/download.png'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import classNames from 'classnames'
import { shallowEqual } from 'react-redux'

const TopBannerWrapper = styled.div<{ bgimageurl: string }>`
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${(props) =>`url(${props.bgimageurl})`} center center/cover;
    transition: background-image 0.3s ease-in-out;
    filter: blur(5px);
    z-index: -1;
  }

  .banner {
    display: flex;
    height: 270px;
    /* display: flex; */
    position: relative;
  }
  
`

const BannerLeftWrapper = styled.div`
  position: relative;
  width: 730px;

  .banner-item {
    overflow: hidden;
    height: 270px;
    .image {
      width: 100%;
      /* opacity: 0; */
      transition: opacity 0.8s ease-in-out;
    }
    .fadeIn {
      opacity: 1;
    }
  }

  .dots {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 10px;

    .item {
      width: 7px;
      height: 7px;
      cursor: pointer;
      border-radius: 50%;
      background: #fff;

      &:hover,
      &.active {
        background: red;
      }
    }
  }
`
const BannerRightWrapper = styled.a.attrs({
  href: 'https://music.163.com/#/download',
  target: '_blank'
})`
  /* display: inline-block; */
  flex: 1;
  width: 254px;
  height: 270px;
  background: url(${downloadImg});
  position: relative;
  &::after {
    content: 'PC 客户端下载';
    color: #ccc;
    font-size:12px;
    position: absolute;
    bottom: 5px;
    left: 50%;
    transform: translateX(-50%);
  }
`

const BannerControlWrapper = styled.div`
  position: absolute;
  left: 0px;
  right: 0px;
  top: 50%;
  transform: translateY(-50%);
  height: 63px;

  display: flex;
  justify-content: space-between;
  .btn {
    /* position: absolute;
    display: flex;
    align-items: center;
    width: 37px;
    height: 63px;
    font-size: 30px;
    color: #fff;

    &.left {
      left: 0;
    }

    &.right {
      right: 0;
    } */
    font-size: 45px;
    display: flex;
    align-items: center;
    color: #fff;
    position: relative;
    background-color: transparent;
    cursor: pointer;

    &.left {
      left: -70px;
    }

    &.right {
      right: -70px;
    }

    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
`


interface BannerItem {
  imageUrl: string
  
}

interface Props {
  children?: ReactNode
}

const TopBanner: React.FC<Props> = memo(() => {
  //这个 selector 返回的对象结构应该是一个包含 banners 属性的对象, banners 属性的类型是 BannerItem[]（即 BannerItem 类型的数组）
  const { banners } = useAppSelector<{ banners: BannerItem[] }>(
    (state) => state.recommend, shallowEqual
  )

  const [currentIndex, setCurrentIndex] = useState(0)

  const bannerRef = useRef<ComponentRef<typeof Carousel>>(null)

  function handleBtnClick(isRight: boolean) {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    isRight ? bannerRef.current?.next() : bannerRef.current?.prev()
  }

  function handleDotClick(index: number) {
    setCurrentIndex(index)
    bannerRef.current?.goTo(index)
  }
  
  return (
    <TopBannerWrapper bgimageurl={banners[currentIndex]?.imageUrl}>
      <div className="banner wrap-v2">
        <BannerLeftWrapper>
          <Carousel
            autoplay
            autoplaySpeed={2000}
            ref={bannerRef}
            effect="fade"
            dots={false}
            beforeChange={(_, next) => {
              setCurrentIndex(next)
            }}
          >
            {banners.map((item) => {
              return (
                <div className="banner-item" key={item.imageUrl}>
                  <img className="image" src={item.imageUrl} alt="" />
                </div>
              )
            })}
          </Carousel>
          <ul className="dots">
            {banners.map((item, index)=> {
              return (
                <li
                  className={classNames('item', {
                    active: currentIndex === index
                  })}
                  onClick={() => handleDotClick(index)}
                  key={item.imageUrl}
                ></li>
              )
            })}
          </ul>
        </BannerLeftWrapper>
        <BannerRightWrapper></BannerRightWrapper>
        <BannerControlWrapper>
          <div className="btn left" onClick={() => handleBtnClick(false)}>
            <LeftOutlined />
          </div>
          <div className="btn right" onClick={() => handleBtnClick(true)}>
            <RightOutlined />
          </div>
         
        </BannerControlWrapper>
      </div>
    </TopBannerWrapper>
  )
})

export default TopBanner
