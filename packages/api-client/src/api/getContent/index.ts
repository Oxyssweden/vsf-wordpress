import ApolloClient from 'apollo-client';
import {getQuery} from './defaultQuery';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default async function getContent(context, params) {
  const { postType, id, idType } = params;

  const request = await (context.client as ApolloClient<any>).query<any>({
    query: getQuery(postType, idType),
    variables: {
      id
    },
    fetchPolicy: 'no-cache'
  });

  return request;
}
