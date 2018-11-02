import { shallowMount } from "@vue/test-utils";
import Page from "~/pages/index.vue";

describe("Page /", () => {
  it("renders to a snapshot", () => {
    const wrapper = shallowMount(Page);
    expect(wrapper.element).toMatchSnapshot();
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
