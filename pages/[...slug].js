import { React, Fragment } from "react";
import client from "../src/apollo/client";
import Layout from "../src/components/layout/layout";
import { isEmpty } from "lodash";
import { useRouter } from "next/router";

import { GET_PAGES } from "../src/queries/pages/getPages";
import { GET_PAGE } from "../src/queries/pages/getPage";

import { sanitize } from "../src/utils/misc";
import {
  FALLBACK,
  handleRedirectsAndReturnData,
  isCustomPageUri,
} from "../src/utils/slug";

const Page = ({ data }) => {
  const router = useRouter();

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <div>Generating Static Page</div>;
  }
  // console.log(data);
  return (
    <Layout data={data}>
      <div
        dangerouslySetInnerHTML={{
          __html: sanitize(data?.page?.content),
        }}
      />
    </Layout>
  );
};

export default Page;

export async function getStaticProps({ params }) {
  const { data, errors } = await client.query({
    query: GET_PAGE,
    variables: {
      uri: params?.slug.join("/"),
    },
  });

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
  };

  return defaultProps;
}

export async function getStaticPaths() {
  const { data } = await client.query({
    query: GET_PAGES,
  });

  const pathsData = [];

  // console.log(data.pages.nodes);

  data?.pages?.nodes &&
    data?.pages?.nodes.map((page) => {
      if (!isEmpty(page?.uri) && !isCustomPageUri(page?.uri)) {
        const slugs = page?.uri?.split("/").filter((pageSlug) => pageSlug);
        pathsData.push({ params: { slug: slugs } });
      }
    });

  return {
    paths: pathsData,
    fallback: true,
  };
}
