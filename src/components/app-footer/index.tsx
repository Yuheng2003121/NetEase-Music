import React, { memo } from 'react'
import type { ReactNode } from 'react'

interface Props {
  children?: ReactNode
}

const AppFooter: React.FC<Props> = memo(() => {
  return <div>AppFooter</div>
})

export default AppFooter
