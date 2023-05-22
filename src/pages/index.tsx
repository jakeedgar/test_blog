import React from 'react'
import { GetServerSideProps } from 'next'
import Post, { PostProps } from '../components/post/Post'
import prisma from '../lib/prisma'
import styles from '@/styles/Blog.module.css'
import Grid from '@/components/grid/Grid'
import styled from 'styled-components'

import ResponsiveImage from '@/components/background_image'

const Container = styled.div`
  align-items: center;
  justify-content: center;
`

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
    <Container>
      <main>
        <ResponsiveImage />
        <Grid columns={3} gap='20px'>
          {feed.map((post) => (
            <div key={post.id}>
              <Post post={post} />
            </div>
          ))}
        </Grid>
      </main>
    </Container>
  )
}

export default Blog
