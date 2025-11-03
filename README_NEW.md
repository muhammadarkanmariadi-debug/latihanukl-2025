#  Sistem Manajemen Kehadiran - UKL 2025

Aplikasi manajemen kehadiran berbasis RESTful API menggunakan NestJS, Prisma ORM, dan JWT Authentication dengan kontrol akses berbasis role.

##  Teknologi yang Digunakan

- **Framework**: NestJS 11.x
- **Bahasa**: TypeScript 5.7.x
- **Database**: MySQL
- **ORM**: Prisma 6.18.x
- **Autentikasi**: JWT (@nestjs/jwt)
- **Password Hashing**: bcrypt
- **Runtime**: Node.js

##  Fitur-Fitur

###  Autentikasi & Otorisasi
-  Autentikasi berbasis JWT
-  Kontrol akses berbasis role (Admin & User)
-  Password di-hash dengan bcrypt
-  Middleware validasi token

###  Manajemen User
-  Operasi CRUD untuk user
-  Role user (admin/user)
-  Penugasan jabatan
-  Endpoint khusus admin

###  Sistem Kehadiran
-  Membuat record kehadiran
-  Melihat riwayat kehadiran
-  Ringkasan kehadiran bulanan
-  Analitik lanjutan per jabatan
-  Filter berdasarkan rentang tanggal
-  Tracking status (Hadir, Izin, Sakit, Alpha)

###  Analitik & Pelaporan
-  Analisis kehadiran dikelompokkan per jabatan
-  Kalkulasi persentase per status
-  Filter rentang tanggal
-  Ringkasan per user
