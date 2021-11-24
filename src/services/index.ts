import { Category, Comment } from '@interfaces/app.interfaces'
import { gql, request } from 'graphql-request'

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

  return result.postsConnection.edges.map((edge: { node: object }) => edge.node)
}

export const getPost = async (slug: string) => {
  const query = gql`
    query getPost($slug: String!) {
      post(where: { slug: $slug }) {
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
        content {
          raw
        }
        featuredImage {
          url
        }
      }
    }
  `

  const result = await request(graphqlAPI, query, { slug })

  return result.post
}

export const getRecentPosts = async () => {
  const query = gql`
    query getRecentPosts() {
      posts(
        orderBy: createdAt_ASC
        last: 3
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `
  const result = await request(graphqlAPI, query)

  return result.posts
}

export const getSimilarPosts = async (
  categories?: Category[],
  slug?: string
) => {
  const categorySlugs: String[] =
    categories?.map((category: Category) => category.slug) || []
  const query = gql`
    query getSimilarPosts($slug: String!, $categorySlugs: [String!]) {
      posts(
        where: {
          slug_not: $slug
          AND: { categories_some: { slug_in: $categorySlugs } }
        }
        last: 3
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `
  const result = await request(graphqlAPI, query, { categorySlugs, slug })

  return result.posts
}

export const getCategories = async () => {
  const query = gql`
    query getCategories {
      categories {
        name
        slug
      }
    }
  `
  const result = await request(graphqlAPI, query)
  return result.categories
}

export const getComments = async (slug: string) => {
  const query = gql`
    query getComments($slug: String!) {
      comments(where: { post: { slug: $slug } }) {
        name
        createdAt
        comment
      }
    }
  `
  const result = await request(graphqlAPI, query, { slug })
  return result.comments
}

export const submitComment = async (comment: Comment) => {
  const result = await fetch('/api/comments', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(comment),
  })

  return result.json()
}
