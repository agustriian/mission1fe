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


      </Routes>
    </Router>
  )
}

export default App
