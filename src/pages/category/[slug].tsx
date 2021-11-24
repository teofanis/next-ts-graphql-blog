import Loader from '@components/Icons/Loader'
import { Categories, PostCard } from '@components/index'
import { Category, Post } from '@interfaces/app.interfaces'
import { getCategories, getCategoryPost } from '@services/index'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { Params } from 'next/dist/server/router'
import { useRouter } from 'next/router'
import React from 'react'

interface CategoryPostsProps {
  posts: Post[]
}

const CategoryPosts: NextPage<CategoryPostsProps> = ({ posts }) => {
  const router = useRouter()
  if (router.isFallback) {
    return <Loader />
  }
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="col-span-1 lg:col-span-8">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative lg:sticky top-8">
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CategoryPosts

export const getStaticProps: GetStaticProps = async ({ params }: Params) => {
  const posts: Post[] = await getCategoryPost(params.slug)
  return {
    props: {
      posts,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const categories: Category[] = await getCategories()
  const paths = categories.map((category) => {
    return {
      params: {
        slug: category.slug,
      },
    }
  })
  return {
    paths: paths,
    fallback: true,
  }
}
