import React from "react";
import { expect } from "chai";
import { mount } from "enzyme";
import { DataTable } from "./DataTable";

describe("<DataTable/>", () => {
  it("renders empty table", () => {
    const wrapper = mount(<DataTable data={[]} />);
    expect(wrapper.find("td").length).to.equal(0);
  });

  it("renders three rows and five columns", () => {
    const wrapper = mount(
      <DataTable
        data={[
          [1, 2, 3, 4, 5],
          ["one", "two", "three", "four", "five"],
          ["一", "二", "三", "四", "五"],
        ]}
      />
    );
    expect(wrapper.find("tr").length).to.equal(3);
    expect(wrapper.find("tr").first().find("td").length).to.equal(5);
    expect(wrapper.find("td").length).to.equal(15);
    expect(wrapper.findWhere((w) => w.text() === "3").exists()).to.equal(true);
    expect(wrapper.findWhere((w) => w.text() === "five").exists()).to.equal(
      true
    );
    expect(wrapper.findWhere((w) => w.text() === "四").exists()).to.equal(true);

    wrapper.unmount();
  });

  it("renders 200 rows and 100 columns", () => {
    const data: number[][] = [];
    for (let i = 0; i < 200; i++) {
      data[i] = [];
      for (let j = 0; j < 100; j++) {
        data[i][j] = Math.random();
      }
    }
    const wrapper = mount(<DataTable data={data} />);
    expect(wrapper.find("tr").length).to.equal(200);
    expect(wrapper.find("tr").first().find("td").length).to.equal(100);
    expect(wrapper.find("td").length).to.equal(200 * 100);
  });
});
