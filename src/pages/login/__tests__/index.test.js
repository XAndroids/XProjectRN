import React from "react";
import Login from '../index';
import {render, shallow} from "react-native-testing-library";

describe("login page test", () => {
    it("login page show test", () => {
        const {getByTestId} = render(<Login/>);
        //展示背景图片
        const imageBackground = getByTestId('loginroot')
        //异常：Compared values have no visual difference. Note that you are testing for equality with the stricter `toBe` matcher using `Object.is`. For deep equality only, use `toEqual` instead.
        //如果Check Object使用toEqual()
        //参考：https://jestjs.io/docs/en/using-matchers
        expect(imageBackground.props.style).toEqual({flex: 1, justifyContent: 'center', alignItems: 'center'})
        expect(imageBackground.props.source.testUri).toBe('../../../img/login_background.png')
        //展示登录图片
        const loginImage = getByTestId('loginimage')
        expect(loginImage.props.source.testUri).toBe('../../../img/login_icon.png')
        //展示登录按钮
        const loginButton = getByTestId('loginbutton')
        expect(loginButton.props.style[0]).toEqual({
            width: 250, height: 50, justifyContent: 'center',
            alignItems: 'center'
        })
        expect(loginButton.props.style[1]).toEqual({marginTop: 40, backgroundColor: '#01A3AE'})
        const loginText = getByTestId('logintext')
        expect(loginText.props.style).toEqual({color: 'white'})
        expect(loginText.props.children).toBe('LOGIN TO FEEDLY')

        //展示尝试按钮
        const tryButton = getByTestId('trybutton')
        expect(tryButton.props.style).toEqual([
            {width: 250, height: 50, justifyContent: 'center', alignItems: 'center'},
            {marginTop: 8, backgroundColor: '#AAAAAA'}
        ])
        const tryText = getByTestId('trytext')
        expect(tryText.props.style).toEqual({color: 'white'})
        expect(tryText.props.children).toBe('TRY THINGS OUT')
        //FIXME 不是外部传入的事件如何测试
    })
})

describe("login page Snapshot test", () => {
    it("login page Snapshot test", () => {
        const {toJSON} = render(<Login/>)
        expect(toJSON()).toMatchSnapshot()
    })
})

describe("login page shallow test", () => {
    it("login page shallow test", () => {
        const {output} = shallow(<Login/>)
        expect(output).toMatchSnapshot()
    })
})
