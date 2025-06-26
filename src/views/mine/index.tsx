import React, { memo } from 'react'
import type { ReactNode } from 'react'

interface Props {
  children?: ReactNode
}

const Mine: React.FC<Props> = memo(() => {
  return <div>Mine</div>
})

export default Mine
