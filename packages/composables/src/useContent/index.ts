import {useContentParameters} from '../types';
import { ContentNode } from 'vsf-wordpress-api';
// integration
import { useContentFactory } from '@vue-storefront/core';

// CONTENT and CONTENT_SEARCH_PARAMS are your CMS-specific types, we advise to have at least 'id' param for search
export default useContentFactory<ContentNode, useContentParameters>({
  // (params: CONTENT_SEARCH_PARAMS) => Promise<CONTENT>;
  async search (context, params) {
    const { postType } = params;
    const response = await context.$wordpress.api.getContent(params);
    return response.data[postType];
  }
});
