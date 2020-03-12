import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, Platform } from 'react-native';
import PropTypes from 'prop-types';
import { getWindowsWidth, getWindowsHeight } from '../utils/Devices';

/**
 * 定义了Introduce页面ViewPager子页面的内容
 */
export default class IntroducePage extends Component {

    render() {
        return (
            <View style={[styles.page, {
                backgroundColor: this.props.backgroundColor,
                width: getWindowsWidth(),
                height: getWindowsHeight()
            }]}>
                {this.renderText(this.props.title, 28)}
                <Image style={styles.image} source={require('../../img/introduce_icon1.png')} />
                {this.renderText(this.props.content, 16)}
            </View>
        )
    }

    /**
   * 渲染文案，iOS平台Text无法通过textAlignVertical实现字体居中，则使用View容器包裹实现
   * @param {显示的文案} text
   * @param {显示的文案字体大小} fontSize
   */
    renderText(text, fontSize) {
        if (Platform.OS === 'ios') {
            return (
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <Text style={[styles.text, { fontSize: fontSize }]}>{text}</Text>
                </View>);
        } else {
            return (
                <Text style={[styles.text, { fontSize: fontSize }]}>{text}</Text>
            );
        }
    }
}

IntroducePage.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
    page: {
        flex: 1,
        alignItems: 'center'
    },
    text: {
        color: 'white',
        ...Platform.select({
            android: {
                flex: 1,
                textAlign: 'center',
                textAlignVertical: 'center',
            },
        }),
    },
    image: {
        flex: 1,
    },
});

