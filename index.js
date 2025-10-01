import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

let posts = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Home page: show form and posts
app.get('/', (req, res) => {
    res.render('index', {
        page: 'home',
        posts: posts
    });
});

// News page
app.get('/news', (req, res) => {
    res.render('index', {
        page: 'news',
        posts: posts
    });
});

// About page
app.get('/about', (req, res) => {
    res.render('index', {
        page: 'about',
        posts: posts
    });
});

// Add post
app.post('/add-post', (req, res) => {
    const { title, content } = req.body;
    if (title && content) {
        const newPost = { 
            id: Date.now(), 
            title, 
            content 
        };
        posts.unshift(newPost);
    }
    res.status(201).json({ message: 'Post created successfully' });
});

app.put('/delete-post/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    posts = posts.filter(p => p.id !== id); 
    res.status(200).json({ message: 'Post deleted successfully' });
});

// Jalankan server HANYA untuk development lokal
if (process.env.NODE_ENV !== 'production') {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}


export default app;