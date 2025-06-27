// script.js

// Fungsi untuk login dummy
document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("formLogin");

  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const email = document.getElementById("email")?.value || document.getElementById("loginEmail")?.value;
      const password = document.getElementById("password")?.value || document.getElementById("loginPassword")?.value;

      if (email === "admin@flores.com" && password === "123456") {
        window.location.href = "index.html";
      } else {
        alert("Email atau password salah.\nGunakan:\nEmail: admin@flores.com\nPassword: 123456");
      }
    });
  }

  // Toggle form login/daftar
  const showRegister = document.getElementById("showRegister");
  const showLogin = document.getElementById("showLogin");

  if (showRegister && showLogin) {
    showRegister.addEventListener("click", (e) => {
      e.preventDefault();
      document.getElementById("loginForm").classList.add("hide");
      document.getElementById("registerForm").classList.add("show");
    });

    showLogin.addEventListener("click", (e) => {
      e.preventDefault();
      document.getElementById("registerForm").classList.remove("show");
      document.getElementById("loginForm").classList.remove("hide");
    });
  }

  // Fungsi saat memilih hewan
  document.querySelectorAll(".hewan button").forEach(function (button) {
    button.addEventListener("click", function () {
      const hewan = this.closest(".hewan");
      const nama = hewan.getAttribute("data-nama");
      const harga = hewan.getAttribute("data-harga");

      if (nama && harga) {
        document.getElementById("nama-hewan").value = nama;
        document.getElementById("harga-hewan").value = harga;
        alert("Hewan telah dipilih: " + nama);
      }
    });
  });

  // Tangani form pemesanan
  const formPesanan = document.getElementById("form-pesanan");
  if (formPesanan) {
    formPesanan.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("✅ Pesanan berhasil dikirim!\nTim kami akan menghubungi Anda segera.");
      formPesanan.reset();
    });
  }
});
