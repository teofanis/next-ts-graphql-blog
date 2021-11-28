import { Date } from '@components/index'
import { PostedBy } from '@components/Partials'
import { Post } from '@interfaces/app.interfaces'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface PostCardProps {
  post: Post
}

const PostCard = ({ post }: PostCardProps) => {
  return (
    <div className="bg-white dark:bg-gray-500 shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8">
      <div className="relative overflow-hidden shadow-md pb-80 mb-6">
        <Image
          src={post?.featuredImage?.url}
          alt={post.title}
          layout="fill"
          className="object-top absolute h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg"
        />
      </div>
      <h1 className="transition duration-700 text-center mb-8 cursor-pointer hover:text-pink-600 dark:hover:text-yellow-600 text-3xl font-semibold">
        <Link href={`/post/${post.slug}`} passHref>
          {post.title}
        </Link>
      </h1>
      <div className="block lg:flex text-center items-center justify-center mb-8 w-full">
        <div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8">
          <PostedBy author={post.author} />
        </div>
        <div className="font-medium dark:text-white text-gray-700">
          <Date date={post.createdAt} withIcon={true} />
        </div>
      </div>
      <p className="text-center text-lg dark:text-white text-gray-700 font-normal px-4 lg:px-20 mb-8">
        {post.excerpt}
      </p>
      <div className="text-center">
        <Link href={`/post/${post.slug}`} passHref>
          <span className="transition duration-500 transform hover:-translate-y-1 inline-block dark:bg-yellow-600 dark:hover:bg-yellow-500 bg-pink-600 hover:bg-pink-500 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer">
            Continue Reading...
          </span>
        </Link>
      </div>
    </div>
  )
}

export default PostCard
