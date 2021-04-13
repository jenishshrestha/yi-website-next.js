import React from "react"
import { isEmpty } from "lodash"
import { useRouter } from "next/router"
import client from "./../../src/apollo/client"
import Seo from "./../../src/components/seo"
import { GET_WORKS } from "./../../src/queries/works/getWorks"
import { GET_WORK } from "./../../src/queries/works/getWork"

const Work = ({ data }) => {
  const router = useRouter()

  if (router.isFallback) {
    return <div>Generating Static Page</div>
  }

  // console.log(data)

  const { work, twitterSeo } = data,
    twitter = twitterSeo?.social?.twitter

  return (
    <>
      <Seo seo={work?.seo} uri={work?.uri} twitter={twitter} />
      {work?.title}
    </>
  )
}

export default Work

export async function getStaticProps({ params }) {
  const { data, errors } = await client.query({
    query: GET_WORK,
    variables: {
      slug: "work/" + params?.slug,
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

/**
 * Since the page name 'does not' use catch-all routes,
 * for example [slug],
 * that's why params would contain just slug and not an array of slugs , unlike [...slug].
 * For example, If we need to have dynamic route '/foo/'
 * Then we would add paths: [ params: { slug: 'foo' } } ]
 * Here slug will be 'foo', then Next.js will statically generate the page at /foo/
 *
 * At build time next js will will make an api call get the data and
 * generate a page bar.js inside .next/foo directory, so when the page is served on browser
 * data is already present, unlike getInitialProps which gets the page at build time but makes an api
 * call after page is served on the browser.
 *
 * @see https://nextjs.org/docs/basic-features/data-fetching#the-paths-key-required
 *
 * @returns {Promise<{paths: [], fallback: boolean}>}
 */

export async function getStaticPaths() {
  const { data } = await client.query({
    query: GET_WORKS,
  })

  const pathsData = []

  data?.works?.nodes &&
    data?.works?.nodes.map((work) => {
      if (!isEmpty(work?.slug)) {
        pathsData.push({ params: { slug: work?.slug } })
      }
    })

  return {
    paths: pathsData || [],
    fallback: false,
  }
}
