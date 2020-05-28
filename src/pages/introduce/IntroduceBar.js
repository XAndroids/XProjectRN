import React, {Component} from 'react'
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native'
import PropTypes from 'prop-types'
import {Indicator} from '../../components'
import {getWindowsWidth} from '../../utils'

/**
 * 介绍页面底部栏，负责ViewPager指示器和导航按钮
 */
export default class IntroduceBar extends Component {

    constructor(props) {
        super(props);

        this._onSkipPress = this._onSkipPress.bind(this);
        this._onNextPress = this._onNextPress.bind(this);
        this._onDonePress = this._onDonePress.bind(this);
    }

    render() {
        const {showPageCount, showPageIndex, style} = this.props;

        return (
            <View style={[style, {
                flexDirection: 'row',
                alignItems: 'center',
                height: 50,
                width: getWindowsWidth()
            }]}>
                {this._renderLeftButton()}
                <Indicator circleCount={showPageCount} currentIndex={showPageIndex}/>
                {this._renderRightButton()}
            </View>
        )
    }

    _renderLeftButton() {
        const {showPageIndex} = this.props;

        if (showPageIndex === 0 || showPageIndex === 1) {
            return (
                <TouchableOpacity testID={'introduce_button_skip'} style={styles.touchable} onPress={this._onSkipPress}>
                    <Text testID='skip' style={[styles.text, {alignSelf: 'flex-start', marginLeft: 30}]}>SKIP</Text>
                </TouchableOpacity>
            );
        } else if (showPageIndex === 2) {
            return (
                <View style={{flex: 1}}/>
            );
        }
    }

    _renderRightButton() {
        const {showPageIndex} = this.props;

        if (showPageIndex === 0 || showPageIndex === 1) {
            return (
                <TouchableOpacity testID={'introduce_button_next'} style={styles.touchable} onPress={this._onNextPress}>
                    <Image style={{alignSelf: 'flex-end', width: 50, height: 50}}
                           source={require('../../../img/introduce_nextbutton_background.png')}/>
                </TouchableOpacity>
            );
        } else if (showPageIndex === 2) {
            return (
                <TouchableOpacity style={styles.touchable} onPress={this._onDonePress}>
                    <Text style={[styles.text, {alignSelf: 'flex-end', marginRight: 30}]}>DONE</Text>
                </TouchableOpacity>
            );
        }

    }

    _onSkipPress() {
        this.props.navigation.navigate('Main');
    }

    _onNextPress() {
        this.props.onNextPress(this.props.showPageIndex + 1);
    }

    _onDonePress() {
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
