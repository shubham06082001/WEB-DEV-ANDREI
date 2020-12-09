import { shallow } from "enzyme";
import React from "react";
import CardList from "./CardList";

it("expect to render CardList components", () => {
  const mockRobots = [
    {
      id: 1,
      name: "John Snow",
      username: "John Major",
      email: "john@gmail.com",
    },
  ];
  expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
});
