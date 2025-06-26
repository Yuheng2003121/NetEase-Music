import React, { memo } from 'react'
import type { ReactNode } from 'react'

interface Props {
  children?: ReactNode
}

const Artist: React.FC<Props> = memo(() => {
  return <div>Artist</div>
})

export default Artist
