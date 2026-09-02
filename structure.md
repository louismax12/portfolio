# Comprehensive PHP System Architecture & Directory Structure Guide (PHP 5.4 / Docker / VPS Biznet Compatible)

Dokumen ini berisi pemetaan lengkap arsitektur dan struktur file dari seluruh sistem aplikasi PHP yang berjalan pada lingkungan **PHP 5.4 Docker VPS Biznet**.

---

## 📋 Daftar Sistem Aplikasi PHP

1. [Paket Rehabilitasi Medis System (PRM RKZ)](#1-paket-rehabilitasi-medis-system-prm-rkz)
2. [Sistem Surat Pesanan & Pengadaan PO (SP Umum)](#2-sistem-surat-pesanan--pengadaan-po-sp-umum)
3. [Panduan Configuration & Deployment PHP 5.4 Docker VPS Biznet](#3-panduan-configuration--deployment-php-54-docker-vps-biznet)

---

## 1. Paket Rehabilitasi Medis System (PRM RKZ)

Sistem pengelolaan paket terapi rehabilitasi medis terintegrasi dengan Hospital Information System (HIS) `dbold` RS RKZ Surabaya. Arsitektur backend menggunakan **PHP 8 / PHP 5.4 REST-like API Pattern** dengan **PDO MySQL**.

### 📁 Tree Directory `prm_rkz`

```
prm_rkz/
├── index.html                  # Main SPA Single Page Application (Material Design 3 UI)
├── app.js                      # Main Frontend Logic & Router (Vanilla JS / Event Bus)
├── describe_table.php          # Database Helper for Table Schema Discovery
├── fix_db.php                  # Database Migration & Schema Fix Utility
├── test_update.php             # Test Script for Session Deduction & Capacity Updates
├── README.md                   # System Documentation & Architecture Design
│
├── api/                        # REST API Engine (PHP 5.4 / PHP 8 Protection Layer)
│   ├── index.php               # Main API Router & Request Dispatcher
│   ├── config/
│   │   └── database.php        # PDO Database Connection Class (Host, DB, User, Pass)
│   ├── controllers/
│   │   ├── AuthController.php   # Handles User Login, Token Verification & NIP Auth
│   │   ├── PasienController.php # Patient Search & Capacity Status API
│   │   ├── PaketController.php  # Package Management & Auto Mapping Logic
│   │   ├── KasirController.php  # HIS Billing Transaction Sync & Auto-Quota Generation
│   │   ├── AuditController.php  # Daily Audit Analytics & CSV Export Engine
│   │   └── MasterController.php # Master Package & Action Item CRUD Controller
│   ├── models/
│   │   ├── User.php            # User Model (NIP Auth, Pass Verification)
│   │   ├── Kapasitas.php       # Patient Session Capacity Model (prm_kapasitas)
│   │   ├── Paket.php           # Package Definitions Model (prm_master_paket)
│   │   ├── Tindakan.php        # Action Types Model (prm_tindakan)
│   │   └── Catatan.php         # Session Deduction Audit Log Model (prm_catatan)
│   └── helpers/
│       └── JWT.php             # Lightweight JWT Utility for PHP 5.4 (HMAC-SHA256)
│
├── db/                         # Database Migration & Seed SQL Scripts
│   ├── prm_rkz.sql             # Primary Schema (Tables: prm_master_paket, prm_kapasitas, etc.)
│   ├── db_updates.sql          # Schema Patches & Constraints
│   └── dummy_data.sql          # Test Seed Data
```

### 🔐 Detail File & Modul Core `prm_rkz`

| Path File | Fungsi & Deskripsi Komponen |
| :--- | :--- |
| `api/index.php` | Main Gateway API Router. Menerima query parameter `?action=...` atau URI endpoint (`/api/pasien`, `/api/kasir`, `/api/audit`), melakukan verifikasi JWT Header, dan memanggil Controller yang sesuai. |
| `api/config/database.php` | Mengelola koneksi PDO MySQL dengan error mode `PDO::ERRMODE_EXCEPTION` dan charset `utf8`. Kompatibel penuh dengan sintaks PHP 5.4. |
| `api/controllers/KasirController.php` | Membaca transaksi dari kasir utama (tabel `fisiosfjual`), membaca `FCRID` & `FCRRMUNIT`, dan otomatis mengonversi transaksi SKU paket menjadi kapasitas sesi di `prm_kapasitas`. |
| `api/controllers/AuditController.php` | Menyediakan data analytics harian (Pasien Aktif, Sesi Dipotong Hari Ini, Sisa Sesi Global) serta fitur **Export CSV** untuk laporan audit manajemen. |
| `api/models/Catatan.php` | Menangani transaksi pemotongan sesi (`prm_catatan`). Menggunakan PDO Transaction (`beginTransaction`, `commit`, `rollBack`) untuk menjamin konsistensi data sesi. |

### 🗄️ Database Schemas `prm_rkz`

1. **`prm_master_paket`**: Menimpan nama paket (`ES6-MYOMED`, `OROFACIAL`, dll), tipe paket, total kuota sesi (misal: 10 sesi), dan masa berlaku (misal: 30 hari).
2. **`prm_kapasitas`**: Menimpan kuota sesi aktif pasien per register (`no_register`, `no_rm`, `no_paket`, `sisa_sesi`, `status`).
3. **`prm_catatan`**: Log audit immutable pemotongan sesi per tanggal kunjungan (`tgl_tindakan`, `tindakan_ke`, `petugas`).
4. **`fisiosfjual`**: Tabel transaksi kasir HIS utama yang di-sync otomatis ke sistem PRM.

---

## 2. Sistem Surat Pesanan & Pengadaan PO (SP Umum)

Sistem manajemen pengadaan barang (Purchase Order / PO) berjenjang berstandar korporat yang mendukung alur `Draft` → `Diajukan` → `Direview` → `ACC Direktur` → `Penerimaan Barang` → `Pengajuan Pembayaran`.

### 📁 Tree Directory `sp_umum`

```
sp_umum/
├── index.html                  # Landing Page / Direct Router
├── home.php                    # Dashboard Core Router & View Loader
├── logout.php                  # Global Session Destroyer
├── cetak_sp_baru.php           # PDF / Printable Purchase Order Renderer
├── check_db.php / check_db2.php# Database Connection Diagnostics
├── test_switch.php             # Role Switcher Debug Utility
│
├── config/                     # Configuration Files
│   ├── database.php            # Dual-DB Connection Manager (DB Utama SP & DB HRD/Supplier)
│   └── db_functions.php        # Helper Functions for Queries, Formatting & Security
│
├── includes/                   # Layout & Security Partials
│   ├── auth.php                # Authentication Check & Role Permission Guard
│   ├── header.php              # Navbar, Dynamic User Status & Font Inclusions (Outfit & Inter)
│   └── footer.php              # Global Footer Scripts & Toast Notifications
│
├── views/                      # Application Page Views
│   ├── dashboard.php           # Executive Dashboard Metrics & 5 Recent PO Table
│   ├── buat_pesanan.php        # PO Creation Form, Cost Calculations (PPN 11%, Diskon), & Item Grid
│   ├── monitoring.php          # Approval Workflow Progress Tracker & Audit History
│   ├── penerimaan.php          # Partial/Full Goods Receipt & Checklist Verification
│   ├── pembayaran.php          # Payment Request Form & Invoice Log Status (LUNAS/ACC/DITOLAK)
│   ├── pembayaran_detail.php   # Detailed Invoice Payment Breakdown
│   ├── master_pengadaan.php    # Vendor & Item Procurement Master Catalog
│   ├── master_unit.php         # Department / Unit Master Data
│   └── manajemen_user.php      # User Accounts & RBAC Menu Access Manager
│
├── admin/                      # Authentication & Administrative Handlers
│   ├── aksi_masuk.php          # Login Authentication Processor (NIP & Password Checking)
│   ├── aksi_pilih_role.php     # Initial Role Selector Processor (Admin IT / Direktur / Pembelian)
│   ├── aksi_switch_role.php    # Mid-Session Role Switch Processor
│   ├── aksi_user_grup.php      # User Role Group Processor
│   └── portal_admin/           # IT Admin Sub-System Panel
│       ├── aksi_masuk.php      # IT Admin Login Handler
│       ├── aksi_tambah_user.php# User Addition Handler
│       ├── data.php            # User List Grid View
│       ├── data_jenis.php      # Procurement Item Type Catalog
│       ├── delete.php          # User Deletion Processor
│       ├── insert.php          # User Insertion Handler
│       └── insert_grup.php     # Role Group Insertion Handler
│
└── uploads/                    # Physical Document Storage
    ├── lampiran/               # PO Attachments (PDF/Images)
    └── penerimaan/             # Delivery Order & Invoice Scans
```

### 🔐 Detail File & Modul Core `sp_umum`

| Path File | Fungsi & Deskripsi Komponen |
| :--- | :--- |
| `config/database.php` | Mengelola fungsi `mysqli_connect` / `PDO` untuk PHP 5.4. Menghubungkan database `sp_umum`, database user HRD (`hrd_karyawan`), dan database askes/supplier. |
| `includes/auth.php` | Guard keamanan halaman. Memeriksa `$_SESSION['nip']` dan `$_SESSION['role_aktif']`. Jika session tidak valid, otomatis memicu `header("Location: index.html")`. |
| `admin/aksi_masuk.php` | Memverifikasi NIP Karyawan dan kata sandi. Jika valid, membuka dialog/modal `pilih_role.php` sesuai hak akses tabel `sp_usermenu`. |
| `admin/aksi_switch_role.php` | Mengubah role aktif di session (`$_SESSION['role_aktif']`) tanpa perlu logout ulang, memfasilitasi pengguna multi-peran (misal: Pembelian sekaligus Admin). |
| `views/buat_pesanan.php` | Form pembuatan SP interaktif. Menghitung otomatis Subtotal, PPN 11%, Diskon Global, dan Total Netto PO. Menggunakan aturan validasi: SP > 5 Juta membutuhkan ACC Direktur, < 5 Juta disetujui oleh Pembelian/Manager. |
| `views/monitoring.php` | Menampilkan indikator progres alur persetujuan PO (`1. Draft` → `2. Diajukan` → `3. Direview` → `4. ACC`) serta tabel log audit aktivitas (*audit trail*). |
| `views/pembayaran.php` | Menangani klaim pengajuan pembayaran invoice vendor. Menyajikan ringkasan statistik (Total Pengajuan, Menunggu Approval, Disetujui/ACC, LUNAS). |

### 🗄️ Database Schemas `sp_umum`

1. **`sp_header`**: Menyimpan identitas Surat Pesanan (`no_sp`, `tgl_sp`, `id_vendor`, `unit`, `total_bruto`, `ppn`, `diskon`, `grand_total`, `status_sp`).
2. **`sp_detail`**: Item rincian barang per SP (`id_sp`, `nama_barang`, `merk`, `qty`, `harga_satuan`, `diskon_item`, `subtotal`).
3. **`sp_penerimaan_header`** & **`sp_penerimaan_detail`**: Catatan barang masuk (Surat Jalan/Delivery Order vendor) dan verifikasi fisik barang.
4. **`sp_pembayaran`**: Pengajuan klaim bayar invoice ke keuangan (`no_sp`, `nominal_diajukan`, `metode_bayar`, `status_bayar`: LUNAS / ACC / DITOLAK).
5. **`sp_usermenu`**: Tabel RBAC permission yang mengatur modul menu apa saja yang dapat diakses oleh setiap role/NIP.

---

## 3. Panduan Configuration & Deployment PHP 5.4 Docker VPS Biznet

Berikut adalah panduan teknis konfigurasi Docker container untuk menjalankan aplikasi PHP 5.4 di VPS Biznet.

### 🐳 `Dockerfile` (PHP 5.4 + Apache + MySQL Extensions)

```dockerfile
FROM php:5.4-apache

# Install ekstensi MySQL & GD yang dibutuhkan oleh aplikasi legacy
RUN docker-php-ext-install mysql mysqli pdo pdo_mysql

# Enable Apache mod_rewrite untuk REST API & Clean URL
RUN a2enmod rewrite

# Set timezone ke Asia/Jakarta
RUN echo "date.timezone = Asia/Jakarta" > /usr/local/etc/php/conf.d/timezone.ini

# Salin konfigurasi custom php.ini jika ada
COPY php.ini /usr/local/etc/php/

# Working Directory
WORKDIR /var/www/html/

# Fast permissions setup
RUN chown -R www-data:www-data /var/www/html
```

### 🐙 `docker-compose.yml` (Biznet VPS Production Stack)

```yaml
version: '3.8'

services:
  web_php54:
    build: .
    container_name: biznet_php54_app
    ports:
      - "8080:80"
    volumes:
      - ./prm_rkz:/var/www/html/prm_rkz
      - ./sp_umum:/var/www/html/sp_umum
      - ./avere:/var/www/html/avere
    restart: always
    depends_on:
      - db_mysql

  db_mysql:
    image: mysql:5.7
    container_name: biznet_mysql_db
    environment:
      MYSQL_ROOT_PASSWORD: root_password_here
      MYSQL_DATABASE: sp_umum
    ports:
      - "3306:3306"
    volumes:
      - mysql_data:/var/lib/mysql
      - ./prm_rkz/db:/docker-entrypoint-initdb.d
    restart: always

volumes:
  mysql_data:
```

### ⚙️ Aturan Sintaks & Catatan Khusus PHP 5.4

1. **Short Array Syntax**: PHP 5.4 mendukung sintaks `[]` sebagai pengganti `array()`.
2. **Short Echo Tags**: Short tag `<?= $var ?>` selalu diaktifkan secara bawaan di PHP 5.4 terlepas dari `short_open_tag`.
3. **Session Auto-Start**: Pastikan memanggil `session_start();` di paling atas file PHP sebelum output HTML dikirimkan untuk mencegah error `Headers already sent`.
4. **PDO Safe Prepared Statements**: Gunakan `PDO::PARAM_STR` / `PDO::PARAM_INT` untuk mencegah SQL Injection pada VPS publik Biznet.
