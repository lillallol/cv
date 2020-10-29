const puppeteer = require("puppeteer");

(async () => {
	const browser = await puppeteer.launch({
		defaultViewport: null,
		headless: true,
	});
	const page = await browser.newPage();
	await page.goto(`file:///${__dirname}/index.html`);
	await page.pdf({
		path: "./cv.pdf",
		format : "Letter"
	});
	await browser.close();
})();
