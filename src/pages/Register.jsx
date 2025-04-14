import React from 'react'
import { EyeOff } from 'lucide-react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className="min-h-screen bg-[#FFFCEE] flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md text-center">
        <h2 className="text-2xl font-bold mb-1">Pendaftaran Akun</h2>
        <p className="text-sm text-gray-500 mb-6">Yuk, daftarkan akunmu sekarang juga!</p>

        <div className="text-left mb-4">
          <label className="block text-sm font-medium mb-1">
            Nama Lengkap <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Nama Lengkap"
          />
        </div>

        <div className="text-left mb-4">
          <label className="block text-sm font-medium mb-1">
            E-Mail <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Email"
          />
        </div>

        <div className="text-left mb-4">
          <label className="block text-sm font-medium mb-1">
            No. Hp <span className="text-red-500">*</span>
          </label>
          <div className="flex gap-2">
            <div className="flex items-center border border-gray-300 rounded px-2">
              <span className="text-lg">🇮🇩</span>
              <span className="ml-1">+62</span>
            </div>
            <input
              type="tel"
              className="flex-1 p-2 border border-gray-300 rounded"
              placeholder="8123456789"
            />
          </div>
        </div>

        <div className="text-left mb-4 relative">
          <label className="block text-sm font-medium mb-1">
            Kata Sandi <span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            className="w-full p-2 border border-gray-300 rounded pr-10"
            placeholder="Kata Sandi"
          />
          <EyeOff className="w-5 h-5 absolute right-3 top-9 text-gray-400" />
        </div>

        <div className="text-left mb-2 relative">
          <label className="block text-sm font-medium mb-1">
            Konfirmasi Kata Sandi <span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            className="w-full p-2 border border-gray-300 rounded pr-10"
            placeholder="Konfirmasi Kata Sandi"
          />
          <EyeOff className="w-5 h-5 absolute right-3 top-9 text-gray-400" />
        </div>

        <div className="text-right mb-4">
          <a href="#" className="text-sm text-gray-500 hover:underline">Lupa Password?</a>
        </div>

        <button className="w-full bg-green-500 text-white py-2 rounded mb-3 font-semibold">
          Daftar
        </button>

        <Link
          to="/login"
          className="block w-full bg-green-100 text-green-700 py-2 rounded mb-4 font-semibold text-center"
        >
          Masuk
        </Link>

        <div className="text-sm text-gray-400 mb-4">atau</div>

        <button className="w-full flex items-center justify-center gap-2 border py-2 rounded text-sm">
          <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
          Daftar dengan Google
        </button>
      </div>
    </div>
  )
}

export default Register
