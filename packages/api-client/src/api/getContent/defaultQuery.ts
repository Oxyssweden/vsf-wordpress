import gql from 'graphql-tag';

export function getQuery(postType, idType) {
  return gql`
    query CONTENT_BY_SLUG($id: ID!) {
      ${postType}(id: $id, idType: ${idType}) {
        databaseId
        title
        content(format: RAW)
        featuredImage {
          node {
            sizes
            altText
          }
        }
      }
    }
  `;
}
