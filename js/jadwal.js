// function showTime() {
// 	document.getElementById('currentTime').innerHTML = new Date().toUTCString();
// }
// showTime();
// setInterval(function () {
// 	showTime();
// }, 1000);

// 1. Kumpulan URL dalam satu variabel objek
const links = {
  jadM: "https://drive.google.com/file/d/1JmYcNKcHHwfaemhGpWo9OHekSdZzOFCT/view?usp=drive_link",
};

// 2. Ambil semua elemen button
const btnJadM = document.getElementById("btnJadM");

// 3. Pasang fungsi klik untuk masing-masing tombol
btnJadM.addEventListener("click", () => {
  window.open(links.jadM, "_blank");
});
