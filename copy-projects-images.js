import fs from 'fs';
import path from 'path';

const filesToCopy = [
  {
    source: 'C:\\Users\\Octavio\\.gemini\\antigravity\\brain\\8066219f-5781-4fe6-b9df-faaab89513ee\\inventory_mockup_1780092521814.png',
    destName: 'inventory_mockup.png'
  },
  {
    source: 'C:\\Users\\Octavio\\.gemini\\antigravity\\brain\\8066219f-5781-4fe6-b9df-faaab89513ee\\flyreserve_mockup_1780092631690.png',
    destName: 'flyreserve_mockup.png'
  },
  {
    source: 'C:\\Users\\Octavio\\.gemini\\antigravity\\brain\\8066219f-5781-4fe6-b9df-faaab89513ee\\certiwebs_mockup_1780092716634.png',
    destName: 'certiwebs_mockup.png'
  },
  {
    source: 'C:\\Users\\Octavio\\.gemini\\antigravity\\brain\\48d7783d-cccc-4f6f-a844-d02d13fc4add\\media__1780105808935.jpg',
    destName: 'nutriweb_mockup.jpg'
  }
];

const targetDir = path.join(process.cwd(), 'public', 'images');

try {
  // Create public/images directory if it doesn't exist
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
    console.log('Created directory: ' + targetDir);
  }

  filesToCopy.forEach((file) => {
    if (fs.existsSync(file.source)) {
      const destPath = path.join(targetDir, file.destName);
      fs.copyFileSync(file.source, destPath);
      console.log(`Successfully copied: ${file.destName} -> ${destPath}`);
    } else {
      console.warn(`Warning: Source file not found at ${file.source}`);
    }
  });

  console.log('All project mockups copied successfully!');
} catch (err) {
  console.error('Error copying project mockup images:', err);
}
