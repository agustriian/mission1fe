// src/components/Header.jsx
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-blue-600">VideoBelajar</h1>
      <nav className="space-x-4">
        <Link to="/login" className="text-gray-700 hover:text-blue-600">Login</Link>
        <Link to="/register" className="text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-700">
          Daftar
        </Link>
      </nav>
    </header>
  );
};

export default Header;
