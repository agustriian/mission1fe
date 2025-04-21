import React from "react";

const DeskripsiProduk = () => {
  return (
    <div className="bg-white py-10 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Judul Section */}
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Tentang Kelas Ini</h2>

        {/* Paragraf Deskripsi */}
        <p className="text-gray-600 mb-6 leading-relaxed">
          Di kelas ini, kamu akan mempelajari dasar hingga tingkat lanjut tentang UI/UX
          design dan bagaimana menjadi seorang product manager yang andal. Materi disusun
          oleh praktisi berpengalaman dan dikemas dalam bentuk video yang mudah dipahami.
        </p>

        {/* Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-700">
          <div>
            <span className="font-semibold">Kategori:</span> Desain
          </div>
          <div>
            <span className="font-semibold">Level:</span> Pemula - Menengah
          </div>
          <div>
            <span className="font-semibold">Durasi:</span> 10 Jam
          </div>
          <div>
            <span className="font-semibold">Sertifikat:</span> Tersedia
          </div>
        </div>

        {/* Tombol */}
        <div className="mt-8">
          <button className="bg-yellow-400 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-yellow-500 transition">
            Mulai Belajar Sekarang
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeskripsiProduk;
