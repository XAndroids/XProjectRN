describe('Introduce', () => {
    before(async () => {
        console.log("Introduce before");
    });

    beforeEach(async () => {
        await device.reloadReactNative();
        await element(by.id('trybutton')).tap();
    });

    it('should have skip text', async () => {
        await expect(element(by.id('skip'))).toBeVisible();
    });
});
