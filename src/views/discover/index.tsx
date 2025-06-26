import React, { memo, type ReactNode } from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './c-cpns/nav- bar'

interface Props {
  children?: ReactNode 
}
const Discover: React.FC<Props> = memo(() => {
  return (
    <div>
      <NavBar/>

      <div className="content">
        <Outlet />
      </div>
    </div>
  )
})


export default Discover
