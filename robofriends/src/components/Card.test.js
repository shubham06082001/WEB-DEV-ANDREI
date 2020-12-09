import { shallow, mount, register } from "enzyme";
import React from "react";
import Card from "./Card";

it("expect to render card components", () => {
  expect(shallow(<Card />)).toMatchSnapshot();
});


//to run npm test -- --coverage