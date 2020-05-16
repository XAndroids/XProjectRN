import React from "react";
import {render,fireEvent,shallow} from "react-native-testing-library";
import {Modal, TouchableWithoutFeedback} from 'react-native'
import {ChoiceModal, RadioButton} from "../../../components";

const languagedChoiceList = [{
    typeId: 'l001',
    type: 'language',
    name: 'English',
}, {
    typeId: 'l002',
    type: 'language',
    name: '日语',
}, {
    typeId: 'l003',
    type: 'language',
    name: '中文',
}];

describe("ChoiceModal property test", () => {
    it("property testID test", () => {
        const testID = 'publisher_modal_typechoice';
        const {getByType} = render(<ChoiceModal testID={testID}
                                                choiceList={languagedChoiceList}/>);
        //testID属性设置在Modal上
        expect(getByType(Modal).props.testID).toBe(testID);
    });

    it("property visible test", () => {
        const {getByType} = render(<ChoiceModal visible={true}
                                                choiceList={languagedChoiceList}/>);
        //visible属性设置在Modal上
        expect(getByType(Modal).props.visible).toBe(true);
    });

    it("property choiceList test", () => {
        const {getAllByTestId, getAllByType} = render(<ChoiceModal choiceList={languagedChoiceList}/>);

        const listItemTexts = getAllByTestId('choicemodal_flatlistitem_text');
        //listItem的Text数量和languagedChoiceList数量一致
        expect(listItemTexts.length).toBe(languagedChoiceList.length);
        //listItem的Text展示languagedChoiceList中的name文案
        for (let item_i = 0; item_i < listItemTexts.length; item_i++) {
            expect(listItemTexts[item_i].props.children).toBe(languagedChoiceList[item_i].name);
        }

        //listItem的TouchableWithoutFeedback、RadioButton数量和languagedChoiceList数量一致
        const listItemTouchableWithoutFeedbacks = getAllByType(TouchableWithoutFeedback);
        expect(listItemTouchableWithoutFeedbacks.length).toBe(languagedChoiceList.length);
        const listItemRadioButtons = getAllByType(RadioButton);
        expect(listItemRadioButtons.length).toBe(languagedChoiceList.length);
    });

    it("property choiceIndex test", () => {
        const choiceIndex = 1;
        const {getAllByType} = render(<ChoiceModal choiceList={languagedChoiceList}
                                                   choiceIndex={choiceIndex}/>);
        //listeItem指定为choiceIndex的RadioButton为true，其它为false
        const listItemRadioButtons = getAllByType(RadioButton);
        for (let item_i = 0; item_i < listItemRadioButtons.length; item_i++) {
            if (item_i === choiceIndex) {
                expect(listItemRadioButtons[item_i].props.isSelected).toBe(true);
            } else {
                expect(listItemRadioButtons[item_i].props.isSelected).toBe(false);
            }
        }
    });
});

describe('ChoiceModal fun test', () => {
    it('fun onRequestClose test ', ()=>{
        const handleRequestClose = jest.fn();
        const{getByType} = render(<ChoiceModal choiceList={languagedChoiceList} onRequestClose={handleRequestClose}/>);

        //触发Modal的onRequestClose，回调传入handleRequestClose方法
        fireEvent(getByType(Modal),'onRequestClose');
        expect(handleRequestClose).toHaveBeenCalled();
    });

    it('fun onSelectedTypeChanged test ', ()=>{
        const handleSelectedTypeChanged = jest.fn();
        const{getAllByType} = render(<ChoiceModal choiceList={languagedChoiceList} onSelectedTypeChanged={handleSelectedTypeChanged}/>);

        //触发第1和2个ListItem的TouchableWithoutFeedbacks的onPress方法，回调handleSelectedTypeChanged2次
        const listItemTouchableWithoutFeedbacks = getAllByType(TouchableWithoutFeedback);
        fireEvent(listItemTouchableWithoutFeedbacks[0],'onPress');
        fireEvent(listItemTouchableWithoutFeedbacks[1],'onPress');
        expect(handleSelectedTypeChanged).toBeCalledTimes(2);
    });
});

describe('ChoiceModal Snapshot test', () => {
    test('Snapshot test', () => {
        const handleRequestClose = jest.fn();
        const handleSelectedTypeChanged = jest.fn();
        const {toJSON} = render(<ChoiceModal
            testID={'publisher_modal_typechoice'}
            visible={true}
            choiceIndex={1}
            choiceList={languagedChoiceList}
            onRequestClose={handleRequestClose}
            onSelectedTypeChanged={handleSelectedTypeChanged}/>);
        expect(toJSON()).toMatchSnapshot();
    });
});

describe('ChoiceModal Shallow test', () => {
    test('Shallow test', () => {
        const handleRequestClose = jest.fn();
        const handleSelectedTypeChanged = jest.fn();
        const {output} = shallow(<ChoiceModal
            testID={'publisher_modal_typechoice'}
            visible={true}
            choiceIndex={1}
            choiceList={languagedChoiceList}
            onRequestClose={handleRequestClose}
            onSelectedTypeChanged={handleSelectedTypeChanged}/>);
        expect(output).toMatchSnapshot();
    });
});
