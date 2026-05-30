import { execSync } from 'child_process';
execSync('node copy-projects-images.js', { stdio: 'inherit' });
import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  // Adjust URL if dev server runs on a different port
  await page.goto('http://localhost:4321/print', { waitUntil: 'networkidle0' });
  // Wait for main content to load if needed
  await page.waitForSelector('section');
  // Save PDF to public folder
  await page.pdf({
    path: 'public/cv.pdf',
    format: 'A4',
    printBackground: true,
    margin: { top: '20mm', bottom: '20mm', left: '15mm', right: '15mm' },
  });
  await browser.close();
  console.log('PDF generated at public/cv.pdf');
})();
