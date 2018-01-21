import { shallow } from '@vue/test-utils';
import { createRenderer } from 'vue-server-renderer';
import Component from '~/components/Footer.vue';

describe('Component Footer', () => {
  it('renders to a snapshot', () => {
    const renderer = createRenderer();
    const wrapper = shallow(Component, {});
    renderer.renderToString(wrapper.vm, (err, str) => {
      if (err) throw new Error(err);
      expect(str).toMatchSnapshot();
    });
  });
});
