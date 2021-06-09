import React from "react";
import { shallow } from "enzyme";
import NavBar from "./NavBar";

const setup = (props = {}) => {
  const component = shallow(<NavBar />);
  return component;
};
// const findBydataAttrubit = (component,attr) => {
//   const wrapper = component.find(`[data-test ='${attr}']`);
//   return wrapper;
// };

describe("NavBarcomponent", () => {
  let component;
  beforeEach(() => {
    component = setup();
  });
  it("it should render without error", () => {
    const wrapper = component.find('[data-test="Navcomponent"]')
    // const wrapper = findBydataAttrubit(component,"Navcomponent");
    expect(wrapper.length).toBe(1);
  });

  it("it should render the logo with error", () => {
    const logo = component.find('[data-test="logo"]')
    // console.log(component.debug())
    // const logo = findBydataAttrubit(component,"logo");
    expect(logo.length).toBe(1);
  });
});
