import React, {Component} from 'react';
import ViewPager from '../component/ViewPager'
import {Text} from "react-native";

export default class Introduce extends Component {
    render() {
        return (
            <ViewPager initialIndex={1}>
                <Text style={{width: 150, height: 150, backgroundColor: 'powderblue', padding: 100}}>one</Text>
                <Text style={{width: 250, height: 250, backgroundColor: 'skyblue', padding: 100}}>two</Text>
                <Text style={{width: 350, height: 350, backgroundColor: 'steelblue', padding: 100}}>three</Text>
            </ViewPager>
        );
    }
}
