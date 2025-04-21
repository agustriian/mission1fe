// src/pages/Pesanan.jsx
import React from "react";
import { Link } from "react-router-dom";

const Pesanan = () => {
  const statusBadge = (status) => {
    const base = "text-xs font-semibold px-2 py-0.5 rounded-full";
    switch (status) {
      case "Berhasil":
        return <span className={`${base} bg-green-100 text-green-600`}>Berhasil</span>;
      case "Gagal":
        return <span className={`${base} bg-red-100 text-red-600`}>Gagal</span>;
      case "Belum Bayar":
        return <span className={`${base} bg-yellow-100 text-yellow-600`}>Belum Bayar</span>;
      default:
        return null;
    }
  };

  const dummyPesanan = new Array(5).fill({
    id: "HEL/INV/08092023",
    waktu: "10 Juni 2023, 14:17",
    title: "Belajar Microsoft Office dan Google Workspace untuk Pemula",
    harga: "Rp 300.000",
    status: "Berhasil",
  });

  return (
    <div className="bg-[#FFFCEE] min-h-screen font-sans text-[#222]">
      {/* Header */}
      <div className="bg-white w-full shadow-sm border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">videobelajar</h1>
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium">Kategori</span>
            <div className="w-8 h-8 rounded-full overflow-hidden">
              <img src="https://i.pravatar.cc/40" alt="Profile" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="space-y-4">
          <h2 className="text-sm text-gray-500 font-medium">Daftar Pesanan</h2>
          <div className="space-y-2">
            <button className="w-full bg-white border border-gray-200 rounded-md py-2 text-sm">Profil Saya</button>
            <button className="w-full bg-white border border-gray-200 rounded-md py-2 text-sm">Kelas Saya</button>
            <button className="w-full bg-yellow-400 text-white rounded-md py-2 text-sm font-semibold">Pesanan Saya</button>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3 space-y-6">
          {/* Tab Header */}
          <div className="flex flex-wrap justify-between items-center border-b border-gray-200 pb-4">
            <div className="space-x-4 text-sm font-medium">
              <button className="text-red-500 border-b-2 border-red-500 pb-1">Semua Pesanan</button>
              <button className="text-gray-500">Menunggu</button>
              <button className="text-gray-500">Berhasil</button>
              <button className="text-gray-500">Gagal</button>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <input type="text" placeholder="Cari Kelas" className="border px-3 py-1.5 rounded-md text-sm" />
              <button className="border px-3 py-1.5 rounded-md">Urutkan</button>
            </div>
          </div>

          {/* List Pesanan */}
          <div className="space-y-4">
            {dummyPesanan.map((item, index) => (
              <div key={index} className="bg-white p-4 border border-gray-200 rounded-xl space-y-3">
                <div className="flex justify-between text-xs text-gray-600">
                  <span>No. Invoice: <Link to="#" className="text-blue-600 font-semibold">{item.id}</Link></span>
                  <span>Waktu Pembayaran: {item.waktu}</span>
                </div>
                <div className="flex items-start gap-4">
                  <img src="https://via.placeholder.com/80" alt="Kelas" className="rounded-md w-20 h-20 object-cover" />
                  <div className="flex-1 space-y-1 text-sm">
                    <h3 className="font-semibold leading-snug">{item.title}</h3>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Harga</span>
                      <span className="font-medium text-black">{item.harga}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Total Pembayaran</span>
                      <span className="text-green-600 font-semibold">{item.harga}</span>
                    </div>
                  </div>
                  <div className="mt-1">{statusBadge(index % 3 === 1 ? "Gagal" : index % 3 === 2 ? "Belum Bayar" : "Berhasil")}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-8">
            <div className="flex items-center gap-2 text-sm">
              {[1, 2, 3, 4, 5].map((n) => (
                <button
                  key={n}
                  className={`px-3 py-1 border rounded ${n === 1 ? "bg-yellow-400 text-white font-semibold" : "bg-white"}`}
                >
                  {n}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 text-sm text-gray-600 mt-12">
        <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <h3 className="text-orange-500 font-bold text-lg mb-2">videobelajar</h3>
            <p className="mb-2">Gali Potensi Anda Melalui Pembelajaran Video di harisock.id</p>
            <p>Jl. Utama Nomor 100, Lowokwaru, Malang</p>
            <p>+62-877-7354-2254</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Kategori</h4>
            <ul className="space-y-1">
              <li>Digital & Teknologi</li>
              <li>Keuangan</li>
              <li>Manajemen Bisnis</li>
              <li>Pengembangan Diri</li>
              <li>Desain</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Perusahaan</h4>
            <ul className="space-y-1">
              <li>Tentang Kami</li>
              <li>FAQ</li>
              <li>Kebijakan Privasi</li>
              <li>Pusat Layanan</li>
              <li>Bantuan</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Komunitas</h4>
            <ul className="space-y-1">
              <li>Tips Sukses</li>
              <li>Blog</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 text-center py-4 text-xs">
          &copy;2023 Devstack Surya. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
};

export default Pesanan;
