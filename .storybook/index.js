import Vue from 'vue';

const req = require.context('../components', true, /\.story\.js$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}