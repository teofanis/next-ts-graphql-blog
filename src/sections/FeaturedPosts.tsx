import { FeaturedPostCard } from '@components/index'
import Arrows from '@icons/Arrows'
import { Post } from '@interfaces/app.interfaces'
import { getFeaturedPosts } from '@services/index'
import React, { useEffect, useState } from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

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

export const FeaturedPosts = () => {
  const [featuredPosts, setFeaturedPosts] = useState<Post[]>([])
  const [dataLoaded, setDataLoaded] = useState(false)
  const rightArrow = (
    <div className="absolute arrow-btn right-0 text-center py-3 cursor-pointer bg-pink-600 rounded-full">
      <Arrows direction="right" />
    </div>
  )
  const leftArrow = (
    <div className="absolute arrow-btn left-0 text-center py-3 cursor-pointer bg-pink-600 rounded-full">
      <Arrows direction="left" />
    </div>
  )
  useEffect(() => {
    getFeaturedPosts().then((result) => {
      setFeaturedPosts(result)
      setDataLoaded(true)
    })
  }, [])

  return (
    <div className="mb-8">
      <Carousel
        infinite
        responsive={responsive}
        customRightArrow={rightArrow}
        customLeftArrow={leftArrow}
        itemClass="px-4"
      >
        {dataLoaded &&
          featuredPosts.map((post) => (
            <FeaturedPostCard key={post.slug} post={post} />
          ))}
      </Carousel>
    </div>
  )
}
