import React from "react";
import AccordionItem from "./AccordionItem";

const data = [
  {
    title: "Pendahuluan",
    videos: ["Selamat Datang!", "Cara Memaksimalkan Course Ini", "Intro ke UX Design"],
  },
  {
    title: "Modul 1: Dasar UX",
    videos: ["Apa itu UX?", "Kenapa UX Penting?", "Contoh UX Buruk dan Solusinya"],
  },
  {
    title: "Modul 2: Riset Pengguna",
    videos: ["Mengenal User Persona", "Metode Riset UX", "Wawancara dan Observasi"],
  },
];

const LearningSection = () => {
  return (
    <section className="bg-white py-10 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Kamu Akan Mempelajari
        </h2>
        <div>
          {data.map((item, index) => (
            <AccordionItem
              key={index}
              title={item.title}
              videos={item.videos}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningSection;
