import { shallow } from "enzyme";
import React from "react";
import CardList from "./Card";

it("expect to CardList matched to snapshot", () => {
  const mockRobots = [
    {
      id: 1,
      name: "John Snow",
      username: "JohnJohn",
      email: "jhon@gmail.com",
    },
  ];
  expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
});
