import { gql } from "@apollo/client"
import MenuFragment from "../fragments/menus"
import ImageFragment from "../fragments/imageFragment"
import SeoFragment from "../fragments/seo-fragment"
import { GlobalQueries } from "../get-menus"

export const GET_PAGE = gql`
query GET_PAGE($uri: String) {
	${GlobalQueries}
	page: pageBy(uri: $uri) {
	    id
	    title
	    content
	    slug
	    uri
		template {
			templateName
		}
	    seo {
          ...SeoFragment
        }
	}
}
${MenuFragment}
${ImageFragment}
${SeoFragment}
`
