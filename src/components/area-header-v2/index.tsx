import React, { memo } from 'react'
import type { ReactNode } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const AreaHeaderV2Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
  padding-bottom: 3px;
  h3 {
    font-size: 12px;
  }
`

interface Props {
  children?: ReactNode;
  title?: string; 
  moreText?: string;
  moreLink?: string;
}

const AreaHeaderV2: React.FC<Props> = memo((props) => {
  const { title = '默认标题', moreText, moreLink } = props
  return (
    <AreaHeaderV2Wrapper>
      <h3 className="title">{title}</h3>
      {moreText && moreLink && <Link to={moreLink} className="more">{moreText}</Link>}
    </AreaHeaderV2Wrapper>
  )
})

export default AreaHeaderV2
