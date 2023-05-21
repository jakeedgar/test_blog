import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '@/components/navbar/Navbar.module.css'
import Header from '../header/Header'

const Navbar: React.FC = () => {
  const router = useRouter()
  const isActive: (pathname: string) => boolean = (pathname) => router.pathname === pathname

  return (
    <nav
      style={{
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      <Header />
      <div className={styles.left}>
        <Link href='/' legacyBehavior>
          <a data-active={isActive('/')}>Blog</a>
        </Link>
        <Link href='/drafts' legacyBehavior>
          <a data-active={isActive('/drafts')}>Drafts</a>
        </Link>
        <Link href='/admin' legacyBehavior>
          <a data-active={isActive('/admin')}>Admin</a>
        </Link>
      </div>
      <div className={styles.right}>
        <Link href='/signup' legacyBehavior>
          <a data-active={isActive('/signup')}>Signup</a>
        </Link>
        <Link href='/create' legacyBehavior>
          <a data-active={isActive('/create')}>Create draft</a>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
