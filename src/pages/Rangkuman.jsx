// src/pages/Rangkuman.jsx
import React from "react";
import { FaDownload } from "react-icons/fa";

const Rangkuman = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
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

      {/* Content Area */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 px-4 py-10">
        <div className="lg:col-span-2">
          <div className="bg-black h-80 rounded-xl flex items-center justify-center">
            <button className="bg-white p-4 rounded-full shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10 text-gray-800"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-3A2.25 2.25 0 008.25 5.25V9m12 0h-16m16 0a2.25 2.25 0 012.25 2.25v6.75A2.25 2.25 0 0118.75 20.25H5.25A2.25 2.25 0 013 17.25v-6.75A2.25 2.25 0 015.25 9m16 0H2.25"
                />
              </svg>
            </button>
          </div>

          <div className="bg-white mt-6 p-6 rounded-xl shadow">
            <h2 className="text-base font-semibold mb-1">Download Rangkuman Modul</h2>
            <p className="text-sm text-gray-600 mb-4">
              Silakan download rangkuman modul dari materi yang telah kamu pelajari
            </p>
            <button className="flex items-center gap-2 px-4 py-2 border border-green-500 text-green-600 rounded hover:bg-green-50">
              <FaDownload /> Download Rangkuman
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
              <li className="p-2 rounded border border-green-500 bg-green-50 flex justify-between">
                <span>📄 Rangkuman: Introduction to HR</span>
                <span className="text-xs text-gray-500">12 Menit</span>
              </li>
              <li className="p-2 rounded border flex justify-between">
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

      {/* Footer */}
      <div className="bg-green-600 text-white px-6 py-3 flex justify-between items-center text-sm font-medium">
        <span>← Foundations of User Experience Design</span>
        <span>Foundations of User Experience Design →</span>
      </div>
    </div>
  );
};

export default Rangkuman;