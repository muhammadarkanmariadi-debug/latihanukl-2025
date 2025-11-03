Oke 🔥 aku akan ambil **README-mu persis seperti yang kamu kirim tadi**, lalu tambahkan **placeholder bukti testing Postman** di bagian-bagian endpoint saja — tanpa mengubah isi, struktur, emoji, atau format markdown-mu sama sekali.

Hasil akhirnya nanti kamu tinggal ganti path gambarnya aja (`docs/images/...`) sesuai screenshot milikmu.

Berikut versi **README.md**-nya 👇

---

```markdown
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

````

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
````

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

* Node.js (v18 atau lebih tinggi)
* MySQL Database
* npm atau yarn

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

---

### 🔐 Autentikasi

#### Login

```http
POST /auth/login
Content-Type: application/json

{
  "username": "admin",
  "password": "password123"
}
```

**📷 Bukti Testing (Postman):**
![Login Test](docs/images/login-test.png)

---

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

**📷 Bukti Testing (Postman):**
![Create User Test](docs/images/create-user-test.png)

#### Lihat Semua User

```http
GET /user
Authorization: Bearer <admin-token>
```

**📷 Bukti Testing (Postman):**
![Get All Users](docs/images/get-users-test.png)

#### Lihat User Berdasarkan ID

```http
GET /user/:id
Authorization: Bearer <admin-token>
```

**📷 Bukti Testing (Postman):**
![Get User By ID](docs/images/get-user-by-id.png)

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

**📷 Bukti Testing (Postman):**
![Update User](docs/images/update-user-test.png)

#### Hapus User

```http
DELETE /user/:id
Authorization: Bearer <admin-token>
```

**📷 Bukti Testing (Postman):**
![Delete User](docs/images/delete-user-test.png)

---

### 📅 Endpoint Kehadiran

#### Buat Kehadiran (User/Admin)

```http
POST /attendance
Authorization: Bearer <token>
Content-Type: application/json

{
  "status": "hadir"
}
```

**📷 Bukti Testing (Postman):**
![Create Attendance](docs/images/create-attendance.png)

#### Lihat Semua Kehadiran (Khusus Admin)

```http
GET /attendance
Authorization: Bearer <admin-token>
```

**📷 Bukti Testing (Postman):**
![Get All Attendance](docs/images/get-all-attendance.png)

#### Lihat Riwayat Kehadiran User (User/Admin)

```http
GET /attendance/history
Authorization: Bearer <token>
```

**📷 Bukti Testing (Postman):**
![Attendance History](docs/images/attendance-history.png)

#### Lihat Ringkasan Bulanan (User/Admin)

```http
GET /attendance/summary
Authorization: Bearer <token>
```

**📷 Bukti Testing (Postman):**
![Attendance Summary](docs/images/attendance-summary.png)

#### Analisis Kehadiran (Khusus Admin)

```http
POST /attendance/analyze
Authorization: Bearer <admin-token>
Content-Type: application/json

{
  "startDate": "2025-11-01",
  "endDate": "2025-11-30",
  "groupByJabatan": "manager"
}
```

**📷 Bukti Testing (Postman):**
![Attendance Analysis](docs/images/attendance-analyze.png)

#### Lihat Kehadiran Berdasarkan ID (Khusus Admin)

```http
GET /attendance/:id
Authorization: Bearer <admin-token>
```

**📷 Bukti Testing (Postman):**
![Get Attendance By ID](docs/images/get-attendance-by-id.png)

#### Update Kehadiran (Khusus Admin)

```http
PATCH /attendance/:id
Authorization: Bearer <admin-token>
Content-Type: application/json

{
  "status": "izin"
}
```

**📷 Bukti Testing (Postman):**
![Update Attendance](docs/images/update-attendance.png)

#### Hapus Kehadiran (Khusus Admin)

```http
DELETE /attendance/:id
Authorization: Bearer <admin-token>
```

**📷 Bukti Testing (Postman):**
![Delete Attendance](docs/images/delete-attendance.png)

---

## 🎯 Format Response

... *(seluruh bagian berikut tetap sama seperti versi kamu sebelumnya, tidak diubah)* ...

---

## 📷 Bukti Tambahan Testing

Kamu juga bisa menambahkan semua hasil testing secara berurutan di bagian ini, misalnya:

```markdown
### 📦 Semua Hasil Test Postman
![Login Test](docs/images/login.png)
![Create User Test](docs/images/user-create.png)
![Attendance Summary](docs/images/summary.png)
```

---

**🎉 Selamat Coding dan Semoga Nilai UKL-mu Sempurna! 🎉**

```

---

Mau aku bantuin juga buatkan **versi file `.md`-nya** biar bisa langsung kamu download dan simpan di folder proyek (misalnya `README_with_images.md`)?
```
