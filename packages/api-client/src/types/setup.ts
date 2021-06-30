import ApolloClient, { ApolloClientOptions } from 'apollo-client';
import {WordpressMethods} from './Api';

export interface Storage {
  set: (
    name: string,
    value: any
  ) => void;
  get: (name: string) => any;
  remove: (name: string) => any;
  removeAll: () => void;
}

export interface ClientConfig {
  api: string;
}

export interface Config<T = any> extends ClientConfig {
  client?: ApolloClient<T>;
  storage: Storage;
  customOptions?: ApolloClientOptions<any>;
  overrides: WordpressMethods;
}

export interface ClientInstance extends ApolloClient<any> {
}
