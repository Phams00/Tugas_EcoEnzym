# Dokumentasi Pembuatan Ecoenzym

Website satu halaman untuk mendokumentasikan satu kegiatan sekolah: pembuatan ecoenzym.

## Menambahkan foto
Masukkan foto ke folder `assets` dengan nama berikut:
- `foto-utama.jpg` — foto utama di bagian atas
- `persiapan-bahan.jpg` — foto persiapan bahan
- `proses-pembuatan.jpg` — foto proses kegiatan
- `hasil-kegiatan.jpg` — foto hasil kegiatan

Nama file harus sama persis. Jika foto berekstensi PNG, ubah juga nama file di `index.html`.

## Mengubah tanggal
Di `index.html`, cari `id="eventDate"` dan ganti teks `Isi tanggal kegiatan` dengan tanggal kegiatan yang sebenarnya.

## Menjalankan
Buka `index.html` di browser atau gunakan ekstensi Live Server di VS Code.

## Publikasi ke GitHub Pages
1. Buat repository baru di GitHub.
2. Upload seluruh isi folder ini ke root repository.
3. Buka **Settings → Pages**.
4. Pilih **Deploy from a branch**, branch `main`, folder `/(root)`, lalu klik **Save**.
5. Tunggu deployment selesai dan buka URL yang ditampilkan GitHub Pages.

Tidak perlu Node.js, database, atau proses build.
