import { Post } from '@interfaces/app.interfaces'
import { getRecentPosts, getSimilarPosts } from '@services/index'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function recentPosts(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const post: Post = JSON.parse(req.body)
  try {
    let result = null
    if (post) {
      result = getSimilarPosts(post?.categories, post?.slug)
    } else {
      result = getRecentPosts()
    }

    return res.status(200).send(result)
  } catch (error) {
    return res.status(500).send(error)
  }
}
