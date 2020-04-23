describe('Introduce', () => {
    beforeEach(async () => {
        await device.reloadReactNative();
        //进入到Introduce页面
        await element(by.id('trybutton')).tap();
    });

    it('should page1 show', async () => {
        //检查Page1的内容展示
        await expect(element(by.text('Welcome'))).toBeVisible();
        await expect(element(by.text('Thank you for installing Paperboy.What makes Paperboy different form other news reader apps is its simplicity and elegant design.'))).toBeVisible();
        //检查Page1的底部栏展示
        await expect(element(by.text('SKIP'))).toBeVisible();
        await expect(element(by.id('introduce_button_next'))).toBeVisible();
        await expect(element(by.text('DONE'))).toBeNotVisible();
    });

    it('should page2 show', async () => {
        //滑动ViewPager，展示page2
        //注意，Native的类型，不是ViewPager，查看源码是ReactViewPager
        const byType = device.getPlatform() === 'ios' ? null : by.type('com.facebook.react.views.viewpager.ReactViewPager');
        await element(byType).swipe('left', 'fast', 0.7);

        //检查Page2的内容展示
        await expect(element(by.text('Customizations'))).toBeVisible();
        await expect(element(by.text('We believe that each user is unique and hence several customization options are provided to suit different reading styles.To customize please visit the settings page.'))).toBeVisible();
        //检查Page2的底部栏展示
        await expect(element(by.text('SKIP'))).toBeVisible();
        await expect(element(by.id('introduce_button_next'))).toBeVisible();
        await expect(element(by.text('DONE'))).toBeNotVisible();
    });

    it('should page3 show', async () => {
        //点击Next按钮2次，展示page3
        await element(by.id('introduce_button_next')).multiTap(2);

        //检查Page3的内容展示
        await expect(element(by.text('Reading pattern learner'))).toBeVisible();
        await expect(element(by.text('The home screen tiles will automatically reaarrange based on reading patterns for better user experence.All data is stored locally kepping in mind user privacy.'))).toBeVisible();
        //检查Page3的底部栏展示
        await expect(element(by.text('SKIP'))).toBeNotVisible();
        await expect(element(by.id('introduce_button_next'))).toBeNotVisible();
        await expect(element(by.text('DONE'))).toBeVisible();
    });

    it('should click skip to main', async () => {
        //点击SKIP按钮，直接进入Main页面
        await element(by.text('SKIP')).tap();

        //检查Main页面展示文案Main
        await expect(element(by.text('Main'))).toBeVisible();
    });

    it('should click done to main', async () => {
        //左滑2次，点击DONE按钮，进入Main页面
        const byType = device.getPlatform() === 'ios' ? null : by.type('com.facebook.react.views.viewpager.ReactViewPager');
        //注意不支持一次执行多个动作
        await element(byType).swipe('left', 'fast', 0.7);
        await element(byType).swipe('left', 'fast', 0.7);
        await element(by.text('DONE')).tap();

        //检查Main页面展示文案Main
        await expect(element(by.text('Main'))).toBeVisible();
    });

    it('should swipe to correct page', async () => {
        //点击NEXT按钮2次到page3，右滑到page2
        await element(by.id('introduce_button_next')).multiTap(2);
        const byType = device.getPlatform() === 'ios' ? null : by.type('com.facebook.react.views.viewpager.ReactViewPager');
        await element(byType).swipe('right', 'fast', 0.7);

        //检查page2展示文案Customizations，返回到page2
        await expect(element(by.text('Customizations'))).toBeVisible();
    });
});
