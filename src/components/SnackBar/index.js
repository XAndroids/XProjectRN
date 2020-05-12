import {NativeModules, processColor} from 'react-native';


const SnackBar = {
    //常量
    LENGTH_LONG: NativeModules.RNSnackbar.LENGTH_LONG,
    LENGTH_SHORT: NativeModules.RNSnackbar.LENGTH_SHORT,
    LENGTH_INDEFINITE: NativeModules.RNSnackbar.LENGTH_INDEFINITE,
    /**
     * 显示SnackBar
     */
    show(options) {
        const text = options.text;
        const textColorRaw = options.textColor;
        const textColor = textColorRaw && processColor(textColorRaw);
        const backgroundColor = options.backgroundColor && processColor(options.backgroundColor);

        const action = options.action || {};
        const actionText = action.text;
        const actionTextColorRaw = action.textColor;
        const actionTextColor = actionTextColorRaw && processColor(actionTextColorRaw);

        const onPressCallback = action.onPress || (() => {
        });

        const nativeOptions = {
            ...options,
            text,
            textColor,
            backgroundColor,
            action: options.action ? {
                ...action,
                text: actionText,
                textColor: actionTextColor,
            } : undefined,
        };
        console.log(JSON.stringify(NativeModules));
        NativeModules.RNSnackbar.show(nativeOptions, onPressCallback);
    },

    /**
     * 隐藏SnackBar
     */
    dismiss() {
        NativeModules.RNSnackbar.dismiss();
    },
};

export default SnackBar;
