import { FeaturedPostCard } from '@components/index'
import Arrows from '@icons/Arrows'
import { Post } from '@interfaces/app.interfaces'
import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import useSWR from 'swr'

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 768, min: 640 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
  },
}

interface FeaturedPostProps {
  posts: Post[]
}

export const FeaturedPosts: React.FC<FeaturedPostProps> = ({ posts }) => {
  const { data } = useSWR<FeaturedPostProps>(
    ['api/featured-posts', 'featuredPosts'],
    { fallbackData: { posts: posts } }
  )

  const rightArrow = (
    <div
      className="absolute arrow-btn text-center py-3 cursor-pointer dark:bg-yellow-600 bg-pink-600 rounded-full"
      style={{ right: 0 }}
    >
      <Arrows direction="right" />
    </div>
  )
  const leftArrow = (
    <div
      className="absolute arrow-btn text-center py-3 cursor-pointer dark:bg-yellow-600 bg-pink-600 rounded-full"
      style={{ left: 0 }}
    >
      <Arrows direction="left" />
    </div>
  )

  return (
    <div className="mb-8">
      <Carousel
        infinite
        responsive={responsive}
        customRightArrow={rightArrow}
        customLeftArrow={leftArrow}
        itemClass="px-4"
      >
        {data?.posts &&
          data?.posts.map((post) => (
            <FeaturedPostCard key={post.slug} post={post} />
          ))}
      </Carousel>
    </div>
  )
}
