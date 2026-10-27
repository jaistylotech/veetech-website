const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

function createIco(images) {
  const count = images.length;
  const headerSize = 6;
  const dirEntrySize = 16;
  const dirSize = headerSize + count * dirEntrySize;

  let totalSize = dirSize;
  for (const img of images) {
    totalSize += img.buffer.length;
  }

  const icoBuf = Buffer.alloc(totalSize);

  icoBuf.writeUInt16LE(0, 0);
  icoBuf.writeUInt16LE(1, 2);
  icoBuf.writeUInt16LE(count, 4);

  let currentOffset = dirSize;
  images.forEach((img, index) => {
    const entryOffset = headerSize + index * dirEntrySize;
    const width = img.size >= 256 ? 0 : img.size;
    const height = img.size >= 256 ? 0 : img.size;

    icoBuf.writeUInt8(width, entryOffset);
    icoBuf.writeUInt8(height, entryOffset + 1);
    icoBuf.writeUInt8(0, entryOffset + 2);
    icoBuf.writeUInt8(0, entryOffset + 3);
    icoBuf.writeUInt16LE(1, entryOffset + 4);
    icoBuf.writeUInt16LE(32, entryOffset + 6);
    icoBuf.writeUInt32LE(img.buffer.length, entryOffset + 8);
    icoBuf.writeUInt32LE(currentOffset, entryOffset + 12);

    img.buffer.copy(icoBuf, currentOffset);
    currentOffset += img.buffer.length;
  });

  return icoBuf;
}

async function run() {
  const logoPath = path.join(__dirname, 'public/veetech-logo.png');
  const { data, info } = await sharp(logoPath).raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;

  // Extract the V mark from rows 0 to 1220, x between 1140 and 2340
  // Remove yellow line pixels
  const cropW = 1200, cropH = 1220, left = 1140, top = 0;
  const outBuf = Buffer.alloc(cropW * cropH * 4);

  for (let y = 0; y < cropH; y++) {
    for (let x = 0; x < cropW; x++) {
      const srcIdx = ((top + y) * width + (left + x)) * channels;
      const dstIdx = (y * cropW + x) * 4;

      const r = data[srcIdx];
      const g = data[srcIdx + 1];
      const b = data[srcIdx + 2];
      const a = data[srcIdx + 3];

      const isYellow = r > 180 && g > 160 && b < 80;
      if (isYellow) {
        outBuf[dstIdx] = 0;
        outBuf[dstIdx + 1] = 0;
        outBuf[dstIdx + 2] = 0;
        outBuf[dstIdx + 3] = 0;
      } else {
        outBuf[dstIdx] = r;
        outBuf[dstIdx + 1] = g;
        outBuf[dstIdx + 2] = b;
        outBuf[dstIdx + 3] = a;
      }
    }
  }

  const trimmedV = await sharp(outBuf, { raw: { width: cropW, height: cropH, channels: 4 } })
    .trim()
    .png()
    .toBuffer();

  // Create 512x512 master icon:
  // 100% TRANSPARENT background (NO white box, NO background fill!)
  // The V-mark is scaled to 430px inside 512x512 so it fills the tab nicely without touching borders
  const vIcon430 = await sharp(trimmedV)
    .resize(430, 430, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toBuffer();

  const masterTransparent = await sharp({
    create: {
      width: 512,
      height: 512,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    }
  })
    .composite([{ input: vIcon430, gravity: 'center' }])
    .png()
    .toBuffer();

  fs.writeFileSync(path.join(__dirname, 'public/veetech-icon.png'), masterTransparent);

  const sizes = [512, 192, 180, 96, 48, 32, 16];
  const pngBuffers = {};

  for (const sz of sizes) {
    const buf = await sharp(masterTransparent).resize(sz, sz).png().toBuffer();
    pngBuffers[sz] = buf;
  }

  fs.writeFileSync(path.join(__dirname, 'public/icon-512.png'), pngBuffers[512]);
  fs.writeFileSync(path.join(__dirname, 'public/icon-192.png'), pngBuffers[192]);
  fs.writeFileSync(path.join(__dirname, 'public/apple-touch-icon.png'), pngBuffers[180]);
  fs.writeFileSync(path.join(__dirname, 'public/favicon-96x96.png'), pngBuffers[96]);
  fs.writeFileSync(path.join(__dirname, 'public/favicon-48x48.png'), pngBuffers[48]);
  fs.writeFileSync(path.join(__dirname, 'public/favicon-32x32.png'), pngBuffers[32]);
  fs.writeFileSync(path.join(__dirname, 'public/favicon-16x16.png'), pngBuffers[16]);

  const icoData = createIco([
    { size: 16, buffer: pngBuffers[16] },
    { size: 32, buffer: pngBuffers[32] },
    { size: 48, buffer: pngBuffers[48] }
  ]);
  fs.writeFileSync(path.join(__dirname, 'public/favicon.ico'), icoData);

  console.log('Successfully generated transparent V-mark favicons (NO white box)!');
}

run().catch(console.error);
