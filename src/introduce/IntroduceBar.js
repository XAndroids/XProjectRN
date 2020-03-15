import React, {Component} from 'react'
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import XIndicator from '../component/XIndicator';
import {getWindowsWidth} from '../utils/Devices';

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
        return (
            <View style={[this.props.style, {
                flexDirection: 'row',
                alignItems: 'center',
                height: 50,
                width: getWindowsWidth()
            }]}>
                {this.renderLeftButton()}
                <XIndicator circleCount={this.props.showPageCount} currentIndex={this.props.showPageIndex}/>
                {this.renderRightButton()}
            </View>
        )
    }

    renderLeftButton() {
        if (this.props.showPageIndex === 0 || this.props.showPageIndex === 1) {
            return (
                <TouchableOpacity style={styles.touchable} tonPress={this.onSkipPress}>
                    <Text style={[styles.text, {alignSelf: 'flex-start', marginLeft: 30}]}>SKIP</Text>
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
                <TouchableOpacity style={styles.touchable} onPress={this.onNextPress}>
                    <Image style={{alignSelf: 'flex-end', width: 50, height: 50}}
                           source={require('../../img/introduce_nextbutton_background.png')}/>
                </TouchableOpacity>
            );
        } else if (this.props.showPageIndex === 2) {
            return (
                <TouchableOpacity style={styles.touchable} onPress={this.onDonePress}>
                    <Text style={[styles.text, {alignSelf: 'flex-end', marginRight: 30}]}>DONE</Text>
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

const styles = StyleSheet.create({
    text: {
        color: 'white'
    },
    touchable: {
        flex: 1
    }
});
