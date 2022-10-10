import { shallow } from "enzyme";
import React from "react";
import Card from "./Card";

// most cases we use shallow
// mount does what we call full DOM rendering: good to use it when your compoent interact with DOM APIs, or have life cycle methods such as componentDidMount
// render in between shallow and mount: dosen't need full DOM rendering but does need any of children components
it("expect to render Card component", () => {
  expect(shallow(<Card />).length).toEqual(1);
});

// easier way to test stateless components
it("expect to Card matched to snapshot", () => {
  expect(shallow(<Card />)).toMatchSnapshot();
});
