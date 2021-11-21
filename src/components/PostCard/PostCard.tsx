import React from 'react'
import { Post } from '@interfaces/app.interfaces'
import Image from 'next/image'
import Link from 'next/link'
import { Date } from '@components/index'

interface PostCardProps {
  post: Post
}

const PostCard = ({ post }: PostCardProps) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8">
      <div className="relative overflow-hidden shadow-md pb-80 mb-6">
        <Image
          src={post?.featuredImage?.url}
          alt={post.title}
          layout="fill"
          className="object-top absolute h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg"
        />
      </div>
      <h1 className="transition duration-700 text-center mb-8 cursor-pointer hover:text-pink-600 text-3xl font-semibold">
        <Link href={`/post/${post.slug}`}>{post.title}</Link>
      </h1>
      <div className="block lg:flex text-center items-center justify-center mb-8 w-full">
        <div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8">
          <Image
            src={post.author.photo.url}
            alt={post.author.name}
            width={30}
            height={30}
            className="align-middle rounded-full"
          />
          <p className="inline align-middle text-gray-700 ml-2 text-lg">
            {post.author.name}
          </p>
        </div>
        <div className="font-medium text-gray-700">
          <Date date={post.createdAt} withIcon={true} />
        </div>
      </div>
      <p className="text-center text-lg text-gray-700 font-normal px-4 lg:px-20 mb-8">
        {post.excerpt}
      </p>
      <div className="text-center">
        <Link href={`/post/${post.slug}`}>
          <span className="transition duration-500 transform hover:-translate-y-1 inline-block bg-pink-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer">
            Continue Reading...
          </span>
        </Link>
      </div>
    </div>
  )
}

export default PostCard
