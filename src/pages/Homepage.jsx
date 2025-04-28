// src/pages/Homepage.jsx
import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { getVideos, addVideo, updateVideo, deleteVideo } from "../services/api";
import toast from "react-hot-toast";

const Homepage = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("Agustrianto");
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try {
      setLoading(true);
      const data = await getVideos();
      setVideos(data);
    } catch (error) {
      toast.error("Gagal memuat video");
    } finally {
      setLoading(false);
    }
  };

  const handleCardClick = () => {
    navigate("/detailproduk");
  };

  const handleEditName = () => {
    const newName = prompt("Masukkan nama baru:", userName);
    if (newName) setUserName(newName);
  };

  const handleAddVideo = async () => {
    const newVideo = {
      title: "Video Baru",
      rating: 5.0,
      enrolled: 0,
      level: "Pemula",
      price: "Gratis",
      image: "https://images.unsplash.com/photo-1581090700227-1e8f1d7cbd28?fit=crop&w=600&q=80",
    };
    try {
      const createdVideo = await addVideo(newVideo);
      setVideos([...videos, createdVideo]);
      toast.success("Video berhasil ditambahkan!");
    } catch (error) {
      toast.error("Gagal menambah video");
    }
  };

  const handleDeleteVideo = async (id) => {
    if (confirm("Yakin mau hapus video ini?")) {
      try {
        await deleteVideo(id);
        setVideos(videos.filter((video) => video.id !== id));
        toast.success("Video berhasil dihapus!");
      } catch (error) {
        toast.error("Gagal menghapus video");
      }
    }
  };

  const handleEditVideo = async (video) => {
    const newTitle = prompt("Edit judul:", video.title);
    const newPrice = prompt("Edit harga:", video.price);
    const newLevel = prompt("Edit level:", video.level);

    if (newTitle && newPrice && newLevel) {
      try {
        const updatedVideo = await updateVideo(video.id, {
          ...video,
          title: newTitle,
          price: newPrice,
          level: newLevel,
        });
        setVideos(videos.map((v) => (v.id === video.id ? updatedVideo : v)));
        toast.success("Video berhasil diupdate!");
      } catch (error) {
        toast.error("Gagal update video");
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F3F4F6]">
      <Header />
      <main className="flex-1">
        <div className="max-w-6xl mx-auto px-4 mt-6 mb-2">
          <h2 className="text-lg font-semibold">
            Halo, {userName}!{' '}
            <button
              onClick={handleEditName}
              className="text-blue-600 underline text-sm ml-2"
            >
              Edit
            </button>
          </h2>
        </div>

        <div className="max-w-6xl mx-auto px-4 mb-4">
          <button
            onClick={handleAddVideo}
            className="bg-green-600 text-white px-4 py-2 rounded shadow hover:bg-green-700"
          >
            Tambah Video Baru
          </button>
        </div>

        <section className="max-w-6xl mx-auto mt-10 px-4">
          <h2 className="text-xl font-semibold mb-4">Koleksi Video Pembelajaran Unggulan</h2>

          {loading ? (
            <div className="text-center py-10">
              <div className="text-gray-500 text-lg animate-pulse">Loading data...</div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.map((video) => (
                <div key={video.id} className="bg-white rounded-lg shadow overflow-hidden">
                  <img src={video.image} alt={video.title} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="text-md font-semibold text-gray-800 mb-2">{video.title}</h3>
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      ⭐ {video.rating} &nbsp;•&nbsp; 👤 {video.enrolled} &nbsp;•&nbsp; 🎯 {video.level}
                    </div>
                    <p className="text-green-600 font-bold">{video.price}</p>
                    <div className="flex justify-between items-center mt-2">
                      <button
                        onClick={() => handleDeleteVideo(video.id)}
                        className="text-sm text-red-600 hover:underline"
                      >
                        Hapus
                      </button>
                      <button
                        onClick={() => handleEditVideo(video)}
                        className="text-sm text-blue-600 hover:underline"
                      >
                        Edit
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

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