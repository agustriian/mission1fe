import React from 'react'
import { EyeOff } from 'lucide-react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className="min-h-screen bg-[#FFFCEE] flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md text-center">
        <h2 className="text-2xl font-bold mb-1">Masuk ke Akun</h2>
        <p className="text-sm text-gray-500 mb-6">Yuk, lanjutin belajarmu di videobelajar.</p>

        <div className="text-left mb-4">
          <label className="block text-sm font-medium mb-1">
            E-Mail <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Masukkan email"
          />
        </div>

        <div className="text-left mb-2 relative">
          <label className="block text-sm font-medium mb-1">
            Kata Sandi <span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            className="w-full p-2 border border-gray-300 rounded pr-10"
            placeholder="Masukkan kata sandi"
          />
          <EyeOff className="w-5 h-5 absolute right-3 top-9 text-gray-400" />
        </div>

        <div className="text-right mb-4">
          <a href="#" className="text-sm text-gray-500 hover:underline">Lupa Password?</a>
        </div>

        <button className="w-full bg-green-500 text-white py-2 rounded mb-3 font-semibold">
          Masuk
        </button>

        <Link
          to="/register"
          className="block w-full bg-green-100 text-green-700 py-2 rounded mb-4 font-semibold text-center"
        >
          Daftar
        </Link>

        <div className="text-sm text-gray-400 mb-4">atau</div>

        <button className="w-full flex items-center justify-center gap-2 border py-2 rounded text-sm">
          <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
          Masuk dengan Google
        </button>
      </div>
    </div>
  )
}

export default Login
