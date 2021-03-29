const SeoFragment = `
fragment SeoFragment on PostTypeSEO {
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
