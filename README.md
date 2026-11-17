# PT Arindama Tungga Madani — Website

Website corporate satu halaman dengan Next.js App Router, TypeScript, Tailwind CSS, dan ekspor statis untuk Cloudflare Pages.

## Mengubah konten

- `src/config/site-config.ts`: identitas perusahaan, tagline, kontak resmi, WhatsApp, email, alamat, website, sosial, dan metadata.
- `src/config/content.ts`: profil, direktur utama, visi/misi, nilai, layanan unggulan/lainnya, klien, legalitas, keunggulan, industri, dan tahapan kerja.
- `src/config/images.ts`: path gambar hero, layanan, industri, dan logo klien.
- `public/images/hero.png`: foto hero. Logo perusahaan dapat ditambahkan sebagai `public/images/logo.png`; identitas teks akan tampil jika belum tersedia.
- `public/images/clients/`: simpan logo klien resmi di sini, lalu isi path pada `images.clients` dan nama mitra di `content.clients`. Logo BPTD Yogyakarta belum disertakan; situs menampilkan placeholder berlabel sampai file resmi ditambahkan.

WhatsApp disimpan sebagai nomor internasional tanpa `+` (`6285604036090`), sedangkan nomor yang ditampilkan menggunakan format lokal. Formulir tervalidasi di browser dan membuat pesan WhatsApp; data tidak disimpan di situs. Kontak resmi saat ini adalah 0856-0403-6090, pt.arindamatunggamadani@gmail.com, Blitar, Jawa Timur, www.arindamatunggamadani.com, dan Instagram @pt.arindamatungga.

Informasi legalitas ditampilkan sebagai tempat untuk dokumen/identitas saja; unggah berkas atau logo resmi yang tersedia sebelum menampilkan bukti visual. Foto layanan dan industri tetap memakai foto stok terpusat di `src/config/images.ts`, bukan foto fasilitas atau karyawan perusahaan.

## Build Cloudflare Pages

Jalankan `pnpm build`. Next.js menghasilkan website statis ke folder `out`. Gunakan perintah build `pnpm build` dan folder output `out` pada konfigurasi Cloudflare Pages. Pastikan aset eksternal yang digunakan tetap dapat diakses, atau ganti dengan aset lokal sebelum deployment.
