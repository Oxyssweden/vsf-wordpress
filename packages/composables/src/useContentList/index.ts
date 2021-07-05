import {useContentParameters} from '../types';
import { ContentNode } from '@Oxyssweden/vsf-wordpress-api';
// integration
import { useContentFactory } from '@vue-storefront/core';

// CONTENT and CONTENT_SEARCH_PARAMS are your CMS-specific types, we advise to have at least 'id' param for search
export default useContentFactory<[ContentNode], useContentParameters>({
  // (params: CONTENT_SEARCH_PARAMS) => Promise<CONTENT>;
  async search (context, params) {
    params.postType = params.postType || 'posts';
    const response = await context.$wordpress.api.getContentList(params);
    console.log(response);
    return response.data[params.postType].nodes;
  }
});
