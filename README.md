# VueMouseflow

[![npm](https://img.shields.io/npm/v/vue-mouseflow.svg?style=flat-square)](https://www.npmjs.com/package/vue-mouseflow)
[![prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

> 📈 Vue.js plugin for Mouseflow tracking

## Installation

```bash
npm install --save vue-mouseflow
```

## Plugin Installation

#### `VueMouseflow.install(Vue, options)`

- **`Vue`**`<Object>`: a Vue instance
- **`tracking_key`**`<String>`: The Mouseflow tracking key you want to use

Install the plugin using the `Vue.use` method:

```js
import Vue from 'vue';
import VueMouseflow from 'vue-mouseflow';

Vue.use(VueMouseflow, { tracking_key: 'your-tracking-key' });
```

## Methods

### Push

#### `VueMouseflow.push([commandName, argument1, argument2, …]);`

This acts as a wrapper for the `_mfq` object. Check [https://js-api-docs.mouseflow.com/#the-\_mfq-object](https://js-api-docs.mouseflow.com/#the-_mfq-object) for more information.

### Router Hook

#### `VueMouseflow.logRouteChange(route[, options])`

- **`route`**`<Object>`: a VueRouter route object
- **`options`**`<Object>`:
  - **`includeRouteParams`**`<Boolean>`: Set to false to remove all user-entered URL params. Useful if there is sensitive data in the URL which you do not want to track. Defaults to `true`.

```js
// router.js
import VueRouter from 'vue-router';
import VueMouseflow from 'vue-mouseflow';

const router = new VueRouter({
  routes: [
    /* some routes */
  ]
});

router.afterEach(to => {
  VueMouseflow.logRouteChange(to, { includeRouteParams: false });
});
```

### `this.$mf`

`VueMouseflow` is also added to your Vue prototype when installed. The above two methods are exposed on the `this.$mf` namespace.

This can be useful for event logging within components:

```js
const MyApp = new Vue({
  ...,
  methods: {
    buttonPressed(evt) {
      this.$mf.push('addedToCart', Date.now());
    }
  }
})
```
