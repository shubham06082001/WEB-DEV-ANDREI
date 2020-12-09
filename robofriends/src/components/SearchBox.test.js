import { shallow, mount, register } from "enzyme";
import React from "react";
import SearchBox from "./SearchBox";

it("expect to render SearchBox components", () => {
  expect(shallow(<SearchBox />)).toMatchSnapshot();
});
