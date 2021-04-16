import { isEmpty } from 'lodash'
import { useRouter } from 'next/router'
import Image from 'next/image'
import client from './../../src/apollo/client'
import Seo from './../../src/components/seo'
import { GET_WORKS } from './../../src/queries/works/getWorks'
import { GET_WORK } from './../../src/queries/works/getWork'
import projectStyles from './project.module.scss'

const Work = (props) => {
  const { data } = props
  const router = useRouter()

  if (router.isFallback) {
    return <div>Generating Static Page</div>
  }

  // console.log(data)

  const { work, twitterSeo } = data,
    twitter = twitterSeo?.social?.twitter

  console.log(work)

  const MetaItem = ({ label, title }) => {
    return (
      <div className={projectStyles.metaItem}>
        <p className={projectStyles.metaLabel}>{label}</p>
        <p className={projectStyles.metaTitle}>{title}</p>
      </div>
    )
  }

  return (
    <>
      <Seo seo={work?.seo} uri={work?.uri} twitter={twitter} />
      <div>
        <div className={projectStyles.headingWrapper}>
          <Image
            src={work.featuredImage.node.sourceUrl}
            alt='Work detail'
            layout='fill'
            objectFit='cover'
          />
          <div className={projectStyles.heading}>
            <div className='container'>
              <h2 className={projectStyles.title}>{work.title}</h2>
              <p className={projectStyles.description}>
                {work.workCptOptions.projectHeading}
              </p>
            </div>
          </div>
          <div className='container'>
            <button
              className={projectStyles.back}
              onClick={() => router.back()}
            >
              Back
            </button>
          </div>
        </div>
        <div className={`container projectStyles-body ${projectStyles.body}`}>
          <div className={projectStyles.metaInfo}>
            <MetaItem label='Client' title={work.workCptOptions.clientName} />
            <MetaItem
              label='Duration'
              title={work.workCptOptions.projectDuration}
            />
            <MetaItem
              label='What we did'
              title={work.workCptOptions.whatWeDid}
            />
          </div>
          <div className={projectStyles.content}>
            <h1>How it all began?</h1>
            <p>
              We’ve decided to redevelop AidStream from scratch with a mission
              to make publishing IATI data effortless for our users.
            </p>
            <p>
              When we launched our IATI publishing tool back in 2010, the
              technology we used hindered us from improving the site over time.
              We were not able to add new features and enhancements that
              AidStream users needed to make the system simpler.
            </p>
            <p>
              With hundreds of organisations now using AidStream to publish
              information on their development projects to the IATI Standard,
              the time has come to modernise our system for the future.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Work

export async function getStaticProps({ params }) {
  const { data, errors } = await client.query({
    query: GET_WORK,
    variables: {
      slug: 'work/' + params?.slug,
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
