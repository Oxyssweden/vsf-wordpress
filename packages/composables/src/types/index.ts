import {
  Context,
  FactoryParams,
  ComputedProperty
} from '@vue-storefront/core';

type MetaCompare = 'NOT_EQUAL_TO' | 'EQUAL_TO';
type MetaRelation = 'AND' | 'OR';

export interface MetaArray {
  key: string;
  value: string;
  compare: MetaCompare;
}

export interface MetaQuery {
  relation: MetaRelation;
  metaArray: MetaArray[];
}

export type useContentParameters = {
  id?: any;
  idType?: string;
  postType: string;
  metaQuery?: MetaQuery
  take?: number
  after?: string
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
