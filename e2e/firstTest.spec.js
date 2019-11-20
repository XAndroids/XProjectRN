describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have login text', async () => {
    await expect(element(by.id('login'))).toBeVisible();
  });

  it('should have try text', async () => {
    await expect(element(by.id('try'))).toBeVisible();
  });
});
