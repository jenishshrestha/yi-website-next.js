const ImageFragment = `
    fragment ImageFragment on MediaItem {
        sourceUrl
        altText
        title
        mediaDetails {
            width
            height
        }
    }
`;

export default ImageFragment;
