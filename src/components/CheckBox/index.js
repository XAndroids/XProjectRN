import React from 'react'
import {TouchableOpacity, Image} from 'react-native'

import PropTypes from "prop-types";

//函数式组件:XCheckBox
//参考：https://github.com/XLibrarySources/react-native-elements/blob/next/src/checkbox/CheckBox.js
const CheckBox = (props) => {
    const icon = props.isChecked ? props.checkedIcon : props.uncheckedIcon;

    return (
        <TouchableOpacity onPress={props.onCheckedChange}>
            <Image testID={'checkbox_image'} style={[props.style]} source={icon}/>
        </TouchableOpacity>
    );
};

CheckBox.propTypes = {
    isChecked: PropTypes.bool.isRequired,//没有默认值，都声明呈required
    checkedIcon: PropTypes.object.isRequired,//FIXME 这是用PropTypes.object检测是否合适？？
    uncheckedIcon: PropTypes.object.isRequired,
    onCheckedChange: PropTypes.func
};

export default CheckBox
