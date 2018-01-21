import { configure } from '@storybook/vue';

import Vue from 'vue';
// import Vuex from 'vuex'; // Vue plugins

// Import your custom components.
import MyFooter from '../components/Footer.vue';

// Install Vue plugins.
// Vue.use(Vuex);

// Register custom components.
Vue.component('my-footer', MyFooter);

function loadStories() {
  // You can require as many stories as you need.
  require('../.storybook');
}

configure(loadStories, module);