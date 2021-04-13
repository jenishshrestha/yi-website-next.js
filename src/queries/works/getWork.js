import { gql } from "@apollo/client"
import MenuFragment from "./../fragments/menus"
import ImageFragment from "./../fragments/imageFragment"
import SeoFragment from "./../fragments/seo-fragment"
import { GlobalQueries } from "./../get-menus"

export const GET_WORK = gql`
query GET_WORK($slug: String) {
	${GlobalQueries}
	work: workBy(uri: $slug) {
	# work: work(id: $slug, idType: SLUG) {
	    id
	    title
	    content
	    slug
	    uri
	    seo {
          ...SeoFragment
        }
	}
}
${MenuFragment}
${ImageFragment}
${SeoFragment}
`
