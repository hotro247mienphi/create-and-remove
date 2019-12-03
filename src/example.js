const viewPort = { width: 1280, height: 800 }
const options = {
  path: 'src/assets/screenshot/clipped_stocktickers.png',
  fullPage: false,
  clip: {
    x: 300,
    y: 150,
    width: 680,
    height: 250
  }
}

const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.setViewport(viewPort)
  await page.goto('https://google.com')
  await page.screenshot(options)
  await browser.close()
})()
