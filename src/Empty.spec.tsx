import React from "react";
import { mount } from "enzyme";
import { Empty } from "./Empty";

describe("<Empty/>", () => {
  it("renders empty text", () => {
    const wrapper = mount(<Empty />);
    expect(wrapper.text()).toBe("Empty");
  });
});
