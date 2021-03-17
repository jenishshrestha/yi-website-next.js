import { React, Fragment } from "react";
import Header from "./header/header";
import Head from "next/head";
import Seo from "../seo";
import { isEmpty } from "lodash";
import { sanitize } from "../../utils/misc";
import PropTypes from "prop-types";

function Layout({ data, children }) {
  const { page, headerMenus, general, twitterSeo } = data || {};

  const favicon = general?.themeOption?.favicon?.sourceUrl,
    logo = general?.themeOption?.logo,
    seo = page?.seo,
    twitter = twitterSeo?.social?.twitter;

  if (isEmpty(page)) {
    return;
  }

  return (
    <Fragment>
      <Seo seo={page?.seo} uri={page?.uri} twitter={twitter} />
      <Head>
        <link rel="shortcut icon" href={favicon}></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        ></link>
        {seo?.schema?.raw ? (
          <script
            type="application/ld+json"
            className="yoast-schema-graph"
            key="yoastSchema"
            dangerouslySetInnerHTML={{ __html: sanitize(seo?.schema?.raw) }}
          />
        ) : null}
      </Head>
      <Header primaryMenus={headerMenus.edges} siteLogo={logo} />
      {children}
    </Fragment>
  );
}

Layout.propTypes = {
  data: PropTypes.object,
};

Layout.defaultProps = {
  data: {},
};

export default Layout;
