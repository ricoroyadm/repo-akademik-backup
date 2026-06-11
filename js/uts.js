// 1. Kumpulan URL dalam satu variabel objek
const links = {
  Indo: "https://forms.gle/fjKTKMStHo3zcFAu5",
  Makro: "https://forms.gle/gmiSwBgyXKNVNm3f8",
  Mtk: "https://forms.gle/47Qg4jYStEAqMY1L6",
  Rsk: "https://forms.gle/16EfeiZjC7QV26Vr6",
  Apl: "https://forms.gle/aRXTMxf2GbidSAqJ9",
  IAD: "https://forms.gle/UPwKbV2CmfYeR1qS8",
  Biaya: "https://forms.gle/wGfpeD64EqB9SWSA7",
  MSDM: "https://forms.gle/twbMRd7Q4RH6JpSG8",
  BisInt: "https://forms.gle/Kn7prAoxfZmtrnNP8",
  AkM: "https://forms.gle/DyRzAMfTBaFsayiQ6",
  Mutu: "https://forms.gle/Gs9zazEEYRBF7KGv6",
  MPar: "https://forms.gle/dsVuuZgybiZy94hv7",
  RO: "https://forms.gle/TRAmXuqhcHQsNUg87",
  AspekHkm: "https://forms.gle/n1ZfSCHMiXtXvJAj8",
  EKK: "https://forms.gle/ETR2mPB9PZWrjfRg7",
  MKI: "https://forms.gle/gvegxRUWYxn4KUh66",
  MLB: "https://forms.gle/puZAufqkS2fLQg8PA",
  BLK: "https://forms.gle/eXWyPwTu2BiZ4EDQ7",
  StrP: "https://forms.gle/N4aime4H97wyBy9u6",
  Smn: "https://forms.gle/wSmL9MW2FQgFu1uGA",
};

// 2. Ambil semua elemen button
const btnIndo = document.getElementById("btnIndo");
const btnRsk = document.getElementById("btnRsk");
const btnBiaya = document.getElementById("btnBiaya");
const btnBisInt = document.getElementById("btnBisInt");
const btnAkM = document.getElementById("btnAkM");
const btnMutu = document.getElementById("btnMutu");
const btnMPar = document.getElementById("btnMPar");
const btnMakro = document.getElementById("btnMakro");
const btnMtk = document.getElementById("btnMtk");
const btnApl = document.getElementById("btnApl");
const btnIAD = document.getElementById("btnIAD");
const btnMSDM = document.getElementById("btnMSDM");
const btnRO = document.getElementById("btnRO");
const btnAspekHkm = document.getElementById("btnAspekHkm");
const btnEKK = document.getElementById("btnEKK");
const btnMKI = document.getElementById("btnMKI");
const btnMLB = document.getElementById("btnMLB");
const btnBLK = document.getElementById("btnBLK");
const btnStrP = document.getElementById("btnStrP");
const btnSmn = document.getElementById("btnSmn");

// 3. Pasang fungsi klik untuk masing-masing tombol
btnIndo.addEventListener("click", () => {
  window.open(links.Indo, "_blank");
});

btnRsk.addEventListener("click", () => {
  window.open(links.Rsk, "_blank");
});

btnBiaya.addEventListener("click", () => {
  window.open(links.Biaya, "_blank");
});

btnBisInt.addEventListener("click", () => {
  window.open(links.BisInt, "_blank");
});

btnAkM.addEventListener("click", () => {
  window.open(links.AkM, "_blank");
});

btnMutu.addEventListener("click", () => {
  window.open(links.Mutu, "_blank");
});

btnMPar.addEventListener("click", () => {
  window.open(links.MPar, "_blank");
});

btnMakro.addEventListener("click", () => {
  window.open(links.Makro, "_blank");
});

btnMtk.addEventListener("click", () => {
  window.open(links.Mtk, "_blank");
});

btnApl.addEventListener("click", () => {
  window.open(links.Apl, "_blank");
});

btnIAD.addEventListener("click", () => {
  window.open(links.IAD, "_blank");
});

btnMSDM.addEventListener("click", () => {
  window.open(links.MSDM, "_blank");
});

btnRO.addEventListener("click", () => {
  window.open(links.RO, "_blank");
});

btnAspekHkm.addEventListener("click", () => {
  window.open(links.AspekHkm, "_blank");
});

btnEKK.addEventListener("click", () => {
  window.open(links.EKK, "_blank");
});

btnMKI.addEventListener("click", () => {
  window.open(links.MKI, "_blank");
});

btnMLB.addEventListener("click", () => {
  window.open(links.MLB, "_blank");
});

btnBLK.addEventListener("click", () => {
  window.open(links.BLK, "_blank");
});

btnStrP.addEventListener("click", () => {
  window.open(links.StrP, "_blank");
});

btnSmn.addEventListener("click", () => {
  window.open(links.Smn, "_blank");
});
