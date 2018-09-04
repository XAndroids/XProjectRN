import React, {Component} from 'react';
import {createStackNavigator} from 'react-navigation';

import Login from './src/login/login';
import Introduce from './src/introduce/introduce';

const RootStack = createStackNavigator(
    {
        Login: {screen: Login},
        Introduce: {screen: Introduce},
    },
    {
        initialRouteName: 'Login',
    }
);

export default class App extends Component {
    render() {
        return <RootStack/>;
    }
};
