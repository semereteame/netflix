import React from "react";
import { shallow } from "enzyme";
import Checkrproptype from "check-prop-types";
import Row from "./Row";
const steup = (props) => {
  const component = shallow(<Row {...props} />);
  console.log(component.debug());
  return component;
};
describe("Rowcomponent", () => {
  let component;

  beforeEach(() => {
    let props = {
      title: "title",
      isLargeRow: true,
    };
    component = steup(props);
  });
  it("should render row with large image", () => {
    let image = component.find(".row__posters");
    expect(image.length).toBe(1);
  });

  it("it should have right props", () => {
   let  expectedProps = {
      title: "title",
      isLargeRow: true,
      fetchUrl: "Url",
    };

    let showError = Checkrproptype(
      Row.propTypes,
      expectedProps,
      "props",
      Row.name
    );
    expect(showError).toBeUndefined();
  });
});
