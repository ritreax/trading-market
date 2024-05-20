import React from 'react'

function Form() {
    return (
        <div className="flex items-center justify-center min-h-screen">
      <form className="bg-gray-400 backdrop-filter backdrop-blur-sm bg-opacity-10 p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-white">Bize Ulaşın</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-gray-100">İsim</label>
            <input type="text" className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
          </div>
          <div>
            <label className="block text-gray-100">Soyisim</label>
            <input type="text" className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-100">E-Mail</label>
          <input type="email" className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-100">Konu</label>
          <input type="text" className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
        </div>
        <div className="mb-6">
          <label className="block text-gray-100">Mesaj</label>
          <textarea className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" rows="4"></textarea>
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">GÖNDER</button>
      </form>
    </div>

    )
}

export default Form