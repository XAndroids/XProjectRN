import React from "react";
import {TouchableOpacity,TextInput,Image} from "react-native"
import {fireEvent, render, shallow} from "react-native-testing-library"
import {Toolbar} from "../../index";

const testID = "publisher_toolbar";
const title = "ToolbarTitle";
const toolbarActions = [
    {
        key: '001',
        title: 'Search',
        icon: require('../../../../img/toolbar_menu_search.png'),
        show: 'always'
    }, {
        key: '002',
        title: 'Content',
        icon: require('../../../../img/toolbar_menu_filter.png'),
        show: 'always'
    }, {
        key: '003',
        title: 'Language',
        icon: require('../../../../img/toolbar_menu_language.png'),
        show: 'always'
    }
];

describe("Toolbar property test",()=>{
    it("testId property test",()=>{
        const {getByTestId} = render(<Toolbar  testID={testID}/>);
        expect(getByTestId('publisher_toolbar').props.testID).toBe(testID);
    });

    it("title property test",()=>{
        const {getByTestId} = render(<Toolbar testID={testID} title={title}/>);
        expect(getByTestId('publisher_toolbar').props.title).toBe(title);
    });

    it("actions property test",()=>{
        const {getByTestId} = render(<Toolbar testID={testID} actions={toolbarActions}/>);
        expect(getByTestId('publisher_toolbar').props.actions).toBe(toolbarActions);
    })

    it("isSearch property false test",()=>{
        const {getByType} = render(<Toolbar isSearch={false}/>);
        //toThrow异常信息，可以先报错，然后从报错中Copy
        //判断没有找到相关类型：expect(fun).toThrow();
        expect(() => getByType(TouchableOpacity)).toThrow('No instances found with node type: "TouchableOpacity"');
        expect(() => getByType(TextInput)).toThrow('No instances found with node type: "TextInput"');
    });

    it("isSearch property true test",()=>{
        const {getAllByType} = render(<Toolbar isSearch={true}/>);
        const touchableOpacitys = getAllByType(TouchableOpacity);
        const images = getAllByType(Image);
        const textInputs = getAllByType(TextInput);
        expect(touchableOpacitys).toHaveLength(1);
        expect(images).toHaveLength(1);
        expect(images[0].props.source.testUri).toBe('../../../img/ic_action_name.png');
        expect(textInputs).toHaveLength(1);
        expect(textInputs[0].props.placeholder).toBe('搜索...');
        expect(textInputs[0].props.placeholderTextColor).toBe('#6cc7cd');
    });
})

describe("Toolbar fun test",()=>{
    it("onActionSelected fun test",()=>{
        const onActionSelected = jest.fn();
        const {getByTestId} =  render(<Toolbar testID= {testID} isSearch={true} onActionSelected={onActionSelected}/>);
        fireEvent(getByTestId(testID),'onActionSelected');
        expect(onActionSelected).toHaveBeenCalled();
    });

    it("onPress fun test",()=>{
        const onPressBack = jest.fn();
        const {getAllByType} =  render(<Toolbar testID= {testID} isSearch={true} onPressBack={onPressBack}/>);
        fireEvent(getAllByType(TouchableOpacity)[0],'onPress')
        expect(onPressBack).toHaveBeenCalled();
    });
})

describe("Toolbar Snapshot test",()=> {
    it("Snapshot test", () => {
        const onActionSelected = jest.fn();
        const onPressBack = jest.fn();
        const {toJSON} =  render(<Toolbar testID= {testID} title={title} isSearch={true}  actions={toolbarActions}
                                               onActionSelected={onActionSelected} onPressBack={onPressBack}/>);
        expect(toJSON()).toMatchSnapshot();
    });
})

describe("Toolbar Shallow test",()=> {
    it("Shallow test", () => {
        const onActionSelected = jest.fn();
        const onPressBack = jest.fn();
        const {output} =  shallow(<Toolbar testID= {testID} title={title} isSearch={true}  actions={toolbarActions}
                                          onActionSelected={onActionSelected} onPressBack={onPressBack}/>);
        expect(output).toMatchSnapshot();
    });
})
