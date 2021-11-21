import { request, gql } from 'graphql-request'

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPH_CMS_ENDPOINT || ''

export const getPosts = async () => {
  const query = gql`
    query allPostsQuery {
      postsConnection {
        edges {
          node {
            author {
              bio
              name
              id
              photo {
                url
              }
            }
            createdAt
            slug
            title
            excerpt
            featuredPost
            categories {
              name
              slug
            }
            featuredImage {
              url
            }
          }
        }
      }
    }
  `

  const result = await request(graphqlAPI, query)

  return result.postsConnection.edges.map((edge: { node: any }) => edge.node)
}
