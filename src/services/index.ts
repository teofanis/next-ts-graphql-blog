import { Category, Comment } from '@interfaces/app.interfaces'
import graphclient, { gql } from '@services/graphclient'

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

  const result = await graphclient.request(query)

  return result.postsConnection.edges.map((edge: { node: object }) => edge.node)
}

export const getCategoryPost = async (slug: string) => {
  const query = gql`
    query getCategoryPost($slug: String!) {
      postsConnection(where: { categories_some: { slug: $slug } }) {
        edges {
          cursor
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
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
  `
  const result = await graphclient.request(query, { slug })

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

  const result = await graphclient.request(query, { slug })

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
  const result = await graphclient.request(query)

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
  const result = await graphclient.request(query, { categorySlugs, slug })

  return result.posts
}

export const getFeaturedPosts = async () => {
  const query = gql`
    query getFeaturedPosts() {
      posts(where: { featuredPost: true }) {
        author {
          name
          photo {
            url
          }
        }
        featuredImage {
          url
        }
        title
        slug
        createdAt
      }
    }
   `

  const result = await graphclient.request(query)
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
  const result = await graphclient.request(query)
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
  const result = await graphclient.request(query, { slug })
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
