import { gql } from "@apollo/client"
import MenuFragment from "./../fragments/menus"
import ImageFragment from "./../fragments/imageFragment"
import SeoFragment from "./../fragments/seo-fragment"
import { GlobalQueries } from "./../get-menus"

export const GET_CAREERS = gql`
  query GetCAREERS {
    careers: careers {
      nodes {
        id
        uri
        slug
      }
    }
  }
`

export const GET_CAREER = gql`
query GET_CAREER($slug: String) {
	${GlobalQueries}
	career: careerBy(uri: $slug) {
	# career: career(id: $slug, idType: SLUG) {
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
