package com.xprojectreact.cardview;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;

/**
 * 定义原生模块名
 * 可以直接在javascript中通过React.NativeModules.xxx来访问
 */
public class CardViewModule extends ReactContextBaseJavaModule {

    private final ReactApplicationContext reactContext;

    public CardViewModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;
    }

    @Override
    public String getName() {
        //其中xxx是在RNxxxModule类中定义的getName方法返回值
        return "CardView";
    }
}