// src/components/ModalSelesai.jsx
import React from "react";

const ModalSelesai = ({ type = "pretest", onClose, onSubmit }) => {
  const label = {
    pretest: "Selesaikan Pretest",
    quiz: "Selesaikan Quiz",
    final: "Selesaikan Ujian Akhir",
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-xl p-6 max-w-md w-full text-center shadow-xl">
        <img
          src="/modal-finish.png"
          alt="Selesai"
          className="w-48 mx-auto mb-4"
        />
        <h3 className="font-bold text-base mb-2">{label[type]}</h3>
        <p className="text-sm text-gray-600 mb-6">
          Apakah kamu yakin untuk menyelesaikan {type === "pretest" ? "pretest" : type === "quiz" ? "quiz" : "ujian akhir"} ini?
        </p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={onClose}
            className="px-6 py-2 border border-green-500 text-green-600 font-semibold rounded hover:bg-green-50"
          >
            Batal
          </button>
          <button
            onClick={onSubmit}
            className="px-6 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded"
          >
            Selesai
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalSelesai;
