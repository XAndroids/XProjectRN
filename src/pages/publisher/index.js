import React, {Component} from 'react'
import {View, FlatList, StyleSheet, Alert, Image} from 'react-native'
import {TypeChoiceModal, Toolbar, SnackBar} from '../../components'
import PublisherItem from "./PublisherItem";
import {toolbarActions} from "./PublisherData"

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
            typeChoiceIndex: -1,
            publisherListRefresh: true,
            publisherList: [],
            showPublisherList: [],
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
        fetch('http://localhost:9001/publishers')
            .then((response) => response.json())
            .then((json) => {
                this.setState({
                    publisherListRefresh: false,
                    publisherList: json.publisherList,
                    showPublisherList: json.publisherList,
                    contentChoiceList: json.contentChoiceList,
                    languagedChoiceList: json.languagedChoiceList
                });
                SnackBar.show({text: "Fetch " + json.publisherList.length + " publishers..."});
            })
            .catch((error) => console.error(error))
            .finally(() => {
                this.setState({publisherListRefresh: false});
            });
    }

    render() {
        const {
            typeChoiceModalVisible, typeChoiceList, typeChoiceIndex, toolbarTitle, toolbarActions, toolBarIsSearch, showPublisherList,
            publisherListRefresh
        } = this.state;

        return (
            <View style={styles.container}>
                {/* 内容和语言选择Modal */}
                <TypeChoiceModal
                    testID={'publisher_modal_typechoice'}
                    visible={typeChoiceModalVisible}
                    choiceList={typeChoiceList}
                    choiceIndex={typeChoiceIndex}
                    onRequestClose={this._onRequestClose}
                    onSelectedTypeChanged={this._onSelectedTypeChanged}/>
                <View style={[styles.container, {flexDirection: 'column', backgroundColor: 'white'}]}>
                    {/* 标题栏 */}
                    <Toolbar testID={'publisher_toolbar'} title={toolbarTitle} actions={toolbarActions}
                             isSearch={toolBarIsSearch} onActionSelected={this._onActionSelected}
                             onPressBack={this._onPressBack}/>
                    {/* 发布者列表 */}
                    <FlatList
                        testID={'publisher_flatlist_publisherlist'}
                        data={showPublisherList}
                        renderItem={this._renderPublisherItem}
                        keyExtractor={(item, index) => index.toString()}
                        refreshing={publisherListRefresh}
                        onRefresh={this._onRefresh}/>
                </View>
            </View>
        )
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
                typeChoiceIndex: this.state.typeChoiceType === 'language' ? -1 : this.state.typeChoiceIndex,
                typeChoiceType: 'content'
            })

        } else if (selectedKey === "003" && this.state.languagedChoiceList.length > 0) {
            this.setState({
                typeChoiceModalVisible: true,
                typeChoiceList: this.state.languagedChoiceList,
                typeChoiceIndex: this.state.typeChoiceType === 'content' ? -1 : this.state.typeChoiceIndex,
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

    _onSelectedTypeChanged(item, index) {
        const {typeId, name} = item;

        let showPublisherList = [];
        if (this.state.typeChoiceType === 'content') {
            this.state.publisherList.forEach((publisher) => {
                if (publisher.type === typeId) {
                    showPublisherList.push(publisher);
                }
            });
        } else {
            this.state.publisherList.forEach((publisher) => {
                if (publisher.language === typeId) {
                    showPublisherList.push(publisher);
                }
            });
        }

        this.setState({
            toolbarTitle: name,
            typeChoiceIndex: index,
            showPublisherList: showPublisherList,
            typeChoiceModalVisible: false
        }, () => {
            console.log("Fetch " + this.state.showPublisherList.length + " publishers...");
            //FIXME 在callback中SnackBar就展示不出来
        });

        SnackBar.show({text: "Fetch " + this.state.showPublisherList.length + " publishers..."});
    }

    _onRefresh = () => {
    };

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
        let tempShowPublisherList = Object.assign([], this.state.showPublisherList);
        tempShowPublisherList.forEach((publisher) => {
            if (publisher.publisherId === publisherId) {
                selectedPublisher = publisher;
                publisher.isSubscribed = !publisher.isSubscribed;
            }
        });

        this.setState({
            showPublisherList: tempShowPublisherList
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
