// src/pages/Kelas.jsx
import React from "react";

const Kelas = () => {
  const dataKelas = [
    { progress: 100, status: "Selesai" },
    { progress: 20, status: "Sedang Berjalan" },
    { progress: 20, status: "Sedang Berjalan" },
  ];

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
          <h2 className="text-sm text-gray-500 font-medium">Daftar Kelas</h2>
          <div className="space-y-2">
            <button className="w-full bg-white border border-gray-200 rounded-md py-2 text-sm">Profil Saya</button>
            <button className="w-full bg-yellow-400 text-white rounded-md py-2 text-sm font-semibold">Kelas Saya</button>
            <button className="w-full bg-white border border-gray-200 rounded-md py-2 text-sm">Pesanan Saya</button>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3 space-y-6">
          {/* Tab Header */}
          <div className="flex flex-wrap justify-between items-center border-b border-gray-200 pb-4">
            <div className="space-x-4 text-sm font-medium">
              <button className="text-red-500 border-b-2 border-red-500 pb-1">Semua Kelas</button>
              <button className="text-gray-500">Sedang Berjalan</button>
              <button className="text-gray-500">Selesai</button>
            </div>
            <div>
              <input
                type="text"
                placeholder="Cari Kelas"
                className="border px-3 py-1.5 rounded-md text-sm"
              />
            </div>
          </div>

          {/* Kartu Kelas */}
          <div className="space-y-4">
            {dataKelas.map((kelas, i) => (
              <div key={i} className="bg-white p-4 border border-gray-200 rounded-xl space-y-3">
                <div className="flex justify-between text-xs text-gray-600">
                  <span>{kelas.progress === 100 ? "12 / 12" : "2 / 12"} Modul Terselesaikan</span>
                  <span className={`font-semibold ${kelas.status === "Selesai" ? "text-green-600" : "text-yellow-600"}`}>{kelas.status}</span>
                </div>
                <div className="flex items-start gap-4">
                  <img src="https://via.placeholder.com/80" alt="Kelas" className="rounded-md w-20 h-20 object-cover" />
                  <div className="flex-1 space-y-1 text-sm">
                    <h3 className="font-semibold leading-snug">Big 4 Auditor Financial Analyst</h3>
                    <p className="text-gray-500 text-xs">Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik.</p>
                    <p className="text-xs text-gray-600">Jane Ortega - Senior Accountant di Sipak</p>
                    <div className="flex text-xs gap-3 text-gray-500">
                      <span>12 Modul</span>
                      <span>360 Menit</span>
                    </div>
                  </div>
                </div>
                <div className="text-xs text-gray-700 font-medium">
                  Progres Kelas: {kelas.progress}%
                  <div className="w-full h-2 bg-gray-200 rounded-full mt-1">
                    <div
                      className={`h-full ${kelas.progress === 100 ? "bg-green-600" : "bg-red-500"} rounded-full`}
                      style={{ width: `${kelas.progress}%` }}
                    ></div>
                  </div>
                </div>
                <div className="flex justify-end gap-3">
                  {kelas.progress === 100 ? (
                    <>
                      <button className="border border-green-500 text-green-600 text-xs px-3 py-1 rounded-md font-medium">
                        Unduh Sertifikat
                      </button>
                      <button className="bg-green-500 text-white text-xs px-3 py-1 rounded-md font-medium">
                        Lihat Detail Kelas
                      </button>
                    </>
                  ) : (
                    <button className="bg-green-500 text-white text-xs px-3 py-1 rounded-md font-medium">
                      Lanjutkan Pembelajaran
                    </button>
                  )}
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

export default Kelas;
