import React, { useEffect, useState } from "react";
import { ApolloProvider } from "@apollo/client";
import client from "../src/apollo/client";
import Layout from "../src/components/layout/layout";
// import Layout from "../components/layout";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  const { data } = pageProps;
  const [dataCopy, setDataCopy] = useState({});

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
