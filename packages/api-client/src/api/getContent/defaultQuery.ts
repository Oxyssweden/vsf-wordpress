import gql from 'graphql-tag';
const fields = 'databaseId\n        title\n        content(format: RAW)\n        featuredImage {\n          node {\n            sizes\n            altText\n          }\n        }';

export function getQuery(postType) {
  return gql`
    query CONTENT() {
      ${postType}() {
        ${fields}
      }
    }
  `;
}

export function getIdQuery(postType, idType = null) {
  return gql`
    query CONTENT_BY_ID($id: ID!) {
      ${postType}(id: $id, idType: ${idType}) {
        ${fields}
      }
    }
  `;
}
