import fs from 'fs';
import path from 'path';

const srcAssetsDir = path.join(process.cwd(), 'src', 'assets');
const srcImagesDir = path.join(srcAssetsDir, 'images');

const publicMePath = path.join(process.cwd(), 'public', 'me.jpg');
const publicImagesDir = path.join(process.cwd(), 'public', 'images');

try {
  // Create directories
  if (!fs.existsSync(srcAssetsDir)) {
    fs.mkdirSync(srcAssetsDir, { recursive: true });
    console.log('Created src/assets directory');
  }
  if (!fs.existsSync(srcImagesDir)) {
    fs.mkdirSync(srcImagesDir, { recursive: true });
    console.log('Created src/assets/images directory');
  }

  // Copy me.jpg
  const targetMePath = path.join(srcAssetsDir, 'me.jpg');
  if (fs.existsSync(publicMePath)) {
    fs.copyFileSync(publicMePath, targetMePath);
    console.log('Copied me.jpg to src/assets/me.jpg');
  } else {
    console.warn('Warning: public/me.jpg not found');
  }

  // Copy all project mockups
  if (fs.existsSync(publicImagesDir)) {
    const files = fs.readdirSync(publicImagesDir);
    files.forEach(file => {
      const srcFile = path.join(publicImagesDir, file);
      const destFile = path.join(srcImagesDir, file);
      fs.copyFileSync(srcFile, destFile);
      console.log(`Copied ${file} to src/assets/images/${file}`);
    });
  } else {
    console.warn('Warning: public/images/ directory not found');
  }

  console.log('Asset synchronization completed successfully!');
} catch (error) {
  console.error('Error synchronizing assets:', error);
}
