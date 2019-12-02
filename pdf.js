const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({
    width: 1440,
    height: 900,
    deviceScaleFactor: 1
  });
  await page.goto("https://e-web.vn", {
    waitUntil: "networkidle2"
  });
  await page.pdf({
    path: "pdf/export.pdf",
    format: "A4"
  });

  await browser.close();
})();
