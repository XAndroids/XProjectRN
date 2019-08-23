import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';

import Login from './src/login/index';
import Introduce from './src/introduce/index';
import Main from './src/main/index';

const RootStack = createStackNavigator(
    {
        Login: { screen: Login },
        Introduce: { screen: Introduce },
        Main: { screen: Main },
    },
    {
        headerMode: 'none',
        initialRouteName: 'Login',
    }
);

export default class App extends Component {
    render() {
        return <RootStack />;
    }
};
