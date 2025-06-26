import React, { memo } from 'react'
import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const UserLoginWrapper = styled.div`
  box-sizing: border-box;
  height: 126px;
  background-position: -1px 0;
  padding: 16px 22px;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    line-height: 25px;
  }
  .login-btn {
    margin-top: 10px;
    padding: 10px 27px;
    border-radius: 5px;
    color: #fff;
    text-decoration: none;
    border-radius: 8px;
    background-position: 0 -195px;
  }
`
interface Props {
  children?: ReactNode
}

const UserLogin: React.FC<Props> = memo(() => {
  return (
    <UserLoginWrapper className="sprite_02">
      <p className="intro">
        登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机
      </p>
      <Link to="/login" className="login-btn sprite_02">
        用户登录
      </Link>
    </UserLoginWrapper>
  )
})

export default UserLogin
