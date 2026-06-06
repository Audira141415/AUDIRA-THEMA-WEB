# 🛡️ AUDIRA THEMA: STABLE STATE MANUAL (Phase 12)

Selamat! Anda telah mencapai kondisi **100% Stable Release** untuk aplikasi **AUDIRA THEMA**. Dokumen ini ditulis secara otomatis pada Fase 12 setelah semua fitur diverifikasi dan *bug* kritis diselesaikan. 

Fungsi dokumen ini adalah sebagai **Buku Panduan Rollback & Arsitektur** jika di kemudian hari Anda bereksperimen dan melakukan kesalahan (*error*).

---

## 1. Bagaimana Cara Melakukan Rollback (Jika Terjadi Error)?

Saya telah menginisiasi repositori **Git** secara lokal di folder proyek Anda dan menyimpan *snapshot* dari seluruh kode yang stabil hari ini (dengan pesan *commit*: `"STABLE RELEASE: Phase 12 - All Features Active & Verified"`).

Jika suatu hari nanti Anda mengutak-atik kode dan web menjadi hancur (*blank page*), ikuti langkah ini:

**Melihat Status Perubahan:**
Buka terminal di folder `f:\AUDIRA-THEMA-WEB` lalu jalankan:
`git status`

**Cara Mengembalikan Kode (Rollback):**
Jika Anda ingin membuang semua perubahan yang baru saja Anda buat dan kembali ke kondisi sempurna hari ini, jalankan:
`git restore .`

Kode Anda akan otomatis kembali normal seperti sulap!

---

## 2. Arsitektur Sistem (Jangan Hapus File Ini!)

Aplikasi ini berjalan secara murni menggunakan teknologi *Client-Side Vanilla Javascript*. Tidak ada *database* atau server Node.js yang diperlukan (kecuali untuk fitur *live server preview*). 

Berikut adalah anatomi aplikasinya:

*   **`index.html` & `js/app.js`**: Menangani halaman utama (Galeri). Di sini terdapat logika rendering kartu tema, *Magic Builder* (pembangkit skema warna otomatis), dan *Cross-Breeder Engine* (algoritma matematika HSL/RGB untuk mengawinkan 2 tema).
*   **`theme.html` & `js/theme-page.js`**: Ini adalah "Jantung Utama" aplikasi. File ini sangat sensitif. Ia berisi:
    *   **Live Customizer**: Berhati-hatilah jika menambahkan input warna kustom. Setiap `<input type="color">` harus memiliki `id` yang pasangannya tertulis di JS. Jika ID hilang (seperti pada insiden *Text Color* sebelumnya), seluruh JS akan mati mendadak (*Fatal Crash*).
    *   **Export Engine**: Mesin raksasa yang merakit CSS Variables, konfigurasi Tailwind JSON, kode fungsi komponen React JSX, dan ratusan baris struktur dasar HTML *Landing Page*.
*   **`sandbox.html` & `js/sandbox.js`**: "SaaS Dashboard Playground". Komponen ini membaca konfigurasi warna dari `localStorage` browser pengguna dan memetakan variabel CSS secara dinamis untuk memberikan pratinjau antarmuka berukuran raksasa.
*   **`js/themes.js`**: Pangkalan data (*database*) tema pusat. Ini adalah sebuah Array JS statis. Anda bebas menambahkan objek baru di dalam Array ini asalkan mematuhi struktur bawaannya (`id, name, colors, typography, properties, btnText`).

---

## 3. Titik Kegagalan Paling Kritis (Common Failure Points)

Jika halaman `theme.html` mendadak "nge-blank" (tipografi dan komponen gagal muncul):

1. **Periksa ID HTML!** Kesalahan paling sering terjadi adalah saat memodifikasi `theme.html`. Jika Anda mengubah atau menghapus `id` pada *input* warna (misal: `id="edit-color-text"` atau `id="hex-color-text"`), file `js/theme-page.js` akan gagal membacanya, memunculkan pesan _"Cannot set properties of null"_, dan menghentikan seluruh proses *rendering*.
2. **Hati-Hati dengan Parameter URL:** Fungsi `init()` sangat bergantung pada parameter `?id=namatema`. Jika tema tidak ditemukan di `themes.js`, halaman akan *redirect* otomatis ke `index.html`.
3. **JSZip Dependency:** Tombol *Download .ZIP* mutlak membutuhkan koneksi internet atau ketersediaan CDN untuk memuat pustaka JSZip eksternal `<script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js">`. Jika pustaka ini gagal dimuat, ekspor .ZIP akan diabaikan secara diam-diam (*silent fail*).

Simpan dokumen ini dengan baik, dan selamat bereksperimen dengan tenang!
