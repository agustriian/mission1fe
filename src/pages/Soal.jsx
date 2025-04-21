// src/pages/Soal.jsx
import React, { useState } from "react";
import ModalSelesai from "../components/ModalSelesai";

const Soal = () => {
  const totalSoal = 10;
  const [nomor, setNomor] = useState(1);
  const [jawaban, setJawaban] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [type] = useState("pretest"); // atau "quiz" atau "final"

  const isLast = nomor === totalSoal;
  const isFirst = nomor === 1;

  const soalText = `Memikirkan dan mengantisipasi secara teliti adanya user secara tidak sengaja mengutak-atik konfigurasi, namun dapat diatasi dengan membuat default yang mengurangi kepanikan pada user adalah pengertian dari ...`;
  const pilihan = [
    "Memikirkan tentang default *",
    "Mempertimbangkan page layout berdasarkan suatu tujuan tertentu",
    "Memastikan bahwa sistem berjalan sesuai dengan apa yang terjadi saat itu juga",
    "Menciptakan konsistensi dan menggunakan elemen UI umum",
  ];

  const handleJawab = (pilihan) => {
    setJawaban({ ...jawaban, [nomor]: pilihan });
  };

  const handleSubmit = () => {
    setShowModal(false);
    alert("Jawaban kamu telah dikirim. Terima kasih!");
    // Redirect to hasil page bisa ditambahkan di sini
  };

  return (
    <div className="bg-gray-100 min-h-screen font-sans text-[#222]">
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

      {/* Konten utama */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6 px-6 py-10">
        {/* List Soal */}
        <div className="space-y-4">
          <div className="grid grid-cols-5 gap-2">
            {[...Array(totalSoal)].map((_, i) => (
              <div
                key={i + 1}
                className={`relative rounded border px-2 py-1 text-sm font-medium flex items-center justify-center cursor-pointer transition duration-200
                  ${nomor === i + 1 ? 'border-orange-500 bg-orange-50 text-orange-600' : jawaban[i + 1] ? 'border-gray-300 bg-white' : 'border-gray-200 bg-white'}`}
                onClick={() => setNomor(i + 1)}
              >
                {jawaban[i + 1] && (
                  <div className="absolute top-0 right-0 w-0 h-0 border-t-[12px] border-l-[12px] border-t-yellow-400 border-l-transparent"></div>
                )}
                <span className="z-10">{i + 1}</span>
              </div>
            ))}
          </div>
          <button onClick={() => setShowModal(true)} className="border border-blue-400 text-blue-600 text-sm px-3 py-2 rounded w-full">
            Selesaikan semua soal untuk mengakhiri {type}
          </button>
        </div>

        {/* Soal & Jawaban */}
        <div className="lg:col-span-2">
          <h2 className="text-lg font-semibold mb-2">Pertanyaan {nomor}</h2>
          <p className="text-sm text-gray-700 mb-4 leading-relaxed">{soalText}</p>

          <div className="space-y-3">
            {pilihan.map((p, idx) => (
              <button
                key={idx}
                onClick={() => handleJawab(p)}
                className={`w-full text-left px-4 py-2 rounded border text-sm font-medium transition ${jawaban[nomor] === p ? 'border-green-500 bg-green-50 text-green-700' : 'border-gray-300 bg-white hover:bg-gray-50'}`}
              >
                {p}
              </button>
            ))}
          </div>

          <div className="flex justify-between mt-6 gap-4">
            <button
              disabled={isFirst}
              onClick={() => setNomor(nomor - 1)}
              className="border border-green-500 text-green-600 px-6 py-2 rounded-lg w-full sm:w-auto text-sm font-semibold disabled:opacity-40"
            >
              ← Sebelumnya
            </button>
            {isLast ? (
              <button
                onClick={() => setShowModal(true)}
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg w-full sm:w-auto text-sm font-semibold"
              >
                Submit →
              </button>
            ) : (
              <button
                onClick={() => setNomor(nomor + 1)}
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg w-full sm:w-auto text-sm font-semibold"
              >
                Selanjutnya →
              </button>
            )}
          </div>
        </div>

        {/* Sidebar Materi */}
        <div className="space-y-3">
          <div className="bg-white p-4 rounded-xl border border-gray-200">
            <h3 className="font-semibold mb-3 text-sm">Introduction to HR</h3>
            <ul className="space-y-2 text-sm">
              {[...Array(5)].map((_, i) => (
                <li key={i} className="bg-green-50 p-2 rounded border border-green-200 flex justify-between">
                  <span>🎬 Video: Introduction to HR</span>
                  <span className="text-xs text-gray-500">12 Menit</span>
                </li>
              ))}
              <li className="p-2 rounded border flex justify-between">
                <span>📄 Rangkuman: Introduction to HR</span>
                <span className="text-xs text-gray-500">12 Menit</span>
              </li>
              <li className="p-2 rounded border border-green-500 bg-green-50 flex justify-between">
                <span>📝 Quiz: Introduction to HR</span>
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

      {showModal && (
        <ModalSelesai
          type={type}
          onClose={() => setShowModal(false)}
          onSubmit={handleSubmit}
        />
      )}
    </div>
  );
};

export default Soal;