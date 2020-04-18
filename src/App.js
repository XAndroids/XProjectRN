import React, {Component} from 'react'
import {createStackNavigator} from 'react-navigation'

import {Login, Introduce, Main, Publisher} from './pages'

const RootStack = createStackNavigator(
    {
        Login: {screen: Login},
        Introduce: {screen: Introduce},
        Main: {screen: Main},
        Publisher: {screen: Publisher}

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
