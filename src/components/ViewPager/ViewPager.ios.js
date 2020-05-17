import React, {Component} from 'react'
import {ScrollView} from "react-native"
import PropTypes from 'prop-types'
import {getWindowsWidth} from '../../utils'
import {styles} from './styles'

export default class ViewPager extends Component {
    render() {
        return (
            //使用ScrollView在iOS平台上渲染
            <ScrollView
                ref={this.props.viewPagerRef}
                style={[styles.viewpager, this.props.style]}
                contentOffset={{x: getWindowsWidth() * this.props.initPageIndex, y: 0}}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                pagingEnabled={true}
                onMomentumScrollEnd={this.handlerScrollSwitch.bind(this)}>
                {this.renderContent()}
            </ScrollView>
        );
    }

    renderContent(width, height) {
        return React.Children.map(this.props.children, (child, i) => {
            return child;
        });
    }

    handlerScrollSwitch(event) {
        this.props.onPageSwitch(event.nativeEvent.contentOffset.x / getWindowsWidth())
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

