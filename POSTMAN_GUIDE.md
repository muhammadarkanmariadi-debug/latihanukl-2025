# 📮 Panduan Postman Collection - Attendance API

## 📥 Import Collection ke Postman

### Langkah 1: Import Collection
1. Buka aplikasi **Postman**
2. Klik tombol **Import** di kiri atas
3. Pilih file `Attendance-API.postman_collection.json`
4. Klik **Import**

### Langkah 2: Import Environment
1. Klik icon **⚙️ (Settings)** di kanan atas
2. Pilih tab **Environments**
3. Klik **Import**
4. Pilih file `Attendance-API.postman_environment.json`
5. Klik **Import**

### Langkah 3: Aktifkan Environment
1. Di dropdown environment (kanan atas), pilih **"Attendance API - Local Development"**
2. Environment siap digunakan!

---

## 🎯 Struktur Collection

Collection terdiri dari 3 folder utama dengan **total 27 requests**:

### 1. **Auth** 📝 (4 requests)
- **Login Admin** - Login sebagai admin (username: admin, password: admin123)
- **Login User Biasa** - Login sebagai user biasa (username: user1, password: user123)
- **Login - Invalid Credentials** - Test login dengan credentials salah (error testing)
- **Login - Missing Password** - Test login tanpa password (validation testing)

> **Catatan**: Setelah login berhasil, token akan otomatis tersimpan di environment variable `access_token` atau `user_token`

### 2. **User Management** 👥 (11 requests - Khusus Admin)

**Create Operations (4):**
- **Create User - Staff** - Buat user dengan jabatan staff
- **Create User - Manager** - Buat user dengan jabatan manager
- **Create User - Supervisor** - Buat user dengan jabatan supervisor
- **Create Admin User** - Buat user dengan role admin

**Read Operations (3):**
- **Get All Users** - Lihat semua user dalam sistem
- **Get User by ID** - Lihat detail user berdasarkan ID
- **Get User by ID - Not Found** - Test get user yang tidak ada (404 testing)

**Update Operations (3):**
- **Update User - Change Name** - Update nama user
- **Update User - Promote to Manager** - Promosi jabatan ke manager
- **Update User - Change Password** - Ganti password user

**Delete Operations (1):**
- **Delete User** - Hapus user dari sistem

### 3. **Attendance** 📅 (12 requests)

**Create Operations (4):**
- **Create Attendance** - Buat kehadiran dengan status hadir
- **Create Attendance - Izin** - Buat kehadiran dengan status izin
- **Create Attendance - Sakit** - Buat kehadiran dengan status sakit
- **Create Attendance - Alpha** - Buat kehadiran dengan status alpha

**Read Operations (5):**
- **Get All Attendances** - Lihat semua kehadiran (Admin only)
- **Get User Attendance History** - Riwayat kehadiran user yang login
- **Get Monthly Summary** - Ringkasan kehadiran bulanan user
- **Get Attendance by ID** - Detail kehadiran berdasarkan ID (Admin only)

**Analysis Operations (2):**
- **Analyze Attendance** - Analisis kehadiran berdasarkan rentang tanggal
- **Analyze Attendance by Jabatan** - Analisis kehadiran per jabatan tertentu

**Update & Delete Operations (2):**
- **Update Attendance** - Update status kehadiran (Admin only)
- **Delete Attendance** - Hapus kehadiran (Admin only)

---

## 🚀 Cara Menggunakan

### Skenario 1: Testing sebagai Admin

1. **Login sebagai Admin**
   - Buka folder **Auth** → klik **Login Admin**
   - Klik **Send**
   - Token akan otomatis tersimpan di `access_token`
   - Cek Tests tab untuk melihat assertion results

2. **Buat Multiple Users dengan Jabatan Berbeda**
   
   **a. Buat Staff:**
   - Buka **User Management** → **Create User - Staff**
   - Klik **Send**
   - User ID akan tersimpan di `created_user_id`
   
   **b. Buat Manager:**
   - Klik **Create User - Manager**
   - Klik **Send**
   
   **c. Buat Supervisor:**
   - Klik **Create User - Supervisor**
   - Klik **Send**

3. **Lihat dan Verifikasi User**
   - Klik **Get All Users** → lihat semua user yang dibuat
   - Klik **Get User by ID** → lihat detail user terakhir
   - Klik **Get User by ID - Not Found** → test error handling (404)

4. **Update User**
   - Klik **Update User - Change Name** → ubah nama user
   - Klik **Update User - Promote to Manager** → promosi jabatan
   - Klik **Update User - Change Password** → ganti password

5. **Analisis Kehadiran**
   - Buka folder **Attendance** → klik **Analyze Attendance**
   - Edit tanggal:
   ```json
   {
     "startDate": "2025-11-01",
     "endDate": "2025-11-30"
   }
   ```
   - Klik **Send**
   
   **Analisis per Jabatan:**
   - Klik **Analyze Attendance by Jabatan**
   - Lihat hasil analisis khusus jabatan manager

6. **Cleanup (Opsional)**
   - Klik **Delete User** → hapus user test

### Skenario 2: Testing sebagai User Biasa

1. **Login sebagai User**
   - Buka folder **Auth** → klik **Login User Biasa**
   - Klik **Send**
   - Token akan tersimpan di `user_token`

2. **Buat Multiple Kehadiran**
   
   **a. Hadir:**
   - Buka **Attendance** → **Create Attendance**
   - Klik **Send** (default status: hadir)
   
   **b. Izin:**
   - Klik **Create Attendance - Izin**
   - Klik **Send**
   
   **c. Sakit:**
   - Klik **Create Attendance - Sakit**
   - Klik **Send**
   
   **d. Alpha:**
   - Klik **Create Attendance - Alpha**
   - Klik **Send**

3. **Lihat Riwayat Kehadiran**
   - Klik **Get User Attendance History**
   - Klik **Send**
   - Lihat semua kehadiran yang sudah dibuat

4. **Lihat Ringkasan Bulanan**
   - Klik **Get Monthly Summary**
   - Klik **Send**
   - Lihat statistik hadir/izin/sakit/alpha bulan ini

### Skenario 3: Testing Error Handling

1. **Test Login Errors**
   - **Login - Invalid Credentials** → test username/password salah
   - **Login - Missing Password** → test validasi field required
   - Cek status code dan error messages

2. **Test User Not Found**
   - Login sebagai admin
   - **Get User by ID - Not Found** → test dengan ID 99999
   - Verifikasi response 404

3. **Test Authorization**
   - Login sebagai user biasa
   - Coba akses **Get All Users** (seharusnya 403 Forbidden)
   - Coba akses **Create User** (seharusnya 403 Forbidden)

---

## 🔑 Environment Variables

Collection ini menggunakan environment variables:

| Variable | Deskripsi | Auto-filled | Digunakan di |
|----------|-----------|-------------|--------------|
| `base_url` | URL API (default: localhost:3000) | ❌ Manual | Semua requests |
| `access_token` | JWT token admin | ✅ Otomatis setelah login admin | User Management, Attendance (admin) |
| `user_token` | JWT token user biasa | ✅ Otomatis setelah login user | Attendance (user) |
| `user_id` | ID user admin yang login | ✅ Otomatis | Info saja |
| `current_user_id` | ID user biasa yang login | ✅ Otomatis | Info saja |
| `username` | Username yang login | ✅ Otomatis | Info saja |
| `role` | Role user yang login | ✅ Otomatis | Info saja |
| `created_user_id` | ID user terakhir yang dibuat | ✅ Otomatis setelah create user | Get/Update/Delete user |

### Cara Melihat Environment Variables:
1. Klik icon **👁️ (eye)** di kanan atas
2. Pilih environment **"Attendance API - Local Development"**
3. Lihat nilai current value dari setiap variable

---

## 📊 Contoh Response

### ✅ Response Sukses
```json
{
  "statusCode": 200,
  "message": "Operasi berhasil",
  "success": true,
  "data": {
    "id": 1,
    "name": "John Doe",
    "username": "johndoe"
  }
}
```

### ❌ Response Error
```json
{
  "statusCode": 401,
  "message": "Unauthorized",
  "error": "Token tidak valid"
}
```

---

## 🔒 Authorization

### Bearer Token
Setiap request (kecuali login) menggunakan Bearer Token:

```
Authorization: Bearer {{access_token}}
```

Token otomatis di-inject dari environment variable setelah login berhasil.

### Role-Based Access

| Endpoint | Admin | User |
|----------|-------|------|
| POST /auth/login | ✅ | ✅ |
| **User Management** | | |
| POST /user | ✅ | ❌ |
| GET /user | ✅ | ❌ |
| GET /user/:id | ✅ | ❌ |
| PUT /user/:id | ✅ | ❌ |
| DELETE /user/:id | ✅ | ❌ |
| **Attendance** | | |
| POST /attendance | ✅ | ✅ |
| GET /attendance | ✅ | ❌ |
| GET /attendance/history | ✅ | ✅ |
| GET /attendance/summary | ✅ | ✅ |
| POST /attendance/analyze | ✅ | ❌ |
| GET /attendance/:id | ✅ | ❌ |
| PATCH /attendance/:id | ✅ | ❌ |
| DELETE /attendance/:id | ✅ | ❌ |

---

## 🧪 Testing Flow

### Flow Lengkap Testing (Comprehensive):

```
📝 PHASE 1: AUTHENTICATION TESTING
1. Login Admin → verify token saved
2. Login User Biasa → verify token saved
3. Login - Invalid Credentials → verify 401 error
4. Login - Missing Password → verify validation error

👥 PHASE 2: USER MANAGEMENT (as Admin)
5. Create User - Staff → save user ID
6. Create User - Manager → create manager
7. Create User - Supervisor → create supervisor
8. Create Admin User → create another admin
9. Get All Users → verify all users listed
10. Get User by ID → check user details
11. Get User by ID - Not Found → verify 404
12. Update User - Change Name → update name
13. Update User - Promote to Manager → change jabatan
14. Update User - Change Password → change password

📅 PHASE 3: ATTENDANCE OPERATIONS (as User)
15. Login sebagai User lagi → get fresh token
16. Create Attendance → status hadir
17. Create Attendance - Izin → status izin
18. Create Attendance - Sakit → status sakit
19. Create Attendance - Alpha → status alpha
20. Get User Attendance History → verify all created
21. Get Monthly Summary → check statistics

📊 PHASE 4: ADMIN OPERATIONS
22. Login sebagai Admin lagi
23. Get All Attendances → view all system attendances
24. Analyze Attendance → date range analysis
25. Analyze Attendance by Jabatan → filter by position
26. Update Attendance → change status
27. Delete Attendance → cleanup

🧹 PHASE 5: CLEANUP (Optional)
28. Delete test users created
```

### Quick Test Flow (5 menit):

```
🚀 QUICK FLOW:
1. Login Admin
2. Create User - Staff
3. Get All Users
4. Login User Biasa (baru dibuat)
5. Create Attendance
6. Get User Attendance History
7. Login Admin lagi
8. Analyze Attendance
9. Done! ✅
```

---

## 📝 Tips & Tricks

### 1. **Auto-Save Token**
Script test pada request **Login** otomatis menyimpan token ke environment:
```javascript
if (pm.response.code === 200) {
    const response = pm.response.json();
    pm.environment.set('access_token', response.data.access_token);
}
```

### 2. **Ganti Base URL**
Untuk testing di server lain:
1. Buka environment
2. Edit nilai `base_url`
3. Contoh: `https://api.production.com`

### 3. **Multiple Status Kehadiran**
Collection sudah include 4 request untuk setiap status:
- Create Attendance - Hadir
- Create Attendance - Izin
- Create Attendance - Sakit
- Create Attendance - Alpha

### 4. **Bulk Testing dengan Collection Runner**
Gunakan **Collection Runner** untuk testing otomatis:
1. Klik tanda **▶️** di collection
2. Pilih folder yang ingin di-test (Auth, User, atau Attendance)
3. Set iterations jika ingin repeat multiple times
4. Klik **Run**
5. Lihat hasil test di dashboard

**Contoh Runner Configuration:**
```
Collection: Attendance Management API
Folder: User Management (11 requests)
Iterations: 1
Delay: 100ms between requests
Data file: (optional) users.csv
```

### 5. **Test Scripts & Assertions**
Collection sudah include test scripts:
```javascript
// Example test script di Login Admin
pm.test('Status code is 200', function() {
    pm.response.to.have.status(200);
});
pm.test('Response has access_token', function() {
    pm.expect(response.data).to.have.property('access_token');
});
pm.test('User role is admin', function() {
    pm.expect(response.data.user.role).to.equal('admin');
});
```

### 6. **Export Test Results**
Setelah run collection:
1. Klik **Export Results**
2. Download sebagai JSON atau HTML
3. Share dengan tim untuk review

### 7. **Variables dalam Body Request**
Gunakan variable untuk dynamic data:
```json
{
  "name": "{{$randomFullName}}",
  "username": "{{$randomUserName}}",
  "password": "{{$randomPassword}}"
}
```

### 8. **Pre-request Script**
Jika ingin auto-login sebelum setiap request:
1. Klik collection → tab **Pre-request Script**
2. Tambahkan script auto-login:
```javascript
// Auto check if token exists
if (!pm.environment.get('access_token')) {
    pm.sendRequest({
        url: pm.environment.get('base_url') + '/auth/login',
        method: 'POST',
        header: {'Content-Type': 'application/json'},
        body: {
            mode: 'raw',
            raw: JSON.stringify({
                username: 'admin',
                password: 'admin123'
            })
        }
    }, function(err, res) {
        const token = res.json().data.access_token;
        pm.environment.set('access_token', token);
    });
}
```

---

## 🐛 Troubleshooting

### Token Expired (401 Unauthorized)
**Solusi**: Login ulang untuk mendapatkan token baru

### Port 3000 tidak bisa diakses
**Solusi**: 
1. Pastikan server berjalan (`npm run start:dev`)
2. Cek base_url di environment

### Response 403 Forbidden
**Solusi**: Endpoint memerlukan role admin, gunakan token admin

### Token tidak tersimpan otomatis
**Solusi**: 
1. Cek tab **Tests** pada request Login
2. Pastikan script test masih ada
3. Klik **Send** ulang

---

## 📊 Status Code Reference

| Code | Arti | Keterangan |
|------|------|------------|
| 200 | OK | Request berhasil |
| 201 | Created | Resource berhasil dibuat |
| 401 | Unauthorized | Token invalid/tidak ada |
| 403 | Forbidden | Tidak memiliki akses |
| 404 | Not Found | Resource tidak ditemukan |
| 500 | Server Error | Error di server |

---

## 📞 Dukungan

Jika mengalami masalah dengan collection:
1. Pastikan server berjalan di `http://localhost:3000`
2. Pastikan database sudah di-migrate
3. Pastikan environment sudah dipilih
4. Cek console Postman untuk error details

---

**✅ Collection siap digunakan untuk testing API!**

**📮 Happy Testing! 📮**
