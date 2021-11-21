import { Post } from '@interfaces/app.interfaces'
import Image from 'next/image'
import React from 'react'

interface PostDetailProps {
  post: Post
}
const PostDetail = ({ post }: PostDetailProps) => {
  return (
    <div className="bg-white shadow-lg rounded-lg lg:p-8 pb-12 mb-8">
      <div className="relative overflow-hidden shadow-md mb-6">
        <Image
          src={post.featuredImage.url}
          alt={post.title}
          layout="fill"
          className="object-top h-full w-full rounded-t-lg"
        />
      </div>
      <div className="px-4 lg:px-0"></div>
    </div>
  )
}

export default PostDetail
