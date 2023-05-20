import prisma from '@/lib/prisma'
import { GetServerSideProps } from 'next/types'
import React, { useEffect, useState } from 'react'
import Table, { Rows, Headers } from '@/components/table/table'
import LoadingWithDots from '@/components/loading/loadingWithDots'
import { useRouter } from 'next/router'

export type PostProps = {
  id: number
  createdAt: Date
  updatedAt: Date
  title: string
  content?: string
  published: boolean
  viewCount: number
  authorId?: number
}

export type Posts = {
  posts: PostProps[]
}

export const getServerSideProps: GetServerSideProps = async () => {
  const posts = await prisma.post.findMany({
    // Add any condition you want for fetching users
  })
  return {
    props: { posts },
  }
}

const PostsPage = (props: Posts) => {
  const { posts } = props
  const [loading, setLoading] = useState<boolean>(true)
  const router = useRouter()

  const headers: Headers[] = [
    { key: 'id', label: 'Id' },
    { key: 'title', label: 'Title' },
    { key: 'content', label: 'Content' },
    { key: 'published', label: 'Is Published' },
    { key: 'viewCount', label: 'View Count' },
    { key: 'authorId', label: 'Author Id' },
  ]

  const rows: Rows[] = posts.map((post) => {
    return {
      id: post.id,
      createdAt: post.createdAt ? post.createdAt.toString() : 'Nothing to See here',
      updatedAt: post.updatedAt.toString(),
      title: post.title,
      content: post.content ? post.content : 'null',
      published: post.published.toString(),
      viewCount: post.viewCount,
      authorId: post.authorId ? post.authorId : 'null',
    }
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

  const handleBackToAdmin = () => {
    router.push('/admin')
  }

  return (
    <>
      <div
        style={{
          margin: '2rem',
        }}
      >
        <button onClick={handleBackToAdmin}>Go Back</button>
        <h1>Posts Table:</h1>
        {posts.length !== 0 ? <Table headers={headers} rows={rows} /> : <div>Nothing to see here.</div>}
      </div>
    </>
  )
}

export default PostsPage
