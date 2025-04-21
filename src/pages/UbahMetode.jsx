// src/pages/UbahMetode.jsx
import React from "react";
import { Link } from "react-router-dom";

const UbahMetode = () => {
  return (
    <div className="bg-[#FFFCEE] min-h-screen px-0 py-0 font-sans text-[#222]">
      {/* Header */}
      <div className="bg-white w-full shadow-sm border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">
            videobelajar
          </h1>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-green-600 font-medium">
              <div className="w-5 h-5 rounded-full border-2 border-green-600 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-green-600" />
              </div>
              Pilih Metode
            </div>
            <div className="w-12 h-1 bg-gray-300" />
            <div className="flex items-center gap-2 text-gray-400 font-medium">
              <div className="w-5 h-5 rounded-full border-2 border-gray-400" />
              Bayar
            </div>
            <div className="w-12 h-1 bg-gray-300" />
            <div className="flex items-center gap-2 text-gray-400 font-medium">
              <div className="w-5 h-5 rounded-full border-2 border-gray-400" />
              Selesai
            </div>
          </div>
        </div>
      </div>

      {/* Konten */}
      <div className="px-8 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Kiri */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="font-bold text-lg mb-4">Ringkasan Belanja</h3>
              <div className="text-sm space-y-3">
                <div className="flex justify-between">
                  <span>Total Harga (3 barang)</span>
                  <span>Rp 767.500</span>
                </div>
                <div className="flex justify-between">
                  <span>Ongkos Kirim</span>
                  <span>Rp 7.000</span>
                </div>
                <hr className="border-gray-300" />
                <div className="flex justify-between font-bold text-base">
                  <span>Total Pembayaran</span>
                  <span className="text-green-600">Rp 774.500</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="font-bold text-lg mb-4">Ubah Metode Pembayaran</h3>
              <div className="space-y-3">
                <details className="border rounded-lg px-4 py-3 cursor-pointer">
                  <summary className="font-medium">Transfer Bank</summary>
                </details>
                <details className="border rounded-lg px-4 py-3 cursor-pointer">
                  <summary className="font-medium">E-Wallet</summary>
                </details>
                <details className="border rounded-lg px-4 py-3 cursor-pointer">
                  <summary className="font-medium">Kartu Kredit/Debit</summary>
                </details>
              </div>
              <div className="mt-6">
                <Link to="/bayar" className="bg-green-500 text-white text-sm font-semibold px-6 py-2 rounded-lg w-full block text-center">
                  Bayar Sekarang
                </Link>
              </div>
            </div>
          </div>

          {/* Kanan */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <img
              src="https://s3-alpha-sig.figma.com/img/178e/6743/8c9e6fbe4978be3387d7b68741986339?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=kCp-dgp7NMR5p7dyroWxNfqSVjMLYSkllrwoP9XMeOMRPA-kILmPQmryxjQbZxmwqz3AVs5ammRI~m1HweBt-PkDde-i63BcmmLrdwfz-k7J49z9cNva4TvIfjPr3VoNmYSW6H1gBtsxoj9mEQqR1hHHjNTDswZ5wZfnkoUvNlx8i7VkreprEsl1WvnH~ROqFLoZY5b~BH4COHWrE6V1C0Q3RebZiHdxjNsywhWD60i2RenFTvbY6fdy8ix53B5l2OBzPsCZfs9b78SSxuoPaItZ6EsqAO~XbqwWxJqALKZcOd0YliNOFzaWXUyILgWzC~YTI3aM2uxD2SrFWzv-Ng__"
              alt="Produk"
              className="rounded-lg mb-4"
            />
            <h4 className="font-bold mb-1 text-sm leading-snug">
              Gapai Karier Impianmu sebagai Seorang UI/UX Designer & Product Manager.
            </h4>
            <p className="text-green-600 font-bold text-sm mb-2">
              Rp 250K <span className="line-through text-gray-400 font-normal ml-2">Rp 500K</span>
              <span className="bg-yellow-300 text-[10px] px-2 py-0.5 rounded ml-2 font-semibold">Diskon 50%</span>
            </p>
            <div className="text-sm text-gray-700 mt-3 space-y-1">
              <p className="font-medium mb-1">Kelas Ini Sudah Termasuk</p>
              <ul className="list-none space-y-1 text-sm">
                <li>• Ujian Akhir</li>
                <li>• 49 Video</li>
                <li>• 7 Dokumen</li>
                <li>• Sertifikat</li>
                <li>• Pretest</li>
              </ul>
              <p className="mt-3 text-sm">Bahasa Pengantar: <strong>Bahasa Indonesia</strong></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UbahMetode;
