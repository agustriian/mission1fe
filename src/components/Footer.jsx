// src/components/Footer.jsx
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#F9FAFB] text-gray-700 pt-12 px-6 border-t border-gray-200">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 pb-10">
        {/* Brand & Address */}
        <div>
          <h1 className="text-2xl font-bold text-[#FBBF24] mb-2">
            <span className="text-gray-800">video</span>belajar
          </h1>
          <p className="text-sm text-gray-600 mb-4">
            Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id!
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            Jl. Usman Effendi No. 50 Lowokwaru, Malang<br />
            +62-877-7123-1234
          </p>
        </div>

        {/* Kategori */}
        <div>
          <h3 className="font-semibold mb-3">Kategori</h3>
          <ul className="space-y-1 text-sm text-gray-600">
            <li>Digital & Teknologi</li>
            <li>Pemasaran</li>
            <li>Manajemen Bisnis</li>
            <li>Pengembangan Diri</li>
            <li>Desain</li>
          </ul>
        </div>

        {/* Perusahaan */}
        <div>
          <h3 className="font-semibold mb-3">Perusahaan</h3>
          <ul className="space-y-1 text-sm text-gray-600">
            <li>Tentang Kami</li>
            <li>FAQ</li>
            <li>Kebijakan Privasi</li>
            <li>Ketentuan Layanan</li>
            <li>Bantuan</li>
          </ul>
        </div>

        {/* Komunitas */}
        <div>
          <h3 className="font-semibold mb-3">Komunitas</h3>
          <ul className="space-y-1 text-sm text-gray-600">
            <li>Tips Sukses</li>
            <li>Blog</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-300 py-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500 px-2">
          <p>©2025 Agus Trianto. All Rights Reserved.</p>
          <div className="flex gap-3">
            <a href="#" className="hover:text-gray-800">
              <FaLinkedinIn />
            </a>
            <a href="#" className="hover:text-gray-800">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-gray-800">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-gray-800">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
