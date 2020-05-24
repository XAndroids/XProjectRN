describe('Login', () => {
    beforeEach(async () => {
        await device.reloadReactNative();
    });

    //Detox目前提供的Expect API不丰富，无法像Espresso一样验证背景图、颜色等样式方面的验证
    it('should login page show', async () => {
        //Login根视图可见
        await expect(element(by.id('loginroot'))).toBeVisible();

        //图片显示成功
        await expect(element(by.id('loginimage'))).toBeVisible();

        //Login按钮可见，并且展示LOGIN TO FEEDLY文案
        await expect(element(by.id('loginbutton'))).toBeVisible();
        await expect(element(by.id('logintext'))).toBeVisible();
        await expect(element(by.id('logintext'))).toHaveText('LOGIN TO FEEDLY');

        //Try按钮可见，并且展示TRY THINGS OUT文案
        await expect(element(by.id('trybutton'))).toBeVisible();
        await expect(element(by.id('trytext'))).toBeVisible();
        await expect(element(by.id('trytext'))).toHaveText('TRY THINGS OUT');
    });

    it('should click loginbutton show dialog', async () => {
        //点击login按钮，Dialog弹起
        //通过byText()查找按钮
        await element(by.text('LOGIN TO FEEDLY')).tap();
        await expect(element(by.text('You tapped the button!'))).toBeVisible();

        //点击ok按钮，Dialog小时
        await element(by.text('OK')).tap();
        await expect(element(by.text('You tapped the button!'))).toBeNotVisible();
    });

    it('should click trybutton to introduce', async () => {
        //点击Try按钮，跳转Introduce页面
        await element(by.text('TRY THINGS OUT')).tap();
        await expect(element(by.text('Welcome'))).toBeVisible();
        await expect(element(by.text('Thank you for installing Paperboy.What makes Paperboy different form other ' +
            'news reader apps is its simplicity and elegant design.'))).toBeVisible();
    });
});
