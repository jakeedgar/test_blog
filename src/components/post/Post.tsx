import React from 'react'
import Router from 'next/router'
import ReactMarkdown from 'react-markdown'
import { capitalizeFirstLetter } from '@/utils'
import { Card } from '../card'

export type Author = {
  name: string
}

export type PostProps = {
  id: number
  title: string
  author: Author
  content: string
  published: boolean
}

const Post: React.FC<{ post: PostProps }> = ({ post }) => {
  const authorName = post.author ? post.author.name : 'Unknown author'
  return (
    <Card onClick={() => Router.push('/posts/[id]', `/posts/${post.id}`)}>
      <h2>{post.title}</h2>
      <small>By {capitalizeFirstLetter(authorName)}</small>
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </Card>
  )
}

export default Post
