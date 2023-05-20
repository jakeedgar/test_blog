import prisma from '@/lib/prisma'
import { GetServerSideProps } from 'next/types'
import React, { useEffect, useMemo, useState } from 'react'
import Table, { Rows } from '@/components/table/table'
import LoadingWithDots from '@/components/loading/loadingWithDots'
import { useRouter } from 'next/router'

export type ProfileProps = {
  id: number
  bio: string
  userId: number
}

export type Profiles = {
  profiles: ProfileProps[]
}

export const getServerSideProps: GetServerSideProps = async () => {
  const profiles = await prisma.profile.findMany({
    // Add any condition you want for fetching profiles
  })

  return {
    props: { profiles },
  }
}
const ProfilesPage = (props: Profiles) => {
  const { profiles } = props
  const [loading, setLoading] = useState<boolean>(true)
  const router = useRouter()
  const handleBackToAdmin = () => {
    router.push('/admin')
  }

  const headers = [
    { key: 'id', label: 'Id' },
    { key: 'bio', label: 'Bio' },
    { key: 'userId', label: 'User Id' },
  ]

  const rows: Rows[] = profiles.map((profile) => {
    return { id: profile.id, bio: profile.bio, userId: profile.userId }
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
        <h1>Profiles Table:</h1>
        {profiles.length !== 0 ? <Table headers={headers} rows={rows} /> : <div>Nothing to see here.</div>}
      </div>
    </>
  )
}

export default ProfilesPage
