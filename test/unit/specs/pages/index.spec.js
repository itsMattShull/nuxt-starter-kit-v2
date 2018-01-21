// import Vuex from 'vuex';
// import { shallow, createLocalVue } from '@vue/test-utils';
import { shallow } from '@vue/test-utils';
import { createRenderer } from 'vue-server-renderer';
import Page from '~/pages/index.vue';

describe('Page /', () => {
  it('renders to a snapshot', () => {
    const renderer = createRenderer();
    const wrapper = shallow(Page, {});
    renderer.renderToString(wrapper.vm, (err, str) => {
      if (err) throw new Error(err);
      expect(str).toMatchSnapshot();
    });
  });
});

// const localVue = createLocalVue();

// localVue.use(Vuex);

// describe('Page homepage', () => {
//   let store;
//   const mockLogo = 'mock logo';

//   beforeEach(() => {
//     store = new Vuex.Store({
//       actions: {
//         'logo/logoAction': jest.fn(),
//       },
//       getters: {
//         'logo/logo': () => mockLogo,
//       },
//     });
//   });

//   it('should mock store correctly', () => {
//     const wrapper = shallow(Page, { store, localVue });
//     expect(wrapper.vm.logo).toEqual(mockLogo);
//   });
// });
