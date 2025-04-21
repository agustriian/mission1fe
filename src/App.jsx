import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Homepage from './pages/Homepage'
import DetailProdukPage from './pages/DetailProdukPage'
import Metode from './pages/Metode'
import Bayar from './pages/Bayar'
import UbahMetode from './pages/UbahMetode'
import Selesai from './pages/Selesai'
import Pesanan from './pages/Pesanan'
import Kelas from './pages/Kelas'
import Profil from './pages/Profil'
import Video from './pages/Video'
import Aturan from './pages/Aturan'
import Soal from './pages/Soal'
import Congrats from './pages/Congrats'
import TryAgain from './pages/Tryagain'
import Rangkuman from './pages/Rangkuman'
import SertifikatSelesai from './pages/SertifikatSelesai'
import SertifikatPage from './pages/SertifikatPage'


const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/detailproduk" element={<DetailProdukPage />} />
        <Route path="/metode" element={<Metode />} />
        <Route path="/bayar" element={<Bayar />} />
        <Route path="/ubahmetode" element={<UbahMetode />} />
        <Route path="/selesai" element={<Selesai />} />
        <Route path="/pesanan" element={<Pesanan />} />
        <Route path="/kelas" element={<Kelas />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/video" element={<Video />} />
        <Route path="/aturan" element={<Aturan />} />
        <Route path="/soal" element={<Soal />} />
        <Route path="/congrats" element={<Congrats />} />
        <Route path="/tryagain" element={<TryAgain />} />
        <Route path="/rangkuman" element={<Rangkuman />} />
        <Route path="/sertifikatselesai" element={<SertifikatSelesai />} />
        <Route path="/sertifikatpage" element={<SertifikatPage />} />


      </Routes>
    </Router>
  )
}

export default App
