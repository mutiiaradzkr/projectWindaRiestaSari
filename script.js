// DATA PRODUK
const products = [
  {
    id: 1,
    name: "Hand Banner - Idol NCT",
    category: "banner",
    price: 200000,
    img: "https://images.tokopedia.net/img/cache/700/aphluv/1997/1/1/b197980737f44ccb85f0bacbfdf911cc~.jpeg",
    description: "Hand Banner eksklusif Idol NCT, ukuran 40x15 cm."
  },
  {
    id: 2,
    name: "Keyring Truz - Idol TREASURE",
    category: "truz",
    price: 250000,
    img: "https://down-id.img.susercontent.com/file/id-11134207-7r98s-lqa4pjyczghxa1",
    description: "Keyring Truz lucu Idol TREASURE, bahan resin kualitas tinggi."
  },
  {
    id: 3,
    name: "Doll Miniteen - Idol SEVENTEEN",
    category: "miniteen",
    price: 365000,
    img: "https://down-id.img.susercontent.com/file/id-11134207-7rasf-m3yejmq3skvs74",
    description: "Boneka Doll Miniteen Idol SEVENTEEN, limited edition."
  }
];

// TAMPILKAN PRODUK SAAT HALAMAN DIMUAT
window.addEventListener("DOMContentLoaded", () => {
  const produkContainer = document.getElementById("produk");

  products.forEach((item) => {
    const card = document.createElement("div");
    card.className = "produk-card";
    card.innerHTML = `
      <img src="${item.img}" alt="${item.name}">
      <h3>${item.name}</h3>
      <p>${item.description}</p>
      <p class="price">Rp${item.price.toLocaleString()}</p>
      <button onclick="tambahKeKeranjang(${item.id})">Tambah ke Keranjang</button>
    `;
    produkContainer.appendChild(card);
  });
});

// FUNGSI TAMBAH KE KERANJANG
function tambahKeKeranjang(idProduk) {
  const produk = products.find(p => p.id === idProduk);
  console.log("Produk ditambahkan:", produk.name);
  const toast = document.getElementById("toast");
  toast.style.display = "block";
  setTimeout(() => {
    toast.style.display = "none";
  }, 2000);
}
