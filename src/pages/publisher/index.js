import React, {Component} from 'react'
import {View, FlatList, StyleSheet, Alert, Image} from 'react-native'
import {TypeChoiceModal, Toolbar, SnackBar} from '../../components'
import PublisherItem from "./PublisherItem";
import {toolbarActions, contentChoiceList, languagedChoiceList, publisherList} from "./publisherdata"

/**
 * 发布者页面
 */
export default class Publisher extends Component {

    constructor(props) {
        super(props);

        this.state = {
            toolbarTitle: 'XProjectReact',
            toolbarActions: toolbarActions,
            toolBarIsSearch: false,
            typeChoiceModalVisible: false,
            typeChoiceType: '',
            typeChoiceList: [],
            publisherListRefresh: true,
            publisherList: [],
            contentChoiceList: [],
            languagedChoiceList: []
        };

        //异常：this.setState is not a function
        //参考：https://stackoverflow.com/questions/38440925/react-native-this-setstate-is-not-a-function/52183592
        this._onActionSelected = this._onActionSelected.bind(this);
        this._onItemPress = this._onItemPress.bind(this);
        this._onRequestClose = this._onRequestClose.bind(this);
        this._onSelectedTypeChanged = this._onSelectedTypeChanged.bind(this);
        this._onPressBack = this._onPressBack.bind(this);
    }

    componentDidMount() {
        //定时Mock返回发布者数据
        this.timer = setTimeout(
            () => {
                this.setState({
                    publisherListRefresh: false,
                    publisherList: publisherList,
                    contentChoiceList: contentChoiceList,
                    languagedChoiceList: languagedChoiceList
                });

                SnackBar.show({text: "Fetch " + publisherList.length + " publishers..."});
            },
            2000
        );
    }

    render() {
        const {
            typeChoiceModalVisible, typeChoiceList, toolbarTitle, toolbarActions, toolBarIsSearch, publisherList,
            publisherListRefresh
        } = this.state;

        return (
            <View style={styles.container}>
                {/* 内容和语言选择Modal */}
                <TypeChoiceModal visible={typeChoiceModalVisible}
                                 choiceList={typeChoiceList}
                                 onRequestClose={this._onRequestClose}
                                 onSelectedTypeChanged={this._onSelectedTypeChanged}/>
                <View style={[styles.container, {flexDirection: 'column', backgroundColor: 'white'}]}>
                    {/* 标题栏 */}
                    <Toolbar title={toolbarTitle} actions={toolbarActions}
                             isSearch={toolBarIsSearch} onActionSelected={this._onActionSelected}
                             onPressBack={this._onPressBack}/>
                    {/* 发布者列表 */}
                    <FlatList
                        data={publisherList}
                        renderItem={this._renderPublisherItem}
                        keyExtractor={(item, index) => index.toString()}
                        refreshing={publisherListRefresh}
                        onRefresh={this._onRefresh}/>
                </View>
            </View>
        )
    }

    componentWillUnmount() {
        // 如果存在this.timer，则使用clearTimeout清空。
        // 如果你使用多个timer，那么用多个变量，或者用个数组来保存引用，然后逐个clear
        this.timer && clearTimeout(this.timer);
    }

    _onActionSelected(position) {
        let selectedKey = this.state.toolbarActions[position].key;
        if (selectedKey === "001") {
            this.setState({
                toolBarIsSearch: true,
                toolbarTitle: null,
                toolbarActions: toolbarActions.slice(1, 3)
            });
        } else if (selectedKey === "002" && this.state.contentChoiceList.length > 0) {
            this.setState({
                typeChoiceModalVisible: true,
                typeChoiceList: this.state.contentChoiceList,
                typeChoiceType: 'content'
            })
        } else if (selectedKey === "003" && this.state.languagedChoiceList.length > 0) {
            this.setState({
                typeChoiceModalVisible: true,
                typeChoiceList: this.state.languagedChoiceList,
                typeChoiceType: 'language'
            })
        }
    }

    _onPressBack() {
        this.setState({
            toolBarIsSearch: false,
            toolbarTitle: '111',
            toolbarActions: toolbarActions
        });
    }

    _onRequestClose() {
        this.setState({
            typeChoiceModalVisible: false
        });
    }

    _onSelectedTypeChanged(item) {
        const {typeId, name} = item;

        let filterPublisherList = [];
        if (this.state.typeChoiceType === 'content') {
            publisherList.forEach((publisher) => {
                if (publisher.type === typeId) {
                    filterPublisherList.push(publisher);
                }
            });
            contentChoiceList.forEach((content) => {
                content.selected = content.typeId === typeId;
            });
        } else {
            publisherList.forEach((publisher) => {
                if (publisher.language === typeId) {
                    filterPublisherList.push(publisher);
                }
            });
            languagedChoiceList.forEach((language) => {
                language.selected = language.typeId === typeId;
            });
        }

        this.setState({
            toolbarTitle: name,
            publisherList: filterPublisherList,
            typeChoiceModalVisible: false
        }, () => {
            console.log("Fetch " + this.state.publisherList.length + " publishers...");
            //FIXME 在callback中SnackBar就展示不出来
        });

        SnackBar.show({text: "Fetch " + this.state.publisherList.length + " publishers..."});
    }

    _onRefresh = () => {};

    _renderPublisherItem = ({item}) => {
        return (
            <PublisherItem item1={item}
                           onItemPress={this._onItemPress}/>
        )
    };

    _onItemPress(item) {
        const {publisherId, name} = item;

        //State与不可变对象，参考：https://blog.csdn.net/weixin_39939012/article/details/80876022
        //Object.assign()处理数组，参考：https://www.cnblogs.com/tugenhua0707/p/7436685.html
        let selectedPublisher = null;
        let tempPublisherList = Object.assign([], this.state.publisherList);
        tempPublisherList.forEach((publisher) => {
            if (publisher.publisherId === publisherId) {
                selectedPublisher = publisher;
                publisher.isSubscribed = !publisher.isSubscribed;
            }
        });

        this.setState({
            publisherList: tempPublisherList
        });

        if (selectedPublisher.isSubscribed) {
            SnackBar.show({text: name + " selected"});
        } else {
            SnackBar.show({text: name + " unselected"});
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});
