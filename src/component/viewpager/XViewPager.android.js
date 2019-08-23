import React, { Component } from 'react';
import { StyleSheet, ViewPagerAndroid, View } from "react-native";
import PropTypes from 'prop-types';
import { styles } from './styles'

export default class XViewPager extends Component {
    render() {
        return (
            //使用ViewPagerAndroid在Android平台渲染
            //FIXME 为什么this.props.showPageIndex刷新了，ViewPagerAndroid页面不更新???
            <ViewPagerAndroid
                ref={this.props.viewPagerRef}
                initialPage={this.props.initPageIndex}
                style={[styles.viewpager, this.props.style]}
                onPageSelected={this.handlerPagerSwitch.bind(this)}>
                {this.renderContent()}
            </ViewPagerAndroid>
        );
    }

    renderContent(width, height) {
        return React.Children.map(this.props.children, (child, i) => {
            return (
                <View>
                    {child}
                </View>
            );
        });
    }

    handlerPagerSwitch(event) {
        this.props.onPageSwitch(event.nativeEvent.position);
    }
}

//FIXME 如何在不同平台复用同样的propTypes、defaultProps和styles
XViewPager.propTypes = {
    showPageIndex: PropTypes.number,
    onPageSwitch: PropTypes.func

}

XViewPager.defaultProps = {
    showPageIndex: 0
}