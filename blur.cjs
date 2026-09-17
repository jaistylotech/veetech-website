const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function blurRegion() {
  const inputPath = path.join(__dirname, 'public/client-media/after-market/preventive-maintanace-2-new.webp');
  const outputPath = path.join(__dirname, 'public/client-media/after-market/preventive-maintanace-2-new-blurred.webp');
  
  // Actually, I should blur the original unblurred image to avoid compounding blurs!
  // Wait, I replaced `preventive-maintanace-2-new.webp` with the blurred version in my code earlier, 
  // but I didn't overwrite the original image file because I got an EPERM error on rename!
  // This means the `preventive-maintanace-2-new.webp` is STILL the original unblurred image! 
  // And `preventive-maintanace-2-new-blurred.webp` is the wrongly blurred one.
  // So I can just read the original and write to the `-blurred.webp` again.
  
  try {
    const metadata = await sharp(inputPath).metadata();
    console.log(`Original dimensions: ${metadata.width}x${metadata.height}`);
    
    // Precise coordinates from browser subagent
    const extractBox = {
      left: 625, 
      top: 42,
      width: 75,
      height: 24
    };
    
    const blurredRegion = await sharp(inputPath)
      .extract(extractBox)
      .blur(5) // Just enough to obscure text
      .toBuffer();
      
    await sharp(inputPath)
      .composite([{ input: blurredRegion, left: extractBox.left, top: extractBox.top }])
      .webp({ quality: 90 })
      .toFile(outputPath);
      
    console.log("Successfully blurred region and saved.");
  } catch (err) {
    console.error("Error:", err);
  }
}

blurRegion();
