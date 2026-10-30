
// Mengambil elemen tombol dari HTML
const BackToTop = document.getElementById("BackToTop");

// Mendeteksi aktivitas scroll
window.addEventListener("scroll", function() {

    // Jika scroll lebih dari 500px
    if (window.scrollY > 500) {

        // Tampilkan tombol
        BackToTop.classList.add("show");

    } else {

        // Sembunyikan tombol
        BackToTop.classList.remove("show");
    }

});

// Fungsi ketika tombol diklik
BackToTop.addEventListener("click", function() {

    // Kembali ke posisi paling atas
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});
