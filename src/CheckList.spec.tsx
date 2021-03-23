import React from "react";
import { mount } from "enzyme";
import { CheckList } from "./CheckList";

describe("<CheckList/>", () => {
  it("has an initial item", () => {
    const wrapper = mount(<CheckList />);
    expect(wrapper.find(".check-list__item").length).toBe(1);
  });

  it("toggles checkbox", () => {
    const wrapper = mount(<CheckList />);
    expect(wrapper.find(".check-list__item--checked").length).toBe(0);
    wrapper
      .find(".check-list__item-checkbox")
      .first()
      .simulate("change", { target: { checked: true } });
    expect(wrapper.find(".check-list__item--checked").length).toBe(1);
  });

  it("inserts an item after clicking new button", () => {
    const wrapper = mount(<CheckList />);
    wrapper.find(".check-list__new-button").simulate("click");
    expect(wrapper.find(".check-list__item").length).toBe(2);
    wrapper.find(".check-list__new-button").simulate("click");
    wrapper.find(".check-list__new-button").simulate("click");
    expect(wrapper.find(".check-list__item").length).toBe(4);
  });

  it("deletes an item after clicking delete button", () => {
    const wrapper = mount(<CheckList />);
    wrapper.find(".check-list__new-button").simulate("click");
    wrapper.find(".check-list__new-button").simulate("click");
    wrapper.find(".check-list__new-button").simulate("click");
    expect(wrapper.find(".check-list__item").length).toBe(4);
    wrapper.find(".check-list__item-delete-button").first().simulate("click");
    expect(wrapper.find(".check-list__item").length).toBe(3);
  });

  it("shows/hides title input after clicking edit/save button", () => {
    const wrapper = mount(<CheckList />);
    expect(wrapper.find(".check-list__item-title-input").exists()).toBe(false);
    wrapper.find(".check-list__item-edit-button").simulate("click");
    expect(wrapper.find(".check-list__item-title-input").exists()).toBe(true);
    wrapper
      .find(".check-list__item-title-input")
      .simulate("change", { target: { value: "Foobar" } });
    wrapper.find(".check-list__item-save-button").simulate("click");
    expect(wrapper.find(".check-list__item-title-input").exists()).toBe(false);
    expect(wrapper.find(".check-list__item-title").text()).toBe("Foobar");
  });

  it("filters items", () => {
    const wrapper = mount(<CheckList />);

    function insert(title: string) {
      wrapper.find(".check-list__item-edit-button").last().simulate("click");
      wrapper
        .find(".check-list__item-title-input")
        .simulate("change", { target: { value: title } });
      wrapper.find(".check-list__item-save-button").simulate("click");
      wrapper.find(".check-list__new-button").simulate("click");
    }

    insert("Apple");
    insert("Orange");
    insert("Banana");
    insert("Peach");
    insert("Tomato");

    expect(wrapper.find(".check-list__item").length).toBe(6);

    wrapper
      .find(".check-list__search-input")
      .simulate("change", { target: { value: "app" } });

    expect(wrapper.find(".check-list__item").length).toBe(1);
    expect(wrapper.find(".check-list__item-title").text()).toBe("Apple");

    wrapper
      .find(".check-list__search-input")
      .simulate("change", { target: { value: "an" } });

    expect(wrapper.find(".check-list__item").length).toBe(2);
    expect(wrapper.find(".check-list__item-title").first().text()).toBe(
      "Orange"
    );
    expect(wrapper.find(".check-list__item-title").last().text()).toBe(
      "Banana"
    );
  });
});
