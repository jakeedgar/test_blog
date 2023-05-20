import prisma from '@/lib/prisma'
import { GetServerSideProps } from 'next/types'
import React, { useEffect, useMemo, useState } from 'react'
import Table, { Rows } from '@/components/table/Table'
import LoadingWithDots from '@/components/loading/loadingWithDots'
import { useRouter } from 'next/router'

export type UserProps = {
  id: number
  name: string
  email: string
}

export type Users = {
  users: UserProps[]
}

export const getServerSideProps: GetServerSideProps = async () => {
  const users = await prisma.user.findMany({
    // Add any condition you want for fetching users
  })

  return {
    props: { users },
  }
}
const UsersPage = (props: Users) => {
  const { users } = props
  const [loading, setLoading] = useState<boolean>(true)
  const router = useRouter()
  const handleBackToAdmin = () => {
    router.push('/admin')
  }

  const headers = [
    { key: 'id', label: 'Id' },
    { key: 'name', label: 'Name' },
    { key: 'email', label: 'E-Mail' },
  ]

  const rows: Rows[] = users.map((user) => {
    return { id: user.id, name: user.name, email: user.email }
  })

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false)
    }, 1000)
    return () => clearTimeout(timeout)
  }, [])

  if (loading) {
    return <LoadingWithDots />
  }

  return (
    <>
      <div
        style={{
          margin: '2rem',
        }}
      >
        <button onClick={handleBackToAdmin}>Go Back</button>
        <h1>Users Table:</h1>
        {users.length !== 0 ? <Table headers={headers} rows={rows} /> : <div>Nothing to see here.</div>}
      </div>
    </>
  )
}

export default UsersPage
