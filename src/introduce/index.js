import React, { Component } from 'react';
import { View, Image, Text, Platform, StyleSheet, Dimensions } from 'react-native';
import XViewPager from '../component/XViewPager';
import { getWindowsWidth, getWindowsHeight } from '../utils/Devices';

export default class Introduce extends Component {
    render() {
        return (
            <XViewPager initialIndex={0}>
                {this.renderPage('Welcome',
                    require('../../img/introduce_icon1.png'),
                    'Thank you for installing Paperboy.What makes Paperboy different form other news reader apps is its simplicity and elegant design.',
                    '#01A3AE')}
                {this.renderPage('Customizations',
                    require('../../img/introduce_icon2.png'),
                    'We believe that each user is unique and hence several customization options are provided to suit different reading styles.To customize please visit the settings page.',
                    '#4CAF50')}
                {this.renderPage('Reading pattern learner',
                    require('../../img/introduce_icon3.png'),
                    'The home screen tiles will automatically reaarrange based on reading patterns for better user experence.All data is stored locally kepping in mind user privacy.',
                    '#673AB8')}
            </XViewPager>
        );
    }

    /**
     * 渲染ViewPager子页面的组件
     * @param {介绍标题} title 
     * @param {介绍图片} image 
     * @param {介绍内容} content 
     * @param {页面背景颜色} background 
     */
    renderPage(title, image, content, background) {
        return (
            <View style={[styles.page, {
                backgroundColor: background, width: getWindowsWidth(),
                height: getWindowsHeight(),
            }]}>
                {this.renderText(title, 28)}
                <Image style={styles.image} source={image} />
                {this.renderText(content, 16)}
            </View>
        );
    }

    /**
     * 渲染文案，iOS平台Text无法通过textAlignVertical实现字体居中，则使用View容器包裹实现
     * @param {文案内容} text 
     * @param {文案字体大小} fontSize 
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
