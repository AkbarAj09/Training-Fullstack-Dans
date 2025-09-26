import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer
  .prompt([
    { type: 'input', name: 'text', message: 'Masukkan link url:' },
    { type: 'input', name: 'filename', message: 'Masukkan nama file untuk menyimpan kode QR (tanpa ekstensi):' }
  ])
  .then(answers => {
    const qrImage = qr.image(answers.text, { type: 'png' });
    const outputPath = `./${answers.filename}.png`;
    qrImage.pipe(fs.createWriteStream(outputPath));
    console.log(`QR code saved to ${outputPath}`);
  })
  .catch(error => {
    console.error('Error generating QR code:', error);
  });
