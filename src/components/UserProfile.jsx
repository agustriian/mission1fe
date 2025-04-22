// src/components/UserProfile.jsx
import React, { useState } from "react";

const UserProfile = ({ userName, setUserName }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(userName);

  const handleSave = () => {
    setUserName(newName);
    setIsEditing(false);
  };

  return (
    <div className="mb-6">
      {isEditing ? (
        <div className="flex gap-2">
          <input
            className="border px-2 py-1 rounded"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
          <button onClick={handleSave} className="bg-blue-500 text-white px-3 py-1 rounded">Simpan</button>
        </div>
      ) : (
        <h2 className="text-xl font-semibold mb-2">
          Halo, {userName}!{" "}
          <button onClick={() => setIsEditing(true)} className="text-sm text-blue-600 underline">Edit</button>
        </h2>
      )}
    </div>
  );
};

export default UserProfile;
