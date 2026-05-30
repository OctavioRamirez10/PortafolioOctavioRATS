import puppeteer from 'puppeteer';

(async () => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800 });
    await page.goto('file:///c:/Users/Octavio/Documents/Nutricionista/index.html', { waitUntil: 'networkidle0' });
    await page.screenshot({ path: 'c:/Users/Octavio/Documents/CVprueba/public/images/nutriweb_mockup.png' });
    await browser.close();
    console.log('Screenshot saved successfully.');
  } catch (error) {
    console.error('Error taking screenshot:', error);
  }
})();
