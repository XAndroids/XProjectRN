package com.xprojectreact.cardview;

import android.graphics.Color;
import android.support.v7.widget.CardView;
import android.view.View;

import com.facebook.react.uimanager.PixelUtil;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.ViewGroupManager;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.views.view.ReactViewGroup;

/**
 * 组件的原生实现，并且把react-native组件的属性映射到原生属性
 */
public class CardViewManager extends ViewGroupManager<CardView> {
    @Override
    public String getName() {
        return "CardView";
    }

    @Override
    protected CardView createViewInstance(ThemedReactContext reactContext) {
        CardView cardView = new CardView(reactContext);
        cardView.setUseCompatPadding(true);
        cardView.setPreventCornerOverlap(false);
        cardView.setContentPadding(0, 0, 0, 0);

        //添加carview容器内子组件
        ReactViewGroup reactViewGroup = new ReactViewGroup(reactContext);
        cardView.addView(reactViewGroup);
        return cardView;
    }

    @ReactProp(name = "cardElevation", defaultFloat = 0f)
    public void setCardElevation(CardView view, float cardElevation) {
        view.setCardElevation(PixelUtil.toPixelFromDIP(cardElevation));
    }

    @ReactProp(name = "maxCardElevation", defaultFloat = 0f)
    public void setMaxCardElevation(CardView view, float maxCardElevation) {
        view.setMaxCardElevation(PixelUtil.toPixelFromDIP(maxCardElevation));
    }

    @ReactProp(name = "radius", defaultFloat = 0f)
    public void setRadius(CardView view, float radius) {
        view.setRadius(PixelUtil.toPixelFromDIP(radius));
    }

    @ReactProp(name = "backgroundColor")
    public void setBackgroundColor(CardView view, String color) {
        view.setCardBackgroundColor(Color.parseColor(color == null || color.trim().equals("") ? "#ffffff" : color));
    }

    @Override
    public View getChildAt(CardView parent, int index) {
        //获取容器内子组件
        View content = parent.getChildAt(0);
        if (content instanceof ReactViewGroup) {
            return ((ReactViewGroup) content).getChildAt(index);
        }
        return null;
    }

    @Override
    public int getChildCount(CardView parent) {
        //获取容器内子组件个数
        View content = parent.getChildAt(0);
        if (content instanceof ReactViewGroup) {
            return ((ReactViewGroup) content).getChildCount();
        }
        return 0;
    }


    @Override
    public void addView(CardView parent, View child, int index) {
        //向容器内添加子组件
        View content = parent.getChildAt(0);
        if (content instanceof ReactViewGroup) {
            ((ReactViewGroup) content).addView(child, index);
        }
    }

    @Override
    public void removeViewAt(CardView parent, int index) {
        //移除容器内子组件
        View content = parent.getChildAt(0);
        if (content instanceof ReactViewGroup) {
            ((ReactViewGroup) content).removeViewAt(index);
        }
    }

    @Override
    public void removeAllViews(CardView parent) {
        //移除容器内所有子组件
        View content = parent.getChildAt(0);
        if (content instanceof ReactViewGroup) {
            ((ReactViewGroup) content).removeAllViews();
        }
    }
}
