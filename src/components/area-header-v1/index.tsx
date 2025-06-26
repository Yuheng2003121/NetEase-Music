import React, { memo } from 'react'
import type { ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const AreaHeaderV1Wrapper = styled.div`
  height: 33px;
  border-bottom: 2px solid #c10d0c;

  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  .left {
    display: flex;
    gap: 20px;
    align-items: center;

    .title {
      background-position: -225px -159px;
      padding-left: 35px;
      font-size: 20px;
      font-family: 'Microsoft Yahei', Arial, Helvetica, sans-serif;
    }

    .keywords {
      display: flex;

      .item {
        .link {
          &:hover,
          &:active {
            cursor: pointer;
            text-decoration: underline;
          }
        }

        
        .divider {
          margin: 0 15px;
          color: #ccc;
        }

        &:last-child {
          .divider {
            display: none;
          }
        }
      }
    }
  }

  .right {
    display: flex;
    align-items: center;
    .more {
      cursor: pointer;
      &:hover {
        text-decoration: underline;
        color: #333;
      }
    }
    .icon {
      display: inline-block;
      width: 12px;
      height: 12px;
      margin-left: 4px;
      background-position: 0 -240px;
    }
  }
`

interface Props {
  children?: ReactNode;
  title?: string;
  keywords?: string[];
  moreText?: string;
  moreLink?: string;
}



const AreaHeaderV1: React.FC<Props> = memo((props) => {
  const {
    title = '默认标题',
    keywords = [],
    moreText = '更多',
    moreLink = '/'
  } = props
  return (
    <AreaHeaderV1Wrapper>
      <div className="left">
        <h3 className="title sprite_02">{title}</h3>
        <ul className="keywords">
          {keywords.map((item: any) => {
            return (
              <li className="item" key={item}>
                <span className="link">{item}</span>
                <span className="divider">|</span>
              </li>
            )
          })}
        </ul>
      </div>
      <div className="right">
        <NavLink to={moreLink} className="more">
          {moreText}
        </NavLink>
        <i className="icon sprite_02"></i>
      </div>
    </AreaHeaderV1Wrapper>
  )
})

export default AreaHeaderV1
