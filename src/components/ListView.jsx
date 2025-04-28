import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVideos, addNewVideo, editVideo, removeVideo } from '../store/redux/dataSlice';
import { toast } from 'react-hot-toast'; // ⬅️ tambahan toast

const ListView = () => {
  const dispatch = useDispatch();
  const { videos, status, error } = useSelector((state) => state.data);

  const [formData, setFormData] = useState({
    title: '',
    level: '',
    price: '',
    rating: '',
  });

  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchVideos());
    }
  }, [status, dispatch]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingId) {
      dispatch(editVideo({ id: editingId, updatedVideo: formData }));
      toast.success('Video berhasil diperbarui!');
      setEditingId(null);
    } else {
      dispatch(addNewVideo(formData));
      toast.success('Video berhasil ditambahkan!');
    }
    setFormData({
      title: '',
      level: '',
      price: '',
      rating: '',
    });
  };

  const handleEditClick = (video) => {
    setFormData({
      title: video.title,
      level: video.level,
      price: video.price,
      rating: video.rating,
    });
    setEditingId(video.id);
  };

  const handleDelete = (id) => {
    if (window.confirm('Apakah Anda yakin ingin menghapus video ini?')) {
      dispatch(removeVideo(id));
      toast.success('Video berhasil dihapus!');
    }
  };

  if (status === 'loading') {
    return <p className="text-center mt-8 text-lg font-semibold text-gray-500">Loading data...</p>;
  }

  if (status === 'failed') {
    return <p className="text-center mt-8 text-lg font-semibold text-red-500">Error: {error}</p>;
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-700">
          {editingId ? 'Edit Video' : 'Tambah Video Baru'}
        </h1>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mb-10 bg-white p-6 rounded-xl shadow-lg">
          <div className="grid grid-cols-1 gap-4">
            <input
              type="text"
              name="title"
              placeholder="Judul Video"
              value={formData.title}
              onChange={handleChange}
              className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
              required
            />
            <input
              type="text"
              name="level"
              placeholder="Level (Pemula / Menengah / Expert)"
              value={formData.level}
              onChange={handleChange}
              className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
              required
            />
            <input
              type="text"
              name="price"
              placeholder="Harga (contoh: Rp 250K)"
              value={formData.price}
              onChange={handleChange}
              className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
              required
            />
            <input
              type="number"
              name="rating"
              placeholder="Rating (contoh: 4.8)"
              step="0.1"
              min="0"
              max="5"
              value={formData.rating}
              onChange={handleChange}
              className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
              required
            />
          </div>
          <button
            type="submit"
            className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-300"
          >
            {editingId ? 'Update Video' : 'Tambah Video'}
          </button>
        </form>

        {/* List Video */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {videos.map((video) => (
            <div
              key={video.id}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 flex flex-col justify-between"
            >
              <div>
                <h2 className="text-xl font-bold text-gray-700">{video.title}</h2>
                <p className="text-sm text-gray-500">{video.level}</p>
                <p className="text-sm text-gray-600">{video.price}</p>
                <p className="text-sm text-gray-600">Rating: {video.rating}</p>
              </div>
              <div className="flex gap-2 mt-6">
                <button
                  onClick={() => handleEditClick(video)}
                  className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 rounded-lg transition duration-300"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(video.id)}
                  className="flex-1 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded-lg transition duration-300"
                >
                  Hapus
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListView;
