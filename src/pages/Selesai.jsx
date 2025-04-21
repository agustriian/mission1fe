// src/pages/Selesai.jsx
import React from "react";
import { Link } from "react-router-dom";

const Selesai = () => {
  return (
    <div className="bg-[#FFFCEE] min-h-screen font-sans text-[#222]">
      {/* Header */}
      <div className="bg-white w-full shadow-sm border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">
            videobelajar
          </h1>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-green-600 font-medium">
              <div className="w-5 h-5 rounded-full bg-green-500 text-white flex items-center justify-center text-xs">
                ✓
              </div>
              Pilih Metode
            </div>
            <div className="w-12 h-1 bg-green-500" />
            <div className="flex items-center gap-2 text-green-600 font-medium">
              <div className="w-5 h-5 rounded-full bg-green-500 text-white flex items-center justify-center text-xs">
                ✓
              </div>
              Bayar
            </div>
            <div className="w-12 h-1 bg-green-500" />
            <div className="flex items-center gap-2 text-green-600 font-medium">
              <div className="w-5 h-5 rounded-full border-2 border-green-600 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-green-600" />
              </div>
              Selesai
            </div>
          </div>
        </div>
      </div>

      {/* Konten */}
      <div className="flex justify-center items-center px-4 py-12">
        <div className="bg-white rounded-xl p-8 shadow-sm max-w-xl text-center border border-gray-200">
          <img
            src="/selesaigambar.png"
            alt="Pembayaran Berhasil"
            className="w-64 mx-auto mb-6"
          />
          <h2 className="text-xl font-bold mb-2">Pembayaran Berhasil!</h2>
          <p className="text-gray-600 mb-6 text-sm">
            Silakan cek email kamu untuk informasi lebih lanjut. Hubungi kami jika ada kendala.
          </p>
          <Link
            to="/pesanan"
            className="bg-green-500 text-white px-6 py-2 rounded-lg text-sm font-semibold inline-block"
          >
            Lihat Detail Pesanan
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Selesai;
