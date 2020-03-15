import React, {Component} from 'react';
import {View, Platform} from 'react-native';
import XViewPager from '../component/viewpager/XViewPager';
import IntroducePage from './IntroducePage';
import IntroduceBar from './IntroduceBar';
import {getWindowsWidth} from '../utils/Devices';

/**
 * 介绍页面
 */
export default class Introduce extends Component {
    constructor(props) {
        super(props);

        //异常：Calls to require expect exactly 1 string literal argument
        //require()"前移"到数据源，往后传递资源id
        //参考：https://stackoverflow.com/questions/51994329/calls-to-require-expect-exactly-1-string-literal-argument
        this.pages = [
            {
                title: 'Welcome',
                image: require('../../img/introduce_icon1.png'),
                content: 'Thank you for installing Paperboy.What makes Paperboy different form other news reader apps is its simplicity and elegant design.',
                backgroundColor: '#01A3AE',
            }, {
                title: 'Customizations',
                image: require('../../img/introduce_icon2.png'),
                content: 'We believe that each user is unique and hence several customization options are provided to suit different reading styles.To customize please visit the settings page.',
                backgroundColor: '#4CAF50',
            }, {
                title: 'Reading pattern learner',
                image: require('../../img/introduce_icon3.png'),
                content: 'The home screen tiles will automatically reaarrange based on reading patterns for better user experence.All data is stored locally kepping in mind user privacy.',
                backgroundColor: '#673AB8',
            }
        ];

        this.state = {
            initPageIndex: 0,
            showPageIndex: 0,
        }
    }

    handlePageSwitch(showPageIndex) {
        this.setState({showPageIndex: showPageIndex});
    }

    handleNextPress(showPageIndex) {
        this.setState({showPageIndex: showPageIndex});
        //除了更新showPageIndex后，还需要使用ref手动更新ViewPager页面Switch
        //FIXME 是否能把平台差异封装在ViewPager控件中
        if (Platform.OS === 'android') {
            this.viewPagerElement.setPage(showPageIndex);
        } else {
            this.viewPagerElement.scrollTo({x: getWindowsWidth() * showPageIndex, y: 0});
        }
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <XViewPager initPageIndex={this.state.initPageIndex}
                            showPageIndex={this.state.showPageIndex}
                            onPageSwitch={this.handlePageSwitch.bind(this)}
                            viewPagerRef={el => this.viewPagerElement = el}>
                    {this.pages.map((page, i) => <IntroducePage
                        key={i}
                        title={page.title}
                        image={page.image}
                        content={page.content}
                        backgroundColor={page.backgroundColor}/>)}
                </XViewPager>
                <IntroduceBar style={{position: 'absolute', bottom: 0}}
                              navigation={this.props.navigation}
                              showPageIndex={this.state.showPageIndex}
                              showPageCount={this.pages.length} onNextPress={this.handleNextPress.bind(this)}/>
            </View>
        );
    }
}
