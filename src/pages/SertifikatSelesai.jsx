// src/pages/SertifikatSelesai.jsx
import React, { useState } from "react";
import { FaCheckCircle, FaCertificate } from "react-icons/fa";

const SertifikatSelesai = () => {
  const [showPopup, setShowPopup] = useState(true);

  const tanggal = new Date().toLocaleString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Header */}
      <div className="flex items-center justify-between px-8 py-4 bg-white border-b border-gray-200 relative">
        <button className="text-sm font-medium text-gray-600">← Foundations of User Experience Design</button>

        <div className="flex items-center gap-3">
          <div className="w-36 h-2 bg-gray-300 rounded-full overflow-hidden">
            <div className="h-full bg-yellow-400" style={{ width: '100%' }}></div>
          </div>
          <span className="text-sm font-semibold text-green-600">12/12 ✓</span>

          {/* Dropdown Sertifikat */}
          <div className="relative">
            <button
              onClick={() => setShowPopup(!showPopup)}
              className="bg-green-500 hover:bg-green-600 text-white text-sm px-4 py-2 rounded flex items-center gap-2 font-semibold"
            >
              <FaCertificate /> Ambil Sertifikat
            </button>
            {showPopup && (
              <div className="absolute right-0 mt-2 w-72 bg-white rounded-xl shadow-lg z-50 border border-gray-200">
                <div className="p-4">
                  <h4 className="text-sm font-semibold">Modul sudah selesai</h4>
                  <p className="text-xs text-gray-600 mt-1 mb-3">
                    16 dari 16 modul telah selesai, silahkan download sertifikat
                  </p>
                  <button className="w-full text-sm bg-green-500 hover:bg-green-600 text-white font-medium px-4 py-2 rounded">
                    Ambil Sertifikat
                  </button>
                </div>
              </div>
            )}
          </div>

          <img src="https://i.pravatar.cc/40" alt="Avatar" className="w-8 h-8 rounded-full object-cover" />
        </div>
      </div>

      {/* Main */}
      <div className="max-w-6xl mx-auto px-4 py-10">
        <img
          src="/congrats-banner.png"
          alt="Congrats"
          className="w-full rounded-xl mb-6"
        />

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-sm font-semibold mb-1">Tanggal Pretest:</h3>
          <p className="text-sm text-gray-700 mb-4">{tanggal.replace(",", " pukul")}</p>

          <div className="grid grid-cols-4 gap-4 text-center mb-6">
            <div className="bg-yellow-400 text-white py-4 px-2 rounded-xl">
              <div className="text-xs uppercase">Nilai</div>
              <div className="text-2xl font-bold">100</div>
            </div>
            <div className="bg-gray-100 py-4 px-2 rounded-xl">
              <div className="text-xs uppercase text-gray-500">Soal</div>
              <div className="text-2xl font-bold text-gray-800">10</div>
            </div>
            <div className="bg-gray-100 py-4 px-2 rounded-xl">
              <div className="text-xs uppercase text-green-600">Benar</div>
              <div className="text-2xl font-bold text-green-600">10</div>
            </div>
            <div className="bg-gray-100 py-4 px-2 rounded-xl">
              <div className="text-xs uppercase text-red-600">Salah</div>
              <div className="text-2xl font-bold text-red-600">0</div>
            </div>
          </div>

          <div>
            <h3 className="text-base font-bold mb-1">Selesai!</h3>
            <p className="text-sm text-gray-600">
              Pretest sudah selesai dan kami sudah mengetahui progresmu. <br />
              Saatnya memulai kelas!
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-green-600 text-white px-6 py-3 flex justify-between items-center text-sm font-medium">
        <span>← Foundations of User Experience Design</span>
        <span>Foundations of User Experience Design →</span>
      </div>
    </div>
  );
};

export default SertifikatSelesai;