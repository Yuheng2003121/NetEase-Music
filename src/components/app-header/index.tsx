import React, { memo } from 'react'
import type { ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import headerTitle from '@/assets/data/header-title.json'
import sprite01 from '@/assets/img/sprite_01.png'
import { SearchOutlined} from '@ant-design/icons'
import { Input } from 'antd'


const AppHeaderWrapper = styled.div<{ theme: any }>`
  height: 75px;
  background-color: #242424;
  font-size: 14px;
  color: #fff;

  > .content {
    display: flex;
    justify-content: space-between;
  }

  .divider {
    height: 5px;
    background-color: #c20c0c;
  }
`

const AppHeaderLeft = styled.div`
  display: flex;
  /* align-items: center; */
  height: 70px;

  .logo {
    width: 176px;
    background-position: 0 0;
    text-indent: -9999px;
  }

  .title-list {
    display: flex;
    /* position: relative; */
    .item {
      height: 100%;
      a {
        position: relative;
        color: #ccc;
        padding: 0 20px;
        height: 100%;
        display: flex;
        align-items: center;
      }

      &:last-child a {
        &::after {
          position: absolute;
          content: '';
          width: 28px;
          height: 19px;
          background-image: url(${sprite01});
          background-position: -190px 0;
          bottom: 0;
          top: 20px;
          right: -15px;
        }
      }

      &:hover a,
      a.active {
        color: #fff;
        background: #000;
        text-decoration: none;
      }

      a.active {
        .icon {
          position: absolute;
          display: inline-block;
          width: 12px;
          height: 7px;
          bottom: -1px;
          left: 50%;
          transform: translate(-50%, 0);
          background-position: -226px 0;
        }
      }
    }
  }
`

const AppHeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  color: #787878;

  // .input {
  //   .ant-input-affix-wrapper {
  //     border-radius: 14px;
  //     padding: 3px 3px;
  //   }
  // }
  .search {
    border-radius: 14px;
    padding: 3px 3px;
    padding-left: 4px;
  }

  .center {
    border: 1px solid #666;
    padding: 7px 10px;
    color: #ccc;
    border-radius: 16px;
    cursor: pointer;
  }

  
` 

interface Props {
  children?: ReactNode
}

const AppHeader: React.FC<Props> = memo(() => {

  function showTitle(item: any) {
    if(item.type === 'path') {
      return <NavLink to={item.link}>
        {item.title}
        <i className='icon sprite_01'></i>
      </NavLink>
    } else if(item.type === 'link') {
      return <a href={item.link} target='_blank' rel="noreferrer">{item.title}</a>
    }
  }
  return (
    <AppHeaderWrapper>
      <div className="content wrap-v1">
        <AppHeaderLeft>
          <a className="logo sprite_01" href="/">
            网易云音乐
          </a>
          <ul className="title-list">
            {headerTitle.map((item) => {
              return (
                <li className="item" key={item.title}>
                  {showTitle(item)}
                </li>
              )
            })}
          </ul>
        </AppHeaderLeft>

        <AppHeaderRight>
          <span className="input">
            <Input
              className="search"
              size="small"
              placeholder="音乐/视频/电台/用户"
              prefix={<SearchOutlined />}
            />
          </span>
          <span className="center">创作者中心</span>
          <span className="login">登录</span>
        </AppHeaderRight>
      </div>
      <div className="divider"></div>
    </AppHeaderWrapper>
  )
})

export default AppHeader
