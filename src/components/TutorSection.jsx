import React from "react";
import TutorCard from "./TutorCard";

const tutors = [
  {
    name: "Gregorius Edrik Lawanto",
    title: "Senior Talent Acquisition Specialist @ WingsGroup",
    bio: "Berkecimpung di bidang HR selama lebih dari 3 tahun. Saat ini bekerja sebagai Senior Talent Acquisition Specialist di Wings Group Indonesia (Sayap Mas Utama) selama hampir 1 tahun.",
    image: "/images/tutor1.jpg", // ganti dengan path gambar asli
  },
  {
    name: "Gregorius Edrik Lawanto",
    title: "Senior Talent Acquisition Specialist @ WingsGroup",
    bio: "Berkecimpung di bidang HR selama lebih dari 3 tahun. Saat ini bekerja sebagai Senior Talent Acquisition Specialist di Wings Group Indonesia (Sayap Mas Utama) selama hampir 1 tahun.",
    image: "/images/tutor2.jpg", // ganti juga
  },
];

const TutorSection = () => {
  return (
    <section className="bg-white py-10 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Belajar Bersama Tutor Profesional
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tutors.map((tutor, index) => (
            <TutorCard key={index} {...tutor} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TutorSection;
