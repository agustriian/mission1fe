// src/components/Header.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <div
          className="text-2xl font-bold cursor-pointer"
          onClick={() => navigate("/")}
        >
          <span className="text-gray-800">video</span>
          <span className="text-[#FBBF24]">belajar</span>
        </div>

        {/* Kategori dan Avatar */}
        <div className="flex items-center space-x-6">
          <span className="text-gray-700 font-medium cursor-pointer hover:underline">
            Kategori
          </span>
          <img
            src="https://s3-alpha-sig.figma.com/img/0577/f0e9/b7fca2f32639871454da0de95f951709?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=dXVMV6rrkxA-R2j3YwxZMpcdTunisBzXuSs~BTFVNyg~8VmmgHHXmlfZJc~JgjsHCxkzud6Jt~r7fTNdF3nZakuH9Pt7prTL14rZ0UgjLBcFK3Q39C2qsGCE60~jYuco~8TbxP7MPvCBLAwn9Bll0DuGs91Eo2QEqh7aDschYnrcLjcW0eCJ0u1wNXb4vgJE6BO5NjFSvgIVOlGNvHh7jqa9fU4xdQchPehzgd5hUYD3QYTGCmwi0i9AUSZHDrjvyFeSudc9IwroUtvlUI-5IMEN1E8DwPeINDsQJIseowVNvyZ1WUyHJ73WY0SB1gGfGpoZFEPGr3fHfZv292Jsyg__" 
            alt="User Avatar"
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
