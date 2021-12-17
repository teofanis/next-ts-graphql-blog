import { Categories, PostCard, PostWidget } from '@components/index'
import { Post } from '@interfaces/app.interfaces'
import { FeaturedPosts } from '@sections/FeaturedPosts'
import { getPosts } from '@services/index'
import type { NextPage } from 'next'
import { GetStaticProps } from 'next'
import React from 'react'
interface HomePageProps {
  posts: Post[]
}
const Home: NextPage<HomePageProps> = ({ posts }) => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <FeaturedPosts posts={posts.filter((post) => post.featuredPost)} />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post) => (
            <PostCard post={post} key={post.title} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts: Post[] = (await getPosts()) || []
  return {
    props: {
      posts,
    },
  }
}

export default Home
