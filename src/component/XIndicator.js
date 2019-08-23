import React, { Component } from 'react'
import { StyleSheet, View } from "react-native";
import PropTypes from 'prop-types';

export default class XIndicator extends Component {
    render() {
        let circles = [];
        for (let i = 0; i < this.props.circleCount; i++) {
            let style = styles.circle;
            if (i == this.props.currentIndex) {
                style = [styles.circle, styles.circleSelected];
            }
            circles.push(<View style={style} key={i} />);
        }

        return (
            <View style={styles.circleContainer}>
                {circles}
            </View>
        )
    }
}

XIndicator.propTypes = {
    circleCount: PropTypes.number,
    currentIndex: PropTypes.number,
}

const styles = StyleSheet.create({
    circleContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    circle: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#fff',
        marginHorizontal: 5
    },
    circleSelected: {
        backgroundColor: '#0f0'
    }
});