// src/services/api.js
import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_URL + "/videos";

// Ambil semua videos
export const getVideos = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};

// Tambah video baru
export const addVideo = async (videoData) => {
  const response = await axios.post(BASE_URL, videoData);
  return response.data;
};

// Edit video
export const updateVideo = async (id, updatedData) => {
  const response = await axios.put(`${BASE_URL}/${id}`, updatedData);
  return response.data;
};

// Hapus video
export const deleteVideo = async (id) => {
  const response = await axios.delete(`${BASE_URL}/${id}`);
  return response.data;
};
