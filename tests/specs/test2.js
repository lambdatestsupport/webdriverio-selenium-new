const assert = require('assert');

describe('Google Search Function', () => {
    it('can find search results', async () => {
        await browser.url('https://www.lambdatest.com/capabilities-generator/');

        await browser.pause(5000);


        await browser.keys(['Shift', 'Tab']);
        await browser.pause(5000);
        await browser.keys('Tab');
        await browser.pause(5000);
        await browser.keys('Tab');
        await browser.keys('NULL');
        await browser.pause(5000);
        await browser.keys('Enter');

        // await browser.keys(['Shift', 'Tab']);
        // await browser.pause(5000);
        // await browser.keys(['Shift', 'Tab']);
        // await browser.pause(5000);
        // await browser.keys(['Shift', 'Tab']);
        // await browser.keys('NULL');
        // await browser.pause(5000);
        // await browser.keys('Enter');


        //const title = await browser.getTitle();
        await browser.pause(5000);
        //assert.equal(title, 'Google');
    });
});