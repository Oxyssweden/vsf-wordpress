import defaultConfig from 'vsf-wordpress/nuxt/defaultConfig';

export const getLocaleSettings = (app, moduleOptions) => {
  let localeSettings = {};

  if (moduleOptions.cookies) {
    localeSettings = {
      locale: app.$cookies.get(moduleOptions.cookies.localeCookieName)
    };
  }

  return {
    locale: (localeSettings.locale || moduleOptions.locale || defaultConfig.locale)
  };
};

export const mapConfigToSetupObject = ({ moduleOptions, app, additionalProperties = {} }) => ({
  ...defaultConfig,
  ...moduleOptions,
  ...additionalProperties,
  ...getLocaleSettings(app, moduleOptions)
});
