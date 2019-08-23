import React, { Component } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { getWindowsWidth } from '../utils/Devices';

/**
 * 主页面
 */
export default class Main extends Component {
    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'column' }}>
                <View style={{ flex: 1, backgroundColor: 'powderblue' }}><Text>Item1</Text></View>
                <View style={{ maxHeight: 350, backgroundColor: 'skyblue' }}>
                    <Text>Item2</Text>
                    <Text>Item2</Text>
                    <ScrollView>
                        <Text>Item3</Text>
                        <Text>Item3</Text>
                        <Text>Item3</Text>
                        <Text>Item3</Text>
                        <Text>Item3</Text>
                        <Text>Item3</Text>
                        <Text>Item3</Text>
                        <Text>Item3</Text>
                        <Text>Item3</Text>
                        <Text>Item3</Text>
                        <Text>Item3</Text>
                        <Text>Item3</Text>
                        <Text>Item3</Text>
                        <Text>Item3</Text>
                        <Text>Item3</Text>
                        <Text>Item3</Text>
                        <Text>Item3</Text>
                        <Text>Item3</Text>
                        <Text>Item3</Text>
                        <Text>Item3</Text>
                        <Text>Item3</Text>
                        <Text>Item3</Text>
                        <Text>Item3</Text>
                        <Text>Item3</Text>
                        <Text>Item3</Text>
                        <Text>Item3</Text>
                        <Text>Item3</Text>
                    </ScrollView>
                </View>
            </View >
        )
    }
}
