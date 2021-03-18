import { React, Fragment } from "react";
import client from "../src/apollo/client";
import Layout from "../src/components/layout/layout";
import { isEmpty } from "lodash";
import { useRouter } from "next/router";
import { GET_HOME_PAGE } from "../src/queries/pages/get-home-page";
import { sanitize } from "../src/utils/misc";
import HomeBanner from "../src/components/layout/home/banner";

export default function Home({ data }) {
  const router = useRouter();
  const { page } = data;

  // console.log(router);

  if (router.isFallback) {
    return <div>Generating Static Page</div>;
  }

  // console.log(page?.homePage?.bannerImage);

  return <HomeBanner page={page} />;
}

export async function getStaticProps() {
  const { data, loading, networkStatus } = await client.query({
    query: GET_HOME_PAGE,
    variables: {
      uri: "/",
    },
  });

  return {
    props: {
      data: data || {},
    },
    revalidate: 1,
  };
}
