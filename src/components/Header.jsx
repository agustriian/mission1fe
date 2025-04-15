// src/components/Header.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <div
          className="text-2xl font-bold cursor-pointer"
          onClick={() => navigate("/")}
        >
          <span className="text-gray-800">video</span>
          <span className="text-[#FBBF24]">belajar</span>
        </div>

        {/* Kategori dan Avatar */}
        <div className="flex items-center space-x-6">
          <span className="text-gray-700 font-medium cursor-pointer hover:underline">
            Kategori
          </span>
          <img
            src="https://i.pravatar.cc/40" // ganti ini dengan foto profil user kalau ada
            alt="User Avatar"
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
