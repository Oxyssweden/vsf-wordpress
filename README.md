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

License
----------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE).
