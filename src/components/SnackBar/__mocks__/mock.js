import {NativeModules} from 'react-native';
//参考：https://stackoverflow.com/questions/41339996/how-to-test-a-react-native-component-that-imports-a-custom-native-module-with-je?rq=1
NativeModules.RNSnackbar = {
    "LENGTH_SHORT": -1,
    "LENGTH_INDEFINITE": -2,
    "LENGTH_LONG": 0
};
