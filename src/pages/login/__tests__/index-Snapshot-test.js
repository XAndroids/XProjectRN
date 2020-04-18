import React from 'react';
import renderer from 'react-test-renderer';

import Login from '../index';

test('index Snapshot test correctly', () => {
    const tree = renderer.create(<Login />).toJSON();
    expect(tree).toMatchSnapshot();
});
