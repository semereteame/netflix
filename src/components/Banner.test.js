import React from "react";
import { shallow } from "enzyme";
import Banner from "./Banner";
const setup = () => {
  const component = shallow(<Banner />);
  return component;
};

describe("banner component", () => {

    describe('banner-header',()=>{
        let component;
        beforeEach(() => {
            component = setup();
          });

          it("it should render banner header ", () => {
            const header = component.find('[data-test="bannerHeader"]');
            expect(header.length).toBe(1);
          });
          it('it should render banner content',()=>{
              const content = component.find(`[data-test='banner-content']`)
              expect(content.length).toBe(1)
          })
          it('it should render the movie title',()=>{
              const title = component.find(`[data-test='title']`)
              expect(title.length).toBe(1)

          })
    })
})

  
  

  

