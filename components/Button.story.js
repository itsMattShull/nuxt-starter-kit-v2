import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';
// import { addonNotes } from '@storybook/addon-notes';
// import { addonKnobs, text, number, boolean, array, select, color, date } from '@storybook/addon-knobs';
import MyButton from './Button.vue';

storiesOf('MyButton', module)
  // Works if Vue.component is called in the config.js in .storybook
  .add('rounded', () => ({
    components: { MyButton },
    template: '<my-button :rounded="true">A Button with rounded edges</my-button>',
  }))
  .add('square', () => ({
    components: { MyButton },
    template: '<my-button :rounded="false">A Button with square edges</my-button>',
  }))
  .add('template + methods', () => ({
    components: { MyButton },
    template: `
      <p>
        <my-button :rounded="true" @click="log">MyButton rendered in a template + props & methods</my-button>
      </p>`,
    methods: { log: action('log1') },
  }));
