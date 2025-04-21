// components/SidebarDetailProduk.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const SidebarDetailProduk = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-xl shadow p-4">
      <h4 className="text-sm font-semibold mb-1">
        Gapai Karier Impianmu sebagai UI/UX Designer & Product Manager.
      </h4>
      <p className="text-green-600 text-xl font-bold mb-1">
        Rp 250K{" "}
        <span className="line-through text-sm text-gray-400 ml-1">Rp 600K</span>
      </p>
      <p className="text-xs text-orange-500 mb-4">
        Penawaran spesial tersisa 2 hari lagi!
      </p>
      <button
        onClick={() => navigate("/metode")}
        className="bg-green-500 text-white py-2 rounded-lg w-full font-semibold"
      >
        Beli Sekarang
      </button>

      <div className="mt-6 space-y-3 text-sm text-gray-700">
        <p>✅ Ujian Akhir</p>
        <p>✅ 7 Dokumen</p>
        <p>✅ 49 Video</p>
        <p>✅ Sertifikat</p>
        <p className="text-xs text-gray-400">
          Bahasa Pengantar: Bahasa Indonesia
        </p>
      </div>
    </div>
  );
};

export default SidebarDetailProduk;
