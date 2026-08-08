# Bengkel ERP - Sistem Manajemen Bengkel Modern

Aplikasi Web ERP Bengkel profesional, responsif, dan siap deploy untuk operasional bengkel skala kecil hingga besar.

![Status](https://img.shields.io/badge/status-production--ready-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)
![Version](https://img.shields.io/badge/version-1.0.0-blue)

## 🎯 Fitur Utama

### Dashboard & Analytics
- 📊 Dashboard real-time dengan statistik lengkap
- 📈 Grafik penjualan, stok, pendapatan, dan analisis bisnis
- 💰 Monitoring pendapatan harian, bulanan, tahunan
- 📉 Laporan laba bersih dan analisis performa

### Master Data
- 🔧 Manajemen sparepart dengan barcode/QR code
- 📦 Kategori, merek, lokasi rak, foto produk
- 👥 Database supplier lengkap
- 💾 Import/Export Excel dan PDF

### Inventory Management
- 📥 Modul barang masuk dengan scan barcode
- 📤 Modul barang keluar dengan validasi stok
- 📊 Stock opname dan penyesuaian stok
- 🔔 Notifikasi stok minimum otomatis

### Keuangan & Laporan
- 💵 Pencatatan pemasukan dan pengeluaran
- 📋 Laporan harian, mingguan, bulanan, tahunan
- 📊 Rekap transaksi dan grafik analisis
- 🖨️ Export PDF dan Excel

### Keamanan
- 🔐 JWT Authentication
- 👤 Role-Based Access Control (Admin, Pemilik)
- 📝 Audit log dan activity tracking
- 🔒 Password hashing dan CSRF protection

## 📋 Teknologi Stack

### Frontend
- **Next.js 15** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS**
- **Shadcn/UI Components**
- **Lucide Icons**
- **Axios** untuk API calls
- **Chart.js** untuk visualisasi

### Backend
- **Node.js**
- **Express.js**
- **TypeScript**
- **JWT Authentication**
- **Multer** untuk upload file
- **MySQL2** untuk database

### Database
- **MySQL 8.0+**
- **Migrations & Seeders**
- **Relational Database Design**

### DevOps & Deployment
- **Docker & Docker Compose**
- **GitHub Ready**
- **Vercel Compatible**
- **VPS Ready**
- **Environment Configuration**

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- MySQL 8.0+
- Git
- Docker (opsional)

### Installation

#### 1. Clone Repository
```bash
git clone https://github.com/Rafsanjani31/bengkel-erp.git
cd bengkel-erp
```

#### 2. Setup Backend
```bash
cd backend
npm install

# Copy environment file
cp .env.example .env

# Configure database di .env
# DB_HOST=localhost
# DB_USER=root
# DB_PASSWORD=your_password
# DB_NAME=bengkel_erp

# Run migrations
npm run migrate

# Run seeders untuk demo data
npm run seed

# Start backend server
npm run dev
# Server berjalan di http://localhost:5000
```

#### 3. Setup Frontend
```bash
cd ../frontend
npm install

# Copy environment file
cp .env.example .env.local

# NEXT_PUBLIC_API_URL=http://localhost:5000

# Start frontend development
npm run dev
# Aplikasi berjalan di http://localhost:3000
```

## 📦 Struktur Project

```
bengkel-erp/
├── frontend/                    # Next.js Frontend
│   ├── src/
│   │   ├── app/                # App Router & Pages
│   │   ├── components/         # Reusable Components
│   │   ├── layouts/            # Layout Components
│   │   ├── lib/                # Utilities & Helpers
│   │   ├── services/           # API Service Layer
│   │   ├── types/              # TypeScript Types
│   │   ├── hooks/              # Custom React Hooks
│   │   └── styles/             # Global Styles
│   ├── public/                 # Static Assets
│   ├── package.json
│   └── .env.example
│
├── backend/                     # Express Backend
│   ├── src/
│   │   ├── app.ts              # Express App Setup
│   │   ├── server.ts           # Server Entry Point
│   │   ├── config/             # Configuration Files
│   │   ├── controllers/        # Business Logic
│   │   ├── routes/             # API Routes
│   │   ├── middleware/         # Express Middleware
│   │   ├── models/             # Data Models
│   │   ├── services/           # Service Layer
│   │   ├── database/           # Database Config
│   │   ├── migrations/         # Database Migrations
│   │   ├── seeders/            # Database Seeders
│   │   ├── types/              # TypeScript Types
│   │   └── utils/              # Utility Functions
│   ├── package.json
│   └── .env.example
│
├── docker/                      # Docker Configuration
│   ├── Dockerfile.frontend
│   ├── Dockerfile.backend
│   └── .dockerignore
│
├── docs/                        # Documentation
│   ├── API.md                  # API Documentation
│   ├── ERD.md                  # Database Design
│   └── DEPLOYMENT.md           # Deployment Guide
│
├── docker-compose.yml          # Docker Compose
└── README.md                    # This File
```

## 🗄️ Database Schema

### Core Tables
- **users** - Pengguna sistem
- **roles** - Role dan permissions
- **spareparts** - Master sparepart
- **suppliers** - Data supplier
- **stock_movements** - Riwayat stok
- **incoming_goods** - Barang masuk
- **outgoing_goods** - Barang keluar
- **financial_transactions** - Transaksi keuangan
- **notifications** - Notifikasi sistem
- **audit_logs** - Log audit

Lihat [ERD Documentation](./docs/ERD.md) untuk detail lengkap.

## 📚 API Documentation

Dokumentasi API lengkap tersedia di [API Documentation](./docs/API.md)

### Endpoint Utama
- `POST /api/auth/login` - Login
- `GET /api/dashboard/stats` - Dashboard statistics
- `GET/POST /api/spareparts` - Manajemen sparepart
- `GET/POST /api/incoming-goods` - Barang masuk
- `GET/POST /api/outgoing-goods` - Barang keluar
- `GET /api/stock` - Stok real-time
- `GET/POST /api/suppliers` - Manajemen supplier
- `GET /api/financial/summary` - Laporan keuangan
- `GET /api/users` - User management

## 🐳 Docker Deployment

### Using Docker Compose
```bash
# Build dan start services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down
```

Aplikasi akan accessible di:
- Frontend: http://localhost:3000
- Backend: http://localhost:5000
- MySQL: localhost:3306

## 🚀 Deployment

### Deploy ke Vercel (Frontend)
```bash
cd frontend
vercel deploy
```

### Deploy ke VPS
Lihat [Deployment Guide](./docs/DEPLOYMENT.md) untuk panduan lengkap.

### Deploy dengan Docker
```bash
docker-compose -f docker-compose.yml up -d
```

## 👤 User Role & Access

### Administrator
- Akses penuh ke semua modul
- Manajemen user dan role
- Pengaturan sistem
- Laporan lengkap

### Pemilik Bengkel
- Dashboard monitoring
- Laporan keuangan
- Laporan penjualan
- Export dan cetak laporan

## 🔐 Keamanan

- ✅ JWT Token Authentication
- ✅ Password Hashing (bcryptjs)
- ✅ CSRF Protection
- ✅ Role-Based Access Control
- ✅ Audit Logging
- ✅ Rate Limiting
- ✅ Input Validation
- ✅ SQL Injection Protection

## 📝 Environment Variables

### Backend (.env)
```
PORT=5000
NODE_ENV=development
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=password
DB_NAME=bengkel_erp
JWT_SECRET=your_jwt_secret
JWT_EXPIRY=7d
```

### Frontend (.env.local)
```
NEXT_PUBLIC_API_URL=http://localhost:5000
```

## 🛠️ Development

### Frontend Scripts
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
npm run format   # Format code with Prettier
```

### Backend Scripts
```bash
npm run dev      # Start development server
npm run build    # Build TypeScript
npm start        # Start production server
npm run migrate  # Run database migrations
npm run seed     # Run database seeders
npm run lint     # Run ESLint
```

## 📊 Demo Data

Seeders menyediakan demo data:
- 2 Administrator users
- 1 Owner user
- 50+ Sparepart samples
- 10+ Supplier
- Sample transactions

Login dengan:
- **Email:** admin@bengkel.test
- **Password:** password123

## 🐛 Troubleshooting

### Database Connection Error
```bash
# Check MySQL service
sudo systemctl status mysql

# Verify credentials di .env
```

### Port Already in Use
```bash
# Change port di .env
PORT=5001
```

### npm install fails
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules dan package-lock.json
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

## 📄 License

MIT License - Bebas digunakan untuk keperluan komersial maupun non-komersial

## 👨‍💻 Author

**Rafsanjani31**
- GitHub: [@Rafsanjani31](https://github.com/Rafsanjani31)

## 📞 Support

Untuk pertanyaan atau issues, silakan buat issue di repository ini.

## 🎉 Changelog

### Version 1.0.0
- ✅ Release awal
- ✅ Semua fitur utama
- ✅ Docker support
- ✅ Full documentation

---

**Happy Coding! 🚀**
