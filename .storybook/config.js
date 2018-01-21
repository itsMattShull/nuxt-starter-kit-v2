import { configure } from '@storybook/vue';

import Vue from 'vue';
// import Vuex from 'vuex'; // Vue plugins

const req = require.context('../components', true, /\.story\.js$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module);