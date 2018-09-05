import React, {Component} from 'react';
import {createStackNavigator} from 'react-navigation';

import Login from './src/login/index';
import Introduce from './src/introduce/index';

const RootStack = createStackNavigator(
    {
        Login: {screen: Login},
        Introduce: {screen: Introduce},
    },
    {
        headerMode: 'none',
        initialRouteName: 'Login',
    }
);

export default class App extends Component {
    render() {
        return <RootStack/>;
    }
};
