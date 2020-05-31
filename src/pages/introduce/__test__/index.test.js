import React from "react";
import {View} from "react-native"
import {render, shallow} from "react-native-testing-library";
import Introduce from "../index";
import {ViewPager} from "../../../components";
import IntroduceBar from "../IntroduceBar";

describe("introduce page test",()=>{
    it("introduce page show test", () => {
        const {getByType} = render(<Introduce/>);

        //验证rootView是否显示正常
        const rootView= getByType(View)
        expect(rootView).not.toBeNull()
        expect(rootView.props.style).toEqual({ flex: 1 })

        //验证ViewPager是否显示正常
        const viewPager = getByType(ViewPager)
        expect(viewPager.props.initPageIndex).toBe(0)
        expect(viewPager.props.children.length).toBe(3)
        expect(viewPager.props.children[0].props).toEqual( {
            title: 'Welcome',
            image: { testUri: '../../../img/introduce_icon1.png' },
            content: 'Thank you for installing Paperboy.What makes Paperboy different form other news reader apps is its simplicity and elegant design.',
            backgroundColor: '#01A3AE'
        })
        expect(viewPager.props.children[1].props).toEqual( {
                title: 'Customizations',
                image: { testUri: '../../../img/introduce_icon2.png' },
                content: 'We believe that each user is unique and hence several customization options are provided to suit different reading styles.To customize please visit the settings page.',
                backgroundColor: '#4CAF50'
            }
        )
        expect(viewPager.props.children[2].props).toEqual( {
                title: 'Reading pattern learner',
                image: { testUri: '../../../img/introduce_icon3.png' },
                content: 'The home screen tiles will automatically reaarrange based on reading patterns for better user experence.All data is stored locally kepping in mind user privacy.',
                backgroundColor: '#673AB8'
            }
        )

        //验证IntroduceBar是否显示正常
        const introduceBar = getByType(IntroduceBar)
        expect(introduceBar).not.toBeNull()
        expect(introduceBar.props.style).toEqual({ position: 'absolute', bottom: 0 })
        expect(introduceBar.props.showPageIndex).toBe(0)
        expect(introduceBar.props.showPageCount).toBe(3)
    })

    describe("introduce page Snapshot test",()=>{
        const {toJSON} = render(<Introduce/>);
        expect(toJSON()).toMatchSnapshot()
    })

    describe("introduce page Shallow test",()=>{
        const {output} = shallow(<Introduce/>)
        expect(output).toMatchSnapshot()
    })
})
