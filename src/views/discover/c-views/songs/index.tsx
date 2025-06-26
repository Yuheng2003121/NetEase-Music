import React, { memo } from 'react'
import type { ReactNode } from 'react'

interface Props {
  children?: ReactNode
}

const Songs: React.FC<Props> = memo(() => {
  return <div>Songs</div>
})

export default Songs
