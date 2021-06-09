import React from "react";
import { shallow } from "enzyme";
import App from "./App";

test("it should render the app ", () => {
  const wrapper = shallow(<App/>);
  // console.log(wrapper.debug())
  let component = wrapper.find(".app");
  expect(component.length).toBe(1);
});
