import React, {Component} from 'react';
import {StyleSheet, View, ViewPagerAndroid, ScrollView, Platform} from "react-native";

/**
 * 根据android和ios系统的差异，分别使用RN的ViewPagerAndroid和ScrollView实现了Android ViewPager的组件效果
 */
export default class ViewPager extends Component {
    //声明并初始化State
    state = {
        width: 0,
        height: 0,
        initialIndex: this.props.initialIndex,
    };

    constructor(props: Props) {
        super(props);
        //声明实例属性，并且绑定事件
        this.adjustCardSize = this.adjustCardSize.bind(this);
    }

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
        return (
            //使用ScrollView在iOS平台上渲染
            <ScrollView
                style={[styles.viewpager, this.props.style]}
                contentOffset={{x: this.state.width * this.state.initialIndex, y: 0}}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                pagingEnabled={true}
                onLayout={this.adjustCardSize}>
                {this.renderContent()}
            </ScrollView>
        );
    }

    adjustCardSize(e) {
        //当布局改变的时候，重新获取ViewPager组件的宽高，使得子内容组件填充ViewPager组件大小
        this.setState({
            width: e.nativeEvent.layout.width,
            height: e.nativeEvent.layout.height,
        });
    }

    renderContent() {
        const {width, height} = this.state;
        return React.Children.map(this.props.children, (child, i) => (
            <View style={{width, height}}>
                {child}
            </View>
        ));
    }
}


var styles = StyleSheet.create({
    viewpager: {
        flex: 1,
    },
});
