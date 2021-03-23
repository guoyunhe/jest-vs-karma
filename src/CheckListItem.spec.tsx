import React from "react";
import { mount } from "enzyme";
import { CheckListItem } from "./CheckListItem";

describe("<CheckListItem/>", () => {
  it("renders item", () => {
    const wrapper = mount(
      <CheckListItem
        id={12}
        title="Foobar"
        checked
        onCheck={() => null}
        onSave={() => null}
        onDelete={() => null}
      />
    );
    expect(wrapper.find(".check-list__item").length).toBe(1);
    expect(wrapper.find(".check-list__item--checked").length).toBe(1);
    expect(wrapper.find(".check-list__item--12").length).toBe(1);
    expect(wrapper.find(".check-list__item-title").text()).toBe("Foobar");
  });

  it("shows input after clicking edit button", () => {
    const wrapper = mount(
      <CheckListItem
        id={12}
        title="Foobar"
        checked
        onCheck={() => null}
        onSave={() => null}
        onDelete={() => null}
      />
    );
    expect(wrapper.find(".check-list__item-title-input").exists()).toBe(false);
    wrapper.find(".check-list__item-edit-button").simulate("click");
    expect(wrapper.find(".check-list__item-title-input").exists()).toBe(true);
  });
});
