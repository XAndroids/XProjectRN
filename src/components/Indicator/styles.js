import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
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
