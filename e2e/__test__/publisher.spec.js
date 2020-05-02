const MockServer = require('../../mock/MockServer');
const {openPublisherPage} = require('../nav_helpers');

describe('Publisher', () => {
    let mockServer = new MockServer();

    before(() => {
        mockServer.init();
    });

    after(() => {
        mockServer.close();
    });

    beforeEach(async () => {
        await device.reloadReactNative();
    });

    it('should publisherlist request success and first show', async () => {
        //修改Mock服务返回列表的长度
        mockServer.setPublisherLength(1);
        //打开Publisher页面
        await openPublisherPage();

        //网络数据成功返回，且为1条
        await expect(element(by.text('The Tech-mock'))).toBeVisible();
        await expect(element(by.text('970601 subscribers'))).toBeVisible();
        await expect(element(by.text('Engadget'))).toBeNotVisible();
        //FIXME SnackBar这种交互如何验证
        // await waitFor(element(by.text('Fetch 1  publishers...'))).toBeVisible().withTimeout(3000);

        //重试Mock服务返回的列表长度
        mockServer.resetPublisherLength();
    });

    it('should publisherlist request success and scroll to end and last item show', async () => {
        //打开Publisher页面
        await openPublisherPage();

        //滑动到类表的底部
        await waitFor(element(by.text('NYT -mock'))).toBeVisible().whileElement(by.id('publisher_flatlist_publisherlist'))
            .scroll(500, 'down');

        //底部数据是否正常展示
        await expect(element(by.text('NYT -mock'))).toBeVisible();
        await expect(element(by.text('Tech-mock'))).toBeNotVisible();
    });

    it("should item click and check item", async () => {
        //FIXME 无法验证选中
    });

    it("should publishertype show and select publishertype", async () => {
        //打开Publisher页面
        await openPublisherPage();
        //通过View Hierarchy日志查找type类型，x,y坐标等信息
        const byType = device.getPlatform() === 'ios' ? null : by.type('android.support.v7.view.menu.ActionMenuItemView');
        await element(byType).atIndex(1).tap();

        //FIXME 为什么modal的testID不生效
        // await waitFor(element(by.id('publisher_modal_typechoice'))).toBeVisible().withTimeout(3000);
        await expect(element(by.text("Select Publisher"))).toBeVisible();
        await expect(element(by.text("Tech"))).toBeVisible();
        await expect(element(by.text("News"))).toBeVisible();
        await expect(element(by.text("Business"))).toBeVisible();

        //FIXME 不进行后续操作，Reload会失败？？
        await element(by.text('Tech')).tap();
        await expect(element(by.text("Select Publisher"))).toBeNotVisible();
        await expect(element(by.text('The Tech-mock'))).toBeVisible();
    });

    it("should languagetype show and select languagetype", async () => {
        //打开Publisher页面
        await openPublisherPage();
        //通过View Hierarchy日志查找type类型，x,y坐标等信息
        const byType = device.getPlatform() === 'ios' ? null : by.type('android.support.v7.view.menu.ActionMenuItemView');
        await element(byType).atIndex(2).tap();

        await expect(element(by.text("Select Publisher"))).toBeVisible();
        await expect(element(by.text("English"))).toBeVisible();

        await element(by.text('中文')).tap();
        await expect(element(by.text("Select Publisher"))).toBeNotVisible();
        await expect(element(by.text("English"))).toBeNotVisible();
        await expect(element(by.text('月光博客'))).toBeVisible();
    });
});
