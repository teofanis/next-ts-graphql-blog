import { gql, GraphQLClient } from 'graphql-request'

const baseUrl = process.env.NEXT_PUBLIC_GRAPH_CMS_ENDPOINT || ''
const bearerToken = process.env.NEXT_PUBLIC_GRAPH_CMS_TOKEN || ''

export default new GraphQLClient(baseUrl, {
  headers: {
    ...(bearerToken && {
      Authorization: `Bearer ${bearerToken}`,
    }),
  },
})

export { gql }
