const SeoFragment = `
fragment SeoFragment on PostTypeSEO {
  breadcrumbs {
    text
    url
  }
  metaDesc
  metaRobotsNofollow
  metaRobotsNoindex
  opengraphAuthor
  opengraphDescription
  opengraphImage {
    sourceUrl
  }
  opengraphModifiedTime
  opengraphPublishedTime
  opengraphPublisher
  opengraphSiteName
  opengraphTitle
  opengraphType
  opengraphUrl
  schemaDetails
  title
  twitterDescription
  twitterImage {
    sourceUrl
  }
  twitterTitle
}
`;

export default SeoFragment;
