import { getFeaturedPosts } from '@services/index'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function featuredPosts(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const result = getFeaturedPosts()
    return res.status(200).send(result)
  } catch (error) {
    return res.status(500).send(error)
  }
}
