import gql from 'graphql-tag';
const fields = `
  databaseId
  title
  slug
  content
  featuredImage {
    node {
      sizes
      altText
    }
  }`;

export function getMetaQuery(postType, metaArray, relation = 'AND') {
  const gqlString = metaArray
    .map((item) => `{compare: ${item.compare}, key: "${item.key}", value: "${item.value}"}`)
    .join(', ');
  return gql`
    query CONTENT_BY($first: Int, $after: String) {
      ${postType}(first: $first, after: $after, where: { metaQuery: { relation: ${relation}, metaArray: [${gqlString}] }}) {
        nodes {
              ${fields}
        }
      }
    }
  `;
}

export function getQuery(postType) {
  return gql`
    query CONTENT($first: Int, $after: String) {
      ${postType}(first: $first, after: $after) {
        nodes {
              ${fields}
        }
      }
    }
  `;
}
