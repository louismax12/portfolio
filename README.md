# Portfolio Personal - Louis Maximillian

Dokumentasi ini menjelaskan sistem, teknologi, konteks, dan isi konten dari website portfolio ini secara lengkap. Project ini merupakan landing page personal yang menampilkan profil profesional, pengalaman kerja, proyek riset, skill teknis, serta form kontak untuk berkomunikasi.

## 1. Gambaran Umum Sistem

Sistem ini adalah website portfolio berbasis Next.js yang berfungsi sebagai:

- profil digital pribadi
- portofolio karya dan riset
- showcase pengalaman kerja dan keahlian teknis
- media komunikasi melalui contact form
- sarana promosi profesional untuk freelance, kolaborasi, dan peluang kerja

Website ini dibuat dengan konsep modern, dark mode, cyber-tech aesthetic, dan tesktur futuristik. Desainnya dibuat agar terlihat premium, profesional, dan sesuai dengan karakter seorang profesional IT/AI yang fokus pada web development, infrastructure, dan research AI.

## 2. Konteks dan Tujuan Pembangunan

Website ini dibuat untuk merepresentasikan identitas profesional Louis Maximillian, seorang:

- Full Stack Developer
- IT & Infrastructure Specialist
- AI & IoT Research Enthusiast
- Freelancer di bidang teknologi

Tujuan utamanya adalah:

- menampilkan profil dan kemampuan teknis
- menunjukkan portfolio proyek kerja dan riset
- memperlihatkan riwayat pengalaman profesional
- memudahkan klien atau recruiter menghubungi langsung
- menjembatani antara kebutuhan bisnis, teknologi, dan riset inovatif

## 3. Teknologi yang Digunakan

Berikut teknologi utama yang dipakai dalam sistem ini:

### Frontend
- Next.js 16
- React 19
- TypeScript
- Tailwind CSS v4
- Lucide React (ikon)

### Backend / API
- Next.js API Routes
- Node.js runtime
- Nodemailer (untuk mengirim email dari form kontak)

### Storage / Data
- File JSON lokal di folder data/
- fungsi insertContact() membaca dan menulis data kontak ke contacts.json

### Asset / Media
- Gambar lokal di public/img/
- Video YouTube embed untuk project riset AI
- SVG icon custom untuk GitHub, LinkedIn, Instagram

### Linting / Tooling
- ESLint
- TypeScript Compiler
- PostCSS

## 4. Struktur Folder Proyek

Berikut struktur utama sistem:

```bash
portfolio/
├── public/
│   └── img/
│       ├── avere_preview.png
│       ├── prm_rkz_preview.png
│       ├── sp_umum_preview.png
│       ├── autoclipper_preview.png
│       └── split_avatar.jpg
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── contact/
│   │   │       └── route.ts
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── lib/
│       └── db.ts
├── data/
│   └── contacts.json
├── types/
│   └── nodemailer.d.ts
├── package.json
├── next.config.ts
├── tsconfig.json
├── eslint.config.mjs
├── postcss.config.mjs
├── README.md
└── AGENTS.md
```

### Penjelasan folder penting

- src/app/page.tsx
  - berisi seluruh halaman utama website portfolio
  - mencakup hero section, navigation, experience timeline, project showcase, skill section, about section, contact form, dan footer

- src/app/api/contact/route.ts
  - API endpoint untuk menerima data inbox dari form kontak
  - menangani validasi input, penyimpanan data ke file JSON, dan pengiriman email via SMTP jika sudah dikonfigurasi

- src/lib/db.ts
  - modul penyimpanan data kontak
  - memastikan file contacts.json dibuat secara otomatis
  - insertContact() menambahkan data baru ke array contacts

- data/contacts.json
  - data lokal yang menyimpan semua pesan form kontak yang sudah dikirim

- public/img/
  - berisi aset visual proyek, preview dashboard, avatar, dan media pendukung web

## 5. Arsitektur Sistem

Sistem ini memiliki arsitektur sederhana dan modular:

1. User membuka website di browser
2. Halaman utama dimuat dari src/app/page.tsx
3. Komponen UI menampilkan profil, proyek, skills, dan pengalaman
4. Saat user mengisi contact form, data dikirim ke endpoint /api/contact
5. API memvalidasi form dan menyimpan ke data/contacts.json
6. Jika konfigurasi SMTP tersedia, API juga mengirim email ke alamat tujuan yang ditentukan
7. Respons JSON dikembalikan ke frontend sebagai status sukses atau gagal

Secara ringkas, alur sistem kontak adalah:

```text
Browser -> Form Input -> POST /api/contact -> Validasi -> Simpan JSON -> Kirim Email (opsional) -> Response OK/Fail
```

## 6. Isi Konten Sistem

Website ini berisi beberapa bagian utama yang merepresentasikan profil profesional.

### a. Hero / Landing Section
Bagian ini menampilkan:

- nama: Louis Maximillian
- posisi: Web Developer & IT Specialist
- konsep dua sisi karier:
  - Web Developer
  - IT & AI Specialist
- tagline dan badges teknis seperti:
  - PHP Native
  - Laravel
  - MySQL
  - QA & SDLC
  - YOLO v11
  - Raspberry Pi
  - Network Routing

### b. Experience Timeline
Section ini membahas riwayat pekerjaan yang mencakup:

- Website Development di RS RKZ St. Vincentius a Paulo, Surabaya
- Freelance Full-Stack Developer di Upwork & Cake
- IT Supervisor di PT Surya Multi Indopack

Masing-masing card menjelaskan tugas utama, tanggung jawab, dan teknologi yang dipakai.

### c. Projects & Research Section
Website ini menampilkan berbagai proyek pilihan, seperti:

- Avere E-Menu & Table Booking System
- PRM System RS RKZ
- Sistem Surat Pesanan & Pengadaan PO (SP Umum)
- Deteksi APD menggunakan YOLO v11 pada Raspberry Pi
- Auto Clipper AI Tools
- Website Profil Perusahaan / Aplikasi POS Bengkel

Project-project ini menggambarkan kombinasi antara:

- pengembangan web
- otomatisasi proses bisnis
- integrasi data
- AI / computer vision
- perangkat keras dan IoT

### d. Skills Section
Bagian ini menunjukkan kapabilitas teknis dalam 3 domain utama:

1. Web Development
   - PHP Native & Laravel
   - MySQL & Database Design
   - QA Testing & SDLC
   - JavaScript

2. IT & Infrastructure
   - Network Routing & MikroTik
   - Cybersecurity
   - CCTV IP & Monitoring
   - IT Support L2/L3

3. AI & IoT Research
   - Computer Vision
   - YOLO v11
   - Python
   - Raspberry Pi
   - AI automated workflows

### e. About Me Section
Bagian ini menjelaskan:

- latar belakang pendidikan Informatika
- fokus karier dalam full stack development, IT infrastructure, dan AI research
- filosofi kerja yang menekankan kebutuhan bisnis dan disiplin SDLC
- status freelancer yang terbuka untuk project

### f. Contact Section
Bagian ini berisi:

- email
- LinkedIn
- GitHub
- Instagram
- WhatsApp utama dan alternatif
- form kontak untuk mengirim pesan

## 7. Fungsi Form Kontak

Contact form bekerja sebagai berikut:

- user mengisi nama, email, subjek, dan pesan
- data dikirim ke API /api/contact
- backend memvalidasi field required
- data disimpan ke contacts.json
- jika SMTP config tersedia, sistem mengirim email ke alamat tujuan
- response JSON dikirim kembali ke frontend

## 8. Environment Variables yang Relevan

Agar email kontak berfungsi, perlu menyiapkan variabel environment berikut:

```bash
SMTP_HOST=your_smtp_host
SMTP_PORT=465
SMTP_USER=your_email
SMTP_PASS=your_password
CONTACT_TO=recipient@example.com
DEBUG_EMAIL=true
```

Jika variabel ini belum diatur, sistem tetap bisa menerima pesan dan menyimpannya ke file JSON, tetapi email tidak akan terkirim.

## 9. Cara Menjalankan Project

Install dependency:

```bash
npm install
```

Jalankan aplikasi di mode development:

```bash
npm run dev
```

Buka browser ke:

```bash
http://localhost:3000
```

Untuk build production:

```bash
npm run build
npm run start
```

## 10. Kesimpulan

Sistem ini adalah portfolio digital yang menggambarkan profil seorang profesional teknologi yang tidak hanya fokus pada web development, tetapi juga IT infrastructure dan AI/IoT research. Website ini bukan sekadar profil biasa, melainkan representasi dari kemampuan teknis, pengalaman kerja, proyek nyata, dan mindset penyelesaian masalah berbasis teknologi.

Dari sisi arsitektur, project ini sederhana namun cukup kuat untuk dijadikan landing page profesional. Dari sisi konten, project ini mencerminkan kombinasi antara bisnis, infrastruktur, software engineering, dan inovasi AI.

---

Jika Anda mau, saya juga bisa bantu membuat versi README yang lebih formal untuk kebutuhan portfolio publik, atau versi yang lebih singkat untuk GitHub repository.
