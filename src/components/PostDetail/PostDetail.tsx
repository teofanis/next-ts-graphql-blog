import { Date } from '@components/index'
import { PostedBy } from '@components/Partials'
import { RichText } from '@graphcms/rich-text-react-renderer'
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
      <div className="px-4 lg:px-0">
        <div className="flex items-center mb-8">
          <div className="flex items-center mb-4 lg:mb-0 w-full lg:w-auto mr-8">
            <PostedBy author={post.author} />
            <div className="font-medium text-gray-700">
              <Date date={post.createdAt} withIcon={true} />
            </div>
          </div>
        </div>
        <h1 className="mb-8 text-3xl font-semibold">{post.title}</h1>
        <RichText content={post.content.raw} />
      </div>
    </div>
  )
}

export default PostDetail
