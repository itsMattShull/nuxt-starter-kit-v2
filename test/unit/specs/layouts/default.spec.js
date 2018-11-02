import { shallowMount } from "@vue/test-utils";
import Layout from "~/layouts/default.vue";

describe("Component Button", () => {
  it("renders to a snapshot", () => {
    const wrapper = shallowMount(Layout, {
      stubs: ["nuxt"]
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});
