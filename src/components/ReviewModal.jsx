// src/components/ReviewModal.jsx
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const ReviewModal = ({ onClose, onSubmit }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);
  const [review, setReview] = useState("");

  const handleSubmit = () => {
    onSubmit(rating, review);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-xl p-6 max-w-md w-full text-center shadow-xl">
        <h3 className="font-bold text-base mb-2">Tulis Review Terbaikmu!</h3>
        <p className="text-sm text-gray-600 mb-4">
          Apakah kamu yakin untuk menyelesaikan pretest ini?
        </p>

        {/* Star Rating */}
        <div className="flex justify-center mb-4">
          {[...Array(5)].map((_, index) => {
            const starValue = index + 1;
            return (
              <label key={index}>
                <input
                  type="radio"
                  name="rating"
                  className="hidden"
                  value={starValue}
                  onClick={() => setRating(starValue)}
                />
                <FaStar
                  className="cursor-pointer text-2xl"
                  color={starValue <= (hover || rating) ? "#facc15" : "#d1d5db"}
                  onMouseEnter={() => setHover(starValue)}
                  onMouseLeave={() => setHover(null)}
                />
              </label>
            );
          })}
        </div>

        {/* Review Text */}
        <textarea
          placeholder="Masukkan Review"
          className="w-full border border-gray-300 rounded p-3 text-sm mb-4 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          rows={4}
          value={review}
          onChange={(e) => setReview(e.target.value)}
        />

        <div className="flex gap-4 justify-center">
          <button
            onClick={onClose}
            className="px-6 py-2 border border-green-500 text-green-600 font-semibold rounded hover:bg-green-50"
          >
            Batal
          </button>
          <button
            onClick={handleSubmit}
            className="px-6 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded"
          >
            Selesai
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewModal;
