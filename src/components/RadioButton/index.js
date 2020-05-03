import React from 'react'
import {TouchableOpacity, View} from 'react-native'
import PropTypes from 'prop-types'
import {styles} from './styles'

const DEFAULT_SIZE_MULTIPLIER = 0.7;
const DEFAULT_OUTER_BORDER_WIDTH_MULTIPLIER = 0.15;
/**
 * 单选按钮
 * 参考：https://github.com/mmazzarolo/react-native-radio-button/blob/master/RadioButton.js
 */
const RadioButton = (props) => {
    const {size, innerColor, outerColor, isSelected, onPress} = props;

    //外圈样式
    const outerStyle = {
        borderColor: outerColor,
        width: size + size * DEFAULT_SIZE_MULTIPLIER,
        height: size + size * DEFAULT_SIZE_MULTIPLIER,
        borderRadius: (size + size * DEFAULT_SIZE_MULTIPLIER) / 2,
        borderWidth: size * DEFAULT_OUTER_BORDER_WIDTH_MULTIPLIER
    };

    //内圈样式
    const innerStyle = {
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor: innerColor
    };

    return (
        <TouchableOpacity testID="radiobutton_touchableopacity_outer" style={[props.style, styles.radio, outerStyle]}
                          onPress={onPress}>
            {isSelected ? <View testID="radiobutton_view_inner" style={innerStyle}/> : null}
        </TouchableOpacity>
    )
};

RadioButton.propTypes = {
    size: PropTypes.number,
    innerColor: PropTypes.string,
    outerColor: PropTypes.string,
    isSelected: PropTypes.bool,
    onPress: PropTypes.func
};

RadioButton.defaultProps = {
    size: 16,
    innerColor: '#058b7d',
    outerColor: '#058b7d',
    isSelected: false,
    onPress: () => null
};

export default RadioButton

