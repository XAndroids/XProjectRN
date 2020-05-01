exports.openPublisherPage = async () => {
    await element(by.id('trybutton')).tap();
    await element(by.text('SKIP')).tap();
    await element(by.text('To Publishers')).tap();
};
