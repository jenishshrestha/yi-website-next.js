import { gql } from "@apollo/client"
export const GET_WORKS = gql`
  query GetWorks {
    works: works {
      nodes {
        id
        uri
        slug
      }
    }
  }
`
