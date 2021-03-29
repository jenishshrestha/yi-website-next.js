import { React, Fragment } from "react"
import client from "../src/apollo/client"
import { isEmpty } from "lodash"
import { useRouter } from "next/router"
import Seo from "./../src/components/seo"
import { GET_PAGES } from "../src/queries/pages/getPages"
import { GET_PAGE } from "../src/queries/pages/getPage"
import { sanitize } from "../src/utils/misc"
import {
  FALLBACK,
  handleRedirectsAndReturnData,
  isCustomPageUri,
} from "../src/utils/slug"

import dynamic from "next/dynamic"

const Page = ({ data }) => {
  const router = useRouter()

  if (router.isFallback) {
    return <div>Generating Static Page</div>
  }

  const { page, twitterSeo } = data,
    twitter = twitterSeo?.social?.twitter

  const tempName = page?.template?.templateName,
    templateName = tempName.replace(/\s+/g, "-").toLowerCase()

  const Template = dynamic(() => import(`../templates/page/${templateName}`))

  return (
    <>
      <Template title={data?.page?.title} />
      <Seo seo={page?.seo} uri={page?.uri} twitter={twitter} />
    </>
  )
}

export default Page

export async function getStaticProps({ params }) {
  const { data, errors } = await client.query({
    query: GET_PAGE,
    variables: {
      uri: params?.slug.join("/"),
    },
  })

  const defaultProps = {
    props: {
      data: data || {},
    },
    /**
     * Revalidate means that if a new request comes to server, then every 1 sec it will check
     * if the data is changed, if it is changed then it will update the
     * static file inside .next folder with the new data, so that any 'SUBSEQUENT' requests should have updated data.
     */
    revalidate: 1,
  }

  return defaultProps
}

export async function getStaticPaths() {
  const { data } = await client.query({
    query: GET_PAGES,
  })

  const pathsData = []

  // console.log(data.pages.nodes);

  data?.pages?.nodes &&
    data?.pages?.nodes.map((page) => {
      if (!isEmpty(page?.uri) && !isCustomPageUri(page?.uri)) {
        const slugs = page?.uri?.split("/").filter((pageSlug) => pageSlug)
        pathsData.push({ params: { slug: slugs } })
      }
    })

  return {
    paths: pathsData,
    fallback: true,
  }
}
