import { shallow } from '@vue/test-utils';
import { createRenderer } from 'vue-server-renderer';
import Layout from '~/layouts/default.vue';

describe('Component Button', () => {
  it('renders to a snapshot', () => {
    const renderer = createRenderer();
    const wrapper = shallow(Layout, {});
    renderer.renderToString(wrapper.vm, (err, str) => {
      if (err) throw new Error(err);
      expect(str).toMatchSnapshot();
    });
  });
});
