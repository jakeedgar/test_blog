import React from 'react'
import { GetServerSideProps } from 'next'
import Post, { PostProps } from '../components/post/Post'
import prisma from '../lib/prisma'
import styles from '@/styles/Blog.module.css'

export type FeedProps = {
  feed: PostProps[]
}
export const getServerSideProps: GetServerSideProps = async () => {
  const feed = await prisma.post.findMany({
    where: { published: true },
    include: { author: true },
  })
  return {
    props: { feed },
  }
}

const Blog: React.FC<FeedProps> = (props: FeedProps) => {
  const { feed } = props
  return (
    <div>
      <h1>My Blog</h1>
      <main>
        {feed.map((post) => (
          <div key={post.id} className={styles.post}>
            <Post post={post} />
          </div>
        ))}
      </main>
    </div>
  )
}

export default Blog
