import React, { memo } from 'react'
import type { ReactNode } from 'react'

interface Props {
  children?: ReactNode
}

const Focus: React.FC<Props> = memo(() => {
  return <div>Focus</div>
})

export default Focus
