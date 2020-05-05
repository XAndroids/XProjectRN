//不使用箭头函数，使用funtion传递参数
import React from "react";
import {fireEvent, render, shallow} from "react-native-testing-library";
import {Image} from 'react-native'
import CheckBox from "../index";

describe('CheckBox property test', function () {
    it('property isChecked/checkedIcon/uncheckedIcon test ', function () {
        const {getByName} = render(<CheckBox isChecked={false}
                                             checkedIcon={require('../../../../img/publisherlist_checkbox_selected.png')}
                                             uncheckedIcon={require('../../../../img/publisherlist_checkbox_add.png')}/>);
        //getByName：通过React Native组件的名称查找
        expect(getByName('Image').props.source.testUri).toBe('../../../img/publisherlist_checkbox_add.png');

        const {getByType} = render(<CheckBox isChecked={true}
                                             checkedIcon={require('../../../../img/publisherlist_checkbox_selected.png')}
                                             uncheckedIcon={require('../../../../img/publisherlist_checkbox_add.png')}/>);
        //getByType：通过React Native组件的类型查找
        expect(getByType(Image).props.source.testUri).toBe('../../../img/publisherlist_checkbox_selected.png');
    });

    it('property style test ', function () {
        const {getByTestId} = render(<CheckBox style={{width: 50, height: 50, marginRight: 6}}
                                               isChecked={false}
                                               checkedIcon={require('../../../../img/publisherlist_checkbox_selected.png')}
                                               uncheckedIcon={require('../../../../img/publisherlist_checkbox_add.png')}/>);
        const style = getByTestId('checkbox_image').props.style;
        expect(style).toEqual([{width: 50, height: 50, marginRight: 6}]);
    });
});

describe('CheckBox fun test', () => {
    it('fun onCheckedChange test ', function () {
        const onCheckedChange = jest.fn();
        const {getByTestId} = render(<CheckBox isChecked={true}
                                               checkedIcon={require('../../../../img/publisherlist_checkbox_selected.png')}
                                               uncheckedIcon={require('../../../../img/publisherlist_checkbox_add.png')}
                                               onCheckedChange={onCheckedChange}/>);
        //通过子组件，调用父组件的onPress()方法
        fireEvent(getByTestId('checkbox_image'), 'onPress');
        expect(onCheckedChange).toHaveBeenCalled();
    });
});

describe('CheckBox Snapshot test', () => {
    test('Snapshot test', () => {
        const onCheckedChange = jest.fn();
        const {toJSON} = render(<CheckBox isChecked={true}
                                          checkedIcon={require('../../../../img/publisherlist_checkbox_selected.png')}
                                          uncheckedIcon={require('../../../../img/publisherlist_checkbox_add.png')}
                                          onCheckedChange={onCheckedChange}/>);
        expect(toJSON()).toMatchSnapshot();
    });
});

describe('CheckBox Shallow test', () => {
    test('Shallow test', () => {
        const onCheckedChange = jest.fn();
        const {output} = shallow(<CheckBox isChecked={true}
                                           checkedIcon={require('../../../../img/publisherlist_checkbox_selected.png')}
                                           uncheckedIcon={require('../../../../img/publisherlist_checkbox_add.png')}
                                           onCheckedChange={onCheckedChange}/>);
        expect(output).toMatchSnapshot();
    });
});
