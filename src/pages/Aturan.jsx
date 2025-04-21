// src/pages/Aturan.jsx
import React from "react";
import { useSearchParams } from "react-router-dom";
import AturanTipe from "../components/AturanTipe";

const Aturan = () => {
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type") || "pretest";

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

      {/* Main Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6 px-6 py-10">
        {/* Aturan Dinamis */}
        <div className="lg:col-span-3">
          <AturanTipe type={type} />
        </div>

        {/* Sidebar */}
        <div className="space-y-3">
          <div className="bg-white p-4 rounded-xl border border-gray-200">
            <h3 className="font-semibold mb-3 text-sm">Introduction to HR</h3>
            <ul className="space-y-2 text-sm">
              <li className="bg-green-100 p-2 rounded flex justify-between">
                <span>📝 Pre-Test: Introduction to HR</span>
                <span className="text-xs text-gray-500">10 Pertanyaan</span>
              </li>
              {[...Array(4)].map((_, i) => (
                <li key={i} className="p-2 rounded border flex justify-between">
                  <span>🎬 Video: Introduction to HR</span>
                  <span className="text-xs text-gray-500">12 Menit</span>
                </li>
              ))}
              <li className="p-2 rounded border flex justify-between">
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

      {/* Bottom Bar */}
      <div className="bg-green-600 text-white px-6 py-3 flex justify-between items-center text-sm font-medium">
        <span>← Foundations of User Experience Design</span>
        <span>Foundations of User Experience Design →</span>
      </div>
    </div>
  );
};

export default Aturan;
