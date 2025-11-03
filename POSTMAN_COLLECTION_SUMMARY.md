# 📊 Summary: Postman Collection - Attendance API UKL 2025

## 📈 Statistik Collection

| Kategori | Jumlah | Keterangan |
|----------|--------|------------|
| **Total Requests** | 27 | Semua endpoint API |
| **Auth Requests** | 4 | Login & error testing |
| **User Management** | 11 | CRUD operations + testing |
| **Attendance** | 12 | Create, read, analyze, update, delete |
| **Environment Variables** | 8 | Auto & manual variables |
| **Test Scripts** | 20+ | Automated assertions |

---

## 🗂️ Breakdown per Folder

### 1️⃣ **Auth** (4 requests)

| # | Request Name | Method | Endpoint | Description |
|---|-------------|--------|----------|-------------|
| 1 | Login Admin | POST | /auth/login | Login sebagai admin (auto-save token) |
| 2 | Login User Biasa | POST | /auth/login | Login sebagai user (auto-save token) |
| 3 | Login - Invalid Credentials | POST | /auth/login | Test error 401 |
| 4 | Login - Missing Password | POST | /auth/login | Test validation error |

**Features:**
- ✅ Auto-save tokens ke environment
- ✅ Test assertions untuk success/error
- ✅ Save user info (id, username, role)

---

### 2️⃣ **User Management** (11 requests)

#### Create Operations (4 requests)

| # | Request Name | Method | Endpoint | Jabatan |
|---|-------------|--------|----------|---------|
| 5 | Create User - Staff | POST | /user | staff |
| 6 | Create User - Manager | POST | /user | manager |
| 7 | Create User - Supervisor | POST | /user | supervisor |
| 8 | Create Admin User | POST | /user | admin |

#### Read Operations (3 requests)

| # | Request Name | Method | Endpoint | Description |
|---|-------------|--------|----------|-------------|
| 9 | Get All Users | GET | /user | List semua user |
| 10 | Get User by ID | GET | /user/:id | Detail user (use `created_user_id`) |
| 11 | Get User by ID - Not Found | GET | /user/99999 | Test 404 error |

#### Update Operations (3 requests)

| # | Request Name | Method | Endpoint | Updates |
|---|-------------|--------|----------|---------|
| 12 | Update User - Change Name | PUT | /user/:id | Ubah nama |
| 13 | Update User - Promote to Manager | PUT | /user/:id | Ubah jabatan |
| 14 | Update User - Change Password | PUT | /user/:id | Ganti password |

#### Delete Operations (1 request)

| # | Request Name | Method | Endpoint | Description |
|---|-------------|--------|----------|-------------|
| 15 | Delete User | DELETE | /user/:id | Hapus user |

**Features:**
- ✅ Auto-save `created_user_id` setelah create
- ✅ Test assertions untuk setiap operation
- ✅ Multiple jabatan variations
- ✅ Error testing (404)

---

### 3️⃣ **Attendance** (12 requests)

#### Create Operations (4 requests)

| # | Request Name | Method | Endpoint | Status |
|---|-------------|--------|----------|--------|
| 16 | Create Attendance | POST | /attendance | hadir |
| 17 | Create Attendance - Izin | POST | /attendance | izin |
| 18 | Create Attendance - Sakit | POST | /attendance | sakit |
| 19 | Create Attendance - Alpha | POST | /attendance | alpha |

#### Read Operations (5 requests)

| # | Request Name | Method | Endpoint | Access |
|---|-------------|--------|----------|--------|
| 20 | Get All Attendances | GET | /attendance | Admin only |
| 21 | Get User Attendance History | GET | /attendance/history | User/Admin |
| 22 | Get Monthly Summary | GET | /attendance/summary | User/Admin |
| 23 | Get Attendance by ID | GET | /attendance/:id | Admin only |

#### Analysis Operations (2 requests)

| # | Request Name | Method | Endpoint | Parameters |
|---|-------------|--------|----------|------------|
| 24 | Analyze Attendance | POST | /attendance/analyze | startDate, endDate |
| 25 | Analyze Attendance by Jabatan | POST | /attendance/analyze | + groupByJabatan |

#### Update & Delete (2 requests)

| # | Request Name | Method | Endpoint | Access |
|---|-------------|--------|----------|--------|
| 26 | Update Attendance | PATCH | /attendance/:id | Admin only |
| 27 | Delete Attendance | DELETE | /attendance/:id | Admin only |

**Features:**
- ✅ All 4 status types covered
- ✅ User-specific and admin operations separated
- ✅ Advanced analytics with date range
- ✅ Jabatan filtering in analysis

---

## 🔑 Environment Variables

| Variable | Type | Set By | Used In |
|----------|------|--------|---------|
| `base_url` | Manual | User | All requests |
| `access_token` | Auto | Login Admin | Admin endpoints |
| `user_token` | Auto | Login User | User endpoints |
| `user_id` | Auto | Login Admin | Info only |
| `current_user_id` | Auto | Login User | Info only |
| `username` | Auto | Login | Info only |
| `role` | Auto | Login | Info only |
| `created_user_id` | Auto | Create User | Get/Update/Delete user |

---

## 🎯 Authorization Matrix

| Endpoint Group | Admin | User | Public |
|---------------|-------|------|--------|
| **POST /auth/login** | ✅ | ✅ | ✅ |
| **User Management** | ✅ | ❌ | ❌ |
| **POST /attendance** | ✅ | ✅ | ❌ |
| **GET /attendance** | ✅ | ❌ | ❌ |
| **GET /attendance/history** | ✅ | ✅ | ❌ |
| **GET /attendance/summary** | ✅ | ✅ | ❌ |
| **POST /attendance/analyze** | ✅ | ❌ | ❌ |
| **PATCH/DELETE /attendance/:id** | ✅ | ❌ | ❌ |

**Legend:**
- ✅ = Allowed
- ❌ = Forbidden (403)

---

## 🧪 Test Coverage

### Test Scripts Included:

**Auth (4 tests):**
- ✅ Status code validation (200/401/400)
- ✅ Access token presence check
- ✅ User role verification
- ✅ Error message validation

**User Management (8 tests):**
- ✅ User creation validation (201)
- ✅ User list is array check
- ✅ User object structure validation
- ✅ Update success validation
- ✅ Delete success validation
- ✅ 404 error validation
- ✅ Jabatan field validation

**Attendance (6 tests):**
- ✅ Attendance creation (201)
- ✅ Array response validation
- ✅ Summary structure validation
- ✅ Analysis data validation

**Total Test Assertions:** 20+ automated tests

---

## 📊 Request Distribution

```
Auth (15%)           ████
User Mgmt (41%)      ████████████
Attendance (44%)     █████████████
```

---

## 🚀 Usage Scenarios

### Scenario A: Full System Test (27 requests)
**Time:** ~5-10 minutes
```
Run all 27 requests in sequence
→ Tests authentication, CRUD, analytics
→ Best for: Comprehensive testing
```

### Scenario B: Quick Smoke Test (9 requests)
**Time:** ~2 minutes
```
1. Login Admin
2. Create User - Staff
3. Get All Users
4. Login User
5. Create Attendance
6. Get User History
7. Get Monthly Summary
8. Login Admin
9. Analyze Attendance
→ Best for: Quick validation
```

### Scenario C: User Flow Test (6 requests)
**Time:** ~1 minute
```
1. Login User
2. Create Attendance (hadir)
3. Create Attendance (izin)
4. Create Attendance (sakit)
5. Get User History
6. Get Monthly Summary
→ Best for: User experience testing
```

### Scenario D: Admin Flow Test (8 requests)
**Time:** ~2 minutes
```
1. Login Admin
2. Create multiple users (3x)
3. Get All Users
4. Update User
5. Get All Attendances
6. Analyze by Jabatan
7. Delete User
→ Best for: Admin feature testing
```

---

## 💡 Best Practices

### 1. **Sequential Testing**
Run requests in order:
```
Auth → User Management → Attendance → Cleanup
```

### 2. **Use Collection Runner**
- Set delay: 100-500ms between requests
- Enable "Save responses" for debugging
- Use iterations for load testing

### 3. **Environment Management**
- Create separate environments:
  - `Local Development` (localhost:3000)
  - `Staging` (staging.example.com)
  - `Production` (api.example.com)

### 4. **Test Data Management**
```javascript
// Use dynamic data
{{$randomFullName}}
{{$randomUserName}}
{{$randomEmail}}
{{$timestamp}}
```

### 5. **Monitor Test Results**
- Check "Tests" tab after each request
- All tests should pass (green)
- Review failed assertions

---

## 📋 Checklist untuk Testing

### Pre-Testing:
- [ ] Server running di `http://localhost:3000`
- [ ] Database sudah di-migrate
- [ ] Environment "Attendance API" sudah dipilih
- [ ] Collection sudah di-import

### During Testing:
- [ ] Login Admin berhasil (token tersimpan)
- [ ] Create User berhasil (user_id tersimpan)
- [ ] Login User berhasil
- [ ] Create Attendance berhasil
- [ ] All tests passing (hijau)

### Post-Testing:
- [ ] Review test results
- [ ] Export results untuk dokumentasi
- [ ] Cleanup test data (opsional)
- [ ] Report issues jika ada

---

## 📞 Support & Documentation

- **README.md** - Setup & installation guide
- **POSTMAN_GUIDE.md** - Detailed usage guide
- **Collection JSON** - Import file
- **Environment JSON** - Environment setup

---

## 🎉 Summary

**✅ 27 Comprehensive Requests**
**✅ 4 Folders (Auth, User, Attendance)**
**✅ 20+ Automated Test Scripts**
**✅ 8 Environment Variables**
**✅ Complete CRUD Operations**
**✅ Error Handling Testing**
**✅ Role-Based Access Testing**
**✅ Analytics & Reporting**

**📮 Collection siap digunakan untuk development & testing! 📮**

---

_Last Updated: November 3, 2025_
_Version: 1.0.0_
_Project: UKL 2025 - Latihan Attendance System_
