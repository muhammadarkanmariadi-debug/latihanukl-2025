# 📊 Sistem Manajemen Kehadiran - UKL 2025

Aplikasi manajemen kehadiran berbasis RESTful API menggunakan NestJS, Prisma ORM, dan JWT Authentication dengan kontrol akses berbasis role.

## 🚀 Teknologi yang Digunakan

- **Framework**: NestJS 11.x
- **Bahasa**: TypeScript 5.7.x
- **Database**: MySQL
- **ORM**: Prisma 6.18.x
- **Autentikasi**: JWT (@nestjs/jwt)
- **Password Hashing**: bcrypt
- **Runtime**: Node.js

## 📋 Fitur-Fitur

### 🔐 Autentikasi & Otorisasi
- ✅ Autentikasi berbasis JWT
- ✅ Kontrol akses berbasis role (Admin & User)
- ✅ Password di-hash dengan bcrypt
- ✅ Middleware validasi token

### 👥 Manajemen User
- ✅ Operasi CRUD untuk user
- ✅ Role user (admin/user)
- ✅ Penugasan jabatan
- ✅ Endpoint khusus admin

### 📅 Sistem Kehadiran
- ✅ Membuat record kehadiran
- ✅ Melihat riwayat kehadiran
- ✅ Ringkasan kehadiran bulanan
- ✅ Analitik lanjutan per jabatan
- ✅ Filter berdasarkan rentang tanggal
- ✅ Tracking status (Hadir, Izin, Sakit, Alpha)

### 📊 Analitik & Pelaporan
- ✅ Analisis kehadiran dikelompokkan per jabatan
- ✅ Kalkulasi persentase per status
- ✅ Filter rentang tanggal
- ✅ Ringkasan per user

## 📁 Struktur Project

```
latihanukl2025/
├── prisma/
│   ├── schema.prisma          # Schema database
│   ├── migrations/            # Migrasi database
│   ├── prisma.module.ts       # Module Prisma
│   └── prisma.service.ts      # Service Prisma
├── src/
│   ├── main.ts                # Entry point aplikasi
│   ├── app.module.ts          # Module utama
│   ├── auth/                  # Module autentikasi
│   │   ├── auth.controller.ts
│   │   ├── auth.service.ts
│   │   └── dto/
│   ├── user/                  # Module manajemen user
│   │   ├── user.controller.ts
│   │   ├── user.service.ts
│   │   └── dto/
│   ├── attendance/            # Module kehadiran
│   │   ├── attendance.controller.ts
│   │   ├── attendance.service.ts
│   │   └── dto/
│   ├── guards/                # Security guards
│   │   ├── jwt-auth.guard.ts
│   │   └── roles.guard.ts
│   └── decorators/
│       └── roles.decorator.ts
└── test/                      # Testing E2E
```

## 🗄️ Skema Database

### Tabel User
```sql
- id: INT (Primary Key, Auto Increment)
- name: STRING
- username: STRING
- password: STRING (Di-hash)
- role: STRING (default: "user")
- jabatan: STRING (default: "staff")
- createdAt: DATETIME
- updatedAt: DATETIME
```

### Tabel Attendance
```sql
- id: INT (Primary Key, Auto Increment)
- userId: INT (Foreign Key → User.id)
- date: DATETIME
- status: STRING (hadir/izin/sakit/alpha)
- createdAt: DATETIME
- updatedAt: DATETIME
```

## 🔧 Instalasi

### Prasyarat
- Node.js (v18 atau lebih tinggi)
- MySQL Database
- npm atau yarn

### Langkah-langkah Setup

1. **Clone repository**
```bash
git clone <repository-url>
cd latihanukl2025
```

2. **Install dependencies**
```bash
npm install
```

3. **Konfigurasi environment**
Buat file `.env` di root directory:
```env
DATABASE_URL="mysql://user:password@localhost:3306/attendance_db"
JWT_SECRET="your-super-secret-key-here"
```

4. **Setup database**
```bash
# Generate Prisma Client
npx prisma generate

# Jalankan migrasi
npx prisma migrate dev

# (Opsional) Seed database
npx prisma db seed
```

5. **Jalankan aplikasi**
```bash
# Mode development
npm run start:dev

# Mode production
npm run build
npm run start:prod
```

Aplikasi akan berjalan di `http://localhost:3000`

## 📚 Dokumentasi API

### 🔐 Autentikasi

#### Login
```http
POST /auth/login
Content-Type: application/json

{
  "username": "admin",
  "password": "password123"
}

Response:
{
  "statusCode": 200,
  "message": "Login successful",
  "success": true,
  "data": {
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
      "id": 1,
      "username": "admin",
      "name": "Administrator",
      "role": "admin"
    }
  }
}
```

### 👥 Endpoint User (Khusus Admin)

Semua endpoint user memerlukan header `Authorization: Bearer <token>` dan role admin.

#### Buat User Baru
```http
POST /user
Authorization: Bearer <admin-token>
Content-Type: application/json

{
  "name": "John Doe",
  "username": "johndoe",
  "password": "password123",
  "role": "user",
  "jabatan": "staff"
}
```

#### Lihat Semua User
```http
GET /user
Authorization: Bearer <admin-token>
```

#### Lihat User Berdasarkan ID
```http
GET /user/:id
Authorization: Bearer <admin-token>
```

#### Update User
```http
PUT /user/:id
Authorization: Bearer <admin-token>
Content-Type: application/json

{
  "name": "John Doe Updated",
  "jabatan": "manager"
}
```

#### Hapus User
```http
DELETE /user/:id
Authorization: Bearer <admin-token>
```

### 📅 Endpoint Kehadiran

#### Buat Kehadiran (User/Admin)
```http
POST /attendance
Authorization: Bearer <token>
Content-Type: application/json

{
  "status": "hadir"
}

Catatan: userId otomatis diambil dari JWT token
```

#### Lihat Semua Kehadiran (Khusus Admin)
```http
GET /attendance
Authorization: Bearer <admin-token>
```

#### Lihat Riwayat Kehadiran User (User/Admin)
```http
GET /attendance/history
Authorization: Bearer <token>

Return: Riwayat kehadiran user yang sedang login
```

#### Lihat Ringkasan Bulanan (User/Admin)
```http
GET /attendance/summary
Authorization: Bearer <token>

Response:
{
  "statusCode": 200,
  "message": "Attendance summary retrieved successfully",
  "success": true,
  "data": {
    "user_id": 1,
    "month": "11-2025",
    "attendance_summary": {
      "hadir": 15,
      "izin": 2,
      "sakit": 1,
      "alpa": 0
    }
  }
}
```

#### Analisis Kehadiran (Khusus Admin)
```http
POST /attendance/analyze
Authorization: Bearer <admin-token>
Content-Type: application/json

{
  "startDate": "2025-11-01",
  "endDate": "2025-11-30",
  "groupByJabatan": "manager" // Opsional
}

Response:
{
  "statusCode": 200,
  "message": "Attendance analysis completed successfully",
  "success": true,
  "data": {
    "analysis_period": {
      "start_date": "2025-11-01",
      "end_date": "2025-11-30",
      "filtered_by_jabatan": "manager"
    },
    "grouped_analysis": [
      {
        "group": "manager",
        "total_users": 5,
        "attendance_rate": {
          "hadir_percentage": "85.50%",
          "izin_percentage": "8.20%",
          "sakit_percentage": "3.30%",
          "alpha_percentage": "3.00%"
        },
        "total_attendance": {
          "hadir": 85,
          "izin": 8,
          "sakit": 3,
          "alpha": 3,
          "total": 99
        }
      }
    ]
  }
}
```

#### Lihat Kehadiran Berdasarkan ID (Khusus Admin)
```http
GET /attendance/:id
Authorization: Bearer <admin-token>
```

#### Update Kehadiran (Khusus Admin)
```http
PATCH /attendance/:id
Authorization: Bearer <admin-token>
Content-Type: application/json

{
  "status": "izin"
}
```

#### Hapus Kehadiran (Khusus Admin)
```http
DELETE /attendance/:id
Authorization: Bearer <admin-token>
```

## 🎯 Format Response

Semua endpoint API mengembalikan response JSON yang terstandarisasi:

### Response Sukses
```json
{
  "statusCode": 200,
  "message": "Operasi berhasil",
  "success": true,
  "data": { /* data hasil */ }
}
```

### Response Error
```json
{
  "statusCode": 404,
  "message": "Resource tidak ditemukan",
  "success": false,
  "data": null
}
```

### Kode Status
- `200` - OK (Berhasil)
- `201` - Created (Dibuat)
- `401` - Unauthorized (Token invalid/tidak ada)
- `403` - Forbidden (Tidak memiliki akses)
- `404` - Not Found (Tidak ditemukan)

## 🔒 Fitur Keamanan

### Autentikasi JWT
- Masa berlaku token: 24 jam
- Payload berisi: `sub` (userId), `username`, `role`
- Format header: `Authorization: Bearer <token>`

### Kontrol Akses Berbasis Role
```typescript
@Roles('admin')              // Khusus admin
@Roles('admin', 'user')      // Admin atau User
// Tanpa decorator = Public
```

### Implementasi Guards
- **JwtAuthGuard**: Validasi JWT token
- **RolesGuard**: Cek role user
- Diterapkan menggunakan decorator `@UseGuards()`

## 🧪 Testing

```bash
# Unit tests
npm run test

# E2E tests
npm run test:e2e

# Test coverage
npm run test:cov
```

## 📊 Script yang Tersedia

```bash
npm run start          # Jalankan aplikasi
npm run start:dev      # Jalankan dengan hot-reload
npm run start:prod     # Jalankan build production
npm run build          # Build untuk production
npm run format         # Format kode dengan Prettier
npm run lint           # Lint kode dengan ESLint
```

## 🔍 Perintah Prisma

```bash
# Generate Prisma Client
npx prisma generate

# Buat migrasi baru
npx prisma migrate dev --name nama_migrasi

# Terapkan migrasi
npx prisma migrate deploy

# Reset database
npx prisma migrate reset

# Buka Prisma Studio
npx prisma studio
```

## 🌟 Best Practices

### 1. **Keamanan Password**
- Semua password di-hash menggunakan bcrypt
- Jangan pernah simpan password plain text

### 2. **Manajemen JWT Token**
- Simpan token dengan aman di client side
- Implementasi token refresh mechanism (direkomendasikan)
- Hapus token saat logout

### 3. **Error Handling**
- Semua error mengembalikan format yang konsisten
- Gunakan HTTP status code yang sesuai
- Berikan pesan error yang jelas

### 4. **Organisasi Kode**
- Struktur module berbasis fitur
- Pemisahan concern (Controller → Service → Repository)
- Guards dan decorators yang reusable

## 🐛 Masalah Umum & Solusi

### Port Sudah Digunakan
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Linux/Mac
lsof -i :3000
kill -9 <PID>
```

### Prisma Client Belum Di-generate
```bash
npx prisma generate
```

### Error Migrasi
```bash
npx prisma migrate reset
npx prisma migrate dev
```

## 📝 Environment Variables

```env
# Database
DATABASE_URL="mysql://user:password@localhost:3306/database_name"

# JWT
JWT_SECRET="your-secret-key-here"
JWT_EXPIRES_IN="24h"

# Application
PORT=3000
NODE_ENV="development"
```

## 📮 Collection Postman

Import file `Attendance-API.postman_collection.json` ke Postman untuk testing API.

Collection sudah include:
- ✅ Semua endpoint (Auth, User, Attendance)
- ✅ Environment variables untuk token
- ✅ Pre-request scripts untuk auto-login
- ✅ Contoh request/response

## 🤝 Kontribusi

1. Fork repository
2. Buat feature branch (`git checkout -b feature/FiturBaru`)
3. Commit perubahan (`git commit -m 'Menambahkan fitur baru'`)
4. Push ke branch (`git push origin feature/FiturBaru`)
5. Buat Pull Request

## 📄 Lisensi

Project ini dilisensikan dengan UNLICENSED - lihat file package.json untuk detail.

## 👨‍💻 Developer

**UKL 2025 - Latihan Project**

---

## 📞 Dukungan

Untuk issue dan pertanyaan, silakan buka issue di GitHub atau hubungi tim development.

---

**🎉 Selamat Coding! 🎉**
