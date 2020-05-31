import React from "react";
import {Image,View} from "react-native"
import {render} from "react-native-testing-library";
import IntroducePage from "../IntroducePage";

describe("IntroducePage test",()=>{
    const page = {
        title: 'Welcome',
        image: require('../../../../img/introduce_icon1.png'),
        content: 'Thank you for installing Paperboy.What makes Paperboy different form other news reader apps is its simplicity and elegant design.',
        backgroundColor: '#01A3AE',
    }

    beforeAll(()=>{
        //测试android Platfor逻辑
        //jest.requireActual(moduleName):返回一个实际的对象替代mock
        //参考：https://jestjs.io/docs/en/jest-object#jestrequireactualmodulename
        jest.mock("Platform",()=>{
            const Platform = require.requireActual('Platform');
            Platform.OS = 'android';
            return Platform;
        })
    })

    describe("IntroducePage property test",()=>{
        it("title property test",()=>{
            const{queryByText} = render(<IntroducePage title={page.title} image={page.image} content={page.content}
                                                       backgroundColor={page.backgroundColor}/>)
            //title文案显示，并且样式正常
            const titleText = queryByText(page.title)
            expect(titleText).not.toBeNull()
            expect(titleText.props.style).toEqual( [{"color": "white", "textAlign": "center"}, {"fontSize": 28, "textAlignVertical": "center"}])
        })

        it("image property test",()=>{
            const{queryByType} = render(<IntroducePage title={page.title} image={page.image} content={page.content}
                                                                   backgroundColor={page.backgroundColor}/>)
            //图片显示，并且样式和source正常
            const pageImage = queryByType(Image)
            expect(pageImage).not.toBeNull()
            expect(pageImage.props.style).toEqual({ flex: 1 })
            expect(pageImage.props.source.testUri).toBe('../../../img/introduce_icon1.png')
        })

        it("content property test",()=>{
            const{queryByText} = render(<IntroducePage title={page.title} image={page.image} content={page.content}
                                                       backgroundColor={page.backgroundColor}/>)
            //内容文案显示，并且样式正常
            const contentText = queryByText(page.content)
            expect(contentText).not.toBeNull()
            expect(contentText.props.style).toEqual( [{ color: 'white', textAlign: 'center' },
                { fontSize: 16, textAlignVertical: 'bottom' }])
        })

        it("backgroundColor property test",()=>{
            const{queryAllByType} = render(<IntroducePage title={page.title} image={page.image} content={page.content}
                                                          backgroundColor={page.backgroundColor}/>)

            //页面背景颜色正常
            const rootView = queryAllByType(View)[0]
            expect(rootView).not.toBeNull()
            expect(rootView.props.style[1].backgroundColor).toBe(page.backgroundColor)
        })
    })

    describe("IntroducePage Snapshot test", () => {
        it("IntroducePage Snapshot test", () => {
            const{toJSON} = render(<IntroducePage title={page.title} image={page.image} content={page.content}
                                                          backgroundColor={page.backgroundColor}/>)
            expect(toJSON()).toMatchSnapshot()
        })
    })

    describe("IntroducePage shallow test", () => {
        it("IntroducePage shallow test", () => {
            const{output} = render(<IntroducePage title={page.title} image={page.image} content={page.content}
                                                  backgroundColor={page.backgroundColor}/>)
            expect(output).toMatchSnapshot()
        })
    })
})
