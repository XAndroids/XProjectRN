import React from 'react'
import {Image, TextInput, ToolbarAndroid, TouchableOpacity, View} from 'react-native'
import {getWindowsWidth} from '../../utils'
import PropTypes from 'prop-types'

/**
 * Toolbar，Android平台实现
 */
const Toolbar = (props) => {
    return (
        <ToolbarAndroid
            testID={props.testID}
            style={{width: getWindowsWidth(), height: 55, backgroundColor: '#01A3AE'}}
            title={props.title}
            titleColor='white'
            actions={props.actions}
            onActionSelected={props.onActionSelected}>
            {/* 标题栏搜索状态，动态布局搜索框 */}
            {props.isSearch ?
                //FIXME View层级上没有backgroundColor,TextInput的placeholder不显示
                <View style={{flex: 1, flexDirection: 'row', backgroundColor: '#01A3AE'}}>
                    <TouchableOpacity style={{justifyContent: 'center'}}
                                      onPress={props.onPressBack}>
                        <Image source={require('../../../img/ic_action_name.png')}/>
                    </TouchableOpacity>
                    <TextInput style={{flex: 1, marginLeft: 15, fontSize: 18}} placeholder='搜索...'
                               placeholderTextColor='#6cc7cd'/>
                </View> : null}
        </ToolbarAndroid>
    );
};

Toolbar.propTypes = {
    title: PropTypes.string,
    actions: PropTypes.array,
    isSearch: PropTypes.bool,
    onActionSelected: PropTypes.func,
    onPressBack: PropTypes.func
};

export default Toolbar

