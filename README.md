# Wordpress CMS integration for Vue Storefront 2 (Next)

This is a first draft of a integration plugin for WP and VSF. There is room for improvements! Feel free to create pull requests.

Installation
----------------------------------------------------------------

Please follow the below instructions to install `vsf-wordpress` in your **Vue Storefront Next** project.

#### 1. Install the package

Put this directory inside your packages/ directory in your VFS installation

#### 2. Configure the module

Add the `vsf-wordpress` Nuxt module to the `buildModules` section of your projects `nuxt.config.js` file:

```js
export default {
  // ...

  buildModules: [
    // ...

    ['vsf-wordpress/nuxt']
  ]

  // ...
};
```
also add it to transpile:  
```js
export default {
  // ...

  build: {
    transpile: [
      '@Oxyssweden/vsf-wordpress'
      // ...
    ],
    // ...
  }

  // ...
};
```
and add the build scripts to package.json
```
    "build:wp-api": "cd packages/wordpress/packages/api-client && yarn build",
    "build:wp-composables": "cd packages/wordpress/packages/composables && yarn build",
    "dev:wp-api": "cd packages/wordpress/packages/api-client && yarn dev",
    "dev:wp-composables": "cd packages/wordpress/packages/composables && yarn dev",
```

Usage
----------------------------------------------------------------
Add a .env to your packages/theme with this line:
`WORDPRESS_GRAPHQL=https://next.picsmart.se/graphql`
Then in your middleware.config.js:
```
module.exports = {
  integrations: {
    // ...
    wordpress: {
      location: 'vsf-wordpress-api/server',
      configuration: {
        api: process.env.WORDPRESS_GRAPHQL
      }
    }
  }
};
```
Example component
```
<template>
  <h1>
  {{ title }}
  </h1>
</template>

<script>
import {contentGetters, useContent} from '@Oxyssweden/vsf-wordpress';
import {onSSR} from '@vue-storefront/core';
import {computed} from '@vue/composition-api';

export default {
  name: 'Example',
  setup(props, context) {
    const { search, content, error } = useContent('cmsPage');
    const { store } = context.root.$route.params;

    // fetch data
    onSSR(async () => await search({ postType: 'post', id: 'some-slug/' + store, idType: 'SLUG' }));

    const title = computed(() => contentGetters.getTitle(content.value));

    return {
      title
    };
  }
};
</script>
```

Wordpress requirements
----------------------------------------------------------------
Requires the [WOrdpress GraphQL plugin](https://www.wpgraphql.com/). If you have custom post types you must add this to the register_post_type() arguments.
```
        'show_in_graphql' => true,
        'graphql_single_name' => 'mycustompost',
        'graphql_plural_name' => 'mycustomposts',
```


License
----------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE).
