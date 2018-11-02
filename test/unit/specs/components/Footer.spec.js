import { shallowMount } from "@vue/test-utils";
import Component from "~/components/Footer.vue";

describe("Component Footer", () => {
  it("renders to a snapshot", () => {
    const wrapper = shallowMount(Component);
    expect(wrapper.element).toMatchSnapshot();
  });
});
