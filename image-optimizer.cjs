const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const inputDir = 'src/assets/GalleryLarge';
const outputDir = 'src/assets/Gallery';

fs.readdir(inputDir, (err, files) => {
  if (err) {
    console.error(`Error reading directory: ${err}`);
    return;
  }

  files.forEach(file => {
    const inputFile = path.join(inputDir, file);
    const outputFile = path.join(outputDir, file);

    sharp(inputFile)
      .resize(500)// Reduce quality to 50%
      .toFile(outputFile)
      .then(() => console.log(`Image quality reduced for ${file}`))
      .catch(err => console.error(`Error processing ${file}: ${err}`));
  });
});