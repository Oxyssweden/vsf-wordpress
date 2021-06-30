import { ApolloQueryResult } from 'apollo-client';
import { ApiClientMethods } from '@vue-storefront/core';

export type QueryResponse<K extends string, V> = ApolloQueryResult<Record<K, V>>;

interface ApiMethods {
  getContent (params): ApolloQueryResult<any>;
}

export type WordpressMethods = ApiClientMethods<ApiMethods>
