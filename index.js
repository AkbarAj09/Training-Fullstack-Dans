import express from "express";
import path, { dirname } from "path";
import bodyParser from "body-parser";
import { fileURLToPath } from "url";
import morgan from "morgan";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = process.env.PORT || 3000;

// Middleware untuk melayani file statis dari folder 'public'
app.use(express.static(path.join(__dirname, 'public')));

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/home', (req, res) => {
    const { username, password } = req.body;
    if (password === "123") {
        const now = new Date();
        const hour = now.getHours();
        let greeting;

        if (hour >= 5 && hour < 11) {
            greeting = "selamat pagi";
        } else if (hour >= 11 && hour < 15) {
            greeting = "selamat siang";
        } else if (hour >= 15 && hour < 18) {
            greeting = "selamat sore";
        } else {
            greeting = "selamat malam";
        }

        res.status(200).send(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>HomePage Admin</title>
            </head>
            <body>
                <h1>Welcome to the Admin HomePage</h1>
                <h2>Halo ${username ? `${username}` : 'Admin'}, ${greeting}</h2>
            </body>
            </html>
        `);
    } else {
        res.status(401).send("Invalid password!");
    }
});

app.get("/", (_req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


if (process.env.NODE_ENV !== 'production') {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}


export default app;