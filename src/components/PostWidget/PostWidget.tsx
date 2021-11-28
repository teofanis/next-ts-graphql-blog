import { Date } from '@components/index'
import { Category, Post } from '@interfaces/app.interfaces'
import { getRecentPosts, getSimilarPosts } from '@services/index'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

interface PostWidgetProps {
  categories?: Category[]
  slug?: string
}

const PostWidget = ({ categories, slug }: PostWidgetProps) => {
  const [relatedPosts, setRelatedPosts] = useState<Post[]>([])

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) =>
        setRelatedPosts(result)
      )
    } else {
      getRecentPosts().then((result) => setRelatedPosts(result))
    }
  }, [categories, slug])

  return (
    <div className="bg-white dark:bg-gray-500 shadow-lg rounded-lg p-8 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">
        {slug ? 'Related Posts' : 'Recent Posts'}
      </h3>
      {relatedPosts.map((post) => (
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
