import { Context, FactoryParams, ComputedProperty } from '@vue-storefront/core';
export declare type useContentParameters = {
    id: any;
    idType: string;
    postType: string;
};
export interface UseContent<PAGE> {
    page: ComputedProperty<PAGE>;
    loadContent: (parameters: useContentParameters) => Promise<void>;
    loading: ComputedProperty<boolean>;
}
export interface UseContentFactoryParams<CONTENT> extends FactoryParams {
    loadContent: (context: Context, parameters: useContentParameters) => Promise<CONTENT>;
}
export declare type Post = Record<string, unknown>;
export declare type PostResponse = {
    data: Post[];
    total: number;
};
