import ApolloClient from 'apollo-client';
import {getMetaQuery, getQuery} from './defaultQuery';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default async function getContentList(context, params) {
  const { postType, metaArray = null, relation = 'AND', first = 10, after = ''} = params;
  const query = (metaArray) ? getMetaQuery(postType, metaArray, relation) : getQuery(postType);

  return await (context.client as ApolloClient<any>).query<any>({
    query,
    variables: {
      first,
      after
    }
  });
}
