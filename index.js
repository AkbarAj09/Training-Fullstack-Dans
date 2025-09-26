import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  res.send(`Login attempted! Username: ${username}, Password: ${password}`);
});

app.get('/', (req, res) => {
    const today = new Date();
    const day = today.getDay(); // 0 = Sunday, 6 = Saturday
    let dataType, advice;

    // Use req.headers to read a property from the request object
    const userAgent = req.headers['user-agent'];

    if (day === 0 || day === 6) {
        dataType = 'a Weekend';
        advice = 'Happy weekend!';
    } else {
        dataType = 'a Weekday';
        advice = 'Stay productive!';
    }

    res.render('../views/index.ejs', { dataType, advice, userAgent });
});

app.post('/', (req, res) => {
    const numLetters = req.body.name.length;

    // Tambahkan kembali logika ini dari rute GET Anda
    const today = new Date();
    const day = today.getDay();
    let dataType, advice;

    if (day === 0 || day === 6) {
        dataType = 'a Weekend';
        advice = 'Happy weekend!';
    } else {
        dataType = 'a Weekday';
        advice = 'Stay productive!';
    }

    // Sekarang kirim semua data yang dibutuhkan oleh template
    res.render('../views/index.ejs', {
        dataType: dataType,
        advice: advice,
        numberOfLetters: numLetters 
    });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});