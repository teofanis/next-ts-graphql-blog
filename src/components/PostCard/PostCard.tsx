import React from 'react'
import { Post } from '@interfaces/app.interfaces'

interface PostCardProps {
  post: Post
}

const PostCard = ({ post }: PostCardProps) => {
  return (
    <div>
      {post.title}
      {post.excerpt}
    </div>
  )
}

export default PostCard
