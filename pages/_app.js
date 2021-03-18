import "../styles/globals.scss";
import { useRouter } from "next/router";
import { ApolloProvider } from "@apollo/client";
import client from "../src/apollo/client";
import Layout from "../src/components/layout/layout";

function MyApp({ Component, pageProps }) {
  const { data } = pageProps;
  const router = useRouter();
  console.log(router);
  // console.log(data);
  return (
    <ApolloProvider client={client}>
      <Layout data={data}>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

export default MyApp;
