import graphclient, { gql } from '@services/graphclient'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function comments(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const query = gql`
    mutation CreateComment(
      $name: String!
      $email: String!
      $comment: String!
      $slug: String!
    ) {
      createComment(
        data: {
          name: $name
          email: $email
          comment: $comment
          post: { connect: { slug: $slug } }
        }
      ) {
        id
      }
    }
  `

  try {
    const result = await graphclient.request(query, req.body)
    return res.status(200).send(result)
  } catch (error) {
    return res.status(500).send(error)
  }
}
