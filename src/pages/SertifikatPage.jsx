// src/pages/SertifikatPage.jsx
import React from "react";
import { FaStar, FaDownload } from "react-icons/fa";

const SertifikatPage = () => {
  return (
    <div className="min-h-screen bg-[#FFFCEE] text-gray-800 flex flex-col">
      {/* Header */}
      <header className="bg-white px-8 py-4 border-b border-gray-200 flex justify-between items-center">
        <h1 className="text-xl font-bold text-orange-500">
          <span className="text-[#facc15]">video</span>
          <span className="text-[#ef4444]">belajar</span>
        </h1>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500">Kategori</span>
          <img
            src="https://i.pravatar.cc/40"
            alt="user"
            className="w-8 h-8 rounded-full object-cover"
          />
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="px-8 pt-6 text-sm text-gray-500">
        <span className="text-gray-400">Beranda / Desain / Gapai Karir... /</span>
        <span className="text-gray-800 font-semibold"> Sertifikat</span>
      </div>

      {/* Sertifikat Card */}
      <div className="max-w-6xl mx-auto px-6 py-6 flex-grow">
        <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row">
          <div className="md:w-1/2 bg-[#E5F8E9] flex items-center justify-center p-4">
            <img
              src="https://s3-alpha-sig.figma.com/img/646e/b0d0/aea7075fd50f653e08a8fe84b70cad69?Expires=1746403200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=THU3DezvvctLvEaQmJcmwW6-CQBKS4P7Y1ptj9MQmN0sQOz8mWODgi11mXph24WnDDYt07rgaUrJe7R8DzeFcY1AWnuqo7PJoG~E~-3fCXhLOV2U~2nWkD3c8CYI2Rfnk-0dj-ehSs6BOzf6NPGHXkIIAt2oyVeToF9RdGApq6~Impt9jVDJMqgAjdJpomtxaWx6XRKhuJQ0xW5NSxy8ZHvN99qTZitR33vIkGiN-DWbOUHgq1lqXLgfx8eQDYKh8Y2-gHRsVMsQYxUsfstvNTuihvHsVj7oDXQpRMui6SIMPt26c6xsM965ueBBgYdKQihr4vS8mzEQlJkMPou0uA__"
              alt="Certificate Preview"
              className="w-full max-w-xs object-contain rounded"
            />
          </div>

          <div className="md:w-1/2 p-6">
            <h3 className="text-sm font-bold mb-1">
              Big 4 Auditor Financial Analyst
            </h3>
            <p className="text-sm text-gray-600 mb-3">
              Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik
            </p>

            <div className="flex items-center gap-2 text-sm text-gray-700 mb-2">
              <img
                src="https://i.pravatar.cc/40"
                alt="mentor"
                className="w-6 h-6 rounded-full object-cover"
              />
              <span className="font-medium">Jenna Ortega</span>
              <span className="text-gray-400">Senior Accountant di Gojek</span>
            </div>

            <div className="flex items-center gap-1 text-yellow-400 mb-4">
              {[...Array(3)].map((_, i) => (
                <FaStar key={i} />
              ))}
              <FaStar className="text-gray-300" />
              <FaStar className="text-gray-300" />
              <span className="text-sm text-gray-500 ml-1">3.5 (86)</span>
            </div>

            <button className="flex items-center gap-2 bg-white border border-green-500 text-green-600 text-sm px-4 py-2 rounded hover:bg-green-50">
              <FaDownload /> Download Sertifikat
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white text-sm text-gray-600 px-6 pt-10 pb-6 border-t border-gray-200 mt-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <h4 className="font-bold text-orange-500 text-lg mb-2">videobelajar</h4>
            <p className="mb-2">
              Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id!<br />Jl. Usman Effendi No. 50 Lowokwaru, Malang
            </p>
            <p>+62-877-7123-1234</p>
          </div>

          <div>
            <h5 className="font-semibold mb-2">Kategori</h5>
            <ul className="space-y-1">
              <li>Digital & Teknologi</li>
              <li>Pemasaran</li>
              <li>Manajemen Bisnis</li>
              <li>Pengembangan Diri</li>
              <li>Desain</li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold mb-2">Perusahaan</h5>
            <ul className="space-y-1">
              <li>Tentang Kami</li>
              <li>FAQ</li>
              <li>Kebijakan Privasi</li>
              <li>Ketentuan Layanan</li>
              <li>Bantuan</li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold mb-2">Komunitas</h5>
            <ul className="space-y-1">
              <li>Tips Sukses</li>
              <li>Blog</li>
            </ul>
          </div>
        </div>

        <div className="text-center text-xs text-gray-400 mt-10">©2023 Gerobak Sayur All Rights Reserved.</div>
      </footer>
    </div>
  );
};

export default SertifikatPage;