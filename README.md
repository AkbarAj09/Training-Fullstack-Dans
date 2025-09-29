# 📝 Simple Blog with Node.js, Express.js, and EJS

Proyek ini adalah **aplikasi blog sederhana** yang dibangun menggunakan **Node.js, Express.js, dan EJS** sebagai template engine.  
Aplikasi ini memungkinkan pengguna untuk membuat, menampilkan, dan menghapus posting blog secara sederhana melalui antarmuka web.

---

## 🎯 Overview
- Halaman **Home** → Form untuk menambahkan posting baru + daftar posting terbaru.
- Halaman **News** → Contoh halaman berita.
- Halaman **About** → Informasi tentang blog.
- Post yang dibuat hanya tersimpan di **memory (array JavaScript)**, sehingga akan hilang ketika server di-restart.

---

## ✨ Fitur
- Tambah posting baru (judul + isi).
- Tampilkan daftar posting terbaru.
- Hapus posting tertentu dengan konfirmasi.
- Navigasi antar halaman: **Home, News, About**.
- Tampilan sederhana dengan CSS bawaan.

---

## 🛠️ Teknologi yang Digunakan
- **Node.js** → Runtime JavaScript.
- **Express.js** → Framework web backend.
- **EJS (Embedded JavaScript Templates)** → Template engine untuk render tampilan.
- **Body-parser** → Middleware untuk handle form data.
- **Fetch API** → Untuk komunikasi frontend–backend (AJAX).

---

## 📂 Struktur Proyek
```
simple-blog/
│── index.js # Express
│── views/
│ └── index.ejs 
│── package.json # Konfigurasi Node.js & dependencies
```

## 🚀 Cara Instalasi & Menjalankan
1. **Clone Repository**
```bash
git clone https://github.com/AkbarAj09/Training-Fullstack-Dans.git -b capstone-project-ejs
```
2. **Install Dependencies**
```
npm install 
```
3. **Jalankan Server**
```bash
nodemon index.js
```
Route akan jalan di **localhost:3000**

## Routes
```bash
/ → Home, form tambah posting & daftar posting.
/news → Halaman berita.
/about → Halaman tentang blog.
POST /add-post → Tambah posting baru.
PUT /delete-post/:id → Hapus posting berdasarkan ID.
```

## 👨‍💻 Author
Edited by **Akbar Abdurrahman** 

