import React from 'react'
import {View} from 'react-native'
import PropTypes from 'prop-types'
import {styles} from "./styles"

const Indicator = (props) => {
    let circles = [];
    let {currentIndex, circleCount} = props;

    for (let i = 0; i < circleCount; i++) {
        let style = styles.circle;
        if (i === currentIndex) {
            style = [styles.circle, styles.circleSelected];
        }
        circles.push(<View testID={'indicator_view'} style={style} key={i}/>);
    }

    return (
        <View style={styles.circleContainer}>
            {circles}
        </View>
    )
};

Indicator.propTypes = {
    circleCount: PropTypes.number,
    currentIndex: PropTypes.number,
};

export default Indicator
