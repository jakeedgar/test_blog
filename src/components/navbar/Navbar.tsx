import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '@/components/navbar/Navbar.module.css'
import Header from '../header/Header'
import styled from 'styled-components'
import Button from '../button'

interface NavbarProps {
  items: string[]
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 2rem;
  margin-bottom: 2rem;
  width: 100%;

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

const NavbarContainer = styled.nav`
  background-color: #f0b289;
  padding: 1rem;
  height: 50px;
  border-radius: 6px;
  width: 50%;
  margin-right: 1rem;
`

const NavItem = styled.a`
  display: inline-block;
  color: black;
  text-decoration: none;
  padding: 0.5rem;
  margin-right: 1rem;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    opacity: 0.75;
  }
`
const Navbar: React.FC<NavbarProps> = ({ items }) => {
  return (
    <Container>
      <Header />
      <NavbarContainer>
        {items.map((item, index) => (
          <NavItem className='nav-item' key={index} href={index === 0 ? '/' : `/${item.toLowerCase()}`}>
            {item}
          </NavItem>
        ))}
      </NavbarContainer>
      <Button variant='default' onClick={() => console.log('clicked!')}>
        Sign Up Today!
      </Button>
    </Container>
  )
}

export default Navbar
