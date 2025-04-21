// src/pages/Video.jsx
import React from "react";
import { FaPlay } from "react-icons/fa";

const Video = () => {
  return (
    <div className="bg-gray-100 min-h-screen font-sans text-[#222]">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-200">
        <button className="text-sm font-medium text-gray-600">← Foundations of User Experience Design</button>
        <div className="flex items-center gap-3">
          <div className="w-40 h-2 bg-gray-300 rounded-full overflow-hidden">
            <div className="h-full bg-yellow-400" style={{ width: '83%' }}></div>
          </div>
          <span className="text-sm font-semibold text-green-600">10/12 ✓</span>
          <img
            src="https://i.pravatar.cc/40"
            alt="Avatar"
            className="w-8 h-8 rounded-full"
          />
        </div>
      </div>

      {/* Body */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 max-w-6xl mx-auto py-8 px-6">
        {/* Video & Info */}
        <div className="lg:col-span-3 space-y-6">
          <div className="bg-black h-64 rounded-md flex items-center justify-center relative">
            <FaPlay className="text-white text-3xl" />

            {/* Floating Notification */}
            <div className="absolute top-6 right-6 bg-white border border-blue-400 p-4 rounded shadow w-64">
              <h3 className="text-sm font-bold mb-1">25% Modul Telah Selesai</h3>
              <p className="text-xs text-gray-500 mb-2">Selesaikan Semua Modul Untuk Mendapatkan Sertifikat</p>
              <button className="bg-gray-300 text-white text-xs px-3 py-1 rounded cursor-not-allowed" disabled>
                Ambil Sertifikat
              </button>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl shadow-sm">
            <h2 className="text-lg font-semibold mb-1">Praktikkan Skill dengan Technical Book</h2>
            <p className="text-sm text-gray-500 mb-4">
              Pelajari dan praktikkan skill teknis dalam berbagai industri dengan Technical Book Riselearn
            </p>
            <div className="flex items-center gap-3">
              <img src="https://i.pravatar.cc/36" className="w-9 h-9 rounded-full" alt="mentor" />
              <div className="text-sm">
                <p className="font-semibold leading-tight">Jenna Ortega</p>
                <p className="text-xs text-gray-500">Senior Accountant di Gojek</p>
              </div>
            </div>
            <div className="text-sm text-gray-600 mt-2 flex items-center gap-2">
              ⭐⭐⭐☆☆ <span className="text-xs">3.5 (86)</span>
            </div>
          </div>
        </div>

        {/* Sidebar List */}
        <div className="space-y-2">
          <details open className="bg-white border border-gray-200 rounded-md p-4">
            <summary className="font-semibold mb-2 cursor-pointer">Introduction to HR</summary>
            <ul className="space-y-2 text-sm">
              <li className="bg-green-100 p-2 rounded">🎬 Video: Introduction to HR <span className="ml-2 text-xs text-gray-500">12 Menit</span></li>
              <li className="p-2 rounded border">🎬 Video: Introduction to HR <span className="ml-2 text-xs text-gray-500">12 Menit</span></li>
              <li className="p-2 rounded border">🎬 Video: Introduction to HR <span className="ml-2 text-xs text-gray-500">12 Menit</span></li>
              <li className="p-2 rounded border">🎬 Video: Introduction to HR <span className="ml-2 text-xs text-gray-500">12 Menit</span></li>
              <li className="p-2 rounded border">📄 Rangkuman: Introduction to HR <span className="ml-2 text-xs text-gray-500">12 Menit</span></li>
              <li className="p-2 rounded border">📝 Quiz: Introduction to HR <span className="ml-2 text-xs text-gray-500">10 Pertanyaan</span></li>
            </ul>
          </details>
          <button className="bg-yellow-400 text-white w-full py-2 rounded font-semibold text-sm">⭐ Beri Review & Rating</button>
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

export default Video;
