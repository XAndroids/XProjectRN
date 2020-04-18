import React, {Component} from 'react'
import {View, Text, Image, StyleSheet, Platform} from 'react-native'
import PropTypes from 'prop-types'
import {getWindowsWidth, getWindowsHeight} from '../../utils'

/**
 * 定义了Introduce页面ViewPager子页面的内容
 */
export default class IntroducePage extends Component {

    render() {
        const {backgroundColor, title, content, image} = this.props;

        return (
            <View style={[styles.page, {
                backgroundColor: backgroundColor,
                width: getWindowsWidth(),
                height: getWindowsHeight()
            }]}>
                {this._renderText(title, 28, 'center', 'center')}
                <Image style={{flex: 1}} source={image}/>
                {this._renderText(content, 16, 'flex-end', 'bottom')}
                <View style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.1)',
                    height: 1,
                    width: getWindowsWidth(),
                    marginBottom: 50,
                    marginTop: 20
                }}/>
            </View>
        )
    }

    _renderText(text, fontSize, justifyContent, textAlignVertical) {
        if (Platform.OS === 'ios') {
            return (
                //渲染文案，iOS平台Text无法通过textAlignVertical实现字体居中，则使用View容器包裹实现
                <View style={{flex: 1, justifyContent: justifyContent}}>
                    <Text style={[styles.text, {fontSize: fontSize}]}>{text}</Text>
                </View>);
        } else {
            return (
                <Text style={[styles.text, {
                    fontSize: fontSize,
                    textAlignVertical: textAlignVertical
                }]}>{text}</Text>
            );
        }
    }
}

IntroducePage.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.number.isRequired,
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
        textAlign: 'center',
        ...Platform.select({
            android: {
                flex: 1
            },
        }),
    }
});

