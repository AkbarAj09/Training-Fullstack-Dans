# 🗓️ Produktivity Page dengan Express.js

Proyek ini adalah **aplikasi web sederhana** yang dibangun menggunakan **Node.js, Express.js, dan EJS** sebagai template engine.
Aplikasi ini menampilkan apakah hari ini **weekday atau weekend**

## 🎯 Overview
- **Halaman Home** → Menampilkan hari (weekday/weekend), tips motivasi, dan form input nama.
- **Form Input** → Menghitung jumlah huruf pada nama yang dimasukkan.
- **Endpoint Login** → Contoh sederhana POST request untuk menampilkan username & password.



## 🛠️ Teknologi yang Digunakan
- **Node.js** → Runtime JavaScript.
- **Express.js** → Framework web backend.
- **EJS (Embedded JavaScript Templates)** → Template engine untuk render tampilan.
- **Body-parser** → Middleware untuk menangani form data.

## 📂 Struktur Proyek
```bash
produktivity-page/
│── index.js          # File utama Express
│── views/
│   └── index.ejs     # Template tampilan
│── package.json      # Konfigurasi Node.js & dependencies
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

