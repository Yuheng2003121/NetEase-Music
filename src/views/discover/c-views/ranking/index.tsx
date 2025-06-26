import React, { memo } from 'react'
import type { ReactNode } from 'react'

interface Props {
  children?: ReactNode
}

const Ranking: React.FC<Props> = memo(() => {
  return <div>Ranking</div>
})

export default Ranking
