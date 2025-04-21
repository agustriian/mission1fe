import React from "react";

const HeaderDetailProduk = () => {
  return (
    <div className="bg-[#FDFBF7] px-6 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-4">
          Beranda / Desain /{" "}
          <span className="text-gray-800 font-medium">
            Gapai Karier Impianmu sebagai Seorang UI/UX Designer & Product Manager.
          </span>
        </div>

        {/* Hero Image + Text */}
        <div className="relative rounded-xl overflow-hidden border border-dashed border-blue-400">
          <img
            src="/images/hero-detail.jpg" // Ganti sesuai path kamu
            alt="Detail Hero"
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center px-8 text-white">
            <h1 className="text-2xl md:text-3xl font-semibold mb-2">
              Gapai Karier Impianmu sebagai Seorang <br />
              UI/UX Designer & Product Manager.
            </h1>
            <p className="mb-2 text-sm">
              Belajar bersama tutor profesional di Video Course. <br />
              Kapanpun, di manapun.
            </p>
            <div className="flex items-center gap-2 text-yellow-400 text-sm">
              ⭐ 3.5
              <span className="text-white">(68)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderDetailProduk;
