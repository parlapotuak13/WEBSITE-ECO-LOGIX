# Eco-LogiX · Suite Terpadu (Kurir + Pengirim + Vendor 3PL) — Siap Hosting

Paket ini adalah versi yang telah **diaudit, diperbaiki, dan diintegrasikan** dari ketiga antarmuka **Eco-LogiX**:
1. **Antarmuka Kurir** (Optimasi Green-Routing, Mesin Pencocokan 2 Vendor, Peta Simulasi Leaflet, Hub Merjosari & Verifikasi OTP)
2. **Antarmuka Pengirim** (Pembuatan Order Pengiriman Hijau / Langsung, Pelacakan Real-Time, Kode OTP, & Kalkulator Dampak CO₂)
3. **Antarmuka Vendor 3PL** (Dasbor Efisiensi, Manajemen Armada Eco Hemat × Kilat Raya, Kebijakan Ambang $\delta$ & Batas Detour, serta Laporan Pembagian Biaya)

---

## Struktur Folder

| Path | Penjelasan |
|---|---|
| `index.html` | **Aplikasi Web Terpadu (All-in-One)**: menggabungkan antarmuka **Kurir**, **Pengirim**, dan **Vendor 3PL** dalam 1 halaman dengan *Role Switcher* & sinkronisasi state real-time. |
| `config.js` | **Konfigurasi Database Terpadu**: cukup isi URL & Anon Key Supabase di 1 tempat (mendukung `window.ECOLOGIX_CONFIG` dan `window.APP_CONFIG`). |
| `supabase/schema.sql` | **Skema SQL Terpadu & Idempoten**: membuat tabel dan fungsi untuk ketiga antarmuka sekaligus (`vendor_state`, `shipments`, `demo_runs`, `handover_logs`). |
| `kurir/` | Versi mandiri (standalone) Antarmuka Kurir yang sudah diperbaiki (`/kurir`). |
| `pengirim/` | Versi mandiri (standalone) Antarmuka Pengirim yang sudah diperbaiki (`/pengirim`). |
| `vendor-3pl/` | Versi mandiri (standalone) Antarmuka Vendor 3PL yang sudah diperbaiki (`/vendor-3pl`). |
| `vercel.json` & `netlify.toml` | File konfigurasi siap deploy ke Vercel, Netlify, atau Cloudflare Pages. |

---

## Cara Hosting (Gratis & Tanpa Build Step)

### Langkah 1: Siapkan Database Supabase (Opsional — Tanpa Ini Tetap Jalan di Mode Lokal)
1. Buat project gratis di [supabase.com](https://supabase.com).
2. Buka **SQL Editor → New query**, tempel seluruh isi file `supabase/schema.sql`, lalu klik **Run**.
3. Buka **Project Settings → API**, salin **Project URL** dan **anon / publishable key**.
4. Tempelkan ke dalam file `config.js` (atau langsung masukkan lewat tombol **⚙️ Konfigurasi DB** di pojok kanan atas aplikasi).

### Langkah 2: Deploy ke Hosting Statis
- **Netlify Drop (Paling Cepat)**: Buka [app.netlify.com/drop](https://app.netlify.com/drop), lalu *drag & drop* seluruh folder `eco-logix-siap-hosting` ini.
- **Vercel**: Unggah ke GitHub atau jalankan `npx vercel` di dalam folder ini.
- **Cloudflare Pages**: Pilih *Direct Upload* dan unggah folder ini.
