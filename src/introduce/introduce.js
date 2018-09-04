import React, {Component} from 'react';
import {Text, View} from 'react-native';

type Props = {};
export default class Introduce extends Component<Props> {
    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>Introduce</Text>
            </View>
        );
    }
}
