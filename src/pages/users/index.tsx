import prisma from '@/lib/prisma'
import { GetServerSideProps } from 'next/types'
import React, { useEffect, useMemo, useState } from 'react'
import Loading from '@/components/loading/loading'

export type UserProps = {
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
  const [names, setNames] = useState<string[]>([''])
  const [emails, setEmails] = useState<string[]>([''])
  const [loading, setLoading] = useState<boolean>(false)

  //   useEffect(() => {
  //     if (!users) {
  //       setLoading(false)
  //       return
  //     }

  //     setLoading(true)
  //     const newNames = users.map((user) => user.name)
  //     const newEmails = users.map((user) => user.email)
  //     setNames((prevNames) => [...prevNames, ...newNames])
  //     setEmails((prevEmails) => [...prevEmails, ...newEmails])

  //     return () => {
  //       setLoading(false)
  //     }
  //   }, [users])

  useEffect(() => {
    setLoading(true)

    const timeout = setTimeout(() => {
      if (users) {
        const newNames = users.map((user) => user.name)
        const newEmails = users.map((user) => user.email)
        setNames(newNames) // Clearing the previous names array
        setEmails(newEmails) // Clearing the previous emails array
      }
      setLoading(false)
    }, 2100)

    return () => clearTimeout(timeout)
  }, [users])

  if (loading) {
    return <Loading />
  }

  return (
    <>
      {names
        ? names.map((name, index) => {
            return <div key={index}>{name}</div>
          })
        : null}
    </>
  )
}

export default UsersPage
