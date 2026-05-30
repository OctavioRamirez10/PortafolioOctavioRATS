import fs from 'fs';
import path from 'path';

const source = 'C:\\Users\\Octavio\\.gemini\\antigravity\\brain\\d3670b42-b26f-41f8-80db-d0a7cdbb8f43\\media__1780005621298.jpg';
const target = path.join(process.cwd(), 'public', 'me.jpg');

try {
  if (fs.existsSync(source)) {
    fs.copyFileSync(source, target);
    console.log('Successfully copied avatar image to: ' + target);
  } else {
    console.warn('Warning: Source avatar image not found at ' + source);
  }
} catch (err) {
  console.error('Error copying avatar image:', err);
}
