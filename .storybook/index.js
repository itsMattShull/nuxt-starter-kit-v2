import Vue from 'vue';

import { storiesOf } from '@storybook/vue';

import MyFooter from '../components/Footer.vue';

storiesOf('MyFooter', module)
  .add('story as a component', () => ({
    components: { MyFooter },
    template: '<my-footer>story as a component</my-footer>'
  }));