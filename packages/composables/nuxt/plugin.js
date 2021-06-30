import { integrationPlugin } from '@vue-storefront/core';
import { mapConfigToSetupObject } from 'vsf-wordpress/nuxt/helpers';

const moduleOptions = JSON.parse('<%= JSON.stringify(options) %>');

export default integrationPlugin(({ app, integration }) => {
  const settings = mapConfigToSetupObject({
    moduleOptions,
    app
  });

  integration.configure('wordpress', settings);
});
