const fs = require("fs");
const puppeteer = require("puppeteer");
const cheerio = require("cheerio");

(async () => {
  const browser = await puppeteer.launch();

  const page = await browser.newPage();

  await page.goto("https://www.lipsum.com/", { wailUntil: "networkidle2" });

  const html = await page.content();

  await browser.close();

  // fs.writeFileSync("content/vnexpress.net.txt", html, err => console.log(err));

  const $ = cheerio.load(html);
  $("#Panes").each((i, el) => {
    const data = [];
    $(el)
      .find("h2")
      .each((j, h2) => {
        data.push(
          $(h2).text() +
            "\n" +
            $(h2)
              .next()
              .text()
        );
      });

    fs.writeFileSync(
      "assets/content/lorem-ipsum.txt",
      data.join("\n" + "-".repeat(100) + "\n"),
      err => console.log(err)
    );
  });
})();
