// src/pages/Bayar.jsx
import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Bayar = () => {
  return (
    <div className="bg-[#FFFCEE] min-h-screen px-0 py-0 font-sans text-[#222]">
      {/* Header Bar */}
      <div className="bg-white w-full shadow-sm border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">videobelajar</h1>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-green-600 font-medium">
              <div className="w-5 h-5 rounded-full bg-green-500 text-white flex items-center justify-center text-xs">
                ✓
              </div>
              Pilih Metode
            </div>
            <div className="w-12 h-1 bg-green-500" />
            <div className="flex items-center gap-2 text-green-600 font-medium">
              <div className="w-5 h-5 rounded-full border-2 border-green-500 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
              </div>
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

      {/* Countdown */}
      <div className="bg-[#FFEACC] w-full text-center py-2 text-sm font-semibold text-[#C75B00]">
        Selesaikan pemesanan dalam <span className="bg-[#E74C3C] text-white px-2 py-0.5 rounded mx-1">00</span>
        <span className="bg-[#E74C3C] text-white px-2 py-0.5 rounded mx-1">50</span>
        <span className="bg-[#E74C3C] text-white px-2 py-0.5 rounded mx-1">55</span>
      </div>

      {/* Konten utama */}
      <div className="px-8 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Konten Kiri */}
          <div className="lg:col-span-2 space-y-6">
            {/* Metode Pembayaran */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="font-bold text-lg mb-4">Metode Pembayaran</h3>
              <div className="border border-gray-200 rounded-lg p-4 flex items-center gap-4">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/BCA_logo.svg/2560px-BCA_logo.svg.png"
                  alt="BCA"
                  className="w-12 h-auto"
                />
                <div>
                  <p className="font-semibold">Bayar Melalui Virtual Account BCA</p>
                  <p className="text-sm text-gray-700 mt-1">
                    11739 081234567890 <span className="text-orange-500 font-semibold cursor-pointer ml-2">Salin</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Ringkasan Pesanan */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="font-bold text-lg mb-4">Ringkasan Pesanan</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-800 max-w-[75%] leading-snug">
                    Video Learning: Gapai Karier Impianmu sebagai Seorang UI/UX Designer & Product Manager.
                  </span>
                  <span className="font-medium">Rp 767.500</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Biaya Admin</span>
                  <span className="font-medium">Rp 7.000</span>
                </div>
                <hr className="border-gray-300" />
                <div className="flex justify-between font-bold text-base">
                  <span>Total Pembayaran</span>
                  <span className="text-green-600">Rp 774.500</span>
                </div>
              </div>
              <div className="mt-6 flex flex-col sm:flex-row gap-4">
                <button className="border border-green-500 text-green-600 px-6 py-2 rounded-lg w-full sm:w-auto text-sm font-semibold">
                  Ganti Metode Pembayaran
                </button>
                <Link to="/selesai" className="bg-green-500 text-white px-6 py-2 rounded-lg w-full sm:w-auto text-sm font-semibold text-center">
                  Bayar Sekarang
                </Link>
              </div>
            </div>

            {/* Tata Cara Pembayaran */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="font-bold text-lg mb-4">Tata Cara Pembayaran</h3>
              <div className="space-y-4 text-sm">
                <details className="border border-gray-200 rounded-lg p-4">
                  <summary className="cursor-pointer font-semibold">ATM BCA</summary>
                  <ol className="mt-3 list-decimal list-inside text-gray-600 space-y-1">
                    <li>Masukkan kartu ATM dan PIN BCA Anda</li>
                    <li>Di menu utama, pilih "Transaksi Lainnya". Pilih "Transfer", pilih "Ke BCA Virtual Account"</li>
                    <li>Masukkan nomor Virtual Account</li>
                    <li>Pastikan data Virtual Account Anda benar, kemudian masukkan angka yang perlu Anda bayarkan, kemudian pilih "Benar"</li>
                    <li>Cek dan perhatikan konfirmasi pembayaran dari layar ATM, jika sudah benar pilih "Ya", atau pilih "Tidak" jika data di layar masih salah</li>
                    <li>Transaksi Anda sudah selesai. Pilih "Tidak" untuk tidak melanjutkan transaksi lain</li>
                  </ol>
                </details>
                <details className="border border-gray-200 rounded-lg p-4">
                  <summary className="cursor-pointer font-semibold">Mobile Banking BCA</summary>
                  <ol className="mt-3 list-decimal list-inside text-gray-600 space-y-1">
                    <li>Buka Aplikasi BCA Mobile</li>
                    <li>Pilih "m-BCA", kemudian pilih "m-Transfer"</li>
                    <li>Pilih "BCA Virtual Account"</li>
                    <li>Masukkan nomor Virtual Account, lalu pilih "OK"</li>
                    <li>Klik tombol "Send" yang berada di sudut kanan atas aplikasi untuk melakukan transfer</li>
                    <li>Klik "OK" untuk melanjutkan pembayaran</li>
                    <li>Masukkan PIN Anda untuk meng-otorisasi transaksi</li>
                    <li>Transaksi Anda telah selesai</li>
                  </ol>
                </details>
                <details className="border border-gray-200 rounded-lg p-4">
                  <summary className="cursor-pointer font-semibold">Internet Banking BCA</summary>
                  <ol className="mt-3 list-decimal list-inside text-gray-600 space-y-1">
                    <li>Login ke KlikBCA Individual</li>
                    <li>Pilih "Transfer", kemudian pilih "Transfer ke BCA Virtual Account"</li>
                    <li>Masukkan nomor Virtual Account</li>
                    <li>Pilih "Lanjutkan" untuk melanjutkan pembayaran</li>
                    <li>Masukkan "RESPON KEYBCA APPLI 1" yang muncul pada Token BCA Anda, lalu klik tombol "Kirim"</li>
                    <li>Pembayaran telah selesai</li>
                  </ol>
                </details>
              </div>
            </div>
          </div>

          {/* Konten Kanan */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <img
              src="https://s3-alpha-sig.figma.com/img/0c70/c7c6/3096a06b9e1814c4dc21fa5f3d9ef4f3?Expires=1745606400&Signature=sample"
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

export default Bayar;
