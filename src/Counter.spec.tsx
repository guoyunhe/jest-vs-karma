import React from "react";
import { mount } from "enzyme";
import { Counter } from "./Counter";

describe("<Counter/>", () => {
  it("has initial value 0", () => {
    const wrapper = mount(<Counter />);
    expect(wrapper.find("span").text()).toBe("0");
  });

  it("adds 1", () => {
    const wrapper = mount(<Counter />);
    wrapper.find(".add-1").simulate("click");
    expect(wrapper.find("span").text()).toBe("1");
  });

  it("adds 1*5", () => {
    const wrapper = mount(<Counter />);
    wrapper.find(".add-1").simulate("click");
    wrapper.find(".add-1").simulate("click");
    wrapper.find(".add-1").simulate("click");
    wrapper.find(".add-1").simulate("click");
    wrapper.find(".add-1").simulate("click");
    expect(wrapper.find("span").text()).toBe("5");
  });

  it("adds 10", () => {
    const wrapper = mount(<Counter />);
    wrapper.find(".add-10").simulate("click");
    expect(wrapper.find("span").text()).toBe("10");
  });

  it("adds 10*5 and 1*6", () => {
    const wrapper = mount(<Counter />);
    wrapper.find(".add-1").simulate("click");
    wrapper.find(".add-10").simulate("click");
    wrapper.find(".add-1").simulate("click");
    wrapper.find(".add-10").simulate("click");
    wrapper.find(".add-1").simulate("click");
    wrapper.find(".add-10").simulate("click");
    wrapper.find(".add-1").simulate("click");
    wrapper.find(".add-10").simulate("click");
    wrapper.find(".add-1").simulate("click");
    wrapper.find(".add-10").simulate("click");
    wrapper.find(".add-1").simulate("click");
    expect(wrapper.find("span").text()).toBe("56");
  });

  it("adds 10 and subtracts 1", () => {
    const wrapper = mount(<Counter />);
    wrapper.find(".add-10").simulate("click");
    wrapper.find(".subtract-1").simulate("click");
    expect(wrapper.find("span").text()).toBe("9");
  });

  it("adds 10 and subtracts 1", () => {
    const wrapper = mount(<Counter />);
    wrapper.find(".add-10").simulate("click");
    wrapper.find(".subtract-1").simulate("click");
    expect(wrapper.find("span").text()).toBe("9");
  });

  it("adds 10, subtracts 1 and resets", () => {
    const wrapper = mount(<Counter />);
    wrapper.find(".add-10").simulate("click");
    wrapper.find(".subtract-1").simulate("click");
    wrapper.find(".reset").simulate("click");
    expect(wrapper.find("span").text()).toBe("0");
  });
});
