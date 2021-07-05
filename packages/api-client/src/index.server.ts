import { createWordpressConnection } from './helpers/wordpressLink';
import { defaultSettings } from './helpers/apiClient/defaultSettings';
import { apolloClientFactory } from './helpers/wordpressLink/graphQlclient';
import { apiClientFactory } from '@vue-storefront/core';
import { ClientInstance, Config } from './types/setup';
import getContent from './api/getContent';
import getContentList from './api/getContentList';
require('dotenv').config();

const onCreate = (settings: Config): { config: Config; client: ClientInstance } => {
  const config = {
    ...defaultSettings,
    ...settings
  } as unknown as Config;

  const { apolloLink } = createWordpressConnection(config);

  const client = apolloClientFactory({
    link: apolloLink,
    ...settings.customOptions
  });
  return {
    config,
    client
  };
};

const { createApiClient } = apiClientFactory({
  onCreate,
  api: {
    getContent,
    getContentList
  }
});

export {
  createApiClient
};
