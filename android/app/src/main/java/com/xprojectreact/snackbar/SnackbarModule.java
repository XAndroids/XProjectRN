package com.xprojectreact.snackbar;

import android.graphics.Color;
import android.os.Build;
import android.support.design.widget.Snackbar;
import android.view.View;
import android.view.ViewGroup;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableMap;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * 创建SnackbarModule
 */
public class SnackbarModule extends ReactContextBaseJavaModule {
    private static final String REACT_NAME = "RNSnackbar";
    //当前页面的Snackbar集合
    private List<Snackbar> mActiveSnackbars = new ArrayList<>();

    SnackbarModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return REACT_NAME;
    }

    @Override
    public Map<String, Object> getConstants() {
        //暴露给JavaScript的Java常量
        final Map<String, Object> constants = new HashMap<>();
        constants.put("LENGTH_LONG", Snackbar.LENGTH_LONG);
        constants.put("LENGTH_SHORT", Snackbar.LENGTH_SHORT);
        constants.put("LENGTH_INDEFINITE", Snackbar.LENGTH_INDEFINITE);
        return constants;
    }

    @ReactMethod
    public void show(ReadableMap options, final Callback callback) {
        //获取当前页面视图结构的content ViewGroup
        ViewGroup view;
        try {
            view = getCurrentActivity().getWindow().getDecorView().findViewById(android.R.id.content);
        } catch (Exception e) {
            e.printStackTrace();
            return;
        }
        if (view == null) return;

        //清除页面现有的Snackbar
        mActiveSnackbars.clear();

        //这个content ViewGroup没有获取焦点，我们应该获取所有屏幕中的modal，并在modal上显示Snackbar
        if (!view.hasWindowFocus()) {
            ArrayList<View> modals = recursiveLoopChildren(view, new ArrayList<View>());
            for (View modal : modals) {
                if (modal == null) continue;
                displaySnackbar(modal, options, callback);
            }
            return;
        }

        displaySnackbar(view, options, callback);
    }

    /**
     * 循环遍历所有孩子modal并保存他们的引用
     */
    private ArrayList<View> recursiveLoopChildren(ViewGroup view, ArrayList<View> modals) {
        //如果该view是ReactModalHostView，则保存第一个孩子即Modal
        if (view.getClass().getSimpleName().equalsIgnoreCase("ReactModalHostView")) {
            modals.add(view.getChildAt(0));
        }

        //递归孩子节点，寻找Modal视图
        for (int i = view.getChildCount() - 1; i >= 0; i--) {
            final View child = view.getChildAt(i);
            if (child instanceof ViewGroup) {
                recursiveLoopChildren((ViewGroup) child, modals);
            }
        }

        return modals;
    }

    /**
     * 显示Snackbar
     */
    private void displaySnackbar(View view, ReadableMap options, final Callback callback) {
        //获取Snackbar的text和duration等参数，并创建Snackbar
        String text = getOptionValue(options, "text", "");
        int duration = getOptionValue(options, "duration", Snackbar.LENGTH_SHORT);
        boolean rtl = getOptionValue(options, "rtl", false);
        Snackbar snackbar = Snackbar.make(view, text, duration);

        //在指定版本设置snackbarView的视图属性
        View snackbarView = snackbar.getView();
        if (rtl && Build.VERSION.SDK_INT >= Build.VERSION_CODES.JELLY_BEAN_MR1) {
            snackbarView.setLayoutDirection(View.LAYOUT_DIRECTION_RTL);
            snackbarView.setTextDirection(View.TEXT_DIRECTION_RTL);
        }
        mActiveSnackbars.add(snackbar);
        //如果存在背景颜色，则设置背景颜色
        if (options.hasKey("backgroundColor")) {
            snackbarView.setBackgroundColor(options.getInt("backgroundColor"));
        }
        //如果存在action则执行ation，text和textColor
        if (options.hasKey("action")) {
            ReadableMap actionOptions = options.getMap("action");
            String actionText = getOptionValue(actionOptions, "text", "");
            int actionTextColor = getOptionValue(actionOptions, "textColor", Color.WHITE);
            View.OnClickListener onClickListener = new View.OnClickListener() {
                //防止多次点击导致的崩溃
                boolean callbackWasCalled = false;

                @Override
                public void onClick(View v) {
                    if (callbackWasCalled) return;
                    callbackWasCalled = true;
                    callback.invoke();
                }
            };

            snackbar.setAction(actionText, onClickListener);
            snackbar.setActionTextColor(actionTextColor);
        }

        //展示Snackbar
        snackbar.show();
    }

    private String getOptionValue(ReadableMap options, String key, String fallback) {
        return options.hasKey(key) ? options.getString(key) : fallback;
    }

    private int getOptionValue(ReadableMap options, String key, int fallback) {
        return options.hasKey(key) ? options.getInt(key) : fallback;
    }

    private boolean getOptionValue(ReadableMap options, String key, boolean fallback) {
        return options.hasKey(key) ? options.getBoolean(key) : fallback;
    }

    @ReactMethod
    public void dismiss() {
        for (Snackbar snackbar : mActiveSnackbars) {
            if (snackbar != null) {
                snackbar.dismiss();
            }
        }

        mActiveSnackbars.clear();
    }
}
