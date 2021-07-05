import ApolloClient from 'apollo-client';
import {getIdQuery} from './defaultQuery';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default async function getContent(context, params) {
  const { postType = 'post', id, idType = 'DATABASE_ID'} = params;

  return await (context.client as ApolloClient<any>).query<any>({
    query: getIdQuery(postType, idType),
    variables: {
      id
    }
  });
}
