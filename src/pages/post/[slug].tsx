import Loader from '@components/Icons/Loader'
import {
  Author,
  Categories,
  Comments,
  CommentsForm,
  PostDetail,
  PostWidget,
} from '@components/index'
import { Category, Post } from '@interfaces/app.interfaces'
import {
  getCategories,
  getPost,
  getPosts,
  getSimilarPosts,
} from '@services/index'
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { Params } from 'next/dist/server/router'
import { useRouter } from 'next/router'
import React from 'react'

interface PostPageProps {
  post: Post
  relatedPosts: Post[]
  categories: Category[]
}

const PostPage: NextPage<PostPageProps> = ({
  post,
  relatedPosts,
  categories,
}) => {
  const router = useRouter()
  if (router.isFallback) {
    return <Loader />
  }
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="col-span-1 lg:col-span-8">
          <PostDetail post={post} />
          <Author author={post.author} />
          <Comments slug={post.slug} />
          <CommentsForm slug={post.slug} />
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative lg:sticky top-8">
            <PostWidget post={post} posts={relatedPosts} />
            <Categories categories={categories} />
          </div>
        </div>
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }: Params) => {
  const post: Post = await getPost(params.slug)
  const relatedPosts: Post[] = await getSimilarPosts(
    post?.categories,
    post?.slug
  )
  const categories: Category[] = await getCategories()
  return {
    props: {
      post,
      relatedPosts,
      categories,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts: Post[] = await getPosts()
  const paths = posts.map((post) => {
    return {
      params: {
        slug: post.slug,
      },
    }
  })
  return {
    paths: paths,
    fallback: true,
  }
}

export default PostPage
