const assert = require('assert');

describe('Google Search Function', () => {
  it('can find search results', async () => {
    await browser.url('https://www.google.co.in/');
    // const prompt = await $('[id="L2AGLb"]'); // consent popup is coming for other location which needs to be accepted to proceed
    // if(prompt.elementId)
    //   await prompt.click();
    const input = await $('[name="q"]');
    //console.log("*************************************");
    //await input.moveTo({ xOffset: 10, yOffset: 10 });
    //console.log("*************************************");

    await browser.pause(5000);


    const actions = [
      {
        type: 'pointerMove',
        x: 300,
        y: 300,
        duration: 100,
        origin: 'viewport'
      }
    ];    
    
    await input.performActions([
      {
        type: 'pointer',
        id: 'pointer1',
        parameters: { pointerType: 'mouse' },
        actions: actions
      }
    ]);

    await browser.pause(5000);
   

    //await input.setValue('test123');

    // await browser.keys(['Shift', 'Tab']);
    // await browser.pause(5);
    // await browser.keys('Tab');
    // await browser.pause(5000);
    // await browser.keys('Tab');
    // //await browser.keys('NULL');
    // await browser.pause(5000);
    // //await browser.keys('Enter');


    const title = await browser.getTitle();
    await browser.pause(5000);
    assert.equal(title, 'Google');
  });
});