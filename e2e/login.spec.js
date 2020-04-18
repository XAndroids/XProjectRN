describe('Login', () => {
  before(async () => {
    console.log("Login before");
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have login text', async () => {
    await expect(element(by.id('login'))).toBeVisible();
  });
});
