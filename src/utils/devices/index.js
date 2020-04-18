import { Dimensions } from 'react-native'

function getWindowsWidth() {
    return Dimensions.get('window').width;
}

function getWindowsHeight() {
    return Dimensions.get('window').height;
}

export {
    getWindowsWidth,
    getWindowsHeight
};
