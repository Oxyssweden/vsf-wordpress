# Wordpress CMS integration for Vue Storefront 2 (Next)

This is a first draft of a integration plugin for WP and VSF. Feel free to create pull requests.

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


License
----------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE).
