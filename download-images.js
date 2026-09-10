const https = require('https');
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'public', 'client-media', 'after-market');

// Create directory if it doesn't exist
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

const images = [
  { url: 'https://veetech.ae/wp-content/uploads/2021/11/Rectangle-12.jpg', name: 'installation.jpg' },
  { url: 'https://veetech.ae/wp-content/uploads/2021/11/Rectangle-18.jpg', name: 'spare-parts.jpg' },
  { url: 'https://veetech.ae/wp-content/uploads/2021/11/Rectangle-20.jpg', name: 'preventive-maintenance.jpg' },
  { url: 'https://veetech.ae/wp-content/uploads/2021/11/Rectangle-24.jpg', name: 'troubleshooting.jpg' },
  { url: 'https://veetech.ae/wp-content/uploads/2021/11/Rectangle-22.jpg', name: 'refurbishment.jpg' },
];

console.log("Downloading 5 images...");

images.forEach((img) => {
  const filePath = path.join(dir, img.name);
  const file = fs.createWriteStream(filePath);
  
  https.get(img.url, (response) => {
    response.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log(`Downloaded: ${img.name}`);
    });
  }).on('error', (err) => {
    fs.unlink(filePath, () => {});
    console.error(`Error downloading ${img.name}: ${err.message}`);
  });
});
