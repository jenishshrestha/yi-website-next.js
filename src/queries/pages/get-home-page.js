import { gql } from "@apollo/client";
import MenuFragment from "../fragments/menus";
import ImageFragment from "../fragments/imageFragment";
import SeoFragment from "../fragments/seo-fragment";
import { GlobalQueries } from "../get-menus";

export const GET_HOME_PAGE = gql`
query GET_HOME_PAGE($uri: String) {
	${GlobalQueries}
	page: pageBy(uri: $uri) {
	    id
	    title
	    content
	    slug
	    uri
	    seo {
          ...SeoFragment
        }
        homePage {
            bannerTitle
            ctaButtonLink
            ctaButtonText
            emailAddress
            facebook
            googleMapLocation
            instagram
            medium
            phoneNumber
            twitter
            youtube
            bannerImage {
                ...ImageFragment
            }
            bannerLogo {
                ...ImageFragment
            }
        }
    }
}
${MenuFragment}
${ImageFragment}
${SeoFragment}
`;
