// src/pages/Homepage.jsx
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import ProductCard from "../components/ProductCard";


const videos = [
  {
    title: "Bag. 1 Auditor Keuangan", // ini kalau diklik lari ke detailprodukpage
    rating: 4.8,
    enrolled: 2000,
    level: "Pemula",
    price: "Rp 250K",
    image: "https://s3-alpha-sig.figma.com/img/178e/6743/8c9e6fbe4978be3387d7b68741986339?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=kCp-dgp7NMR5p7dyroWxNfqSVjMLYSkllrwoP9XMeOMRPA-kILmPQmryxjQbZxmwqz3AVs5ammRI~m1HweBt-PkDde-i63BcmmLrdwfz-k7J49z9cNva4TvIfjPr3VoNmYSW6H1gBtsxoj9mEQqR1hHHjNTDswZ5wZfnkoUvNlx8i7VkreprEsl1WvnH~ROqFLoZY5b~BH4COHWrE6V1C0Q3RebZiHdxjNsywhWD60i2RenFTvbY6fdy8ix53B5l2OBzPsCZfs9b78SSxuoPaItZ6EsqAO~XbqwWxJqALKZcOd0YliNOFzaWXUyILgWzC~YTI3aM2uxD2SrFWzv-Ng__",
  },
  {
    title: "Bag. 2 Analisis Keuangan Perusahaan",
    rating: 4.7,
    enrolled: 1850,
    level: "Menengah",
    price: "Rp 350K",
    image: "https://s3-alpha-sig.figma.com/img/63d7/769c/286b295990b96d6fed1cbf0131ac467a?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=s6oswldPRbuYxWla-klbe6PJ1kcBP5T8t0zLbYAqscALleabhEgBEX3qd8wmaAnETRpOGIe6TAa3LFXZ5zCygX588-479NRRo3dmyZqxxhQugVvapz6YQ3XPo9etGdulPqMKiqunSlPHdEsW9HY9GfQHHNG5AA-iO8nMZMDidCVPO9ZYb4OZqzzHaxKWF1ZV1BN9jK1qbQh0P7BBEr6Bn8nfWqdinhX2HYwSZ6g7miP53OJiGw1FmuNNLNfVutIaJUO7Hpn2Oay-egx~xCEy0CxLWQ81~IUt4MMd2qylihEwwkAlvFiNiaf9kR-zmep9edjHaWOXSd3vTm2r~OAIPQ__",
  },
  {
    title: "Bag. 3 Teknik Audit",
    rating: 4.6,
    enrolled: 1600,
    level: "Lanjutan",
    price: "Rp 400K",
    image: "https://s3-alpha-sig.figma.com/img/ed59/de3f/4c716638c4b0b880f4d4e94e6a7e2a3d?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=jWPA8bwhEfR~PzHFS-mPNXGx21FnXDslPdXKWBs3mPhOwH3MZAEmpyrfz4oJPrypVrYfdBeLRRa8DsTU24OjyKseGFq6GancuYg~sbocTqixDsCA9qDXTjcTwye4Sr48Un7s7XF8hX9L4wS6BaZiAwgMAByewN620IiJQ1xj7soQIhoQ3thuKMv1~1yQJl~A5IgS6FkfK59S~kQMlE85So4Nn-E~5bDAk93AGu1rzjrH2pDx4mmUBmS~0u1PQrSPWxXWQk1TJiNmMS09hbQ~v9PZnGyArnGRbveI7JbCtVcMI5y9FC~SkFG8Yr~7pkLWSccoI9Y8dYCZtunKziPSHQ__",
  },
  {
    title: "Bag. 4 Manajemen Keuangan",
    rating: 4.9,
    enrolled: 2200,
    level: "Menengah",
    price: "Rp 450K",
    image: "https://s3-alpha-sig.figma.com/img/ae76/45a2/6e5b3d3d079b37265508dc0743a960b8?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=DpD0VmroC0KUL3ATeF~CKqeH8BkED2B8DH5NFsToJCWAoLscmZqqXOHifCLtK5rjEJAFhvGE7CNL1MjkFZm9i8WOJ-~xjuT4lJc5SRMaRl-irxzfdl8eL9NAovFLeFXdiVlo-sP2zto3gkNBcinJJB-8TTwrdjzTqFlTTSEq4FdS~6HWHyHW1vXXixE8IaX5EGAMs2-m3svJn9XKHoT~a3TeW4tjW1VtC8N-8UkxPGnMPFk0W1fHdM~74QVu7KR7G28G4IRvlk~v-vqryD~dtJFhK-ODPAqyfiQ0qCGzJzkR5xeuuEzMA~GTPxU8myFwLpjcrtIoVOWVXz1UIWxwqQ__",
  },
  {
    title: "Bag. 5 Analisis Laporan Keuangan",
    rating: 4.3,
    enrolled: 1400,
    level: "Pemula",
    price: "Rp 300K",
    image: "https://s3-alpha-sig.figma.com/img/6eae/93f1/cdfe637146f9e9b161d1e323f840e75d?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=guCwxtw-~2R9~1Tt~-i888FlU2EbjGfSWKc6Ektfx-nGCyoEBlnA9cpx~LFafItTY-W9S~ph3HevHY32VBIn722HWA9S2Yxo4Dfax8lbGzzmargYQzk0l0TcHmyi2XVQjwu8J5Ke5cKpY5shJFgvK6X-gP3H0TIsCvUeXN4QyLRSpAyT7YsVaWB6yXz73CxfhQStbT05u0v3SMOZnT16ePZqMY6I0rFg7gg-aOiCvYYPlyiggei0kGQiZbbsVIpWVI73mazcKrp8Ky7JKDviTTHORaL2j-SfvPVtLdJiK4WScSXlUllsvZ8yYh3xwVgW8FB2EdfRN~QQjGegixotnw__",
  },
  {
    title: "Bag. 6 Auditor Finansial Analyst",
    rating: 4.5,
    enrolled: 1234,
    level: "Menengah",
    price: "Rp 300K",
    image: "https://s3-alpha-sig.figma.com/img/5c55/49fc/96f5efd8db74e577b725111e64ca783e?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ZAWZTK-Ergxc~Rt89jre5pv0kA~5Tw~T3Jt5~V2CBE-GhnO6Fm85I2FH210uH6baN5tcER8PCmFi-EErYxuokEi5iG9TLAh60wFc7zW9BAFdlocD7nVLLopH2zg0IZtCh5QTKPrlVKmIvLddJw2AeekRNesZy1xdvArmAHKT5RNa3NlWGJiey85h8qpOwgkp6IpDeRCUOVEDwc0uaCkwXMp41RcgxYtFVXo8Y07kalgeCEHkuDDM5lRtDGhQcZ3~WVS0dITriPqaeG-R-0QkTRmRw6MMT34M9Bf~L8twgtb8-thZnC6aDbDfK2Ijl1Rn4EFm-RfDZ1mwwGInFp2jHw__",
  },
  {
    title: "Bag. 7 Manajemen Risiko",
    rating: 4.7,
    enrolled: 1750,
    level: "Lanjutan",
    price: "Rp 500K",
    image: "https://s3-alpha-sig.figma.com/img/5dc1/02b7/62324a31d3cdb502fcee6d64a11e0f77?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=At7k2xEbbtR75qq-u9gPEY3ezbAW95YAh4bVmuIHsxIkycQEIno-BIYTDeNNJh6~8O6XW~IiW1Njm1bcYg0QyHDOsr5TrEBe5itAJ2-0uynrxts9Ea1m8564gN3f3p6cxzohtdHOnMsTYbVuUx3EwP7ut~9Crfp9SyTT0XZjrlm64ZFxiwp2wmHFTHPG~vYFsBGogTHMFJ6n~4e4-JNGJSxSt4DhHLh-EvhQtuyiEzPP3CoUKQOm8EB4ql9qNfENZybQu4tpUM8DPOan8imdtT05Y7tQDdGFlRjmePF6c-4W7ZHL029ogk0GBCrc6dEZNoKgmQGVeLCiR67qJd5Alw__",
  },
  {
    title: "Bag. 8 Audit Internal",
    rating: 4.6,
    enrolled: 1550,
    level: "Menengah",
    price: "Rp 350K",
    image: "https://s3-alpha-sig.figma.com/img/eada/ad28/0a0629a1c47135c68ec78f0de1f1a528?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=OOlAg-9KQFiVxaWrtd7QNMiNG9Lsk6CpOhAvZSn-bpK8~QSGfpMOneT4oIvIY1HiCDbKsBhkf~JmTnt1Boej4mWqI89Oq3-Tkr82enhKs~UNtq0Nowbus-8fDo2BDvfumdiHRMoIe-PXp465RXyglTs9JfHXxj4kT2V-25znIa8Ne7z4lmBQDgE1YK51LvFLeOqDPfJdbfhk4d3kZrAF24jxYuUpzmWA-vyQVyY8JttVLfjdrEPj0E2IUoZE5hmog35soHNQb2kxArmMRMVPTrkTDMhsMX~7X6GgtNzE1CQr2DadI5~7KWE9zw81TrwNs6FaRSdQoEXXuynEpUaXpw__",
  },
  {
    title: "Bag. 9 Perencanaan Keuangan",
    rating: 4.4,
    enrolled: 1300,
    level: "Pemula",
    price: "Rp 270K",
    image: "https://s3-alpha-sig.figma.com/img/a645/a5cd/223894f5f60f082c31a25b5a29935827?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=UX7bDDHONDxOW59Y-j8587Gx7AEa0cYlcTl3Rpg45LilxV2deK1PjkNJe99K9pqmY6d0pd~yuga7bJxX9BgwoTeTrao5b6fM7NPsvS3w3hNKsJLuIDem-dyWG5RaoXFhIKTxtxdtJJ5F4abR3bEMJ78nxfJqWxpltffeb~0J27fOqPzX7YQJ5MgxPtWBcAC9Zf4sOgNUwQMplkG0FOmlT2bLHd6J4oOyXJi7UC3TKIOjHMqjCTRU3fnaxO5ST-BeqixhUarsOF8kncP9-3iW1Q--f39bYtxM7kfmOw9v-pKTUL4GgrWXq65F73UcPH9Ai1j-wvGms3zyq3u~DJPkbA__",
  },
];


const Homepage = () => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate("/detailproduk");
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F3F4F6]">
      
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-white py-8 px-4 shadow-sm">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-6">
            <img
              src="https://s3-alpha-sig.figma.com/img/65ed/b9e6/d25fa2121b31a4ad14c9ebd02127f629?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=GpJKVZVV~6ViUnhJVU6C3ai3EKWWFtpw09zYbyrJ79yAWaUTcjfCI3DvTRybrDOjXDkWKh7Caa~oXIEiErcAnirERMG~kvSErXl-AEhITYTVjG9~U9ke~pWqcDTQJumzyxbA3CMHLeAgkjRImaZVD0UYups3Nvg7nTmPaanO92qQqc-MwzDuCuquFtQjU2osXi~uYVmTrNfHlfWVnB9g26YKriqJebfod8mwfKScpx4dyQUwRYuWzKhajX4reF8VHEGN4N5WUT7mhnE2hJrcBcQcg6wpsPMV~hxrblQ2xc5EHgXxTMdR6KzIfvoJFIPAeWEbr5f~BcPOwoMjDl41pA__"
              alt="Hero"
              className="w-full md:w-1/2 rounded-xl shadow"
            />
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-snug">
                Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video Interaktif!
              </h1>
              <p className="text-gray-600 mb-6">
                Temukan Ilmu Baru yang menarik dan mendalam melalui koleksi video pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat berpartisipasi dalam latihan interaktif yang akan meningkatkan pemahaman Anda.
                  </p>
              <button
                onClick={() => navigate("/register")}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg shadow transition"
              >
                Temukan Video Course untuk Dipelajari!
              </button>
            </div>
          </div>
        </section>

        {/* Kategori Tabs */}
        <section className="max-w-6xl mx-auto mt-10 px-4">
          <h2 className="text-xl font-semibold mb-4">Koleksi Video Pembelajaran Unggulan</h2>
          <div className="flex gap-4 text-sm md:text-base font-medium mb-6">
            <button className="text-orange-600 border-b-2 border-orange-600 pb-1">
              Semua Video
            </button>
            <button className="text-gray-600 hover:text-orange-600">Pemasaran</button>
            <button className="text-gray-600 hover:text-orange-600">Desain</button>
            <button className="text-gray-600 hover:text-orange-600">Keuangan</button>
            <button className="text-gray-600 hover:text-orange-600">Pengembangan Diri</button>
          </div>

          {/* Video Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video, index) => (
              <div key={index} className="bg-white rounded-lg shadow overflow-hidden">
                <img src={video.image} alt={video.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-md font-semibold text-gray-800 mb-2">{video.title}</h3>
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    ⭐ {video.rating} &nbsp;•&nbsp; 👤 {video.enrolled} &nbsp;•&nbsp; 🎯 {video.level}
                  </div>
                  <p className="text-green-600 font-bold">{video.price}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Subscription Section */}
        <section className="mt-16 bg-white py-10 px-4 shadow-inner">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Mau Belajar Lebih Banyak?</h3>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <input
                type="email"
                placeholder="Masukkan Email Anda"
                className="px-4 py-3 w-full sm:w-auto flex-1 border border-gray-300 rounded-md"
              />
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md shadow">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Homepage;
