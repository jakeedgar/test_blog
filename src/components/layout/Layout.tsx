import React, { ReactNode } from 'react'
import Header from '../header/Header'
import styled from 'styled-components'

const Container = styled.div`
  padding: 2rem;
`

type Props = {
  children: ReactNode
}

const Layout: React.FC<Props> = (props) => (
  <div>
    <Header />
    <Container>{props.children}</Container>
  </div>
)

export default Layout
