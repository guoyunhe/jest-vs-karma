import React from "react";
import { expect } from "chai";
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
    expect(wrapper.find(".check-list__item").length).to.equal(1);
    expect(wrapper.find(".check-list__item--checked").length).to.equal(1);
    expect(wrapper.find(".check-list__item--12").length).to.equal(1);
    expect(wrapper.find(".check-list__item-title").text()).to.equal("Foobar");
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
    expect(wrapper.find(".check-list__item-title-input").exists()).to.equal(
      false
    );
    wrapper.find(".check-list__item-edit-button").simulate("click");
    expect(wrapper.find(".check-list__item-title-input").exists()).to.equal(
      true
    );
  });
});
