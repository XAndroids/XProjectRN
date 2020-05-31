import React from "react";
import {fireEvent, render, shallow} from "react-native-testing-library";
import PublisherItem from "../PublisherItem";
import {CheckBox} from "../../../components";

describe('PublisherItem test', function () {
    const  item1 = {
        publisherId: 'p001',
        type: 't001',
        language: 'l001',
        name: 'The Tech-mock',
        subscribeNum: '970601 subscribers',
        isSubscribed: false
    }

    describe('PublisherItem property test', function () {
        it("item1 property test",function () {
            const {queryByText,queryByType}  = render(<PublisherItem item1={item1}/>)
            const nameText = queryByText(item1.name)
            expect(nameText).not.toBeNull()
            expect(nameText.props.style).toEqual({ fontSize: 18, color: 'black' })
            expect(nameText.props.children).toBe(item1.name)

            const subscribeNumText = queryByText(item1.subscribeNum)
            expect(subscribeNumText).not.toBeNull()
            expect(subscribeNumText.props.style).toEqual({ fontSize: 12, color: '#73737373' })
            expect(subscribeNumText.props.children).toBe(item1.subscribeNum)

            const isSubscribedCheckBox = queryByType(CheckBox)
            expect(isSubscribedCheckBox).not.toBeNull()
            expect(isSubscribedCheckBox.props.isChecked).toBe(false)
            expect(isSubscribedCheckBox.props.style).toEqual( { width: 50, height: 50, marginRight: 6 })
            expect(isSubscribedCheckBox.props.checkedIcon).toEqual({ testUri: '../../../img/publisherlist_checkbox_selected.png' })
            expect(isSubscribedCheckBox.props.uncheckedIcon).toEqual({ testUri: '../../../img/publisherlist_checkbox_add.png' })
        })
    })

    describe('PublisherItem fun test', function () {
        const onItemPress = jest.fn()
        const {queryByType}  = render(<PublisherItem item1={item1} onItemPress={onItemPress}/>)
        const isSubscribedCheckBox = queryByType(CheckBox)
        fireEvent(isSubscribedCheckBox,'onCheckedChange')
        expect(onItemPress).toBeCalledWith(item1)
    })

    describe("PublisherItem Snapshot test",function () {
        const onItemPress = jest.fn()
        const {toJSON}  = render(<PublisherItem item1={item1} onItemPress={onItemPress}/>)
        expect(toJSON()).toMatchSnapshot()
    })

    describe("PublisherItem Shallow test",function () {
        const onItemPress = jest.fn()
        const {output}  = shallow(<PublisherItem item1={item1} onItemPress={onItemPress}/>)
        expect(output).toMatchSnapshot()
    })
})
