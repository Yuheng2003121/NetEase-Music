import React, { memo } from 'react'
import type { ReactNode } from 'react'

interface Props {
  children?: ReactNode
}

const Album: React.FC<Props> = memo(() => {
  return <div>Album</div>
})

export default Album
