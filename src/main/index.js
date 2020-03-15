import React, {Component} from 'react'
import {View, Text, TouchableOpacity} from 'react-native'

/**
 * 主页面
 */
export default class Main extends Component {
    constructor(props) {
        super(props);
        this.onPublisherPress = this.onPublisherPress.bind(this);
    }

    render() {
        return (
            <View style={{flex: 1, flexDirection: 'column'}}>
                <Text>Main</Text>
                <TouchableOpacity onPress={this.onPublisherPress}>
                    <Text>To Publishers</Text>
                </TouchableOpacity>
            </View>
        )
    }

    onPublisherPress() {
        this.props.navigation.navigate('Publisher');
    }
}
