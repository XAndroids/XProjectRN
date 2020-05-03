import React from "react";
import Login from '../index';
import {render} from "react-native-testing-library";

test('login test', () => {
    const {getByText, getByTestId} = render(<Login/>);
    const component = getByText('LOGIN TO FEEDLY');
    expect(getByTestId('logintext')).toBe(component);
});
