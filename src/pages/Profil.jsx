// src/pages/Profil.jsx
import React from "react";

const Profil = () => {
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
          <h2 className="text-sm text-gray-500 font-medium">Ubah Profil</h2>
          <div className="space-y-2">
            <button className="w-full bg-yellow-400 text-white rounded-md py-2 text-sm font-semibold">Profil Saya</button>
            <button className="w-full bg-white border border-gray-200 rounded-md py-2 text-sm text-gray-400" disabled>Kelas Saya</button>
            <button className="w-full bg-white border border-gray-200 rounded-md py-2 text-sm text-gray-400" disabled>Pesanan Saya</button>
          </div>
        </div>

        {/* Form */}
        <div className="lg:col-span-3 bg-white p-6 rounded-xl border border-gray-200 space-y-6">
          {/* Header user */}
          <div className="flex items-center gap-4">
            <img src="https://i.pravatar.cc/80" alt="User" className="w-16 h-16 rounded-full object-cover" />
            <div>
              <h2 className="font-bold text-lg">Jennie Ruby Jane</h2>
              <p className="text-sm text-gray-500">rubyjane@gmail.com</p>
              <button className="text-sm text-red-500 font-medium mt-1">Ganti Foto Profil</button>
            </div>
          </div>

          {/* Form Input */}
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label className="text-xs text-green-600 mb-1 font-semibold">Nama Lengkap</label>
              <input
                type="text"
                defaultValue="Jennie Ruby Jane"
                className="border border-green-400 rounded-md px-3 py-2 text-sm"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-xs text-gray-500 mb-1">E-Mail</label>
              <input
                type="email"
                defaultValue="rubyjane@gmail.com"
                className="border border-gray-300 rounded-md px-3 py-2 text-sm"
              />
            </div>
            <div className="flex flex-col col-span-2 md:col-span-1">
              <label className="text-xs text-gray-500 mb-1">No. Hp</label>
              <div className="flex gap-2">
                <select className="border border-gray-300 rounded-md px-2 py-2 text-sm w-20">
                  <option value="+62">+62</option>
                  <option value="+1">+1</option>
                </select>
                <input
                  type="tel"
                  defaultValue="81234567890"
                  className="border border-gray-300 rounded-md px-3 py-2 text-sm w-full"
                />
              </div>
            </div>
            <div className="col-span-2 md:col-span-1 flex items-end">
              <button
                type="submit"
                className="bg-green-500 text-white px-6 py-2 rounded-md text-sm font-semibold"
              >
                Simpan
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 text-sm text-gray-600 mt-12">
        <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <h3 className="text-orange-500 font-bold text-lg mb-2">videobelajar</h3>
            <p className="mb-2">Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id</p>
            <p>Jl. Usman Effendi No. 50 Lowokwaru, Malang</p>
            <p>+62-877-7123-1234</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Kategori</h4>
            <ul className="space-y-1">
              <li>Digital & Teknologi</li>
              <li>Pemasaran</li>
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
              <li>Ketentuan Layanan</li>
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
          &copy;2023 Gerobak Sayur. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
};

export default Profil;
