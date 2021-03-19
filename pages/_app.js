import "../styles/globals.scss";
// import { useRouter } from "next/router";
import { ApolloProvider } from "@apollo/client";
import client from "../src/apollo/client";
// import Layout from "../src/components/layout/layout";
import Header from "../src/components/layout/header/header";

function MyApp({ Component, pageProps }) {
  const { data } = pageProps;
  const { page, headerMenus, general, twitterSeo } = data || {};

  return (
    <ApolloProvider client={client}>
      {/* <Layout> */}
      <Component {...pageProps} />
      {/* </Layout> */}
    </ApolloProvider>
  );
}

export default MyApp;
