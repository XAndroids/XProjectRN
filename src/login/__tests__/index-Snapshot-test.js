import React from 'react';
import Login from '../index';

import renderer from 'react-test-renderer';


test('renders correctly', () => {
    const tree = renderer.create(<Login />).toJSON();
    expect(tree).toMatchSnapshot();
});
