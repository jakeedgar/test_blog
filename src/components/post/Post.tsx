import React from 'react'
import Router from 'next/router'
import ReactMarkdown from 'react-markdown'
import { PostContainer } from './PostContainer'
import { capitalizeFirstLetter } from '@/utils'

export type PostProps = {
  id: number
  title: string
  author: {
    name: string
  }
  content: string
  published: boolean
}

const Post: React.FC<{ post: PostProps }> = ({ post }) => {
  const authorName = post.author ? post.author.name : 'Unknown author'
  return (
    <PostContainer onClick={() => Router.push('/posts/[id]', `/posts/${post.id}`)}>
      <h2>{post.title}</h2>
      <small>By {capitalizeFirstLetter(authorName)}</small>
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </PostContainer>
  )
}

export default Post
