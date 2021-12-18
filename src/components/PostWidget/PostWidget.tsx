import { Date } from '@components/index'
import { Post } from '@interfaces/app.interfaces'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import useSWR from 'swr'

interface PostWidgetProps {
  post?: Post
  posts: Post[]
}

const PostWidget = ({ post, posts }: PostWidgetProps) => {
  const { data } = useSWR<PostWidgetProps>(
    ['api/recent-posts', JSON.stringify({ post: post })],
    {
      fallbackData: { posts: posts },
    }
  )
  return (
    <div className="bg-white dark:bg-gray-500 shadow-lg rounded-lg p-8 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">
        {post ? 'Related Posts' : 'Recent Posts'}
      </h3>
      {data?.posts?.map((post) => (
        <div className="flex items-center w-full mb-4" key={post.slug}>
          <div className="w-16 flex-none">
            <Image
              alt={post.title}
              className="align-middle rounded-full"
              src={post.featuredImage.url}
              height={60}
              width={60}
            />
          </div>
          <div className="flex-grow ml-4">
            <p className="dark:text-white text-gray-500 font-xs">
              <Date date={post.createdAt} />
            </p>
            <Link href={`/post/${post.slug}`} passHref>
              <span className="text-md cursor-pointer hover:underline">
                {post.title}
              </span>
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PostWidget
