import {
  Context,
  FactoryParams,
  ComputedProperty
} from '@vue-storefront/core';

export type useContentParameters = {
  id: any;
  idType: string;
  postType: string;
}

export interface UseContent<PAGE> {
  page: ComputedProperty<PAGE>;
  loadContent: (parameters: useContentParameters) => Promise<void>;
  loading: ComputedProperty<boolean>;
}

export interface UseContentFactoryParams<CONTENT> extends FactoryParams{
  loadContent: (context: Context, parameters: useContentParameters) => Promise<CONTENT>;
}

export type Post = Record<string, unknown>;

export type PostResponse = {
  data: Post[];
  total: number;
};
