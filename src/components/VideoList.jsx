// src/components/VideoList.jsx
import React from "react";

const VideoList = ({ videos, deleteVideo }) => {
  return (
    <div>
      <h3 className="font-semibold mb-2">Daftar Video</h3>
      {videos.length === 0 ? (
        <p>Belum ada video.</p>
      ) : (
        <ul className="space-y-2">
          {videos.map((video) => (
            <li key={video.id} className="border p-3 rounded flex justify-between items-center">
              <div>
                <p className="font-bold">{video.title}</p>
                <p className="text-sm text-gray-600">{video.kategori} • {video.durasi} • {video.level}</p>
              </div>
              <button onClick={() => deleteVideo(video.id)} className="text-red-500">Hapus</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default VideoList;
