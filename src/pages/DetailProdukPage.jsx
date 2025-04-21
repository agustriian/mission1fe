import React from "react";

const DetailProdukPage = () => {
  return (
    <div className="bg-[#FAF9F6] text-gray-800 font-sans">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 px-6 py-4">
        Beranda / Digital & Teknologi / Gapai Karier Impianmu sebagai UI/UX Designer & Product Manager.
      </div>

      {/* Banner Header */}
      <div className="px-6">
        <img
          src="/images/banner-uiux.jpg"
          alt="UIUX Banner"
          className="rounded-xl w-full h-auto"
        />
        <div className="text-white font-bold text-2xl md:text-3xl mt-4">
          Gapai Karier Impianmu sebagai Seorang UI/UX Designer & Product Manager.
        </div>
        <p className="text-sm text-white mt-1">Belajar bersama tutor profesional di Video Course. Kapanpun, di manapun.</p>
        <div className="text-yellow-400 text-sm mt-2">⭐⭐⭐ 3.8 (686)</div>
      </div>

      {/* Konten Utama */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 mt-6">
        {/* Konten Kiri */}
        <div className="md:col-span-2 space-y-6">
          {/* Deskripsi */}
          <section className="bg-white rounded-xl p-5 shadow">
            <h3 className="font-bold text-lg mb-2">Deskripsi</h3>
            <p className="text-sm leading-relaxed">
              Foundations of User Experience (UX) Design adalah... (isi sesuai gambar)
            </p>
          </section>

          {/* Tutor Profesional */}
          <section className="bg-white rounded-xl p-5 shadow">
            <h3 className="font-bold text-lg mb-4">Belajar bersama Tutor Profesional</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {/* Card tutor */}
              <div className="bg-gray-50 p-4 rounded-xl border">
                <h4 className="font-semibold text-sm">Gregorius Edrik Lawanto</h4>
                <p className="text-xs text-gray-600 mt-1">Senior Talent Acquisition Specialist di WingsGroup</p>
                <p className="text-xs text-gray-500 mt-2">Berkarier di bidang HR selama lebih dari 3 tahun...</p>
              </div>
              {/* Duplikat 1x lagi untuk tutor kedua */}
              <div className="bg-gray-50 p-4 rounded-xl border">
                <h4 className="font-semibold text-sm">Gregorius Edrik Lawanto</h4>
                <p className="text-xs text-gray-600 mt-1">Senior Talent Acquisition Specialist di WingsGroup</p>
                <p className="text-xs text-gray-500 mt-2">Berkarier di bidang HR selama lebih dari 3 tahun...</p>
              </div>
            </div>
          </section>

          {/* Kamu akan Mempelajari */}
          <section className="bg-white rounded-xl p-5 shadow">
            <h3 className="font-bold text-lg mb-4">Kamu akan Mempelajari</h3>
            <ul className="text-sm list-disc pl-4 space-y-1 text-green-600">
              <li>Introduction to Course 1: Foundations of User Experience Design</li>
              <li>Introduction to UX research</li>
              <li>Introduction to design sprints</li>
            </ul>
          </section>

          {/* Rating dan Review */}
          <section className="bg-white rounded-xl p-5 shadow">
            <h3 className="font-bold text-lg mb-4">Rating dan Review</h3>
            <div className="space-y-4">
              <div className="border p-3 rounded-xl text-sm">
                <p className="font-semibold">Gregorius Edrik Lawanto <span className="text-gray-400 text-xs">- Alumni Batch 2</span></p>
                <p className="text-gray-600 text-xs mt-1">Berkarier di bidang HR selama lebih dari 3 tahun...</p>
                <div className="text-yellow-400 text-xs mt-1">⭐⭐⭐ 3.5</div>
              </div>
              {/* Tambahkan review kedua */}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div>
          <div className="bg-white rounded-xl shadow p-4">
            <h4 className="text-sm font-semibold mb-1">Gapai Karier Impianmu sebagai UI/UX Designer & Product Manager.</h4>
            <p className="text-green-600 text-xl font-bold mb-1">Rp 250K <span className="line-through text-sm text-gray-400 ml-1">Rp 600K</span></p>
            <p className="text-xs text-orange-500 mb-4">Penawaran spesial tersisa 2 hari lagi!</p>
            <button className="bg-green-500 text-white py-2 rounded-lg w-full font-semibold">Beli Sekarang</button>

            <div className="mt-6 space-y-3 text-sm text-gray-700">
              <p>✅ Ujian Akhir</p>
              <p>✅ 7 Dokumen</p>
              <p>✅ 49 Video</p>
              <p>✅ Sertifikat</p>
              <p className="text-xs text-gray-400">Bahasa Pengantar: Bahasa Indonesia</p>
            </div>
          </div>
        </div>
      </div>

      {/* Rekomendasi Video Lain */}
      <div className="px-6 mt-10">
        <h3 className="font-bold text-lg mb-2">Video Pembelajaran Terkait Lainnya</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white rounded-xl shadow p-4">
            <img
              src="https://s3-alpha-sig.figma.com/img/5dc1/02b7/62324a31d3cdb502fcee6d64a11e0f77?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=At7k2xEbbtR75qq-u9gPEY3ezbAW95YAh4bVmuIHsxIkycQEIno-BIYTDeNNJh6~8O6XW~IiW1Njm1bcYg0QyHDOsr5TrEBe5itAJ2-0uynrxts9Ea1m8564gN3f3p6cxzohtdHOnMsTYbVuUx3EwP7ut~9Crfp9SyTT0XZjrlm64ZFxiwp2wmHFTHPG~vYFsBGogTHMFJ6n~4e4-JNGJSxSt4DhHLh-EvhQtuyiEzPP3CoUKQOm8EB4ql9qNfENZybQu4tpUM8DPOan8imdtT05Y7tQDdGFlRjmePF6c-4W7ZHL029ogk0GBCrc6dEZNoKgmQGVeLCiR67qJd5Alw__"
              alt="thumbnail"
              className="rounded-lg mb-2 h-32 w-full object-cover"
          />
            <h4 className="text-sm font-semibold">Big 4 Auditor Financial Analyst</h4>
            <p className="text-xs text-gray-600 mt-1">Mulai transformasi dengan instruktur profesional...</p>
            <div className="flex items-center justify-between mt-3">
              <span className="text-xs text-gray-400">⭐ 3.8 (686)</span>
              <span className="text-green-600 font-semibold">Rp 300K</span>
            </div>
          </div>
          
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white mt-10 py-10 px-6">
        <div className="grid md:grid-cols-4 gap-6 text-sm text-gray-700">
          <div>
            <h4 className="text-orange-500 font-bold text-lg">videobelajar</h4>
            <p className="text-sm mt-2">Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id</p>
            <p className="text-xs mt-2">Jl. Utama Effendi No. 50 Lowokwaru, Malang</p>
            <p className="text-xs">62-877-7123-1234</p>
          </div>
          <div>
            <h5 className="font-semibold mb-2">Kategori</h5>
            <p>Digital & Teknologi</p>
            <p>Pemasaran</p>
            <p>Manajemen Bisnis</p>
            <p>Pengembangan Diri</p>
            <p>Desain</p>
          </div>
          <div>
            <h5 className="font-semibold mb-2">Perusahaan</h5>
            <p>Tentang Kami</p>
            <p>FAQ</p>
            <p>Kebijakan Privasi</p>
            <p>Ketentuan Layanan</p>
            <p>Bantuan</p>
          </div>
          <div>
            <h5 className="font-semibold mb-2">Komunitas</h5>
            <p>Tips Sukses</p>
            <p>Blog</p>
            <div className="flex space-x-2 mt-2">
              <span>🔗</span><span>📘</span><span>📷</span>
            </div>
          </div>
        </div>
        <div className="text-center text-xs text-gray-400 mt-6">
          ©2023 Gerobak Sayur All Rights Reserved.
        </div>
      </footer>
    </div>
  );
};

export default DetailProdukPage;
