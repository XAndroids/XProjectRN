describe('Publisher', () => {
    beforeEach(async () => {
        await device.reloadReactNative();
        //进入到Publisher页面
        await element(by.id('trybutton')).tap();
        await element(by.text('SKIP')).tap();
        await element(by.text('To Publishers')).tap();
        //FIXME U2U测试采取如何Mock方式，不然后续test case依赖于Mock数据？？？
    });

    it('should publisher show', async () => {
        //publisher页面目前setTimer起定时任务，Detox检测Timer执行完之后，在执行后续测试命令
        await expect(element(by.text('XProjectReact'))).toBeVisible();
        await expect(element(by.id('publisher_modal_typechoice'))).toBeNotVisible();
        await waitFor(element(by.text('The Tech-mock'))).toBeVisible().withTimeout(23000);
        await expect(element(by.text('月光博客'))).toBeVisible();
    });
});
