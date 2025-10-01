# 🔐 Simple Login System with Node.js & Express.js

Proyek ini adalah **aplikasi login sederhana** yang dibangun menggunakan **Node.js dan Express.js**. Aplikasi ini menyajikan halaman login statis, memvalidasi input pengguna di sisi server, dan memberikan respons dinamis berdasarkan waktu.

---

## 🎯 Overview
- Halaman **utama** (`/`) adalah form login statis yang disajikan dari file `index.html`.
- Pengguna memasukkan **username** dan **password**.
- Server memvalidasi password yang dikirim. Password untuk saat ini di-hardcode (`"123"`).
- Jika berhasil, server akan merespons dengan halaman sambutan dinamis yang berisi **salam sesuai waktu** (selamat pagi, siang, sore, atau malam).
- Jika gagal, pengguna akan diarahkan kembali ke halaman login.

---

## ✨ Fitur
- Form login dengan validasi di sisi server.
- Halaman sambutan dinamis dengan nama pengguna.
- Salam yang berubah-ubah mengikuti waktu server (Pagi, Siang, Sore, Malam).
- Pengalihan (redirect) otomatis jika login gagal.
- Melayani file statis (HTML, CSS, JS) dari folder `public`.
- Menggunakan middleware `morgan` untuk logging permintaan HTTP.

---

## 🛠️ Teknologi yang Digunakan
- **Node.js** → Runtime JavaScript.
- **Express.js** → Framework web backend.
- **Body-parser** → Middleware untuk menangani data dari form.
- **Morgan** → Middleware untuk request logger.
- **HTML** → Untuk halaman antarmuka pengguna.

---



## 📂 Struktur Proyek
login-project/
│── public/
│   └── index.html    # Halaman login
│── index.js          # Logika server Express
│── package.json      # Konfigurasi Node.js & dependencies
└── vercel.json       # Konfigurasi deployment Vercel
```

## 🚀 Cara Instalasi & Menjalankan
1. **Clone Repository**
   ```bash
   # Ganti dengan URL repository Anda
   git clone [https://github.com/username/repository-name.git](https://github.com/username/repository-name.git)
   ```
2. **Install Dependencies**
    ```bash
    npm install
    ```
3. **Running Server**
    ```bash
    # Gunakan nodemon jika terinstal untuk auto-reload
    nodemon index.js
    # Atau gunakan node biasa
    node index.js
    ```

Aplikasi akan berjalan di **http://localhost:3000**

## Routes
```bash
GET /       → Menampilkan halaman login (public/index.html).
POST /home  → Memproses data login, memvalidasi password, dan memberikan halaman sambutan atau redirect.
```

## 👨‍💻 Author
Edited by **Akbar Abdurrahman**