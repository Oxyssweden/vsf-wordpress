import { Logger } from '@vue-storefront/core';
import { Config } from '../../types/setup';
import { apolloLinkFactory } from './graphQlclient';

export const createWordpressConnection = (settings: Config): any => {
  Logger.debug('createWordpressConnection');

  const apolloLink = apolloLinkFactory(settings);

  return {
    apolloLink
  };
};
