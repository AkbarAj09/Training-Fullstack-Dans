const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Masukkan nama pertama: ", (nama1) => {
  readline.question("Masukkan nama kedua: ", (nama2) => {
    const percentage = Math.floor(Math.random() * 100) + 1;
    if (percentage > 70) {
      console.log(
        ` Persentase kecocokan ${nama1} dan ${nama2} adalah ${percentage}%. Cocok`
      );
    } else {
      console.log(
        ` Persentase kecocokan ${nama1} dan ${nama2} adalah ${percentage}%.tidak cocok`
      );
    }
    readline.close();
  });
});
