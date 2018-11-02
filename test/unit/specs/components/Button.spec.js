import { shallowMount } from "@vue/test-utils";
import Component from "~/components/Button.vue";

describe("Component Button", () => {
  it("renders to a snapshot", () => {
    const wrapper = shallowMount(Component);
    expect(wrapper.element).toMatchSnapshot();
  });
});
