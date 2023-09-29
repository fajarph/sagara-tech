# Running Server

1. Install node modules dengan cara `npm install`
2. Buat file `.env` yang baru lalu isi berdasarkan contoh `.env.example`
3. Ganti `PG_HOST, PG_PORT, PG_USER, PG_PASSWORD, PG_DB_NAME` dengan settingan database postgres yang digunakan
4. Lalu jalankan perintah ini `node ace migration:run` untuk membuat sebuah database atau tablenya
5. Setelah itu jalankan `node ace serve --watch` untuk menjalankan servernya di lokal kita
6. Untuk mencoba menjalankan APInya bisa menggunakan Postman dangan base url `http://127.0.0.1:3333` dan dia akan mengeluarkan pesan `API Hit Succes`
7. Server harus tetap dinyalakan agar kita dapat mengetest APInya apakah berjalan dengan baik atau tidak

# Test API

1. Pertama kita mulai dari Register dengan endpoints `http://127.0.0.1:3333/api/register` dengan method `POST`, lalu berikan requestnya yaitu `email, password, name dan gender` setelah itu dia akan mengeluarkan status 200 jika berhasil dan 401 jika error

2. Sekarang kita bisa Login dengan email dan password yang telah terdaftar, dengan endpoints `http://127.0.0.1:3333/api/login` dengan method `POST` dan request yang diberikan yaitu `email, password`, status 200 jika berhasil dan 401 jika error

3. Setelah login user sudah dapat membuat Blog Post dengan endpoints `http://127.0.0.1:3333/api/blog-posts` dengan method `POST` dan requestnya `title, content dan tag`, status 200 jika berhasil dan 401 jika error

4. Update Blog Post dengan endpoints `http://127.0.0.1:3333/api/blog-posts/:id`, `:id` id yang dimaksud ialah id Blog Postnya contoh `http://127.0.0.1:3333/api/blog-posts/1` contoh disamping dia akan mengupdate Blog Post dengan id 1, dengan method `PATCH` dan requestnya `title, content dan tag`, status 200 jika berhasil dan 401 jika error

5. Delete Blog Post dengan endpoints `http://127.0.0.1:3333/api/blog-posts/:id` dengan method `DELETE` tanpa request, yang akan menghapus Blog Post berdasarkan id, status 200 jika berhasil dan 401 jika error

6. Selanjutnya kita memerlukan authentication token untuk mengakses ketiga endpoints, token bisa kita dapatkan ketika kita login contoh token `NQ.MgkTj-9VXsTINEZiOWSsgHPX1v2NYon2-rLtFj1eovMmR0Jbrrb_eBrxQHNa` token tersebut dapat terus berubah setiap kali kita login dan berbeda dari setiap usernya

7. Setelah kita mendapatkan tokennya kita bisa mengcopy token tersebut dan menaruhnya pada `Authorization` lalu ubah typenya menjadi `Bearer Token` dan kita paste disana dan yah endpoints akan berjalan dengan baik

8. Terakhir endpoints yang saya buat adalah get user yang masing-masing usernya memiliki Blog Post nya sendiri dengan endpoints `http://127.0.0.1:3333/api/users` endpoints ini memerlukan token sama seperti endpoints-endpoints sebelumnya

# Menjalankan Algoritma

1. Buka terminal dan jalankan `cd algorithm`
2. Lalu jalankan `node algorithm.js` untuk melihat output yang dikeluarkan

# Bonus

1. Pengguna dapat memperbarui informasi profil mereka dengan endpoints `http://127.0.0.1:3333/api/users/:id` dengan method `PATCH` dan requestnya `email, name, gender, address dan no_telp` memperbarui berdasarkan id user

# Terima Kasih 