import express from "express";
import { dirname } from "path";
import bodyParser from "body-parser";
import { fileURLToPath } from "url";
import morgan from "morgan";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;


app.use([
    morgan("dev"),
    bodyParser.urlencoded({ extended: true }),
    (req, _res, next) => {
        console.log(`Request Method: ${req.method}, Request URL: ${req.url}`);
        next();
    }
]);

app.post('/home', (req, res) => {
    const { username, password } = req.body;
    if (password === "123") {

        const now = new Date();
        const hour = now.getHours(); // Dapatkan jam (format 0-23)

        let greeting;
        if (hour >= 5 && hour < 11) {       // Jam 5 pagi - 10:59 pagi
            greeting = "selamat pagi";
        } else if (hour >= 11 && hour < 15) { // Jam 11 siang - 2:59 siang
            greeting = "selamat siang";
        } else if (hour >= 15 && hour < 18) { // Jam 3 sore - 5:59 sore
            greeting = "selamat sore";
        } else {                              // Jam 6 malam - 4:59 pagi
            greeting = "selamat malam";
        }

        res.setHeader("Cache-Control", "no-store");
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
        res.redirect('/');
    }
});


app.get("/", (_req, res) => {
    res.setHeader("Cache-Control", "no-store");
    res.status(200).sendFile(__dirname + "/public/index.html");
});

app.use(express.static(__dirname + "/public"));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
