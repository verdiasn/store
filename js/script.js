document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling untuk navigasi internal
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });

            // Tutup navbar collapse di mobile setelah klik
            if (window.innerWidth < 992 && document.querySelector('.navbar-toggler').offsetParent !== null) {
                document.querySelector('.navbar-toggler').click();
            }
        });
    });

    // Tambahkan class 'scrolled' ke navbar saat scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) { // Setelah scroll 50px
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Anda bisa menambahkan JS untuk efek animasi saat scroll (misal: menggunakan AOS library)
    // Atau untuk validasi form (jika ada form di halaman detail game)
    // Contoh sederhana untuk demo: Console log ketika tombol top up diklik
    document.querySelectorAll('.game-card .btn').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault(); // Mencegah pindah halaman langsung
            const gameName = this.closest('.game-card').querySelector('.card-title').textContent;
            console.log(`Anda ingin top up game: ${gameName}`);
            alert(`Anda akan diarahkan ke halaman top up untuk ${gameName}!`);
            window.location.href = this.href; // Lanjutkan ke halaman detail game
        });
    });

    // Mengubah warna tombol nav-link login/register saat aktif (contoh, jika sudah login)
    // Ini lebih cocok jika ada login session, tapi sebagai visualisasi:
    const loginRegisterBtn = document.querySelector('.navbar-nav .btn-primary');
    if (loginRegisterBtn) {
        // Contoh: Jika ada indikasi user sudah login, ubah warna
        // loginRegisterBtn.style.backgroundColor = '#28a745'; // Warna hijau
        // loginRegisterBtn.style.borderColor = '#28a745';
        // loginRegisterBtn.textContent = 'Dashboard';
    }
});