import React, { useEffect, useState } from "react";
import { ApolloProvider } from "@apollo/client";
import client from "../src/apollo/client";
import Layout from "../src/components/layout/layout";
import "../styles/globals.scss";
import Router from "next/router";

Router.events.on("routeChangeStart", (url) => {
  console.log(`Loading Start: ${url}`);
  // NProgress.start();
});
Router.events.on("routeChangeComplete", () => {
  console.log(`Loading complete`);
});
Router.events.on("routeChangeError", () => {
  console.log(`Loading Error`);
});

function MyApp({ Component, pageProps }) {
  const { data } = pageProps;
  const [dataCopy, setDataCopy] = useState({});

  // console.log(Router);

  useEffect(() => {
    if (pageProps) {
      setDataCopy(data);
    }
  }, [pageProps]);

  return (
    <>
      <ApolloProvider client={client}>
        <Layout data={dataCopy}>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </>
  );
}

export default MyApp;
