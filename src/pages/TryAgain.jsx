// src/pages/TryAgain.jsx
import React from "react";

const TryAgain = () => {
  const nilai = 20;
  const total = 10;
  const benar = 2;
  const salah = 8;
  const tanggal = new Date().toLocaleString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  return (
    <div className="bg-[#F5F5F5] min-h-screen font-sans text-[#222]">
      {/* Header */}
      <div className="flex items-center justify-between px-8 py-4 bg-white border-b border-gray-200">
        <button className="text-sm font-medium text-gray-600">← Foundations of User Experience Design</button>
        <div className="flex items-center gap-3">
          <div className="w-36 h-2 bg-gray-300 rounded-full overflow-hidden">
            <div className="h-full bg-yellow-400" style={{ width: '83%' }}></div>
          </div>
          <span className="text-sm font-semibold text-green-600">10/12 ✓</span>
          <img src="https://i.pravatar.cc/40" alt="Avatar" className="w-8 h-8 rounded-full object-cover" />
        </div>
      </div>

      {/* Main Section with Sidebar */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 px-4 py-10">
        {/* Left Content */}
        <div className="lg:col-span-2">
          <img
            src="tryagaingambar.png"
            alt="Try Again"
            className="w-full rounded-xl mb-8"
          />

          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-sm text-gray-500 mb-2 font-medium">Tanggal Ujian Akhir:</h2>
            <p className="text-sm text-gray-800 mb-4">{tanggal.replace(",", " pukul")}</p>

            <div className="grid grid-cols-4 gap-4 text-center mb-6">
              <div className="bg-red-500 text-white py-4 px-2 rounded-xl">
                <div className="text-xs uppercase">Nilai</div>
                <div className="text-2xl font-bold">{nilai}</div>
              </div>
              <div className="bg-gray-100 py-4 px-2 rounded-xl">
                <div className="text-xs uppercase text-gray-500">Soal</div>
                <div className="text-2xl font-bold text-gray-800">{total}</div>
              </div>
              <div className="bg-gray-100 py-4 px-2 rounded-xl">
                <div className="text-xs uppercase text-green-600">Benar</div>
                <div className="text-2xl font-bold text-green-600">{benar}</div>
              </div>
              <div className="bg-gray-100 py-4 px-2 rounded-xl">
                <div className="text-xs uppercase text-red-600">Salah</div>
                <div className="text-2xl font-bold text-red-600">{salah}</div>
              </div>
            </div>

            <div className="mb-4">
              <h3 className="text-base font-bold mb-1">Sedikit Lagi!</h3>
              <p className="text-sm text-gray-600">
                Kamu sudah menyelesaikan quiz dengan baik namun nilaimu belum cukup untuk melanjutkan materi. <br />
                Pelajari kembali modul sebelumnya dan kerjakan kembali quiz ini!
              </p>
            </div>

            <button className="border border-green-500 text-green-600 font-semibold px-4 py-2 rounded hover:bg-green-50 flex items-center gap-2">
              🔄 Ulangi Quiz
            </button>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-xl border border-gray-200">
            <h3 className="font-semibold mb-3 text-sm">Introduction to HR</h3>
            <ul className="space-y-2 text-sm">
              {[...Array(5)].map((_, i) => (
                <li key={i} className="bg-green-50 p-2 rounded border border-green-200 flex justify-between">
                  <span>✔ Video: Introduction to HR</span>
                  <span className="text-xs text-gray-500">12 Menit</span>
                </li>
              ))}
              <li className="p-2 rounded border flex justify-between">
                <span>📄 Rangkuman: Introduction to HR</span>
                <span className="text-xs text-gray-500">12 Menit</span>
              </li>
              <li className="p-2 rounded border border-gray-400 bg-white flex justify-between">
                <span>📝 Ujian Akhir: Introduction to HR</span>
                <span className="text-xs text-gray-500">10 Pertanyaan</span>
              </li>
            </ul>
          </div>

          <button className="bg-yellow-400 hover:bg-yellow-500 transition text-white w-full py-2 rounded font-semibold text-sm">
            ⭐ Beri Review & Rating
          </button>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-green-600 text-white px-6 py-3 flex justify-between items-center text-sm font-medium">
        <span>← Foundations of User Experience Design</span>
        <span>Foundations of User Experience Design →</span>
      </div>
    </div>
  );
};

export default TryAgain;
