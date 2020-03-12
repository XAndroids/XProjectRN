import React from 'react';
import {shallow} from 'enzyme';

import Login from '../index';
import {Text} from "react-native";

test('index Shallow test correctly', () => {
    const wrapper = shallow(
        <Login/>
    );

    expect(wrapper.find(Text)).toHaveLength(2);
});
