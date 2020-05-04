import React from "react";
import {render} from "react-native-testing-library";
import RadioButton from "../index";

describe('Radio Button property test', () => {
    test('property default outer test', () => {
        //外部元素默认样式测试
        const {getByTestId, queryByTestId} = render(<RadioButton/>);
        const outComponent = getByTestId('radiobutton_touchableopacity_outer');

        //外部元素存在
        expect(getByTestId('radiobutton_touchableopacity_outer')).toBe(outComponent);
        //内部元素不存在
        //getByTestId如果没有元素，throw an error
        expect(() => getByTestId('radiobutton_view_inner')).toThrow('No instances found with props: {\"testID\":\"radiobutton_view_inner\"}');
        //queryByTestId如果没有元素，返回null
        expect(queryByTestId('radiobutton_view_inner')).toBeNull();

        //外部元素默认样式
        const outStyles = outComponent.props.style[2];
        expect(outStyles.borderColor).toBe('#058b7d');
        expect(outStyles.width).toBe(27.2);
        expect(outStyles.height).toBe(27.2);
        expect(outStyles.borderRadius).toBe(13.6);
        expect(outStyles.borderWidth).toBe(2.4);
    });

    test('property default inner test', () => {
        //内部元素默认样式测试
        const {getByTestId} = render(<RadioButton isSelected={true}/>);
        const innerComponent = getByTestId('radiobutton_view_inner');

        //内部元素存在
        expect(getByTestId('radiobutton_view_inner')).toBe(innerComponent);

        //内部元素默认样式
        const innerStyles = innerComponent.props.style;
        expect(innerStyles.width).toBe(16);
        expect(innerStyles.height).toBe(16);
        expect(innerStyles.borderRadius).toBe(8);
        expect(innerStyles.backgroundColor).toBe('#058b7d');
    });

    test('size property test', () => {
        //使用size和isSelected属性渲染RadioButton
        const {getByTestId} = render(<RadioButton size={3} isSelected={true}/>);
        const outComponent = getByTestId('radiobutton_touchableopacity_outer');
        const innerComponent = getByTestId('radiobutton_view_inner');

        //分别验证外部元素size相关样式
        const outStyles = outComponent.props.style[2];
        expect(outStyles.width).toBe(5.1);
        expect(outStyles.height).toBe(5.1);
        expect(outStyles.borderRadius).toBe(2.55);
        expect(outStyles.borderWidth).toBe(0.44999999999999996);

        //分别验证内部元素size相关样式
        const innerStyles = innerComponent.props.style;
        expect(innerStyles.width).toBe(3);
        expect(innerStyles.height).toBe(3);
        expect(innerStyles.borderRadius).toBe(1.5);
    });

    test('innerColor property test', () => {
        const {getByTestId} = render(<RadioButton innerColor={'#ffffff'} isSelected={true}/>);

        const innerComponent = getByTestId('radiobutton_view_inner');
        const innerStyles = innerComponent.props.style;
        expect(innerStyles.backgroundColor).toBe('#ffffff');
    });

    test('outColor property test', () => {
        const {getByTestId} = render(<RadioButton outerColor={'#131313'}/>);
        const outComponent = getByTestId('radiobutton_touchableopacity_outer');
        const outStyles = outComponent.props.style[2];
        expect(outStyles.borderColor).toBe('#131313');
    });

    test('isSelected property test', () => {
        const {getByTestId} = render(<RadioButton isSelected={true}/>);
        const innerComponent = getByTestId('radiobutton_view_inner');
        expect(getByTestId('radiobutton_view_inner')).toBe(innerComponent);

        const {queryByTestId} = render(<RadioButton isSelected={false}/>);
        expect(queryByTestId('radiobutton_view_inner')).toBeNull();
    });
});

describe('Radio Button fun test', () => {
    test('onPress fun test', () => {
        const fn = jest.fn();
        const {getByTestId} = render(<RadioButton onPress={fn}/>);
        const outComponent = getByTestId('radiobutton_touchableopacity_outer');
        outComponent.props.onPress();
        expect(fn).toHaveBeenCalled();
    });
});