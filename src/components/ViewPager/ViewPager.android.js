import React, { Component } from 'react'
import { ViewPagerAndroid, View } from 'react-native'
import PropTypes from 'prop-types'
import { styles } from './styles'

export default class ViewPager extends Component {
    render() {
        return (
            //使用ViewPagerAndroid在Android平台渲染
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
ViewPager.propTypes = {
    initPageIndex: PropTypes.number,
    onPageSwitch: PropTypes.func
};

ViewPager.defaultProps = {
    initPageIndex: 0
};
