import React, {Component} from 'react'
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import XIndicator from '../component/XIndicator';
import {getWindowsWidth, getWindowsHeight} from '../utils/Devices';

/**
 * 介绍页面底部栏，负责ViewPager指示器和导航按钮
 */
export default class IntroduceBar extends Component {

    constructor(props) {
        super(props);

        this.onSkipPress = this.onSkipPress.bind(this);
        this.onNextPress = this.onNextPress.bind(this);
        this.onDonePress = this.onDonePress.bind(this);
    }

    render() {
        console.log('Bar render');

        return (
            <View style={[this.props.style, {flexDirection: 'row'}]}>
                {this.renderLeftButton()}
                <XIndicator style={{flex: 1}} circleCount={this.props.showPageCount}
                            currentIndex={this.props.showPageIndex}/>
                {this.renderRightButton()}
            </View>
        )
    }

    renderLeftButton() {
        if (this.props.showPageIndex === 0 || this.props.showPageIndex === 1) {
            return (
                <TouchableOpacity style={{flex: 1}} tonPress={this.onSkipPress}>
                    <Text>Skip1</Text>
                </TouchableOpacity>
            );
        } else if (this.props.showPageIndex === 2) {
            return (
                <View style={{flex: 1}}/>
            );
        }
    }

    renderRightButton() {
        if (this.props.showPageIndex === 0 || this.props.showPageIndex === 1) {
            return (
                <TouchableOpacity style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}}
                                  onPress={this.onNextPress}>
                    <Text>Next</Text>
                </TouchableOpacity>
            );
        } else if (this.props.showPageIndex === 2) {
            return (
                <TouchableOpacity style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}}
                                  onPress={this.onDonePress}>
                    <Text>Done</Text>
                </ TouchableOpacity>
            );
        }

    }

    onSkipPress() {
        this.props.navigation.navigate('Main');
    }

    onNextPress() {
        this.props.onNextPress(this.props.showPageIndex + 1);
    }

    onDonePress() {
        this.props.navigation.navigate('Main');
    }
}

IntroduceBar.propTypes = {
    showPageIndex: PropTypes.number,
    showPageCount: PropTypes.number,
    onNextPress: PropTypes.func
};

IntroduceBar.defaultProps = {
    showPageIndex: 0,
    showPageCount: 0,
};
