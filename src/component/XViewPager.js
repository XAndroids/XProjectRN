import React, { Component } from 'react';
import { StyleSheet, View, ViewPagerAndroid, ScrollView, Platform, Dimensions } from "react-native";

/**
 * 根据android和ios系统的差异，分别使用RN的ViewPagerAndroid和ScrollView实现了Android ViewPager的组件效果
 */
export default class XViewPager extends Component {
    //声明并初始化State
    state = {
        initialIndex: this.props.initialIndex,
    };

    render() {
        //根据平台差异，使用ViewPagerAndroid和ScrollView来实现
        if (Platform.OS === 'android') {
            return this.renderAndroid();
        } else {
            return this.renderIOS();
        }
    }

    renderAndroid() {
        return (
            //使用ViewPagerAndroid在Android平台渲染
            <ViewPagerAndroid
                initialPage={this.state.initialIndex}
                style={[styles.viewpager, this.props.style]}>
                {this.renderContent()}
            </ViewPagerAndroid>
        );
    }

    renderIOS() {
        let screenWidth = Dimensions.get('window').width;

        return (
            //使用ScrollView在iOS平台上渲染
            <ScrollView
                style={[styles.viewpager, this.props.style]}
                contentOffset={{ x: this.state.width * this.state.initialIndex, y: 0 }}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                pagingEnabled={true}>
                {this.renderContent()}
            </ScrollView>
        );
    }

    renderContent(width, height) {
        //FIXME 外面和里面多了一层View
        return React.Children.map(this.props.children, (child, i) => {
            return (
                child
            );
        });
    }
}


var styles = StyleSheet.create({
    viewpager: {
        flex: 1,
    },
});
