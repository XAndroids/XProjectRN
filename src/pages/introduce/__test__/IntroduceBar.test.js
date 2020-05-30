import React from "react";
import {fireEvent, render, shallow} from "react-native-testing-library";
import {Image} from "react-native"
import IntroduceBar from "../IntroduceBar";
import {Indicator} from "../../../components";


describe("IntroduceBar test", () => {
    describe("IntroduceBar property test", () => {
        it("showPageIndex property test", () => {
            const showPageIndex = 1;
            const showPageCount = 3;
            const {queryByTestId, queryByType, queryByText} = render(<IntroduceBar showPageIndex={showPageIndex}
                                                                                   showPageCount={showPageCount}/>)
            //展示SKIP按钮
            expect(queryByTestId('introduce_button_skip')).not.toBeNull()
            expect(queryByText('SKIP')).not.toBeNull()

            //展示Next按钮
            expect(queryByTestId('introduce_button_next')).not.toBeNull()
            expect(queryByType(Image)).not.toBeNull()
        })

        it("showPageIndex property test 2", () => {
            const showPageIndex = 2;
            const showPageCount = 3;
            const {queryByTestId, queryByType, queryByText} = render(<IntroduceBar showPageIndex={showPageIndex}
                                                                                   showPageCount={showPageCount}/>)
            //不展示SKIP按钮
            expect(queryByTestId('introduce_button_skip')).toBeNull()
            expect(queryByText('SKIP')).toBeNull()
            //不展示Next按钮
            expect(queryByTestId('introduce_button_next')).toBeNull()
            expect(queryByType(Image)).toBeNull()
            //展示Done按钮
            expect(queryByText('DONE')).not.toBeNull()
        })

        it("showPageCount property test",()=>{
            const showPageIndex = 2;
            const showPageCount = 3;
            const {queryByType} = render(<IntroduceBar showPageIndex={showPageIndex}
                                                       showPageCount={showPageCount}/>)
            //Indicator Props正确
            expect(queryByType(Indicator).props).toEqual( { circleCount: showPageCount, currentIndex: showPageIndex })
        })
    })

    describe("IntroduceBar fun test",()=>{
        it("onNextPress fun test",()=>{
            const onNextPress = jest.fn()
            const showPageIndex = 1;
            const showPageCount = 3;
            const {queryByTestId} = render(<IntroduceBar showPageIndex={showPageIndex}
                                                       showPageCount={showPageCount}
                                                         onNextPress={onNextPress}/>)
            fireEvent(queryByTestId('introduce_button_next'),'onPress')
            expect(onNextPress).toHaveBeenCalled()
        })
    })

    describe("IntroduceBar Snapshot test", () => {
        it("IntroduceBar Snapshot test", () => {
            const onNextPress = jest.fn()
            const showPageIndex = 1;
            const showPageCount = 3;
            const {toJSON} = render(<IntroduceBar showPageIndex={showPageIndex}
                                                  showPageCount={showPageCount}
                                                  onNextPress={onNextPress}/>)
            expect(toJSON()).toMatchSnapshot()
        })
    })

    describe("IntroduceBar shallow test", () => {
        it("IntroduceBar shallow test", () => {
            const onNextPress = jest.fn()
            const showPageIndex = 1;
            const showPageCount = 3;
            const {output} = render(<IntroduceBar showPageIndex={showPageIndex}
                                                  showPageCount={showPageCount}
                                                  onNextPress={onNextPress}/>)
            expect(output).toMatchSnapshot()
        })
    })
})
