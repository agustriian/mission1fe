// src/components/AddVideoForm.jsx
import React, { useState } from "react";

const AddVideoForm = ({ addVideo }) => {
  const [formData, setFormData] = useState({
    title: "",
    kategori: "",
    durasi: "",
    level: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addVideo(formData);
    setFormData({ title: "", kategori: "", durasi: "", level: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 space-y-2">
      <input name="title" value={formData.title} onChange={handleChange} placeholder="Judul Video" className="block w-full border px-3 py-1" />
      <input name="kategori" value={formData.kategori} onChange={handleChange} placeholder="Kategori" className="block w-full border px-3 py-1" />
      <input name="durasi" value={formData.durasi} onChange={handleChange} placeholder="Durasi" className="block w-full border px-3 py-1" />
      <input name="level" value={formData.level} onChange={handleChange} placeholder="Level" className="block w-full border px-3 py-1" />
      <button type="submit" className="bg-green-500 text-white px-4 py-1 rounded">Tambah Video</button>
    </form>
  );
};

export default AddVideoForm;
