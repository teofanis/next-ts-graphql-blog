import {
  Author,
  Categories,
  Comments,
  CommentsForm,
  PostDetail,
  PostWidget,
} from '@components/index'
import { Post } from '@interfaces/app.interfaces'
import { getPost, getPosts } from '@services/index'
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { Params } from 'next/dist/server/router'
import React from 'react'

interface PostPageProps {
  post: Post
}

const PostPage: NextPage<PostPageProps> = ({ post }) => {
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
            <PostWidget slug={post.slug} categories={post.categories} />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }: Params) => {
  const post: Post = await getPost(params.slug)
  return {
    props: {
      post,
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
    fallback: false,
  }
}

export default PostPage
