import type { NextPage } from 'next'
import { Post } from '@interfaces/app.interfaces'
import { PostCard, Categories, PostWidget } from '@components/index'

const Home: NextPage = () => {
  const posts: Post[] = [
    { title: 'Test with Typescript ', excerpt: 'Playing around :) Cool' },
    { title: 'Test with Next JS', excerpt: 'Playing around 123' },
  ]
  return (
    <div className="container mx-auto px-10 mb-8">
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

export default Home
