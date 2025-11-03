# 📊 Sistem Manajemen Kehadiran - UKL 2025# 📊 Sistem Manajemen Kehadiran - UKL 2025Oke 🔥 aku akan ambil **README-mu persis seperti yang kamu kirim tadi**, lalu tambahkan **placeholder bukti testing Postman** di bagian-bagian endpoint saja — tanpa mengubah isi, struktur, emoji, atau format markdown-mu sama sekali.



Aplikasi manajemen kehadiran berbasis RESTful API menggunakan NestJS, Prisma ORM, dan JWT Authentication dengan kontrol akses berbasis role.Notes : Import postman collection dan environtment untuk melakukan testing pada postman 



> **📌 Notes:** Import Postman collection dan environment untuk melakukan testing pada PostmanAplikasi manajemen kehadiran berbasis RESTful API menggunakan NestJS, Prisma ORM, dan JWT Authentication dengan kontrol akses berbasis role.Hasil akhirnya nanti kamu tinggal ganti path gambarnya aja (`docs/images/...`) sesuai screenshot milikmu.



---



## 🚀 Teknologi yang Digunakan## 🚀 Teknologi yang DigunakanBerikut versi **README.md**-nya 👇



| Teknologi | Versi | Keterangan |

|-----------|-------|------------|

| **Framework** | NestJS 11.x | Backend framework |- **Framework**: NestJS 11.x---

| **Bahasa** | TypeScript 5.7.x | Type-safe programming |

| **Database** | MySQL | Relational database |- **Bahasa**: TypeScript 5.7.x

| **ORM** | Prisma 6.18.x | Modern database toolkit |

| **Autentikasi** | JWT (@nestjs/jwt) | Token-based auth |- **Database**: MySQL```markdown

| **Password Hashing** | bcrypt | Secure password storage |

| **Runtime** | Node.js | JavaScript runtime |- **ORM**: Prisma 6.18.x# 📊 Sistem Manajemen Kehadiran - UKL 2025



---- **Autentikasi**: JWT (@nestjs/jwt)



## 📋 Fitur-Fitur- **Password Hashing**: bcryptAplikasi manajemen kehadiran berbasis RESTful API menggunakan NestJS, Prisma ORM, dan JWT Authentication dengan kontrol akses berbasis role.



### 🔐 Autentikasi & Otorisasi- **Runtime**: Node.js

- ✅ Autentikasi berbasis JWT

- ✅ Kontrol akses berbasis role (Admin & User)## 🚀 Teknologi yang Digunakan

- ✅ Password di-hash dengan bcrypt

- ✅ Middleware validasi token## 📋 Fitur-Fitur



### 👥 Manajemen User- **Framework**: NestJS 11.x

- ✅ Operasi CRUD untuk user

- ✅ Role user (admin/user)### 🔐 Autentikasi & Otorisasi- **Bahasa**: TypeScript 5.7.x

- ✅ Penugasan jabatan (staff, manager, supervisor, admin)

- ✅ Endpoint khusus admin- ✅ Autentikasi berbasis JWT- **Database**: MySQL



### 📅 Sistem Kehadiran- ✅ Kontrol akses berbasis role (Admin & User)- **ORM**: Prisma 6.18.x

- ✅ Membuat record kehadiran

- ✅ Melihat riwayat kehadiran- ✅ Password di-hash dengan bcrypt- **Autentikasi**: JWT (@nestjs/jwt)

- ✅ Ringkasan kehadiran bulanan

- ✅ Analitik lanjutan per jabatan- ✅ Middleware validasi token- **Password Hashing**: bcrypt

- ✅ Filter berdasarkan rentang tanggal

- ✅ Tracking status (Hadir, Izin, Sakit, Alpha)- **Runtime**: Node.js



### 📊 Analitik & Pelaporan### 👥 Manajemen User

- ✅ Analisis kehadiran dikelompokkan per jabatan

- ✅ Kalkulasi persentase per status- ✅ Operasi CRUD untuk user## 📋 Fitur-Fitur

- ✅ Filter rentang tanggal

- ✅ Ringkasan per user- ✅ Role user (admin/user)



---- ✅ Penugasan jabatan### 🔐 Autentikasi & Otorisasi



## 📁 Struktur Project- ✅ Endpoint khusus admin- ✅ Autentikasi berbasis JWT



```- ✅ Kontrol akses berbasis role (Admin & User)

latihanukl2025/

├── prisma/### 📅 Sistem Kehadiran- ✅ Password di-hash dengan bcrypt

│   ├── schema.prisma          # Schema database

│   ├── migrations/            # Migrasi database- ✅ Membuat record kehadiran- ✅ Middleware validasi token

│   ├── prisma.module.ts       # Module Prisma

│   └── prisma.service.ts      # Service Prisma- ✅ Melihat riwayat kehadiran

├── src/

│   ├── main.ts                # Entry point aplikasi- ✅ Ringkasan kehadiran bulanan### 👥 Manajemen User

│   ├── app.module.ts          # Module utama

│   ├── auth/                  # Module autentikasi- ✅ Analitik lanjutan per jabatan- ✅ Operasi CRUD untuk user

│   │   ├── auth.controller.ts

│   │   ├── auth.service.ts- ✅ Filter berdasarkan rentang tanggal- ✅ Role user (admin/user)

│   │   └── dto/

│   ├── user/                  # Module manajemen user- ✅ Tracking status (Hadir, Izin, Sakit, Alpha)- ✅ Penugasan jabatan

│   │   ├── user.controller.ts

│   │   ├── user.service.ts- ✅ Endpoint khusus admin

│   │   └── dto/

│   ├── attendance/            # Module kehadiran### 📊 Analitik & Pelaporan

│   │   ├── attendance.controller.ts

│   │   ├── attendance.service.ts- ✅ Analisis kehadiran dikelompokkan per jabatan### 📅 Sistem Kehadiran

│   │   └── dto/

│   ├── guards/                # Security guards- ✅ Kalkulasi persentase per status- ✅ Membuat record kehadiran

│   │   ├── jwt-auth.guard.ts

│   │   └── roles.guard.ts- ✅ Filter rentang tanggal- ✅ Melihat riwayat kehadiran

│   └── decorators/

│       └── roles.decorator.ts- ✅ Ringkasan per user- ✅ Ringkasan kehadiran bulanan

└── test/                      # Testing E2E

```- ✅ Analitik lanjutan per jabatan



---## 📁 Struktur Project- ✅ Filter berdasarkan rentang tanggal



## 🗄️ Skema Database- ✅ Tracking status (Hadir, Izin, Sakit, Alpha)



### Tabel User```

```sql

- id          : INT (Primary Key, Auto Increment)latihanukl2025/### 📊 Analitik & Pelaporan

- name        : STRING

- username    : STRING (Unique)├── prisma/- ✅ Analisis kehadiran dikelompokkan per jabatan

- password    : STRING (Di-hash dengan bcrypt)

- role        : STRING (default: "user")│   ├── schema.prisma          # Schema database- ✅ Kalkulasi persentase per status

- jabatan     : STRING (default: "staff")

- createdAt   : DATETIME│   ├── migrations/            # Migrasi database- ✅ Filter rentang tanggal

- updatedAt   : DATETIME

```│   ├── prisma.module.ts       # Module Prisma- ✅ Ringkasan per user



### Tabel Attendance│   └── prisma.service.ts      # Service Prisma

```sql

- id          : INT (Primary Key, Auto Increment)├── src/## 📁 Struktur Project

- userId      : INT (Foreign Key → User.id)

- date        : DATETIME│   ├── main.ts                # Entry point aplikasi

- status      : STRING (hadir/izin/sakit/alpha)

- createdAt   : DATETIME│   ├── app.module.ts          # Module utama```

- updatedAt   : DATETIME

```│   ├── auth/                  # Module autentikasi



**Relasi:** User (1) → Attendance (N) - One to Many│   │   ├── auth.controller.tslatihanukl2025/



---│   │   ├── auth.service.ts├── prisma/



## 🔧 Instalasi│   │   └── dto/│   ├── schema.prisma          # Schema database



### Prasyarat│   ├── user/                  # Module manajemen user│   ├── migrations/            # Migrasi database

- Node.js (v18 atau lebih tinggi)

- MySQL Database│   │   ├── user.controller.ts│   ├── prisma.module.ts       # Module Prisma

- npm atau yarn

│   │   ├── user.service.ts│   └── prisma.service.ts      # Service Prisma

### Langkah-langkah Setup

│   │   └── dto/├── src/

#### 1️⃣ Clone Repository

```bash│   ├── attendance/            # Module kehadiran│   ├── main.ts                # Entry point aplikasi

git clone <repository-url>

cd latihanukl2025│   │   ├── attendance.controller.ts│   ├── app.module.ts          # Module utama

```

│   │   ├── attendance.service.ts│   ├── auth/                  # Module autentikasi

#### 2️⃣ Install Dependencies

```bash│   │   └── dto/│   │   ├── auth.controller.ts

npm install

```│   ├── guards/                # Security guards│   │   ├── auth.service.ts



#### 3️⃣ Konfigurasi Environment│   │   ├── jwt-auth.guard.ts│   │   └── dto/

Buat file `.env` di root directory:

```env│   │   └── roles.guard.ts│   ├── user/                  # Module manajemen user

DATABASE_URL="mysql://user:password@localhost:3306/attendance_db"

JWT_SECRET="your-super-secret-key-here"│   └── decorators/│   │   ├── user.controller.ts

```

│       └── roles.decorator.ts│   │   ├── user.service.ts

#### 4️⃣ Setup Database

```bash└── test/                      # Testing E2E│   │   └── dto/

# Generate Prisma Client

npx prisma generate```│   ├── attendance/            # Module kehadiran



# Jalankan migrasi│   │   ├── attendance.controller.ts

npx prisma migrate dev

## 🗄️ Skema Database│   │   ├── attendance.service.ts

# (Opsional) Seed database

npx prisma db seed│   │   └── dto/

```

### Tabel User│   ├── guards/                # Security guards

#### 5️⃣ Jalankan Aplikasi

```bash```sql│   │   ├── jwt-auth.guard.ts

# Mode development

npm run start:dev- id: INT (Primary Key, Auto Increment)│   │   └── roles.guard.ts



# Mode production- name: STRING│   └── decorators/

npm run build

npm run start:prod- username: STRING│       └── roles.decorator.ts

```

- password: STRING (Di-hash)└── test/                      # Testing E2E

✅ Aplikasi akan berjalan di: **http://localhost:3000**

- role: STRING (default: "user")

---

- jabatan: STRING (default: "staff")````

## 📚 Dokumentasi API

- createdAt: DATETIME

### 🔐 Modul Autentikasi

- updatedAt: DATETIME## 🗄️ Skema Database

#### 1. Login Admin

```http```

POST /auth/login

Content-Type: application/json### Tabel User



{### Tabel Attendance```sql

  "username": "admin",

  "password": "password123"```sql- id: INT (Primary Key, Auto Increment)

}

```- id: INT (Primary Key, Auto Increment)- name: STRING



**📷 Screenshot Postman:**- userId: INT (Foreign Key → User.id)- username: STRING



![Login Admin](images/login-admin.png)- date: DATETIME- password: STRING (Di-hash)



---- status: STRING (hadir/izin/sakit/alpha)- role: STRING (default: "user")



#### 2. Login User- createdAt: DATETIME- jabatan: STRING (default: "staff")

```http

POST /auth/login- updatedAt: DATETIME- createdAt: DATETIME

Content-Type: application/json

```- updatedAt: DATETIME

{

  "username": "user",````

  "password": "password123"

}## 🔧 Instalasi

```

### Tabel Attendance

**📷 Screenshot Postman:**

### Prasyarat

![Login User](images/login-user.png)

- Node.js (v18 atau lebih tinggi)```sql

---

- MySQL Database- id: INT (Primary Key, Auto Increment)

### 👥 Modul User Management (Khusus Admin)

- npm atau yarn- userId: INT (Foreign Key → User.id)

> ⚠️ **Catatan:** Semua endpoint user memerlukan header `Authorization: Bearer <admin-token>` dan role admin.

- date: DATETIME

#### 3. Buat User - Staff

```http### Langkah-langkah Setup- status: STRING (hadir/izin/sakit/alpha)

POST /user

Authorization: Bearer <admin-token>- createdAt: DATETIME

Content-Type: application/json

1. **Clone repository**- updatedAt: DATETIME

{

  "name": "Staff User",```bash```

  "username": "staff01",

  "password": "password123",git clone <repository-url>

  "role": "user",

  "jabatan": "staff"cd latihanukl2025## 🔧 Instalasi

}

``````



**📷 Screenshot Postman:**### Prasyarat



![Create Staff](images/create-staff.png)2. **Install dependencies**



---```bash* Node.js (v18 atau lebih tinggi)



#### 4. Buat User - Managernpm install* MySQL Database

```http

POST /user```* npm atau yarn

Authorization: Bearer <admin-token>

Content-Type: application/json



{3. **Konfigurasi environment**### Langkah-langkah Setup

  "name": "Manager User",

  "username": "manager01",   

  "password": "password123",

  "role": "user",   Buat file `.env` di root directory:1. **Clone repository**

  "jabatan": "manager"

}```env

```

DATABASE_URL="mysql://user:password@localhost:3306/attendance_db"```bash

**📷 Screenshot Postman:**

JWT_SECRET="your-super-secret-key-here"git clone <repository-url>

![Create Manager](images/create-manager.png)

```cd latihanukl2025

---

```

#### 5. Buat User - Supervisor

```http4. **Setup database**

POST /user

Authorization: Bearer <admin-token>```bash2. **Install dependencies**

Content-Type: application/json

# Generate Prisma Client

{

  "name": "Supervisor User",npx prisma generate```bash

  "username": "supervisor01",

  "password": "password123",npm install

  "role": "user",

  "jabatan": "supervisor"# Jalankan migrasi```

}

```npx prisma migrate dev



**📷 Screenshot Postman:**3. **Konfigurasi environment**



![Create Supervisor](images/create-supervisor.png)# (Opsional) Seed database   Buat file `.env` di root directory:



---npx prisma db seed



#### 6. Buat Admin Baru``````env

```http

POST /userDATABASE_URL="mysql://user:password@localhost:3306/attendance_db"

Authorization: Bearer <admin-token>

Content-Type: application/json5. **Jalankan aplikasi**JWT_SECRET="your-super-secret-key-here"



{```bash```

  "name": "Admin User",

  "username": "admin02",# Mode development

  "password": "password123",

  "role": "admin",npm run start:dev4. **Setup database**

  "jabatan": "admin"

}

```

# Mode production```bash

**📷 Screenshot Postman:**

npm run build# Generate Prisma Client

![Create Admin](images/create-admin.png)

npm run start:prodnpx prisma generate

---

```

#### 7. Lihat Semua User

```http# Jalankan migrasi

GET /user

Authorization: Bearer <admin-token>Aplikasi akan berjalan di `http://localhost:3000`npx prisma migrate dev

```



**📷 Screenshot Postman:**

---# (Opsional) Seed database

![Get All Users](images/get-user.png)

npx prisma db seed

---

## 📚 Dokumentasi API```

#### 8. Lihat User Berdasarkan ID

```http

GET /user/:id

Authorization: Bearer <admin-token>### 🔐 Autentikasi5. **Jalankan aplikasi**

```



**📷 Screenshot Postman:**

#### Login Admin```bash

![Get User By ID](images/get-userbyid.png)

```http# Mode development

---

POST /auth/loginnpm run start:dev

#### 9. Update User - Ubah Nama

```httpContent-Type: application/json

PUT /user/:id

Authorization: Bearer <admin-token># Mode production

Content-Type: application/json

{npm run build

{

  "name": "Nama User Updated"  "username": "admin",npm run start:prod

}

```  "password": "password123"```



**📷 Screenshot Postman:**}



![Update User Name](images/put-changename.png)```Aplikasi akan berjalan di `http://localhost:3000`



---



#### 10. Update User - Ubah Jabatan**📷 Bukti Testing (Postman):**## 📚 Dokumentasi API

```http

PUT /user/:id

Authorization: Bearer <admin-token>

Content-Type: application/json![Login Admin](images/login-admin.png)---



{

  "jabatan": "manager"

}---### 🔐 Autentikasi

```



**📷 Screenshot Postman:**

#### Login User#### Login

![Update User Jabatan](images/put-changejabatan.png)

```http

---

POST /auth/login```http

#### 11. Update User - Ubah Password

```httpContent-Type: application/jsonPOST /auth/login

PUT /user/:id

Authorization: Bearer <admin-token>Content-Type: application/json

Content-Type: application/json

{

{

  "password": "newpassword123"  "username": "user",{

}

```  "password": "password123"  "username": "admin",



**📷 Screenshot Postman:**}  "password": "password123"



![Update User Password](images/put-changepassword.png)```}



---```



#### 12. Hapus User**📷 Bukti Testing (Postman):**

```http

DELETE /user/:id**📷 Bukti Testing (Postman):**

Authorization: Bearer <admin-token>

```![Login User](images/login-user.png)![Login Test](docs/images/login-test.png)



**📷 Screenshot Postman:**



![Delete User](images/delete-user.png)------



---



### 📅 Modul Attendance (Kehadiran)### 👥 Endpoint User (Khusus Admin)### 👥 Endpoint User (Khusus Admin)



#### 13. Buat Kehadiran (User/Admin)

```http

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

- Token sudah expired (> 24 jam)

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
