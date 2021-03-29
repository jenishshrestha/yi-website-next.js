import { React, Fragment } from "react";
import client from "../src/apollo/client";
import { useRouter } from "next/router";
import { GET_HOME_PAGE } from "../src/queries/pages/get-home-page";
import HomeBanner from "../src/components/layout/home/banner";
import Seo from "./../src/components/seo";

export default function Home({ data }) {
  const router = useRouter();
  const { page, twitterSeo } = data;

  const twitter = twitterSeo?.social?.twitter;

  if (router.isFallback) {
    return <div>Generating Static Page</div>;
  }

  return (
    <>
      <Seo seo={page?.seo} uri={page?.uri} twitter={twitter} />
      <HomeBanner page={page} />
    </>
  );
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
