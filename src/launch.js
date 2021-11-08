// src/launch.ts

import * as Vue from 'vue/dist/vue.esm-bundler';
import * as VueRouter from 'vue-router';
import { createApp } from 'vue/dist/vue.esm-bundler';
import { createRouter, createWebHashHistory } from 'vue-router';

const globalApp = window.app;

const create = (app) => {
  return createApp(app);
};

setTimeout(() => {
  if (globalApp?.setup) {
    // Create a simple app and mount it.
    create(globalApp).mount('#app');
  } else {
    const { app, routes, el } = globalApp;
    const vueApp = create(app);

    // Add optional router.
    if (routes) {
      vueApp.use(
        createRouter({
          history: createWebHashHistory(),
          routes,
        })
      );
    }

    // Mount the app in the optional DOM element.
    vueApp.mount(el ?? '#app');
  }
}, 0);

export { Vue, VueRouter };
