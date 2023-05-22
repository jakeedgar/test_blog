import React from 'react'
import { GetServerSideProps } from 'next'
import Post, { PostProps } from '../components/post/Post'
import prisma from '../lib/prisma'
import Grid from '@/components/grid/Grid'
import styled from 'styled-components'
import ResponsiveImage from '@/components/background_image'
import Paragraph from '@/components/paragraph'

const intro_text: string =
  'In Search of Less is a blog about minimalism, environmentalism, and motherhood. I am Marisa, a software engineer, wife, and mother with a passion for keeping things tidy, so that life can be fulfilling, rather than exhausting. Welcome.'

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
      <ResponsiveImage />
      <Paragraph text={intro_text} />
      <Grid columns={3} gap='20px'>
        {feed.map((post) => (
          <div key={post.id}>
            <Post post={post} />
          </div>
        ))}
      </Grid>
    </Container>
  )
}

export default Blog
