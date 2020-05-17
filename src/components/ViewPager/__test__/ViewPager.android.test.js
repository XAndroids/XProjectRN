import {fireEvent, render, shallow} from 'react-native-testing-library'
import React from "react";
import {ViewPagerAndroid} from 'react-native'
import IntroducePage from "../../../pages/introduce/IntroducePage";
import ViewPager from "../../ViewPager/ViewPager.android";

const pages = [
    {
        title: 'Welcome',
        image: require('../../../../img/introduce_icon1.png'),
        content: 'Thank you for installing Paperboy.What makes Paperboy different form other news reader apps is its simplicity and elegant design.',
        backgroundColor: '#01A3AE',
    }, {
        title: 'Customizations',
        image: require('../../../../img/introduce_icon2.png'),
        content: 'We believe that each user is unique and hence several customization options are provided to suit different reading styles.To customize please visit the settings page.',
        backgroundColor: '#4CAF50',
    }, {
        title: 'Reading pattern learner',
        image: require('../../../../img/introduce_icon3.png'),
        content: 'The home screen tiles will automatically reaarrange based on reading patterns for better user experence.All data is stored locally kepping in mind user privacy.',
        backgroundColor: '#673AB8',
    }
];

describe("ViewPager.android property test", () => {
    it("initialPage property test", () => {
        const initPageIndex = 1;
        const {getByType} = render(<ViewPager initPageIndex={initPageIndex}>
            {pages.map((page, i) => <IntroducePage
                key={i}
                title={page.title}
                image={page.image}
                content={page.content}
                backgroundColor={page.backgroundColor}/>)}
        </ViewPager>);

        expect(getByType(ViewPagerAndroid).props.initialPage).toBe(initPageIndex);
    })

    it("child property test", () => {
        const initPageIndex = 1;
        const {getAllByType} = render(<ViewPager initPageIndex={initPageIndex}>
            {pages.map((page, i) => <IntroducePage
                key={i}
                title={page.title}
                image={page.image}
                content={page.content}
                backgroundColor={page.backgroundColor}/>)}
        </ViewPager>);
        const introduecePages = getAllByType(IntroducePage);
        expect(introduecePages.length).toBe(pages.length);
        for(let page_i = 0; page_i < introduecePages.length;page_i ++){
            expect(introduecePages[page_i].props.title).toBe(pages[page_i].title);
            expect(introduecePages[page_i].props.image).toBe(pages[page_i].image);
            expect(introduecePages[page_i].props.content).toBe(pages[page_i].content);
            expect(introduecePages[page_i].props.backgroundColor).toBe(pages[page_i].backgroundColor);
        }

    })
})

describe("ViewPager.android fun test", () => {
    it.skip("onPageSwitch fun test", () => {
        const initPageIndex = 1;
        const onPageSwitch = jest.fn();
        //FIXE mockResolvedValue Mock参数？？
        onPageSwitch.mockResolvedValue(1);

        const {getByType} = render(<ViewPager initPageIndex={initPageIndex} onPageSwitch={onPageSwitch}>
            {pages.map((page, i) => <IntroducePage
                key={i}
                title={page.title}
                image={page.image}
                content={page.content}
                backgroundColor={page.backgroundColor}/>)}
        </ViewPager>);

        //TypeError: Cannot read property 'nativeEvent' of undefined
        //FIXME 如何Mock掉方法参数:event.nativeEvent.position,this.props.onPageSwitch(event.nativeEvent.position);
        fireEvent(getByType(ViewPagerAndroid), "onPageSelected");
        expect(onPageSwitch).toHaveBeenCalled();
    })
})

describe("ViewPager.android Snapshot test",()=>{
    it("Snapshot test",()=>{
        const initPageIndex = 1;
        const onPageSwitch = jest.fn();
        const {toJSON} = render(<ViewPager initPageIndex={initPageIndex} onPageSwitch={onPageSwitch}>
            {pages.map((page, i) => <IntroducePage
                key={i}
                title={page.title}
                image={page.image}
                content={page.content}
                backgroundColor={page.backgroundColor}/>)}
        </ViewPager>);

        expect(toJSON()).toMatchSnapshot();
    })
});

describe("ViewPager.android Shallow test",()=>{
    it("Shallow test",()=>{
        const initPageIndex = 1;
        const onPageSwitch = jest.fn();
        const {output} = shallow(<ViewPager initPageIndex={initPageIndex} onPageSwitch={onPageSwitch}>
            {pages.map((page, i) => <IntroducePage
                key={i}
                title={page.title}
                image={page.image}
                content={page.content}
                backgroundColor={page.backgroundColor}/>)}
        </ViewPager>);

        expect(output).toMatchSnapshot();
    })
});
