import React, { memo } from 'react'
import type { ReactNode } from 'react'
import styled from 'styled-components'
import { discoverMenu } from '@/assets/data/local_data'
import { NavLink } from 'react-router-dom'

const NavBarWrapper = styled.div<{ theme: any }>`
  height: 30px;
  background-color: ${(props) => props.theme.color.primary};

  .content {
    height: 100%;
    .nav-list {
      padding-left: 180px;
      height: 100%;
      display: flex;
      /* align-items: center; */

      position: relative;
      top: -2px;

      .item {
        padding: 0 20px;
        line-height: 30px;

        a {
          color: #fff;
          font-size: 12px;
          padding: 3px 10px;

          &:hover,
          &.active {
            text-decoration: none;
            background-color: #9b0909;
            border-radius: 20px;
          }
        }
      }
    }
  }
`
interface Props {
  children?: ReactNode
}

const NavBar: React.FC<Props> = memo(() => {
  return (
    <NavBarWrapper>
      <div className="content wrap-v1">
        <ul className="nav-list">
          {discoverMenu.map((item) => {
            return (
              <div className="item" key={item.title}>
                <NavLink to={item.link}>{item.title}</NavLink>
              </div>
            )
          })}
        </ul>
      </div>
    </NavBarWrapper>
  )
})

export default NavBar
