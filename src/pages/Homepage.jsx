// src/pages/Homepage.jsx
import React from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-gray-50 p-6">
        <section className="text-center py-16 px-4">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">
            Selamat Datang di VideoBelajar
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Platform belajar online yang menyenangkan dan mudah diakses!
          </p>
          <button
            onClick={() => navigate("/register")}
            className="bg-blue-600 text-white px-6 py-3 rounded-full shadow hover:bg-blue-700 transition"
          >
            Daftar Sekarang
          </button>
        </section>

        <section className="grid md:grid-cols-3 gap-6 mt-10">
          <div className="bg-white rounded-xl shadow p-6 text-center">
            <h2 className="text-xl font-semibold mb-2">Materi Lengkap</h2>
            <p className="text-gray-600">Belajar semua topik dari dasar hingga mahir.</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 text-center">
            <h2 className="text-xl font-semibold mb-2">Akses Fleksibel</h2>
            <p className="text-gray-600">Bisa diakses kapan saja dan di mana saja.</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 text-center">
            <h2 className="text-xl font-semibold mb-2">Gratis & Premium</h2>
            <p className="text-gray-600">Pilih materi gratis atau upgrade ke premium.</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Homepage;
