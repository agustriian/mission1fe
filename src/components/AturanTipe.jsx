// src/components/AturanTipe.jsx
import React from "react";

const AturanTipe = ({ type = "pretest" }) => {
  const data = {
    pretest: {
      title: "Mulai Pre-Test",
      kelulusan: "-",
      durasi: "5 Menit",
      keterangan:
        "Jangan khawatir, total skor tidak akan memengaruhi kelulusan dan penilaian akhirmu dalam rangkaian kelas ini",
    },
    quiz: {
      title: "Mulai Quiz",
      kelulusan: "60%",
      durasi: "-",
      keterangan:
        "Kerjakan dengan sebaik mungkin untuk mencapai skor minimal agar kamu dapat melanjutkan ke modul berikutnya",
    },
    final: {
      title: "Mulai Ujian Akhir",
      kelulusan: "60%",
      durasi: "-",
      keterangan:
        "Kerjakan dengan sebaik mungkin untuk mencapai skor minimal agar kamu bisa mendapatkan sertifikat kelulusan kelas",
    },
  };

  const isi = data[type];

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <img
        src="aturangambar.png"
        alt="Rules"
        className="w-full rounded-md mb-6"
      />

      <div className="space-y-4">
        <h2 className="font-bold text-base">Aturan</h2>
        <p className="text-sm text-gray-700 leading-relaxed">
          Kerjakan {type === "pretest" ? "pretest" : type === "quiz" ? "quiz" : "ujian akhir"} dengan sebaik mungkin untuk mengukur pemahaman {type === "pretest" ? "awalmu terkait materi yang akan kamu pelajari" : type === "quiz" ? "terkait materi yang telah kamu pelajari" : "terkait seluruh materi yang telah kamu pelajari"}
        </p>
        <p className="text-sm text-gray-700">
          <strong>Syarat Nilai Kelulusan:</strong> {isi.kelulusan}
          {type === "pretest" && (
            <>
              <br />
              <strong>Durasi Ujian:</strong> {isi.durasi}
            </>
          )}
        </p>
        <p className="text-sm text-gray-700">{isi.keterangan}</p>
        <button className="bg-green-500 hover:bg-green-600 transition text-white text-sm px-5 py-2 rounded font-semibold">
          {isi.title}
        </button>
      </div>
    </div>
  );
};

export default AturanTipe;
