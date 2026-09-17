const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const baseDir = path.join(__dirname, 'public/client-media/after-market');

const files = [
  'after_market_service_white_bg_clear_hd.jpg',
  'troubleshooting_white_bg_clear_hd.png'
];

async function cropImage(filename) {
  const filePath = path.join(baseDir, filename);
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${filePath}`);
    return;
  }

  const metadata = await sharp(filePath).metadata();
  
  // Crop 6 pixels from all sides
  const cropAmount = 6;
  const newWidth = metadata.width - (cropAmount * 2);
  const newHeight = metadata.height - (cropAmount * 2);

  const tempPath = path.join(baseDir, `temp_${filename}`);

  await sharp(filePath)
    .extract({ left: cropAmount, top: cropAmount, width: newWidth, height: newHeight })
    .toFile(tempPath);

  // Replace original
  fs.unlinkSync(filePath);
  fs.renameSync(tempPath, filePath);
  
  console.log(`Cropped and saved: ${filename}`);
}

async function run() {
  for (const file of files) {
    await cropImage(file);
  }
}

run().catch(console.error);
