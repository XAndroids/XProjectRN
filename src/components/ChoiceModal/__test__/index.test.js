import React from "react";
import {render} from "react-native-testing-library";
import {Modal, NativeModules} from 'react-native'
import ChoiceModal from "../index";

describe("Choice property test", () => {
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


    it("property testID test", () => {
        const {getByType} = render(<ChoiceModal testID={'publisher_modal_typechoice'}
                                                choiceList={languagedChoiceList}/>);
        console.log(getByType(Modal).props.testID);
    });
});
