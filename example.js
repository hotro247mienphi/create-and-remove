const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.setViewport({
      width: 1440,
      height: 900,
      deviceScaleFactor: 1
  });
  await page.goto('https://vnexpress.net/');
  await page.screenshot({path: 'screenshort/vnexpress.png', fullPage: true});

  await browser.close();
})();