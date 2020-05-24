import React from "react";
import Indicator from "../index";
import {render,shallow} from "react-native-testing-library";

describe("Indicator property test",()=>{
    it("circleCount property test",()=>{
        const circleCount = 3;
        const {getAllByTestId} = render(<Indicator circleCount={circleCount}/>)
        const indicatorViews = getAllByTestId('indicator_view')
        expect(indicatorViews.length).toBe(circleCount)
    })

    it("currentIndex property test",()=>{
        const circleCount = 3;
        const currentIndex = 1;
        const {getAllByTestId} = render(<Indicator circleCount={circleCount} currentIndex={currentIndex}/>)
        const indicatorViews = getAllByTestId('indicator_view')
        for(let view_i = 0; view_i <= indicatorViews.length; view_i ++){
            if(view_i === currentIndex){
                expect(indicatorViews[currentIndex].props.style[1].backgroundColor).toBe('#0f0')
            }else{
                expect(indicatorViews[currentIndex].props.style[0].backgroundColor).toBe('#fff')
            }
        }
    })
})

describe("Indicator Snapshot test",()=>{
    it("Indicator Snapshot test ",()=>{
        const circleCount = 3;
        const currentIndex = 1;
        const {toJSON} = render(<Indicator circleCount={circleCount} currentIndex={currentIndex}/>)
        expect(toJSON()).toMatchSnapshot()
    })
});

describe("Indicator Shallow test",()=>{
    it("Indicator Shallow test",()=>{
        const circleCount = 3;
        const currentIndex = 1;
        const {output} = shallow(<Indicator circleCount={circleCount} currentIndex={currentIndex}/>)
        expect(output).toMatchSnapshot()
    })
})
