import { gql } from "@apollo/client";
export const GET_PAGES = gql`
  query GetPages {
    pages: pages {
      nodes {
        id
        uri
      }
    }
  }
`;
