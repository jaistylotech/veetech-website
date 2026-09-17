const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

try {
  require.resolve('sharp');
} catch (e) {
  console.log("Installing sharp...");
  execSync('npm install sharp --no-save --legacy-peer-deps', { stdio: 'inherit' });
}

const sharp = require('sharp');
const dir = 'C:/Users/Cypher/Desktop/UAE/project-veetech-main/public/client-media/after-market/';

const files = [
  'Spareparts management 3.JPG'
];

async function processFiles() {
  for (const file of files) {
    const inputPath = path.join(dir, file);
    if (!fs.existsSync(inputPath)) {
      console.log(`File not found: ${inputPath}`);
      continue;
    }
    
    // Create clean URL-friendly name
    let cleanName = file.split('.')[0].toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-');
    cleanName = cleanName.replace(/^-|-$/g, '');
    const outputPath = path.join(dir, cleanName + '-new.webp');
    
    console.log(`Processing ${file} -> ${cleanName}-new.webp`);
    try {
      await sharp(inputPath)
        .resize({ width: 1200, withoutEnlargement: true })
        .webp({ quality: 80 })
        .toFile(outputPath);
      console.log(`Success: ${cleanName}-new.webp`);
    } catch (err) {
      console.error(`Error processing ${file}:`, err);
    }
  }
}

processFiles();
