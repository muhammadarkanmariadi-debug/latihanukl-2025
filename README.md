# 📊 Sistem Manajemen Kehadiran - UKL 2025# 📊 Sistem Manajemen Kehadiran - UKL 2025# 📊 Sistem Manajemen Kehadiran - UKL 2025Oke 🔥 aku akan ambil **README-mu persis seperti yang kamu kirim tadi**, lalu tambahkan **placeholder bukti testing Postman** di bagian-bagian endpoint saja — tanpa mengubah isi, struktur, emoji, atau format markdown-mu sama sekali.



Aplikasi manajemen kehadiran berbasis RESTful API menggunakan NestJS, Prisma ORM, dan JWT Authentication dengan kontrol akses berbasis role.



> **📌 Notes:** Import Postman collection dan environment untuk melakukan testing pada PostmanAplikasi manajemen kehadiran berbasis RESTful API menggunakan NestJS, Prisma ORM, dan JWT Authentication dengan kontrol akses berbasis role.Notes : Import postman collection dan environtment untuk melakukan testing pada postman 



---



## 🚀 Teknologi yang Digunakan> **📌 Notes:** Import Postman collection dan environment untuk melakukan testing pada PostmanAplikasi manajemen kehadiran berbasis RESTful API menggunakan NestJS, Prisma ORM, dan JWT Authentication dengan kontrol akses berbasis role.Hasil akhirnya nanti kamu tinggal ganti path gambarnya aja (`docs/images/...`) sesuai screenshot milikmu.



| Teknologi | Versi | Keterangan |

|-----------|-------|------------|

| **Framework** | NestJS 11.x | Backend framework |---

| **Bahasa** | TypeScript 5.7.x | Type-safe programming |

| **Database** | MySQL | Relational database |

| **ORM** | Prisma 6.18.x | Modern database toolkit |

| **Autentikasi** | JWT (@nestjs/jwt) | Token-based auth |## 🚀 Teknologi yang Digunakan## 🚀 Teknologi yang DigunakanBerikut versi **README.md**-nya 👇

| **Password Hashing** | bcrypt | Secure password storage |

| **Runtime** | Node.js | JavaScript runtime |



---| Teknologi | Versi | Keterangan |



## 📋 Fitur-Fitur|-----------|-------|------------|



### 🔐 Autentikasi & Otorisasi| **Framework** | NestJS 11.x | Backend framework |- **Framework**: NestJS 11.x---

- ✅ Autentikasi berbasis JWT

- ✅ Kontrol akses berbasis role (Admin & User)| **Bahasa** | TypeScript 5.7.x | Type-safe programming |

- ✅ Password di-hash dengan bcrypt

- ✅ Middleware validasi token| **Database** | MySQL | Relational database |- **Bahasa**: TypeScript 5.7.x



### 👥 Manajemen User| **ORM** | Prisma 6.18.x | Modern database toolkit |

- ✅ Operasi CRUD untuk user

- ✅ Role user (admin/user)| **Autentikasi** | JWT (@nestjs/jwt) | Token-based auth |- **Database**: MySQL```markdown

- ✅ Penugasan jabatan (staff, manager, supervisor, admin)

- ✅ Endpoint khusus admin| **Password Hashing** | bcrypt | Secure password storage |



### 📅 Sistem Kehadiran| **Runtime** | Node.js | JavaScript runtime |- **ORM**: Prisma 6.18.x# 📊 Sistem Manajemen Kehadiran - UKL 2025

- ✅ Membuat record kehadiran

- ✅ Melihat riwayat kehadiran

- ✅ Ringkasan kehadiran bulanan

- ✅ Analitik lanjutan per jabatan---- **Autentikasi**: JWT (@nestjs/jwt)

- ✅ Filter berdasarkan rentang tanggal

- ✅ Tracking status (Hadir, Izin, Sakit, Alpha)



### 📊 Analitik & Pelaporan## 📋 Fitur-Fitur- **Password Hashing**: bcryptAplikasi manajemen kehadiran berbasis RESTful API menggunakan NestJS, Prisma ORM, dan JWT Authentication dengan kontrol akses berbasis role.

- ✅ Analisis kehadiran dikelompokkan per jabatan

- ✅ Kalkulasi persentase per status

- ✅ Filter rentang tanggal

- ✅ Ringkasan per user### 🔐 Autentikasi & Otorisasi- **Runtime**: Node.js



---- ✅ Autentikasi berbasis JWT



## 📁 Struktur Project- ✅ Kontrol akses berbasis role (Admin & User)## 🚀 Teknologi yang Digunakan



```- ✅ Password di-hash dengan bcrypt

latihanukl2025/

├── prisma/- ✅ Middleware validasi token## 📋 Fitur-Fitur

│   ├── schema.prisma          # Schema database

│   ├── migrations/            # Migrasi database

│   ├── prisma.module.ts       # Module Prisma

│   └── prisma.service.ts      # Service Prisma### 👥 Manajemen User- **Framework**: NestJS 11.x

├── src/

│   ├── main.ts                # Entry point aplikasi- ✅ Operasi CRUD untuk user

│   ├── app.module.ts          # Module utama

│   ├── auth/                  # Module autentikasi- ✅ Role user (admin/user)### 🔐 Autentikasi & Otorisasi- **Bahasa**: TypeScript 5.7.x

│   │   ├── auth.controller.ts

│   │   ├── auth.service.ts- ✅ Penugasan jabatan (staff, manager, supervisor, admin)

│   │   └── dto/

│   ├── user/                  # Module manajemen user- ✅ Endpoint khusus admin- ✅ Autentikasi berbasis JWT- **Database**: MySQL

│   │   ├── user.controller.ts

│   │   ├── user.service.ts

│   │   └── dto/

│   ├── attendance/            # Module kehadiran### 📅 Sistem Kehadiran- ✅ Kontrol akses berbasis role (Admin & User)- **ORM**: Prisma 6.18.x

│   │   ├── attendance.controller.ts

│   │   ├── attendance.service.ts- ✅ Membuat record kehadiran

│   │   └── dto/

│   ├── guards/                # Security guards- ✅ Melihat riwayat kehadiran- ✅ Password di-hash dengan bcrypt- **Autentikasi**: JWT (@nestjs/jwt)

│   │   ├── jwt-auth.guard.ts

│   │   └── roles.guard.ts- ✅ Ringkasan kehadiran bulanan

│   └── decorators/

│       └── roles.decorator.ts- ✅ Analitik lanjutan per jabatan- ✅ Middleware validasi token- **Password Hashing**: bcrypt

└── test/                      # Testing E2E

```- ✅ Filter berdasarkan rentang tanggal



---- ✅ Tracking status (Hadir, Izin, Sakit, Alpha)- **Runtime**: Node.js



## 🗄️ Skema Database



### Tabel User### 📊 Analitik & Pelaporan### 👥 Manajemen User

```sql

id          : INT (Primary Key, Auto Increment)- ✅ Analisis kehadiran dikelompokkan per jabatan

name        : STRING

username    : STRING (Unique)- ✅ Kalkulasi persentase per status- ✅ Operasi CRUD untuk user## 📋 Fitur-Fitur

password    : STRING (Di-hash dengan bcrypt)

role        : STRING (default: "user")- ✅ Filter rentang tanggal

jabatan     : STRING (default: "staff")

createdAt   : DATETIME- ✅ Ringkasan per user- ✅ Role user (admin/user)

updatedAt   : DATETIME

```



### Tabel Attendance---- ✅ Penugasan jabatan### 🔐 Autentikasi & Otorisasi

```sql

id          : INT (Primary Key, Auto Increment)

userId      : INT (Foreign Key → User.id)

date        : DATETIME## 📁 Struktur Project- ✅ Endpoint khusus admin- ✅ Autentikasi berbasis JWT

status      : STRING (hadir/izin/sakit/alpha)

createdAt   : DATETIME

updatedAt   : DATETIME

``````- ✅ Kontrol akses berbasis role (Admin & User)



**Relasi:** User (1) → Attendance (N) - One to Manylatihanukl2025/



---├── prisma/### 📅 Sistem Kehadiran- ✅ Password di-hash dengan bcrypt



## 🔧 Instalasi│   ├── schema.prisma          # Schema database



### Prasyarat│   ├── migrations/            # Migrasi database- ✅ Membuat record kehadiran- ✅ Middleware validasi token

- Node.js (v18 atau lebih tinggi)

- MySQL Database│   ├── prisma.module.ts       # Module Prisma

- npm atau yarn

│   └── prisma.service.ts      # Service Prisma- ✅ Melihat riwayat kehadiran

### Langkah-langkah Setup

├── src/

#### 1️⃣ Clone Repository

```bash│   ├── main.ts                # Entry point aplikasi- ✅ Ringkasan kehadiran bulanan### 👥 Manajemen User

git clone <repository-url>

cd latihanukl2025│   ├── app.module.ts          # Module utama

```

│   ├── auth/                  # Module autentikasi- ✅ Analitik lanjutan per jabatan- ✅ Operasi CRUD untuk user

#### 2️⃣ Install Dependencies

```bash│   │   ├── auth.controller.ts

npm install

```│   │   ├── auth.service.ts- ✅ Filter berdasarkan rentang tanggal- ✅ Role user (admin/user)



#### 3️⃣ Konfigurasi Environment│   │   └── dto/

Buat file `.env` di root directory:

```env│   ├── user/                  # Module manajemen user- ✅ Tracking status (Hadir, Izin, Sakit, Alpha)- ✅ Penugasan jabatan

DATABASE_URL="mysql://user:password@localhost:3306/attendance_db"

JWT_SECRET="your-super-secret-key-here"│   │   ├── user.controller.ts

```

│   │   ├── user.service.ts- ✅ Endpoint khusus admin

#### 4️⃣ Setup Database

```bash│   │   └── dto/

# Generate Prisma Client

npx prisma generate│   ├── attendance/            # Module kehadiran### 📊 Analitik & Pelaporan



# Jalankan migrasi│   │   ├── attendance.controller.ts

npx prisma migrate dev

│   │   ├── attendance.service.ts- ✅ Analisis kehadiran dikelompokkan per jabatan### 📅 Sistem Kehadiran

# (Opsional) Seed database

npx prisma db seed│   │   └── dto/

```

│   ├── guards/                # Security guards- ✅ Kalkulasi persentase per status- ✅ Membuat record kehadiran

#### 5️⃣ Jalankan Aplikasi

```bash│   │   ├── jwt-auth.guard.ts

# Mode development

npm run start:dev│   │   └── roles.guard.ts- ✅ Filter rentang tanggal- ✅ Melihat riwayat kehadiran



# Mode production│   └── decorators/

npm run build

npm run start:prod│       └── roles.decorator.ts- ✅ Ringkasan per user- ✅ Ringkasan kehadiran bulanan

```

└── test/                      # Testing E2E

✅ Aplikasi akan berjalan di: **http://localhost:3000**

```- ✅ Analitik lanjutan per jabatan

---



## 📚 Dokumentasi API

---## 📁 Struktur Project- ✅ Filter berdasarkan rentang tanggal

### 🔐 Modul Autentikasi



#### 1. Login Admin

```http## 🗄️ Skema Database- ✅ Tracking status (Hadir, Izin, Sakit, Alpha)

POST /auth/login

Content-Type: application/json



{### Tabel User```

  "username": "admin",

  "password": "password123"```sql

}

```- id          : INT (Primary Key, Auto Increment)latihanukl2025/### 📊 Analitik & Pelaporan



**📷 Screenshot Postman:**- name        : STRING



![Login Admin](images/login-admin.png)- username    : STRING (Unique)├── prisma/- ✅ Analisis kehadiran dikelompokkan per jabatan



---- password    : STRING (Di-hash dengan bcrypt)



#### 2. Login User- role        : STRING (default: "user")│   ├── schema.prisma          # Schema database- ✅ Kalkulasi persentase per status

```http

POST /auth/login- jabatan     : STRING (default: "staff")

Content-Type: application/json

- createdAt   : DATETIME│   ├── migrations/            # Migrasi database- ✅ Filter rentang tanggal

{

  "username": "user",- updatedAt   : DATETIME

  "password": "password123"

}```│   ├── prisma.module.ts       # Module Prisma- ✅ Ringkasan per user

```



**📷 Screenshot Postman:**

### Tabel Attendance│   └── prisma.service.ts      # Service Prisma

![Login User](images/login-user.png)

```sql

---

- id          : INT (Primary Key, Auto Increment)├── src/## 📁 Struktur Project

### 👥 Modul User Management (Khusus Admin)

- userId      : INT (Foreign Key → User.id)

> ⚠️ **Catatan:** Semua endpoint user memerlukan header `Authorization: Bearer <admin-token>` dan role admin.

- date        : DATETIME│   ├── main.ts                # Entry point aplikasi

#### 3. Buat User - Staff

```http- status      : STRING (hadir/izin/sakit/alpha)

POST /user

Authorization: Bearer <admin-token>- createdAt   : DATETIME│   ├── app.module.ts          # Module utama```

Content-Type: application/json

- updatedAt   : DATETIME

{

  "name": "Staff User",```│   ├── auth/                  # Module autentikasi

  "username": "staff01",

  "password": "password123",

  "role": "user",

  "jabatan": "staff"**Relasi:** User (1) → Attendance (N) - One to Many│   │   ├── auth.controller.tslatihanukl2025/

}

```



**📷 Screenshot Postman:**---│   │   ├── auth.service.ts├── prisma/



![Create Staff](images/create-staff.png)



---## 🔧 Instalasi│   │   └── dto/│   ├── schema.prisma          # Schema database



#### 4. Buat User - Manager

```http

POST /user### Prasyarat│   ├── user/                  # Module manajemen user│   ├── migrations/            # Migrasi database

Authorization: Bearer <admin-token>

Content-Type: application/json- Node.js (v18 atau lebih tinggi)



{- MySQL Database│   │   ├── user.controller.ts│   ├── prisma.module.ts       # Module Prisma

  "name": "Manager User",

  "username": "manager01",- npm atau yarn

  "password": "password123",

  "role": "user",│   │   ├── user.service.ts│   └── prisma.service.ts      # Service Prisma

  "jabatan": "manager"

}### Langkah-langkah Setup

```

│   │   └── dto/├── src/

**📷 Screenshot Postman:**

#### 1️⃣ Clone Repository

![Create Manager](images/create-manager.png)

```bash│   ├── attendance/            # Module kehadiran│   ├── main.ts                # Entry point aplikasi

---

git clone <repository-url>

#### 5. Buat User - Supervisor

```httpcd latihanukl2025│   │   ├── attendance.controller.ts│   ├── app.module.ts          # Module utama

POST /user

Authorization: Bearer <admin-token>```

Content-Type: application/json

│   │   ├── attendance.service.ts│   ├── auth/                  # Module autentikasi

{

  "name": "Supervisor User",#### 2️⃣ Install Dependencies

  "username": "supervisor01",

  "password": "password123",```bash│   │   └── dto/│   │   ├── auth.controller.ts

  "role": "user",

  "jabatan": "supervisor"npm install

}

``````│   ├── guards/                # Security guards│   │   ├── auth.service.ts



**📷 Screenshot Postman:**



![Create Supervisor](images/create-supervisor.png)#### 3️⃣ Konfigurasi Environment│   │   ├── jwt-auth.guard.ts│   │   └── dto/



---Buat file `.env` di root directory:



#### 6. Buat Admin Baru```env│   │   └── roles.guard.ts│   ├── user/                  # Module manajemen user

```http

POST /userDATABASE_URL="mysql://user:password@localhost:3306/attendance_db"

Authorization: Bearer <admin-token>

Content-Type: application/jsonJWT_SECRET="your-super-secret-key-here"│   └── decorators/│   │   ├── user.controller.ts



{```

  "name": "Admin User",

  "username": "admin02",│       └── roles.decorator.ts│   │   ├── user.service.ts

  "password": "password123",

  "role": "admin",#### 4️⃣ Setup Database

  "jabatan": "admin"

}```bash└── test/                      # Testing E2E│   │   └── dto/

```

# Generate Prisma Client

**📷 Screenshot Postman:**

npx prisma generate```│   ├── attendance/            # Module kehadiran

![Create Admin](images/create-admin.png)



---

# Jalankan migrasi│   │   ├── attendance.controller.ts

#### 7. Lihat Semua User

```httpnpx prisma migrate dev

GET /user

Authorization: Bearer <admin-token>## 🗄️ Skema Database│   │   ├── attendance.service.ts

```

# (Opsional) Seed database

**📷 Screenshot Postman:**

npx prisma db seed│   │   └── dto/

![Get All Users](images/get-user.png)

```

---

### Tabel User│   ├── guards/                # Security guards

#### 8. Lihat User Berdasarkan ID

```http#### 5️⃣ Jalankan Aplikasi

GET /user/:id

Authorization: Bearer <admin-token>```bash```sql│   │   ├── jwt-auth.guard.ts

```

# Mode development

**📷 Screenshot Postman:**

npm run start:dev- id: INT (Primary Key, Auto Increment)│   │   └── roles.guard.ts

![Get User By ID](images/get-userbyid.png)



---

# Mode production- name: STRING│   └── decorators/

#### 9. Update User - Ubah Nama

```httpnpm run build

PUT /user/:id

Authorization: Bearer <admin-token>npm run start:prod- username: STRING│       └── roles.decorator.ts

Content-Type: application/json

```

{

  "name": "Nama User Updated"- password: STRING (Di-hash)└── test/                      # Testing E2E

}

```✅ Aplikasi akan berjalan di: **http://localhost:3000**



**📷 Screenshot Postman:**- role: STRING (default: "user")



![Update User Name](images/put-changename.png)---



---- jabatan: STRING (default: "staff")````



#### 10. Update User - Ubah Jabatan## 📚 Dokumentasi API

```http

PUT /user/:id- createdAt: DATETIME

Authorization: Bearer <admin-token>

Content-Type: application/json### 🔐 Modul Autentikasi



{- updatedAt: DATETIME## 🗄️ Skema Database

  "jabatan": "manager"

}#### 1. Login Admin

```

```http```

**📷 Screenshot Postman:**

POST /auth/login

![Update User Jabatan](images/put-changejabatan.png)

Content-Type: application/json### Tabel User

---



#### 11. Update User - Ubah Password

```http{### Tabel Attendance```sql

PUT /user/:id

Authorization: Bearer <admin-token>  "username": "admin",

Content-Type: application/json

  "password": "password123"```sql- id: INT (Primary Key, Auto Increment)

{

  "password": "newpassword123"}

}

``````- id: INT (Primary Key, Auto Increment)- name: STRING



**📷 Screenshot Postman:**



![Update User Password](images/put-changepassword.png)**📷 Screenshot Postman:**- userId: INT (Foreign Key → User.id)- username: STRING



---



#### 12. Hapus User![Login Admin](images/login-admin.png)- date: DATETIME- password: STRING (Di-hash)

```http

DELETE /user/:id

Authorization: Bearer <admin-token>

```---- status: STRING (hadir/izin/sakit/alpha)- role: STRING (default: "user")



**📷 Screenshot Postman:**



![Delete User](images/delete-user.png)#### 2. Login User- createdAt: DATETIME- jabatan: STRING (default: "staff")



---```http



### 📅 Modul Attendance (Kehadiran)POST /auth/login- updatedAt: DATETIME- createdAt: DATETIME



#### 13. Buat Kehadiran (User/Admin)Content-Type: application/json

```http

POST /attendance```- updatedAt: DATETIME

Authorization: Bearer <token>

Content-Type: application/json{



{  "username": "user",````

  "status": "hadir"

}  "password": "password123"

```

}## 🔧 Instalasi

**Status yang tersedia:** `hadir`, `izin`, `sakit`, `alpha`

```

**📷 Screenshot Postman:**

### Tabel Attendance

![Create Attendance](images/create-attendance.png)

**📷 Screenshot Postman:**

---

### Prasyarat

#### 14. Lihat Semua Kehadiran (Khusus Admin)

```http![Login User](images/login-user.png)

GET /attendance

Authorization: Bearer <admin-token>- Node.js (v18 atau lebih tinggi)```sql

```

---

**📷 Screenshot Postman:**

- MySQL Database- id: INT (Primary Key, Auto Increment)

![Get All Attendance](images/get-attendances.png)

### 👥 Modul User Management (Khusus Admin)

---

- npm atau yarn- userId: INT (Foreign Key → User.id)

#### 15. Lihat Riwayat Kehadiran User (User/Admin)

```http> ⚠️ **Catatan:** Semua endpoint user memerlukan header `Authorization: Bearer <admin-token>` dan role admin.

GET /attendance/history

Authorization: Bearer <token>- date: DATETIME

```

#### 3. Buat User - Staff

**📷 Screenshot Postman:**

```http### Langkah-langkah Setup- status: STRING (hadir/izin/sakit/alpha)

![Attendance History](images/get-userattendancehistory.png)

POST /user

---

Authorization: Bearer <admin-token>- createdAt: DATETIME

#### 16. Lihat Ringkasan Bulanan (User/Admin)

```httpContent-Type: application/json

GET /attendance/summary

Authorization: Bearer <token>1. **Clone repository**- updatedAt: DATETIME

```

{

**📷 Screenshot Postman:**

  "name": "Staff User",```bash```

![Attendance Summary](images/get-summary.png)

  "username": "staff01",

---

  "password": "password123",git clone <repository-url>

#### 17. Analisis Kehadiran - Umum (Khusus Admin)

```http  "role": "user",

POST /attendance/analyze

Authorization: Bearer <admin-token>  "jabatan": "staff"cd latihanukl2025## 🔧 Instalasi

Content-Type: application/json

}

{

  "startDate": "2025-11-01",``````

  "endDate": "2025-11-30"

}

```

**📷 Screenshot Postman:**### Prasyarat

**📷 Screenshot Postman:**



![Attendance Analysis](images/analyzeattendance.png)

![Create Staff](images/create-staff.png)2. **Install dependencies**

---



#### 18. Analisis Kehadiran - Per Jabatan (Khusus Admin)

```http---```bash* Node.js (v18 atau lebih tinggi)

POST /attendance/analyze

Authorization: Bearer <admin-token>

Content-Type: application/json

#### 4. Buat User - Managernpm install* MySQL Database

{

  "startDate": "2025-11-01",```http

  "endDate": "2025-11-30",

  "groupByJabatan": "manager"POST /user```* npm atau yarn

}

```Authorization: Bearer <admin-token>



**📷 Screenshot Postman:**Content-Type: application/json



![Attendance Analysis by Jabatan](images/analyzeattendancebyjabatan.png)



---{3. **Konfigurasi environment**### Langkah-langkah Setup



#### 19. Lihat Kehadiran Berdasarkan ID (Khusus Admin)  "name": "Manager User",

```http

GET /attendance/:id  "username": "manager01",   

Authorization: Bearer <admin-token>

```  "password": "password123",



**📷 Screenshot Postman:**  "role": "user",   Buat file `.env` di root directory:1. **Clone repository**



![Get Attendance By ID](images/get-attendancebyid.png)  "jabatan": "manager"



---}```env



#### 20. Update Kehadiran (Khusus Admin)```

```http

PATCH /attendance/:idDATABASE_URL="mysql://user:password@localhost:3306/attendance_db"```bash

Authorization: Bearer <admin-token>

Content-Type: application/json**📷 Screenshot Postman:**



{JWT_SECRET="your-super-secret-key-here"git clone <repository-url>

  "status": "izin"

}![Create Manager](images/create-manager.png)

```

```cd latihanukl2025

**📷 Screenshot Postman:**

---

![Update Attendance](images/update-attendance.png)

```

---

#### 5. Buat User - Supervisor

#### 21. Hapus Kehadiran (Khusus Admin)

```http```http4. **Setup database**

DELETE /attendance/:id

Authorization: Bearer <admin-token>POST /user

```

Authorization: Bearer <admin-token>```bash2. **Install dependencies**

**📷 Screenshot Postman:**

Content-Type: application/json

![Delete Attendance](images/delete-attendance.png)

# Generate Prisma Client

---

{

## 🎯 Format Response Standar

  "name": "Supervisor User",npx prisma generate```bash

### ✅ Response Sukses

```json  "username": "supervisor01",

{

  "statusCode": 200,  "password": "password123",npm install

  "message": "Success message",

  "success": true,  "role": "user",

  "data": {

      "jabatan": "supervisor"# Jalankan migrasi```

  }

}}

```

```npx prisma migrate dev

### ❌ Response Error

```json

{

  "statusCode": 400,**📷 Screenshot Postman:**3. **Konfigurasi environment**

  "message": "Error message",

  "success": false,

  "error": "Error details"

}![Create Supervisor](images/create-supervisor.png)# (Opsional) Seed database   Buat file `.env` di root directory:

```



### 📊 Status Code yang Digunakan

---npx prisma db seed

| Status Code | Keterangan |

|-------------|------------|

| 200 | OK - Request berhasil |

| 201 | Created - Resource berhasil dibuat |#### 6. Buat Admin Baru``````env

| 400 | Bad Request - Input tidak valid |

| 401 | Unauthorized - Token tidak valid/expired |```http

| 403 | Forbidden - Tidak memiliki akses |

| 404 | Not Found - Resource tidak ditemukan |POST /userDATABASE_URL="mysql://user:password@localhost:3306/attendance_db"

| 500 | Internal Server Error - Error server |

Authorization: Bearer <admin-token>

---

Content-Type: application/json5. **Jalankan aplikasi**JWT_SECRET="your-super-secret-key-here"

## 🔒 Keamanan



### 🔑 JWT Token

- ⏰ **Token Expiration:** 24 jam{```bash```

- 📋 **Token Payload:** `userId`, `username`, `role`

- 📤 **Header Format:** `Authorization: Bearer <token>`  "name": "Admin User",

- 🔄 **Refresh:** Login ulang setelah token expired

  "username": "admin02",# Mode development

### 👮 Role-Based Access Control (RBAC)

  "password": "password123",

| Endpoint | Admin | User |

|----------|-------|------|  "role": "admin",npm run start:dev4. **Setup database**

| POST /auth/login | ✅ | ✅ |

| POST /user | ✅ | ❌ |  "jabatan": "admin"

| GET /user | ✅ | ❌ |

| GET /user/:id | ✅ | ❌ |}

| PUT /user/:id | ✅ | ❌ |

| DELETE /user/:id | ✅ | ❌ |```

| POST /attendance | ✅ | ✅ |

| GET /attendance | ✅ | ❌ |# Mode production```bash

| GET /attendance/history | ✅ | ✅ (own) |

| GET /attendance/summary | ✅ | ✅ (own) |**📷 Screenshot Postman:**

| POST /attendance/analyze | ✅ | ❌ |

| GET /attendance/:id | ✅ | ❌ |npm run build# Generate Prisma Client

| PATCH /attendance/:id | ✅ | ❌ |

| DELETE /attendance/:id | ✅ | ❌ |![Create Admin](images/create-admin.png)



### 🔐 Password Securitynpm run start:prodnpx prisma generate

- ✅ Hash dengan bcrypt (salt rounds: 10)

- ✅ Password tidak pernah dikembalikan dalam response---

- ✅ Minimum password length: 6 karakter

- ✅ Password di-hash sebelum disimpan ke database```



---#### 7. Lihat Semua User



## 🛠️ Command Prisma```http# Jalankan migrasi



```bashGET /user

# Generate Prisma Client

npx prisma generateAuthorization: Bearer <admin-token>Aplikasi akan berjalan di `http://localhost:3000`npx prisma migrate dev



# Create migration```

npx prisma migrate dev --name migration_name



# Apply migrations to production

npx prisma migrate deploy**📷 Screenshot Postman:**



# Reset database (⚠️ HATI-HATI!)---# (Opsional) Seed database

npx prisma migrate reset

![Get All Users](images/get-user.png)

# Open Prisma Studio (GUI Database)

npx prisma studionpx prisma db seed



# Format schema.prisma---

npx prisma format

## 📚 Dokumentasi API```

# Pull schema from existing database

npx prisma db pull#### 8. Lihat User Berdasarkan ID



# Push schema to database (tanpa migration)```http

npx prisma db push

```GET /user/:id



---Authorization: Bearer <admin-token>### 🔐 Autentikasi5. **Jalankan aplikasi**



## 🧪 Testing```



```bash

# Run unit tests

npm run test**📷 Screenshot Postman:**



# Run E2E tests#### Login Admin```bash

npm run test:e2e

![Get User By ID](images/get-userbyid.png)

# Generate test coverage

npm run test:cov```http# Mode development



# Run tests in watch mode---

npm run test:watch

```POST /auth/loginnpm run start:dev



---#### 9. Update User - Ubah Nama



## 📦 Postman Collection```httpContent-Type: application/json



Untuk mempermudah testing API, sudah tersedia **Postman Collection** lengkap dengan 27 requests!PUT /user/:id



### 📂 File yang Tersedia:Authorization: Bearer <admin-token># Mode production

1. **Attendance-API.postman_collection.json** - Collection dengan 27 requests

2. **Attendance-API.postman_environment.json** - Environment variablesContent-Type: application/json

3. **POSTMAN_GUIDE.md** - Panduan lengkap penggunaan

4. **POSTMAN_COLLECTION_SUMMARY.md** - Ringkasan collection{npm run build



### 📥 Cara Import ke Postman:{



1. Buka aplikasi **Postman**  "name": "Nama User Updated"  "username": "admin",npm run start:prod

2. Klik tombol **Import** di pojok kiri atas

3. Pilih **file** atau drag & drop kedua file JSON:}

   - `Attendance-API.postman_collection.json`

   - `Attendance-API.postman_environment.json````  "password": "password123"```

4. Pilih environment **"Attendance API"** di dropdown (pojok kanan atas)

5. Selesai! Siap untuk testing 🚀



### ✨ Fitur Collection:**📷 Screenshot Postman:**}

- ✅ 27 request lengkap (Auth, User, Attendance)

- ✅ Auto-save token setelah login

- ✅ Environment variables untuk token & IDs

- ✅ Test scripts untuk validasi otomatis![Update User Name](images/put-changename.png)```Aplikasi akan berjalan di `http://localhost:3000`

- ✅ Multiple test scenarios (Admin flow, User flow)



---

---

## 🚨 Troubleshooting



### ❌ Database Connection Error

```bash#### 10. Update User - Ubah Jabatan**📷 Bukti Testing (Postman):**## 📚 Dokumentasi API

# Solusi 1: Pastikan MySQL berjalan

sudo service mysql start    # Linux```http

net start MySQL             # Windows

PUT /user/:id

# Solusi 2: Cek DATABASE_URL di .env

cat .envAuthorization: Bearer <admin-token>



# Solusi 3: Test koneksi databaseContent-Type: application/json![Login Admin](images/login-admin.png)---

npx prisma db pull

```



### ❌ JWT Token Invalid{

**Penyebab:**

- Token sudah expired (> 24 jam)  "jabatan": "manager"

- Format header salah

- Token tidak dari endpoint `/auth/login`}---### 🔐 Autentikasi



**Solusi:**```

1. Login ulang untuk mendapatkan token baru

2. Pastikan format header: `Authorization: Bearer <token>`

3. Cek token di environment Postman

**📷 Screenshot Postman:**

### ❌ Port Already in Use

```bash#### Login User#### Login

# Solusi 1: Ubah port di main.ts

# Solusi 2: Kill process yang menggunakan port 3000![Update User Jabatan](images/put-changejabatan.png)

# Windows:

netstat -ano | findstr :3000```http

taskkill /PID <PID> /F

---

# Linux/Mac:

lsof -ti:3000 | xargs kill -9POST /auth/login```http



# Solusi 3: Gunakan port lain#### 11. Update User - Ubah Password

PORT=3001 npm run start:dev

``````httpContent-Type: application/jsonPOST /auth/login



### ❌ Prisma Generate ErrorPUT /user/:id

```bash

# Solusi: Clear cache dan regenerateAuthorization: Bearer <admin-token>Content-Type: application/json

rm -rf node_modules/.prisma

npx prisma generateContent-Type: application/json

```

{

---

{

## 📝 Best Practices

  "password": "newpassword123"  "username": "user",{

| No | Practice | Keterangan |

|----|----------|------------|}

| 1️⃣ | **Environment Variables** | Gunakan `.env` untuk data sensitif |

| 2️⃣ | **Validasi Input** | Implementasi DTO validation di semua endpoint |```  "password": "password123"  "username": "admin",

| 3️⃣ | **Error Handling** | Gunakan proper HTTP status codes |

| 4️⃣ | **Database Transaction** | Untuk operasi multiple database |

| 5️⃣ | **Logging** | Implement logging untuk debugging |

| 6️⃣ | **Testing** | Test semua endpoint sebelum deployment |**📷 Screenshot Postman:**}  "password": "password123"

| 7️⃣ | **Documentation** | Update API docs saat ada perubahan |

| 8️⃣ | **Version Control** | Commit dengan message yang jelas |



---![Update User Password](images/put-changepassword.png)```}



## 📊 Statistik API



| Kategori | Jumlah |---```

|----------|--------|

| Total Endpoints | 21 |

| Auth Endpoints | 2 |

| User Endpoints | 6 |#### 12. Hapus User**📷 Bukti Testing (Postman):**

| Attendance Endpoints | 13 |

| Admin Only | 14 |```http

| User Access | 7 |

DELETE /user/:id**📷 Bukti Testing (Postman):**

---

Authorization: Bearer <admin-token>

## 📄 Lisensi

```![Login User](images/login-user.png)![Login Test](docs/images/login-test.png)

Project ini dibuat untuk keperluan **UKL 2025**



---

**📷 Screenshot Postman:**

## 👨‍💻 Developer



Dibuat dengan ❤️ untuk **UKL 2025**

![Delete User](images/delete-user.png)------

---



## 📞 Kontak & Support

---

Jika ada pertanyaan atau issue, silakan buat issue di repository ini atau hubungi maintainer.



---

### 📅 Modul Attendance (Kehadiran)### 👥 Endpoint User (Khusus Admin)### 👥 Endpoint User (Khusus Admin)

<div align="center">



### 🎉 Selamat Coding dan Semoga Nilai UKL-mu Sempurna! 🎉

#### 13. Buat Kehadiran (User/Admin)

**Made with ❤️ using NestJS**

```http

</div>

POST /attendanceSemua endpoint user memerlukan header `Authorization: Bearer <token>` dan role admin.Semua endpoint user memerlukan header `Authorization: Bearer <token>` dan role admin.

Authorization: Bearer <token>

Content-Type: application/json



{#### Buat User Baru - Staff#### Buat User Baru

  "status": "hadir"

}```http

```

POST /user```http

**Status yang tersedia:** `hadir`, `izin`, `sakit`, `alpha`

Authorization: Bearer <admin-token>POST /user

**📷 Screenshot Postman:**

Content-Type: application/jsonAuthorization: Bearer <admin-token>

![Create Attendance](images/create-attendance.png)

Content-Type: application/json

---

{

#### 14. Lihat Semua Kehadiran (Khusus Admin)

```http  "name": "Staff User",{

GET /attendance

Authorization: Bearer <admin-token>  "username": "staff01",  "name": "John Doe",

```

  "password": "password123",  "username": "johndoe",

**📷 Screenshot Postman:**

  "role": "user",  "password": "password123",

![Get All Attendance](images/get-attendances.png)

  "jabatan": "staff"  "role": "user",

---

}  "jabatan": "staff"

#### 15. Lihat Riwayat Kehadiran User (User/Admin)

```http```}

GET /attendance/history

Authorization: Bearer <token>```

```

**📷 Bukti Testing (Postman):**

**📷 Screenshot Postman:**

**📷 Bukti Testing (Postman):**

![Attendance History](images/get-userattendancehistory.png)

![Create Staff](images/create-staff.png)![Create User Test](docs/images/create-user-test.png)

---



#### 16. Lihat Ringkasan Bulanan (User/Admin)

```http---#### Lihat Semua User

GET /attendance/summary

Authorization: Bearer <token>

```

#### Buat User Baru - Manager```http

**📷 Screenshot Postman:**

```httpGET /user

![Attendance Summary](images/get-summary.png)

POST /userAuthorization: Bearer <admin-token>

---

Authorization: Bearer <admin-token>```

#### 17. Analisis Kehadiran - Umum (Khusus Admin)

```httpContent-Type: application/json

POST /attendance/analyze

Authorization: Bearer <admin-token>**📷 Bukti Testing (Postman):**

Content-Type: application/json

{![Get All Users](docs/images/get-users-test.png)

{

  "startDate": "2025-11-01",  "name": "Manager User",

  "endDate": "2025-11-30"

}  "username": "manager01",#### Lihat User Berdasarkan ID

```

  "password": "password123",

**📷 Screenshot Postman:**

  "role": "user",```http

![Attendance Analysis](images/analyzeattendance.png)

  "jabatan": "manager"GET /user/:id

---

}Authorization: Bearer <admin-token>

#### 18. Analisis Kehadiran - Per Jabatan (Khusus Admin)

```http``````

POST /attendance/analyze

Authorization: Bearer <admin-token>

Content-Type: application/json

**📷 Bukti Testing (Postman):****📷 Bukti Testing (Postman):**

{

  "startDate": "2025-11-01",![Get User By ID](docs/images/get-user-by-id.png)

  "endDate": "2025-11-30",

  "groupByJabatan": "manager"![Create Manager](images/create-manager.png)

}

```#### Update User



**📷 Screenshot Postman:**---



![Attendance Analysis by Jabatan](images/analyzeattendancebyjabatan.png)```http



---#### Buat User Baru - SupervisorPUT /user/:id



#### 19. Lihat Kehadiran Berdasarkan ID (Khusus Admin)```httpAuthorization: Bearer <admin-token>

```http

GET /attendance/:idPOST /userContent-Type: application/json

Authorization: Bearer <admin-token>

```Authorization: Bearer <admin-token>



**📷 Screenshot Postman:**Content-Type: application/json{



![Get Attendance By ID](images/get-attendancebyid.png)  "name": "John Doe Updated",



---{  "jabatan": "manager"



#### 20. Update Kehadiran (Khusus Admin)  "name": "Supervisor User",}

```http

PATCH /attendance/:id  "username": "supervisor01",```

Authorization: Bearer <admin-token>

Content-Type: application/json  "password": "password123",



{  "role": "user",**📷 Bukti Testing (Postman):**

  "status": "izin"

}  "jabatan": "supervisor"![Update User](docs/images/update-user-test.png)

```

}

**📷 Screenshot Postman:**

```#### Hapus User

![Update Attendance](images/update-attendance.png)



---

**📷 Bukti Testing (Postman):**```http

#### 21. Hapus Kehadiran (Khusus Admin)

```httpDELETE /user/:id

DELETE /attendance/:id

Authorization: Bearer <admin-token>![Create Supervisor](images/create-supervisor.png)Authorization: Bearer <admin-token>

```

```

**📷 Screenshot Postman:**

---

![Delete Attendance](images/delete-attendance.png)

**📷 Bukti Testing (Postman):**

---

#### Buat Admin Baru![Delete User](docs/images/delete-user-test.png)

## 🎯 Format Response Standar

```http

### ✅ Response Sukses

```jsonPOST /user---

{

  "statusCode": 200,Authorization: Bearer <admin-token>

  "message": "Success message",

  "success": true,Content-Type: application/json### 📅 Endpoint Kehadiran

  "data": {

    // Data object atau array

  }

}{#### Buat Kehadiran (User/Admin)

```

  "name": "Admin User",

### ❌ Response Error

```json  "username": "admin02",```http

{

  "statusCode": 400,  "password": "password123",POST /attendance

  "message": "Error message",

  "success": false,  "role": "admin",Authorization: Bearer <token>

  "error": "Error details"

}  "jabatan": "admin"Content-Type: application/json

```

}

### 📊 Status Code yang Digunakan

| Status Code | Keterangan |```{

|-------------|------------|

| 200 | OK - Request berhasil |  "status": "hadir"

| 201 | Created - Resource berhasil dibuat |

| 400 | Bad Request - Input tidak valid |**📷 Bukti Testing (Postman):**}

| 401 | Unauthorized - Token tidak valid/expired |

| 403 | Forbidden - Tidak memiliki akses |```

| 404 | Not Found - Resource tidak ditemukan |

| 500 | Internal Server Error - Error server |![Create Admin](images/create-admin.png)



---**📷 Bukti Testing (Postman):**



## 🔒 Keamanan---![Create Attendance](docs/images/create-attendance.png)



### 🔑 JWT Token

- ⏰ **Token Expiration:** 24 jam

- 📋 **Token Payload:** `userId`, `username`, `role`#### Lihat Semua User#### Lihat Semua Kehadiran (Khusus Admin)

- 📤 **Header Format:** `Authorization: Bearer <token>`

- 🔄 **Refresh:** Login ulang setelah token expired```http



### 👮 Role-Based Access Control (RBAC)GET /user```http



| Endpoint | Admin | User |Authorization: Bearer <admin-token>GET /attendance

|----------|-------|------|

| POST /auth/login | ✅ | ✅ |```Authorization: Bearer <admin-token>

| POST /user | ✅ | ❌ |

| GET /user | ✅ | ❌ |```

| GET /user/:id | ✅ | ❌ |

| PUT /user/:id | ✅ | ❌ |**📷 Bukti Testing (Postman):**

| DELETE /user/:id | ✅ | ❌ |

| POST /attendance | ✅ | ✅ |**📷 Bukti Testing (Postman):**

| GET /attendance | ✅ | ❌ |

| GET /attendance/history | ✅ | ✅ (own) |![Get All Users](images/get-user.png)![Get All Attendance](docs/images/get-all-attendance.png)

| GET /attendance/summary | ✅ | ✅ (own) |

| POST /attendance/analyze | ✅ | ❌ |

| GET /attendance/:id | ✅ | ❌ |

| PATCH /attendance/:id | ✅ | ❌ |---#### Lihat Riwayat Kehadiran User (User/Admin)

| DELETE /attendance/:id | ✅ | ❌ |



### 🔐 Password Security

- ✅ Hash dengan bcrypt (salt rounds: 10)#### Lihat User Berdasarkan ID```http

- ✅ Password tidak pernah dikembalikan dalam response

- ✅ Minimum password length: 6 karakter```httpGET /attendance/history

- ✅ Password di-hash sebelum disimpan ke database

GET /user/:idAuthorization: Bearer <token>

---

Authorization: Bearer <admin-token>```

## 🛠️ Command Prisma

```

```bash

# Generate Prisma Client**📷 Bukti Testing (Postman):**

npx prisma generate

**📷 Bukti Testing (Postman):**![Attendance History](docs/images/attendance-history.png)

# Create migration

npx prisma migrate dev --name migration_name



# Apply migrations to production![Get User By ID](images/get-userbyid.png)#### Lihat Ringkasan Bulanan (User/Admin)

npx prisma migrate deploy



# Reset database (⚠️ HATI-HATI!)

npx prisma migrate reset---```http



# Open Prisma Studio (GUI Database)GET /attendance/summary

npx prisma studio

#### Update User - Ubah NamaAuthorization: Bearer <token>

# Format schema.prisma

npx prisma format```http```



# Pull schema from existing databasePUT /user/:id

npx prisma db pull

Authorization: Bearer <admin-token>**📷 Bukti Testing (Postman):**

# Push schema to database (tanpa migration)

npx prisma db pushContent-Type: application/json![Attendance Summary](docs/images/attendance-summary.png)

```



---

{#### Analisis Kehadiran (Khusus Admin)

## 🧪 Testing

  "name": "John Doe Updated"

```bash

# Run unit tests}```http

npm run test

```POST /attendance/analyze

# Run E2E tests

npm run test:e2eAuthorization: Bearer <admin-token>



# Generate test coverage**📷 Bukti Testing (Postman):**Content-Type: application/json

npm run test:cov



# Run tests in watch mode

npm run test:watch![Update User Name](images/put-changename.png){

```

  "startDate": "2025-11-01",

---

---  "endDate": "2025-11-30",

## 📦 Postman Collection

  "groupByJabatan": "manager"

Untuk mempermudah testing API, sudah tersedia **Postman Collection** lengkap dengan 27 requests!

#### Update User - Ubah Jabatan}

### 📂 File yang Tersedia:

1. **Attendance-API.postman_collection.json** - Collection dengan 27 requests```http```

2. **Attendance-API.postman_environment.json** - Environment variables

3. **POSTMAN_GUIDE.md** - Panduan lengkap penggunaanPUT /user/:id

4. **POSTMAN_COLLECTION_SUMMARY.md** - Ringkasan collection

Authorization: Bearer <admin-token>**📷 Bukti Testing (Postman):**

### 📥 Cara Import ke Postman:

Content-Type: application/json![Attendance Analysis](docs/images/attendance-analyze.png)

1. Buka aplikasi **Postman**

2. Klik tombol **Import** di pojok kiri atas

3. Pilih **file** atau drag & drop kedua file JSON:

   - `Attendance-API.postman_collection.json`{#### Lihat Kehadiran Berdasarkan ID (Khusus Admin)

   - `Attendance-API.postman_environment.json`

4. Pilih environment **"Attendance API"** di dropdown (pojok kanan atas)  "jabatan": "manager"

5. Selesai! Siap untuk testing 🚀

}```http

### ✨ Fitur Collection:

- ✅ 27 request lengkap (Auth, User, Attendance)```GET /attendance/:id

- ✅ Auto-save token setelah login

- ✅ Environment variables untuk token & IDsAuthorization: Bearer <admin-token>

- ✅ Test scripts untuk validasi otomatis

- ✅ Multiple test scenarios (Admin flow, User flow)**📷 Bukti Testing (Postman):**```



---



## 🚨 Troubleshooting![Update User Jabatan](images/put-changejabatan.png)**📷 Bukti Testing (Postman):**



### ❌ Database Connection Error![Get Attendance By ID](docs/images/get-attendance-by-id.png)

```bash

# Solusi 1: Pastikan MySQL berjalan---

sudo service mysql start    # Linux

net start MySQL             # Windows#### Update Kehadiran (Khusus Admin)



# Solusi 2: Cek DATABASE_URL di .env#### Update User - Ubah Password

cat .env

```http```http

# Solusi 3: Test koneksi database

npx prisma db pullPUT /user/:idPATCH /attendance/:id

```

Authorization: Bearer <admin-token>Authorization: Bearer <admin-token>

### ❌ JWT Token Invalid

**Penyebab:**Content-Type: application/jsonContent-Type: application/json

- Token sudah expired (> 2 jam)

- Format header salah

- Token tidak dari endpoint `/auth/login`

{{

**Solusi:**

1. Login ulang untuk mendapatkan token baru  "password": "newpassword123"  "status": "izin"

2. Pastikan format header: `Authorization: Bearer <token>`

3. Cek token di environment Postman}}



### ❌ Port Already in Use``````

```bash

# Solusi 1: Ubah port di main.ts

# Solusi 2: Kill process yang menggunakan port 3000

# Windows:**📷 Bukti Testing (Postman):****📷 Bukti Testing (Postman):**

netstat -ano | findstr :3000

taskkill /PID <PID> /F![Update Attendance](docs/images/update-attendance.png)



# Linux/Mac:![Update User Password](images/put-changepassword.png)

lsof -ti:3000 | xargs kill -9

#### Hapus Kehadiran (Khusus Admin)

# Solusi 3: Gunakan port lain

PORT=3001 npm run start:dev---

```

```http

### ❌ Prisma Generate Error

```bash#### Hapus UserDELETE /attendance/:id

# Solusi: Clear cache dan regenerate

rm -rf node_modules/.prisma```httpAuthorization: Bearer <admin-token>

npx prisma generate

```DELETE /user/:id```



---Authorization: Bearer <admin-token>



## 📝 Best Practices```**📷 Bukti Testing (Postman):**



| No | Practice | Keterangan |![Delete Attendance](docs/images/delete-attendance.png)

|----|----------|------------|

| 1️⃣ | **Environment Variables** | Gunakan `.env` untuk data sensitif |**📷 Bukti Testing (Postman):**

| 2️⃣ | **Validasi Input** | Implementasi DTO validation di semua endpoint |

| 3️⃣ | **Error Handling** | Gunakan proper HTTP status codes |---

| 4️⃣ | **Database Transaction** | Untuk operasi multiple database |

| 5️⃣ | **Logging** | Implement logging untuk debugging |![Delete User](images/delete-user.png)

| 6️⃣ | **Testing** | Test semua endpoint sebelum deployment |

| 7️⃣ | **Documentation** | Update API docs saat ada perubahan |## 🎯 Format Response

| 8️⃣ | **Version Control** | Commit dengan message yang jelas |

---

---

... *(seluruh bagian berikut tetap sama seperti versi kamu sebelumnya, tidak diubah)* ...

## 📊 Statistik API

### 📅 Endpoint Kehadiran

| Kategori | Jumlah |

|----------|--------|---

| Total Endpoints | 21 |

| Auth Endpoints | 2 |#### Buat Kehadiran (User/Admin)

| User Endpoints | 6 |

| Attendance Endpoints | 13 |```http## 📷 Bukti Tambahan Testing

| Admin Only | 14 |

| User Access | 7 |POST /attendance



---Authorization: Bearer <token>Kamu juga bisa menambahkan semua hasil testing secara berurutan di bagian ini, misalnya:



## 📄 LisensiContent-Type: application/json



Project ini dibuat untuk keperluan **UKL 2025**```markdown



---{### 📦 Semua Hasil Test Postman



## 👨‍💻 Developer  "status": "hadir"![Login Test](docs/images/login.png)



Dibuat dengan ❤️ untuk **UKL 2025**}![Create User Test](docs/images/user-create.png)



---```![Attendance Summary](docs/images/summary.png)



## 📞 Kontak & Support```



Jika ada pertanyaan atau issue, silakan buat issue di repository ini atau hubungi maintainer.**📷 Bukti Testing (Postman):**



------



<div align="center">![Create Attendance](images/create-attendance.png)



### 🎉 **Selamat Coding dan Semoga Nilai UKL-mu Sempurna!** 🎉**🎉 Selamat Coding dan Semoga Nilai UKL-mu Sempurna! 🎉**



**Made with ❤️ using NestJS**---



</div>```


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
