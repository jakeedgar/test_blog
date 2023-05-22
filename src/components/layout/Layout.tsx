import React, { ReactNode } from 'react'
import Navbar from '../navbar/Navbar'
import styled from 'styled-components'

const Container = styled.div`
  padding: 0 16px;
  margin: 0 auto;
  width: 100%;
  background-color: #fbf7d9;

  /* Breakpoints for different screen sizes */

  @media (min-width: 576px) {
    // Small devices (landscape phones)
    max-width: 540px;
  }

  @media (min-width: 768px) {
    // Medium devices (tablets)
    max-width: 720px;
  }

  @media (min-width: 992px) {
    // Large devices (desktops, less than 1200px)
    max-width: 960px;
  }

  @media (min-width: 1200px) {
    // Extra large devices (large desktops)
    max-width: 1140px;
  }
`

const items = ['Blog', 'Drafts', 'Admin', 'Signup', 'Create']

type Props = {
  children: ReactNode
}

const Layout: React.FC<Props> = (props) => {
  return (
    <Container>
      <Navbar items={items} />
      {props.children}
    </Container>
  )
}

export default Layout
