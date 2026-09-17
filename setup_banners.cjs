const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const artifactsDir = 'C:\\Users\\Cypher\\.gemini\\antigravity-ide\\brain\\8036b83e-8d2b-4b57-8a49-af1e5f8d5466';
const publicDir = path.join(__dirname, 'public/client-media/banners');

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Find the generated images
const files = fs.readdirSync(artifactsDir);
const aboutImg = files.find(f => f.startsWith('hero_about_'));
const servicesImg = files.find(f => f.startsWith('hero_services_'));
const productsImg = files.find(f => f.startsWith('hero_products_'));

async function processImage(filename, outName) {
  if (!filename) {
    console.log(`Missing source for ${outName}`);
    return;
  }
  const inPath = path.join(artifactsDir, filename);
  const outPath = path.join(publicDir, `${outName}.webp`);
  
  await sharp(inPath)
    .resize(1920, 1080, { fit: 'cover' })
    .webp({ quality: 80 })
    .toFile(outPath);
    
  console.log(`Processed ${outName}`);
}

async function run() {
  await processImage(aboutImg, 'hero-about');
  await processImage(servicesImg, 'hero-services');
  await processImage(productsImg, 'hero-products');
  
  // Reuse since we hit rate limit
  await processImage(aboutImg, 'hero-infrastructure');
  await processImage(servicesImg, 'hero-careers');
}

run().catch(console.error);
