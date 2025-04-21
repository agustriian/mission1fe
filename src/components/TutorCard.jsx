import React from "react";

const TutorCard = ({ name, title, bio, image }) => {
  return (
    <div className="flex items-start gap-4 bg-white p-4 rounded-lg shadow-sm border border-gray-200">
      <img
        src={image}
        alt={name}
        className="w-16 h-16 rounded-full object-cover"
      />
      <div>
        <h4 className="text-lg font-semibold text-gray-800">{name}</h4>
        <p className="text-sm text-gray-600">{title}</p>
        <p className="text-sm text-gray-600 mt-1">{bio}</p>
      </div>
    </div>
  );
};

export default TutorCard;
