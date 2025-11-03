# 📊 Sistem Manajemen Kehadiran - UKL 2025Oke 🔥 aku akan ambil **README-mu persis seperti yang kamu kirim tadi**, lalu tambahkan **placeholder bukti testing Postman** di bagian-bagian endpoint saja — tanpa mengubah isi, struktur, emoji, atau format markdown-mu sama sekali.

Notes : Import postman collection dan environtment untuk melakukan testing pada postman 

Aplikasi manajemen kehadiran berbasis RESTful API menggunakan NestJS, Prisma ORM, dan JWT Authentication dengan kontrol akses berbasis role.Hasil akhirnya nanti kamu tinggal ganti path gambarnya aja (`docs/images/...`) sesuai screenshot milikmu.



## 🚀 Teknologi yang DigunakanBerikut versi **README.md**-nya 👇



- **Framework**: NestJS 11.x---

- **Bahasa**: TypeScript 5.7.x

- **Database**: MySQL```markdown

- **ORM**: Prisma 6.18.x# 📊 Sistem Manajemen Kehadiran - UKL 2025

- **Autentikasi**: JWT (@nestjs/jwt)

- **Password Hashing**: bcryptAplikasi manajemen kehadiran berbasis RESTful API menggunakan NestJS, Prisma ORM, dan JWT Authentication dengan kontrol akses berbasis role.

- **Runtime**: Node.js

## 🚀 Teknologi yang Digunakan

## 📋 Fitur-Fitur

- **Framework**: NestJS 11.x

### 🔐 Autentikasi & Otorisasi- **Bahasa**: TypeScript 5.7.x

- ✅ Autentikasi berbasis JWT- **Database**: MySQL

- ✅ Kontrol akses berbasis role (Admin & User)- **ORM**: Prisma 6.18.x

- ✅ Password di-hash dengan bcrypt- **Autentikasi**: JWT (@nestjs/jwt)

- ✅ Middleware validasi token- **Password Hashing**: bcrypt

- **Runtime**: Node.js

### 👥 Manajemen User

- ✅ Operasi CRUD untuk user## 📋 Fitur-Fitur

- ✅ Role user (admin/user)

- ✅ Penugasan jabatan### 🔐 Autentikasi & Otorisasi

- ✅ Endpoint khusus admin- ✅ Autentikasi berbasis JWT

- ✅ Kontrol akses berbasis role (Admin & User)

### 📅 Sistem Kehadiran- ✅ Password di-hash dengan bcrypt

- ✅ Membuat record kehadiran- ✅ Middleware validasi token

- ✅ Melihat riwayat kehadiran

- ✅ Ringkasan kehadiran bulanan### 👥 Manajemen User

- ✅ Analitik lanjutan per jabatan- ✅ Operasi CRUD untuk user

- ✅ Filter berdasarkan rentang tanggal- ✅ Role user (admin/user)

- ✅ Tracking status (Hadir, Izin, Sakit, Alpha)- ✅ Penugasan jabatan

- ✅ Endpoint khusus admin

### 📊 Analitik & Pelaporan

- ✅ Analisis kehadiran dikelompokkan per jabatan### 📅 Sistem Kehadiran

- ✅ Kalkulasi persentase per status- ✅ Membuat record kehadiran

- ✅ Filter rentang tanggal- ✅ Melihat riwayat kehadiran

- ✅ Ringkasan per user- ✅ Ringkasan kehadiran bulanan

- ✅ Analitik lanjutan per jabatan

## 📁 Struktur Project- ✅ Filter berdasarkan rentang tanggal

- ✅ Tracking status (Hadir, Izin, Sakit, Alpha)

```

latihanukl2025/### 📊 Analitik & Pelaporan

├── prisma/- ✅ Analisis kehadiran dikelompokkan per jabatan

│   ├── schema.prisma          # Schema database- ✅ Kalkulasi persentase per status

│   ├── migrations/            # Migrasi database- ✅ Filter rentang tanggal

│   ├── prisma.module.ts       # Module Prisma- ✅ Ringkasan per user

│   └── prisma.service.ts      # Service Prisma

├── src/## 📁 Struktur Project

│   ├── main.ts                # Entry point aplikasi

│   ├── app.module.ts          # Module utama```

│   ├── auth/                  # Module autentikasi

│   │   ├── auth.controller.tslatihanukl2025/

│   │   ├── auth.service.ts├── prisma/

│   │   └── dto/│   ├── schema.prisma          # Schema database

│   ├── user/                  # Module manajemen user│   ├── migrations/            # Migrasi database

│   │   ├── user.controller.ts│   ├── prisma.module.ts       # Module Prisma

│   │   ├── user.service.ts│   └── prisma.service.ts      # Service Prisma

│   │   └── dto/├── src/

│   ├── attendance/            # Module kehadiran│   ├── main.ts                # Entry point aplikasi

│   │   ├── attendance.controller.ts│   ├── app.module.ts          # Module utama

│   │   ├── attendance.service.ts│   ├── auth/                  # Module autentikasi

│   │   └── dto/│   │   ├── auth.controller.ts

│   ├── guards/                # Security guards│   │   ├── auth.service.ts

│   │   ├── jwt-auth.guard.ts│   │   └── dto/

│   │   └── roles.guard.ts│   ├── user/                  # Module manajemen user

│   └── decorators/│   │   ├── user.controller.ts

│       └── roles.decorator.ts│   │   ├── user.service.ts

└── test/                      # Testing E2E│   │   └── dto/

```│   ├── attendance/            # Module kehadiran

│   │   ├── attendance.controller.ts

## 🗄️ Skema Database│   │   ├── attendance.service.ts

│   │   └── dto/

### Tabel User│   ├── guards/                # Security guards

```sql│   │   ├── jwt-auth.guard.ts

- id: INT (Primary Key, Auto Increment)│   │   └── roles.guard.ts

- name: STRING│   └── decorators/

- username: STRING│       └── roles.decorator.ts

- password: STRING (Di-hash)└── test/                      # Testing E2E

- role: STRING (default: "user")

- jabatan: STRING (default: "staff")````

- createdAt: DATETIME

- updatedAt: DATETIME## 🗄️ Skema Database

```

### Tabel User

### Tabel Attendance```sql

```sql- id: INT (Primary Key, Auto Increment)

- id: INT (Primary Key, Auto Increment)- name: STRING

- userId: INT (Foreign Key → User.id)- username: STRING

- date: DATETIME- password: STRING (Di-hash)

- status: STRING (hadir/izin/sakit/alpha)- role: STRING (default: "user")

- createdAt: DATETIME- jabatan: STRING (default: "staff")

- updatedAt: DATETIME- createdAt: DATETIME

```- updatedAt: DATETIME

````

## 🔧 Instalasi

### Tabel Attendance

### Prasyarat

- Node.js (v18 atau lebih tinggi)```sql

- MySQL Database- id: INT (Primary Key, Auto Increment)

- npm atau yarn- userId: INT (Foreign Key → User.id)

- date: DATETIME

### Langkah-langkah Setup- status: STRING (hadir/izin/sakit/alpha)

- createdAt: DATETIME

1. **Clone repository**- updatedAt: DATETIME

```bash```

git clone <repository-url>

cd latihanukl2025## 🔧 Instalasi

```

### Prasyarat

2. **Install dependencies**

```bash* Node.js (v18 atau lebih tinggi)

npm install* MySQL Database

```* npm atau yarn



3. **Konfigurasi environment**### Langkah-langkah Setup

   

   Buat file `.env` di root directory:1. **Clone repository**

```env

DATABASE_URL="mysql://user:password@localhost:3306/attendance_db"```bash

JWT_SECRET="your-super-secret-key-here"git clone <repository-url>

```cd latihanukl2025

```

4. **Setup database**

```bash2. **Install dependencies**

# Generate Prisma Client

npx prisma generate```bash

npm install

# Jalankan migrasi```

npx prisma migrate dev

3. **Konfigurasi environment**

# (Opsional) Seed database   Buat file `.env` di root directory:

npx prisma db seed

``````env

DATABASE_URL="mysql://user:password@localhost:3306/attendance_db"

5. **Jalankan aplikasi**JWT_SECRET="your-super-secret-key-here"

```bash```

# Mode development

npm run start:dev4. **Setup database**



# Mode production```bash

npm run build# Generate Prisma Client

npm run start:prodnpx prisma generate

```

# Jalankan migrasi

Aplikasi akan berjalan di `http://localhost:3000`npx prisma migrate dev



---# (Opsional) Seed database

npx prisma db seed

## 📚 Dokumentasi API```



### 🔐 Autentikasi5. **Jalankan aplikasi**



#### Login Admin```bash

```http# Mode development

POST /auth/loginnpm run start:dev

Content-Type: application/json

# Mode production

{npm run build

  "username": "admin",npm run start:prod

  "password": "password123"```

}

```Aplikasi akan berjalan di `http://localhost:3000`



**📷 Bukti Testing (Postman):**## 📚 Dokumentasi API



![Login Admin](images/login-admin.png)---



---### 🔐 Autentikasi



#### Login User#### Login

```http

POST /auth/login```http

Content-Type: application/jsonPOST /auth/login

Content-Type: application/json

{

  "username": "user",{

  "password": "password123"  "username": "admin",

}  "password": "password123"

```}

```

**📷 Bukti Testing (Postman):**

**📷 Bukti Testing (Postman):**

![Login User](images/login-user.png)![Login Test](docs/images/login-test.png)



------



### 👥 Endpoint User (Khusus Admin)### 👥 Endpoint User (Khusus Admin)



Semua endpoint user memerlukan header `Authorization: Bearer <token>` dan role admin.Semua endpoint user memerlukan header `Authorization: Bearer <token>` dan role admin.



#### Buat User Baru - Staff#### Buat User Baru

```http

POST /user```http

Authorization: Bearer <admin-token>POST /user

Content-Type: application/jsonAuthorization: Bearer <admin-token>

Content-Type: application/json

{

  "name": "Staff User",{

  "username": "staff01",  "name": "John Doe",

  "password": "password123",  "username": "johndoe",

  "role": "user",  "password": "password123",

  "jabatan": "staff"  "role": "user",

}  "jabatan": "staff"

```}

```

**📷 Bukti Testing (Postman):**

**📷 Bukti Testing (Postman):**

![Create Staff](images/create-staff.png)![Create User Test](docs/images/create-user-test.png)



---#### Lihat Semua User



#### Buat User Baru - Manager```http

```httpGET /user

POST /userAuthorization: Bearer <admin-token>

Authorization: Bearer <admin-token>```

Content-Type: application/json

**📷 Bukti Testing (Postman):**

{![Get All Users](docs/images/get-users-test.png)

  "name": "Manager User",

  "username": "manager01",#### Lihat User Berdasarkan ID

  "password": "password123",

  "role": "user",```http

  "jabatan": "manager"GET /user/:id

}Authorization: Bearer <admin-token>

``````



**📷 Bukti Testing (Postman):****📷 Bukti Testing (Postman):**

![Get User By ID](docs/images/get-user-by-id.png)

![Create Manager](images/create-manager.png)

#### Update User

---

```http

#### Buat User Baru - SupervisorPUT /user/:id

```httpAuthorization: Bearer <admin-token>

POST /userContent-Type: application/json

Authorization: Bearer <admin-token>

Content-Type: application/json{

  "name": "John Doe Updated",

{  "jabatan": "manager"

  "name": "Supervisor User",}

  "username": "supervisor01",```

  "password": "password123",

  "role": "user",**📷 Bukti Testing (Postman):**

  "jabatan": "supervisor"![Update User](docs/images/update-user-test.png)

}

```#### Hapus User



**📷 Bukti Testing (Postman):**```http

DELETE /user/:id

![Create Supervisor](images/create-supervisor.png)Authorization: Bearer <admin-token>

```

---

**📷 Bukti Testing (Postman):**

#### Buat Admin Baru![Delete User](docs/images/delete-user-test.png)

```http

POST /user---

Authorization: Bearer <admin-token>

Content-Type: application/json### 📅 Endpoint Kehadiran



{#### Buat Kehadiran (User/Admin)

  "name": "Admin User",

  "username": "admin02",```http

  "password": "password123",POST /attendance

  "role": "admin",Authorization: Bearer <token>

  "jabatan": "admin"Content-Type: application/json

}

```{

  "status": "hadir"

**📷 Bukti Testing (Postman):**}

```

![Create Admin](images/create-admin.png)

**📷 Bukti Testing (Postman):**

---![Create Attendance](docs/images/create-attendance.png)



#### Lihat Semua User#### Lihat Semua Kehadiran (Khusus Admin)

```http

GET /user```http

Authorization: Bearer <admin-token>GET /attendance

```Authorization: Bearer <admin-token>

```

**📷 Bukti Testing (Postman):**

**📷 Bukti Testing (Postman):**

![Get All Users](images/get-user.png)![Get All Attendance](docs/images/get-all-attendance.png)



---#### Lihat Riwayat Kehadiran User (User/Admin)



#### Lihat User Berdasarkan ID```http

```httpGET /attendance/history

GET /user/:idAuthorization: Bearer <token>

Authorization: Bearer <admin-token>```

```

**📷 Bukti Testing (Postman):**

**📷 Bukti Testing (Postman):**![Attendance History](docs/images/attendance-history.png)



![Get User By ID](images/get-userbyid.png)#### Lihat Ringkasan Bulanan (User/Admin)



---```http

GET /attendance/summary

#### Update User - Ubah NamaAuthorization: Bearer <token>

```http```

PUT /user/:id

Authorization: Bearer <admin-token>**📷 Bukti Testing (Postman):**

Content-Type: application/json![Attendance Summary](docs/images/attendance-summary.png)



{#### Analisis Kehadiran (Khusus Admin)

  "name": "John Doe Updated"

}```http

```POST /attendance/analyze

Authorization: Bearer <admin-token>

**📷 Bukti Testing (Postman):**Content-Type: application/json



![Update User Name](images/put-changename.png){

  "startDate": "2025-11-01",

---  "endDate": "2025-11-30",

  "groupByJabatan": "manager"

#### Update User - Ubah Jabatan}

```http```

PUT /user/:id

Authorization: Bearer <admin-token>**📷 Bukti Testing (Postman):**

Content-Type: application/json![Attendance Analysis](docs/images/attendance-analyze.png)



{#### Lihat Kehadiran Berdasarkan ID (Khusus Admin)

  "jabatan": "manager"

}```http

```GET /attendance/:id

Authorization: Bearer <admin-token>

**📷 Bukti Testing (Postman):**```



![Update User Jabatan](images/put-changejabatan.png)**📷 Bukti Testing (Postman):**

![Get Attendance By ID](docs/images/get-attendance-by-id.png)

---

#### Update Kehadiran (Khusus Admin)

#### Update User - Ubah Password

```http```http

PUT /user/:idPATCH /attendance/:id

Authorization: Bearer <admin-token>Authorization: Bearer <admin-token>

Content-Type: application/jsonContent-Type: application/json



{{

  "password": "newpassword123"  "status": "izin"

}}

``````



**📷 Bukti Testing (Postman):****📷 Bukti Testing (Postman):**

![Update Attendance](docs/images/update-attendance.png)

![Update User Password](images/put-changepassword.png)

#### Hapus Kehadiran (Khusus Admin)

---

```http

#### Hapus UserDELETE /attendance/:id

```httpAuthorization: Bearer <admin-token>

DELETE /user/:id```

Authorization: Bearer <admin-token>

```**📷 Bukti Testing (Postman):**

![Delete Attendance](docs/images/delete-attendance.png)

**📷 Bukti Testing (Postman):**

---

![Delete User](images/delete-user.png)

## 🎯 Format Response

---

... *(seluruh bagian berikut tetap sama seperti versi kamu sebelumnya, tidak diubah)* ...

### 📅 Endpoint Kehadiran

---

#### Buat Kehadiran (User/Admin)

```http## 📷 Bukti Tambahan Testing

POST /attendance

Authorization: Bearer <token>Kamu juga bisa menambahkan semua hasil testing secara berurutan di bagian ini, misalnya:

Content-Type: application/json

```markdown

{### 📦 Semua Hasil Test Postman

  "status": "hadir"![Login Test](docs/images/login.png)

}![Create User Test](docs/images/user-create.png)

```![Attendance Summary](docs/images/summary.png)

```

**📷 Bukti Testing (Postman):**

---

![Create Attendance](images/create-attendance.png)

**🎉 Selamat Coding dan Semoga Nilai UKL-mu Sempurna! 🎉**

---

```

#### Lihat Semua Kehadiran (Khusus Admin)

```http---

GET /attendance

Authorization: Bearer <admin-token>Mau aku bantuin juga buatkan **versi file `.md`-nya** biar bisa langsung kamu download dan simpan di folder proyek (misalnya `README_with_images.md`)?

``````


**📷 Bukti Testing (Postman):**

![Get All Attendance](images/get-attendances.png)

---

#### Lihat Riwayat Kehadiran User (User/Admin)
```http
GET /attendance/history
Authorization: Bearer <token>
```

**📷 Bukti Testing (Postman):**

![Attendance History](images/get-userattendancehistory.png)

---

#### Lihat Ringkasan Bulanan (User/Admin)
```http
GET /attendance/summary
Authorization: Bearer <token>
```

**📷 Bukti Testing (Postman):**

![Attendance Summary](images/get-summary.png)

---

#### Analisis Kehadiran - Umum (Khusus Admin)
```http
POST /attendance/analyze
Authorization: Bearer <admin-token>
Content-Type: application/json

{
  "startDate": "2025-11-01",
  "endDate": "2025-11-30"
}
```

**📷 Bukti Testing (Postman):**

![Attendance Analysis](images/analyzeattendance.png)

---

#### Analisis Kehadiran - Per Jabatan (Khusus Admin)
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

![Attendance Analysis by Jabatan](images/analyzeattendancebyjabatan.png)

---

#### Lihat Kehadiran Berdasarkan ID (Khusus Admin)
```http
GET /attendance/:id
Authorization: Bearer <admin-token>
```

**📷 Bukti Testing (Postman):**

![Get Attendance By ID](images/get-attendancebyid.png)

---

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

![Update Attendance](images/update-attendance.png)

---

#### Hapus Kehadiran (Khusus Admin)
```http
DELETE /attendance/:id
Authorization: Bearer <admin-token>
```

**📷 Bukti Testing (Postman):**

![Delete Attendance](images/delete-attendance.png)

---

## 🎯 Format Response

Semua endpoint menggunakan format response standar:

### Response Sukses
```json
{
  "statusCode": 200,
  "message": "Success message",
  "success": true,
  "data": {
    // Data object
  }
}
```

### Response Error
```json
{
  "statusCode": 400,
  "message": "Error message",
  "success": false,
  "error": "Error details"
}
```

---

## 🔒 Keamanan

### JWT Token
- Token expires dalam 24 jam
- Token harus disertakan di header: `Authorization: Bearer <token>`
- Token berisi: `userId`, `username`, `role`

### Role-Based Access Control
- **Admin**: Akses penuh ke semua endpoint
- **User**: Akses terbatas (hanya data pribadi)

### Password Security
- Password di-hash menggunakan bcrypt
- Salt rounds: 10
- Password tidak pernah dikembalikan dalam response

---

## 🛠️ Command Prisma

```bash
# Generate Prisma Client
npx prisma generate

# Create migration
npx prisma migrate dev --name migration_name

# Apply migrations
npx prisma migrate deploy

# Reset database
npx prisma migrate reset

# Open Prisma Studio
npx prisma studio

# Format schema
npx prisma format
```

---

## 🧪 Testing

```bash
# Unit tests
npm run test

# E2E tests
npm run test:e2e

# Test coverage
npm run test:cov
```

---

## 📦 Postman Collection

Untuk mempermudah testing, tersedia Postman Collection lengkap di folder project:

- **Attendance-API.postman_collection.json** - Collection dengan 27 requests
- **Attendance-API.postman_environment.json** - Environment variables
- **POSTMAN_GUIDE.md** - Panduan lengkap penggunaan Postman
- **POSTMAN_COLLECTION_SUMMARY.md** - Ringkasan collection

### Import ke Postman:
1. Buka Postman
2. Klik **Import**
3. Pilih kedua file JSON
4. Pilih environment "Attendance API"
5. Mulai testing!

---

## 🚨 Troubleshooting

### Database Connection Error
```bash
# Pastikan MySQL berjalan
# Cek DATABASE_URL di .env
# Test koneksi:
npx prisma db pull
```

### JWT Token Invalid
- Pastikan token belum expired (24 jam)
- Cek format header: `Authorization: Bearer <token>`
- Token harus dari endpoint `/auth/login`

### Port Already in Use
```bash
# Ubah port di main.ts atau:
PORT=3001 npm run start:dev
```

---

## 📝 Best Practices

1. **Selalu gunakan environment variables** untuk data sensitif
2. **Validasi input** di semua DTO
3. **Handle errors** dengan proper HTTP status codes
4. **Gunakan transaction** untuk operasi multiple database
5. **Implement logging** untuk debugging
6. **Test semua endpoint** sebelum deployment

---

## 📄 Lisensi

Project ini dibuat untuk keperluan UKL 2025

---

## 👨‍💻 Developer

Dibuat dengan ❤️ untuk UKL 2025

---

## 📞 Kontak & Support

Jika ada pertanyaan atau issue, silakan buat issue di repository ini.

---

**🎉 Selamat Coding dan Semoga Nilai UKL-mu Sempurna! 🎉**
