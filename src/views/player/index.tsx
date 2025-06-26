import React, { memo } from 'react'
import type { ReactNode } from 'react'

interface Props {
  children?: ReactNode
}

const Player: React.FC<Props> = memo(() => {
  return (
    <div>Player</div>
  )
})

export default Player
