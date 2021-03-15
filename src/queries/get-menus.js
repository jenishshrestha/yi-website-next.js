import { gql } from "@apollo/client";
import MenuFragment from "./fragments/menus";
import ImageFragment from "./fragments/imageFragment";

export const GlobalQueries = `
general: siteOptions {
  themeOption {
    logo {
      ...ImageFragment
    }
    favicon {
      ...ImageFragment
    }
  }
}

headerMenus: menuItems(where: { location: PRIMARY, parentId: "0" }) {
  edges {
    node {
      ...MenuFragment
      childItems {
        edges {
          node {
            ...MenuFragment
          }
        }
      }
    }
  }
}

twitterSeo: seo {
  social {
    twitter {
      cardType
      username
    }
  }
}

`;

export const GetMenus = gql`
  query GetMenus {
    ${GlobalQueries}
  }
  ${MenuFragment}
  ${ImageFragment}
`;
